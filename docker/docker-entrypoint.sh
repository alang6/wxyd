#!/bin/bash
set -e

dir_config="$JD_DIR/config"
dir_sample="$JD_DIR/sample"
dir_own="$JD_DIR/own"
dir_log="$JD_DIR/log"

file_crontab_sample="$dir_sample/crontab.sample.list"
file_crontab_user="$dir_config/crontab.list"
file_config_sample="$dir_sample/config.sample.sh"
file_config_user="$dir_config/config.sh"
file_cookie="$dir_config/cookie.sh"
file_bot_sample="$JD_DIR/bot/bot.py"
file_bot_user="$dir_config/bot.py"
file_bot_setting_sample="$dir_sample/bot.sample.json"
file_bot_setting_user="$dir_config/bot.json"

echo -e "\n======================== 1. 检测文件夹 ========================\n"
if [ ! -d $dir_config ]; then
    echo -e "没有映射config配置目录给本容器，在容器内创建该文件夹\n"
    mkdir -p $dir_config
fi
if [ ! -d $dir_log ]; then
    echo -e "没有映射log日志目录给本容器，在容器内创建该文件夹\n"
    mkdir -p $dir_log
fi
if [ ! -d $dir_own ]; then
    echo -e "没有映射own脚本目录给本容器，在容器内创建该文件夹\n"
    mkdir -p $dir_own
fi

echo -e "\n======================== 2. 更新源代码 ========================\n"
jup shell
jup scripts
echo

echo -e "======================== 3. 检测配置文件 ========================\n"
if [ -s $file_crontab_user ]; then
    echo -e "检测到 $file_crontab_user 存在，自动导入定时任务...\n"
    perl -i -pe "{s|CMD_UPDATE|jup|g; s|ROOT_DIR|/jd|g; s|CMD_RMLOG|jlog|g; s|CMD_CODE|jcode|g; s|CMD_MTASK|mtask|g; s|CMD_JTASK|jtask|g}" $file_crontab_user
else
    echo -e "检测到 $file_crontab_user 不存在，从示例文件复制一份用于初始化...\n"
    cp -fv $file_crontab_sample $file_crontab_user
    perl -i -pe "{s|CMD_UPDATE|jup|g; s|ROOT_DIR|/jd|g; s|CMD_RMLOG|jlog|g; s|CMD_CODE|jcode|g; s|CMD_MTASK|mtask|g; s|CMD_JTASK|jtask|g}" $file_crontab_user
    echo
fi
crontab $file_crontab_user

if [ ! -s $file_config_user ]; then
    echo -e "检测到 $file_config_user 不存在，从示例文件复制一份用于初始化...\n"
    cp -fv $file_config_sample $file_config_user
    echo
fi

if [[ $ENABLE_TG_BOT == true ]] && [ ! -s $file_bot_setting_user ] && type python3 &>/dev/null; then
    echo -e "检测到 $file_bot_setting_user 不存在，从示例文件复制一份用于初始化...\n"
    cp -fv $file_bot_setting_sample $file_bot_setting_user
    echo
fi

echo -e "======================== 4. 启动挂机程序 ========================\n"
rm -rf /root/.pm2/logs/* >/dev/null 2>&1
if [[ $ENABLE_HANGUP == true ]]; then
    if [ -f $file_cookie ]; then
        . $file_cookie
    fi
    . $file_config_user
    if [[ $Cookie1 ]]; then
        jtask hangup 2>/dev/null
        echo -e "挂机程序启动成功...\n"
    else
        echo -e "$file_config_user 中还未填入有效的Cookie，可能是首次部署容器，因此不启动挂机程序...\n"
    fi
elif [[ ${ENABLE_HANGUP} == false ]]; then
    echo -e "已设置为不自动启动挂机程序，跳过...\n"
fi

if type python3 &>/dev/null; then
    echo -e "======================== 5. 启动Telegram Bot ========================\n"
    if [[ $ENABLE_TG_BOT == true ]]; then
        cp -f $file_bot_sample $file_bot_user
        if [[ -z $(grep -E "你的USERID" $file_bot_setting_user) ]]; then
            cd $dir_config
            pm2 start bot.py --watch "$file_bot_user" --watch-delay 10 --name=bot
        else
            echo -e "似乎 $file_bot_setting_user 还未修改为你自己的信息，可能是首次部署容器，因此不启动Telegram Bot...\n"
        fi
    else
        echo -e "已设置为不自动启动Telegram Bot，跳过...\n"
    fi
fi

###########################

echo -e "容器启动成功...\n"
crond -f
exec "$@"
