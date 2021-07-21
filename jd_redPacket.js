/*
京东全民开红包
Last Modified time: 2021-05-19 16:27:18
活动入口：京东APP首页-领券-锦鲤红包。[活动地址](https://happy.m.jd.com/babelDiy/zjyw/3ugedFa7yA6NhxLN5gw2L3PF9sQC/index.html)
未实现功能：领3张券功能

脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js
================QuantumultX==================
[task_local]
#京东全民开红包
1 1,2,23 * * * https://gitee.com/lxk0301/jd_scripts/raw/master/jd_redPacket.js, tag=京东全民开红包, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jd_redPacket.png, enabled=true
===================Loon==============
[Script]
cron "1 1,2,23 * * *" script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_redPacket.js, tag=京东全民开红包
===============Surge===============
[Script]
京东全民开红包 = type=cron,cronexp="1 1,2,23 * * *",wake-system=1,timeout=3600,script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_redPacket.js
====================================小火箭=============================
京东全民开红包 = type=cron,script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_redPacket.js, cronexpr="1 1,2,23 * * *", timeout=3600, enable=true
 */
const $ = new Env('京东全民开红包');
const notify = $.isNode() ? require('./sendNotify') : '';
//Node.js用户请在jdCookie.js处填写京东ck;
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';

//IOS等用户直接用NobyDa的jd cookie
let cookiesArr = [], cookie = '';
$.redPacketId = [];


/*
 *Progcessed By JSDec in 1.92s
 *JSDec - JSDec.js.org
 */
if ($['isNode']()) {
    Object['keys'](jdCookieNode)['forEach'](_0x38ff90 => {
        cookiesArr['push'](jdCookieNode[_0x38ff90]);
    });
    if (process['env']['JD_DEBUG'] && process['env']['JD_DEBUG'] === 'false') console['log'] = () => {};
    if (JSON['stringify'](process['env'])['indexOf']('GITHUB') > -0x1) process['exit'](0x0);
} else {
    cookiesArr = [$['getdata']('CookieJD'), $['getdata']('CookieJD2'), ...jsonParse($['getdata']('CookiesJD') || '[]')['map'](_0x1c006d => _0x1c006d['cookie'])]['filter'](_0x18ec28 => !!_0x18ec28);
}
const JD_API_HOST = 'https://api.m.jd.com/api';
!(async () => {
    var _0x1be847 = {
        'RTBap': 'data',
        'aOhRJ': 'result',
        'FeqMp': 'redPacketId',
        'ZqFFV': 'statusDesc',
        'giwuQ': 'biz_msg',
        'TYHPz': 'https://bean.m.jd.com/bean/signIndex.action',
        'BwvFw': function(_0x48485e, _0x1fad4f) {
            return _0x48485e(_0x1fad4f);
        },
        'WAvZg': function(_0x470e83, _0x496f9e) {
            return _0x470e83(_0x496f9e);
        },
        'EbSsa': 'http://adguard.ipq.co/jd_red.json',
        'shQjY': function(_0x1601f4, _0x2c5175) {
            return _0x1601f4(_0x2c5175);
        },
        'oiiod': 'http://adguard.ipq.co/jxhb.json',
        'OCnfx': function(_0x5d83f3, _0x32c576) {
            return _0x5d83f3 < _0x32c576;
        },
        'fYKIU': function(_0x35e460, _0x3a45f3) {
            return _0x35e460 === _0x3a45f3;
        },
        'UOnkY': 'gQcyy',
        'xwNzR': function(_0x479043, _0x288735) {
            return _0x479043(_0x288735);
        },
        'VKEjO': function(_0x5d948f) {
            return _0x5d948f();
        },
        'yNyFO': 'NlPLK',
        'MUtQt': function(_0x1fc808, _0x21d9b0) {
            return _0x1fc808 > _0x21d9b0;
        },
        'MuEJr': function(_0x57daf6, _0x43f587) {
            return _0x57daf6 !== _0x43f587;
        },
        'IlPfV': 'DwGNZ',
        'jKtzQ': 'CfEYQ',
        'KBZBr': function(_0x58877f, _0x3978d4) {
            return _0x58877f(_0x3978d4);
        },
        'DnOPp': 'cgGAi',
        'LicHw': 'nGToh',
        'JzOOY': function(_0x2d5d97, _0x228949) {
            return _0x2d5d97(_0x228949);
        },
        'rolZD': 'dSpiK',
        'ylfcW': function(_0x42a21f, _0x5dbe8f) {
            return _0x42a21f !== _0x5dbe8f;
        },
        'wnJHk': 'rSuvt',
        'VsIeZ': function(_0x501ed9, _0x184655) {
            return _0x501ed9(_0x184655);
        }
    };
    if (!cookiesArr[0x0]) {
        $['msg']($['name'], '【提示】请先获取京东账号一cookie\x0a直接使用NobyDa的京东签到获取', _0x1be847['TYHPz'], {
            'open-url': _0x1be847['TYHPz']
        });
        return;
    }
    let _0x2d810c = await _0x1be847['BwvFw'](getAuthorShareCode, 'http://adguard.ipq.co/jd_red.json'),
        _0x4b95f7 = await _0x1be847['WAvZg'](getAuthorShareCode, _0x1be847['EbSsa']);
    if (!_0x2d810c) _0x2d810c = await getAuthorShareCode();
    let _0x4c6e84 = (await _0x1be847['shQjY'](getAuthorShareCode, _0x1be847['oiiod'])) || [];
    $['authorMyShareIds'] = [..._0x2d810c || [], ..._0x4b95f7 || []];
    for (let _0x77ad5d = 0x0; _0x1be847['OCnfx'](_0x77ad5d, cookiesArr['length']); _0x77ad5d++) {
        if (cookiesArr[_0x77ad5d]) {
            if (_0x1be847['fYKIU'](_0x1be847['UOnkY'], 'gQcyy')) {
                cookie = cookiesArr[_0x77ad5d];
                $['UserName'] = _0x1be847['xwNzR'](decodeURIComponent, cookie['match'](/pt_pin=([^; ]+)(?=;?)/) && cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
                $['index'] = _0x77ad5d + 0x1;
                $['isLogin'] = !![];
                $['nickName'] = '';
                await _0x1be847['VKEjO'](TotalBean);
                console['log']('\n****开始【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + '****\n');
                if (!$['isLogin']) {
                    $['msg']($['name'], '【提示】cookie已失效', '京东账号' + $['index'] + ' ' + ($['nickName'] || $['UserName']) + '\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action', {
                        'open-url': 'https://bean.m.jd.com/bean/signIndex.action'
                    });
                    if ($['isNode']()) {
                        if (_0x1be847['yNyFO'] !== 'NlPLK') {
                            if (data[_0x1be847['RTBap']][_0x1be847['aOhRJ']][_0x1be847['FeqMp']]) {
                                console['log']('\n\n发起助力红包 成功：红包ID ' + data[_0x1be847['RTBap']][_0x1be847['aOhRJ']]['redPacketId']);
                                $['redPacketId']['push'](data['data']['result'][_0x1be847['FeqMp']]);
                            } else {
                                console['log']('\x0a\x0a发起助力红包 失败：' + data[_0x1be847['RTBap']][_0x1be847['aOhRJ']][_0x1be847['ZqFFV']]);
                            }
                        } else {
                            await notify['sendNotify']($['name'] + 'cookie已失效 - ' + $['UserName'], '京东账号' + $['index'] + ' ' + $['UserName'] + '\n请重新登录获取cookie');
                        }
                    }
                    continue;
                }
                $['discount'] = 0x0;
                await _0x1be847['VKEjO'](redPacket);
                await _0x1be847['VKEjO'](showMsg);
            } else {
                $['logErr'](e, resp);
            }
        }
    }
    for (let _0x54f38e = 0x0; _0x54f38e < cookiesArr['length']; _0x54f38e++) {
        cookie = cookiesArr[_0x54f38e];
        $['index'] = _0x54f38e + 0x1;
        $['UserName'] = _0x1be847['xwNzR'](decodeURIComponent, cookie['match'](/pt_pin=([^; ]+)(?=;?)/) && cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
        $['canHelp'] = !![];
        $['redPacketId'] = [...new Set($['redPacketId'])];
        if (cookiesArr && _0x1be847['MUtQt'](cookiesArr['length'], 0x2)) {
            console['log']('\n\n自己账号内部互助');
            for (let _0x5e37bd of $['redPacketId']) {
                if (_0x1be847['MuEJr'](_0x1be847['IlPfV'], _0x1be847['jKtzQ'])) {
                    console['log']('账号 ' + $['index'] + ' ' + $['UserName'] + ' 开始给 ' + _0x5e37bd + ' 进行助力');
                    await _0x1be847['KBZBr'](jinli_h5assist, _0x5e37bd);
                    if (!$['canHelp']) {
                        console['log']('次数已用完或活动火爆，跳出助力');
                        break;
                    }
                } else {
                    cookiesArr['push'](jdCookieNode[_0x5e37bd]);
                }
            }
        }
        if ($['canHelp']) {
            if (_0x1be847['MuEJr']('LLdoK', _0x1be847['DnOPp'])) {
                console['log']('\x0a\x0a有剩余助力机会则给作者lxk0301进行助力');
                for (let _0x57c3a8 of $['authorMyShareIds'] || []) {
                    if (_0x1be847['LicHw'] !== _0x1be847['LicHw']) {
                        console['log']('---具体任务详情---' + JSON['stringify'](getTaskDetailForColorRes));
                    } else {
                        console['log']('\n账号 ' + $['index'] + ' ' + $['UserName'] + ' 开始给作者lxk0301 ' + _0x57c3a8 + ' 进行助力');
                        await _0x1be847['JzOOY'](jinli_h5assist, _0x57c3a8);
                        if (!$['canHelp']) {
                            if (_0x1be847['rolZD'] !== 'dSpiK') {
                                $['logErr'](e, resp);
                            } else {
                                console['log']('次数已用完，跳出助力');
                                break;
                            }
                        }
                    }
                }
            } else {
                console['log']('红包领取成功，获得' + data['data']['result']['discount'] + '元\x0a');
                $['discount'] += Number(data['data']['result']['discount']);
            }
        }
        for (let _0x33aae5 of _0x4c6e84 || []) {
            if (_0x1be847['ylfcW']('rSuvt', _0x1be847['wnJHk'])) {
                console['log']('\x0a' + $['h5activityIndex']['data'][_0x1be847['giwuQ']] + '\x0a');
            } else {
                if (!_0x33aae5) continue;
                await _0x1be847['VsIeZ'](enrollFriend, _0x33aae5);
            }
        }
    }
})()['catch'](_0x5d1500 => {
    $['log']('', '❌ ' + $['name'] + ', 失败! 原因: ' + _0x5d1500 + '!', '');
})['finally'](() => {
    $['done']();
});
async function redPacket() {
    var _0x19dc35 = {
        'IjBMe': function(_0x11b07b) {
            return _0x11b07b();
        },
        'zxWpp': function(_0x38d79e) {
            return _0x38d79e();
        }
    };
    try {
        await _0x19dc35['IjBMe'](doLuckDrawFun);
        await _0x19dc35['IjBMe'](taskHomePage);
        await _0x19dc35['zxWpp'](doTask);
        await _0x19dc35['zxWpp'](h5activityIndex);
        await red();
        await _0x19dc35['zxWpp'](h5activityIndex);
    } catch (_0x238641) {
        $['logErr'](_0x238641);
    }
}

function showMsg() {
    console['log']('\x0a\x0a' + $['name'] + '获得红包：' + $['discount'] + '元\n\n');
}
async function doLuckDrawFun() {
    var _0x572cfc = {
        'IVibv': function(_0xd7c99f, _0x2f0cdc) {
            return _0xd7c99f < _0x2f0cdc;
        },
        'gBvlt': function(_0x489748) {
            return _0x489748();
        }
    };
    for (let _0x4b29ad = 0x0; _0x572cfc['IVibv'](_0x4b29ad, 0x3); _0x4b29ad++) {
        await _0x572cfc['gBvlt'](doLuckDrawEntrance);
    }
}

function doLuckDrawEntrance() {
    var _0x1e77ed = {
        'OCUEK': function(_0x5d13bc, _0x399311) {
            return _0x5d13bc === _0x399311;
        },
        'SlGmh': 'biz_code',
        'GAJzT': 'data',
        'KDqow': 'discount',
        'pKBQH': function(_0x17475f, _0x584aab) {
            return _0x17475f === _0x584aab;
        },
        'XlFfh': 'SFTGx',
        'ibqxJ': function(_0x2ba48e, _0x1b7b95) {
            return _0x2ba48e === _0x1b7b95;
        },
        'ZIiMX': 'busiCode',
        'sORUT': 'YdNxF',
        'UEDrO': function(_0x4736ff, _0x4d82b9) {
            return _0x4736ff === _0x4d82b9;
        },
        'TGdpE': 'itwHn',
        'kBpNa': 'KqBfV',
        'YSJxn': 'https://api.m.jd.com/client.action?functionId=doLuckDrawEntrance&body=%7B%22platformType%22%3A%221%22%7D&appid=XPMSGC2019&client=m&clientVersion=1.0.0&area=19_1601_50258_62858&geo=%5Bobject%20Object%5D&uuid=88732f840b77821b345bf07fd71f609e6ff12f43',
        'KenmG': 'api.m.jd.com',
        'BveKY': 'https://h5.m.jd.com',
        'YIlwU': 'jdapp;iPhone;9.5.4;14.3;88732f840b77821b345bf07fd71f609e6ff12f43;network/4g;model/iPhone11,8;addressid/2005183373;appBuild/167668;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
        'Eumnn': 'zh-cn'
    };
    return new Promise(_0x47b55b => {
        var _0x24913a = {
            'EeeSR': function(_0x5f3111, _0x339cea) {
                return _0x5f3111(_0x339cea);
            }
        };
        const _0x20289a = {
            'url': _0x1e77ed['YSJxn'],
            'headers': {
                'Host': _0x1e77ed['KenmG'],
                'Origin': _0x1e77ed['BveKY'],
                'Cookie': cookie,
                'Content-Length': '0',
                'Connection': 'keep-alive',
                'Accept': 'application/json, text/plain, */*',
                'User-Agent': _0x1e77ed['YIlwU'],
                'Accept-Language': _0x1e77ed['Eumnn'],
                'Referer': 'https://h5.m.jd.com/babelDiy/Zeus/yj8mbcm6roENn7qhNdhiekyeqtd/index.html',
                'Accept-Encoding': 'gzip, deflate, br'
            }
        };
        $['post'](_0x20289a, async (_0x5cfa04, _0x417bb2, _0x438a20) => {
            var _0x21399f = {
                'AyglM': function(_0x35c35c, _0x900c55) {
                    return _0x1e77ed['OCUEK'](_0x35c35c, _0x900c55);
                },
                'LEERZ': _0x1e77ed['SlGmh'],
                'IziuZ': _0x1e77ed['GAJzT'],
                'FcsWQ': _0x1e77ed['KDqow']
            };
            try {
                if (_0x5cfa04) {
                    console['log']('' + JSON['stringify'](_0x5cfa04));
                    console['log']($['name'] + ' API请求失败，请检查网路重试');
                } else {
                    if (_0x1e77ed['pKBQH']('uBGQS', _0x1e77ed['XlFfh'])) {
                        $['log']('', '❌ ' + $['name'] + ', 失败! 原因: ' + e + '!', '');
                    } else {
                        if (_0x438a20) {
                            _0x438a20 = JSON['parse'](_0x438a20);
                            if (_0x1e77ed['pKBQH'](_0x438a20['code'], '0') && _0x1e77ed['ibqxJ'](_0x438a20[_0x1e77ed['ZIiMX']], '0')) {
                                if (_0x438a20['result']['luckyDrawData']['actId']) {
                                    if (_0x1e77ed['sORUT'] === _0x1e77ed['sORUT']) {
                                        if (_0x438a20['result']['luckyDrawData']['redPacketId']) {
                                            console['log']('券后9.9抽奖获得【红包】：' + _0x438a20['result']['luckyDrawData']['quota'] + '元');
                                        } else {
                                            console['log']('券后9.9抽奖获得【优惠券】：' + _0x438a20['result']['luckyDrawData']['discount'] + '元：' + _0x438a20['result']['luckyDrawData']['prizeName'] + '，' + _0x438a20['result']['luckyDrawData']['quotaDesc']);
                                        }
                                    } else {
                                        _0x438a20 = JSON['parse'](_0x438a20);
                                        if (_0x438a20 && _0x438a20['data'] && _0x21399f['AyglM'](_0x438a20['data'][_0x21399f['LEERZ']], 0x0)) {
                                            console['log']('拆红包获得：' + _0x438a20[_0x21399f['IziuZ']]['result'][_0x21399f['FcsWQ']] + '元');
                                        } else {
                                            console['log']('领红包失败：' + JSON['stringify'](_0x438a20));
                                        }
                                    }
                                } else {
                                    if (_0x1e77ed['UEDrO']('itwHn', _0x1e77ed['TGdpE'])) {
                                        console['log']('券后9.9抽奖获失败：今日3次抽奖机会已用完\n');
                                    } else {
                                        _0x24913a['EeeSR'](_0x47b55b, _0x438a20);
                                    }
                                }
                            }
                        }
                    }
                }
            } catch (_0x1639ef) {
                if ('KqBfV' !== _0x1e77ed['kBpNa']) {
                    console['log']('\x0a\x0a' + $['name'] + '获得红包：' + $['discount'] + '元\n\n');
                } else {
                    $['logErr'](_0x1639ef, _0x417bb2);
                }
            } finally {
                _0x47b55b();
            }
        });
    });
}
async function doTask() {
    var _0x343405 = {
        'BFLQa': 'api.m.jd.com',
        'VgMgT': 'https://happy.m.jd.com',
        'mffXf': 'gzip, deflate, br',
        'vpXkJ': 'keep-alive',
        'GdArw': '*/*',
        'gZhID': function(_0xdda7c4, _0x21a803) {
            return _0xdda7c4(_0x21a803);
        },
        'BOHgR': 'JDUA',
        'flQKF': 'jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
        'Ggrwc': 'https://happy.m.jd.com/babelDiy/zjyw/3ugedFa7yA6NhxLN5gw2L3PF9sQC/index.html',
        'eUbpD': function(_0x1e2089, _0x41f4c9) {
            return _0x1e2089 === _0x41f4c9;
        },
        'wVWgs': function(_0x441e23, _0x263143) {
            return _0x441e23 === _0x263143;
        },
        'vkqkU': function(_0x5b73cf, _0x419237) {
            return _0x5b73cf > _0x419237;
        },
        'vvwve': function(_0x1b54a9, _0x3120ad) {
            return _0x1b54a9 !== _0x3120ad;
        },
        'YXssd': 'JCqgC',
        'OkKnV': 'FVRUf',
        'pjvbB': 'AsYyP',
        'EZSaU': function(_0x2f4ad4, _0x2f2bc9) {
            return _0x2f4ad4(_0x2f2bc9);
        },
        'brZOD': function(_0xe0ce6d, _0x1b99c0) {
            return _0xe0ce6d === _0x1b99c0;
        },
        'jdsmP': 'QQDwX',
        'dGIWB': function(_0x12bc8e, _0x24409a) {
            return _0x12bc8e !== _0x24409a;
        },
        'OrJtU': function(_0x28e588, _0x57f674) {
            return _0x28e588(_0x57f674);
        },
        'BLZPp': function(_0x3c6b62) {
            return _0x3c6b62();
        },
        'zlegn': function(_0x18a524, _0x1d2592) {
            return _0x18a524 !== _0x1d2592;
        },
        'Qrljm': function(_0x142ce0, _0x53ab4f) {
            return _0x142ce0 === _0x53ab4f;
        },
        'EVwQj': 'BngfY',
        'MKQeM': 'pZvuf',
        'bYVeQ': function(_0xaf0d5c, _0x582554) {
            return _0xaf0d5c(_0x582554);
        },
        'qilpT': function(_0x1bb454, _0x373adb) {
            return _0x1bb454 === _0x373adb;
        },
        'JmyHh': 'ldiPS',
        'PMosE': function(_0x252dd9) {
            return _0x252dd9();
        }
    };
    if ($['taskHomePageData'] && _0x343405['wVWgs']($['taskHomePageData']['code'], 0x0)) {
        $['taskInfo'] = $['taskHomePageData']['data']['result']['taskInfos'];
        if ($['taskInfo'] && _0x343405['vkqkU']($['taskInfo']['length'], 0x0)) {
            console['log']('    任务     状态  红包是否领取');
            for (let _0x40a6e1 of $['taskInfo']) {
                if (_0x343405['vvwve'](_0x343405['YXssd'], 'LRmeV')) {
                    console['log'](_0x40a6e1['title']['slice'](-0x6) + '   ' + (_0x40a6e1['alreadyReceivedCount'] ? _0x40a6e1['alreadyReceivedCount'] : 0x0) + '/' + _0x40a6e1['requireCount'] + '      ' + (_0x343405['wVWgs'](_0x40a6e1['innerStatus'], 0x4) ? '是' : '否'));
                } else {
                    return {
                        'url': JD_API_HOST + '?appid=jd_mp_h5&functionId=' + function_id + '&loginType=2&client=jd_mp_h5&t=' + new Date()['getTime']() * 0x3e8,
                        'body': 'body=' + JSON['stringify'](body),
                        'headers': {
                            'Host': _0x343405['BFLQa'],
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'Origin': _0x343405['VgMgT'],
                            'Accept-Encoding': _0x343405['mffXf'],
                            'Cookie': cookie,
                            'Connection': _0x343405['vpXkJ'],
                            'Accept': _0x343405['GdArw'],
                            'User-Agent': $['isNode']() ? process['env']['JD_USER_AGENT'] ? process['env']['JD_USER_AGENT'] : _0x343405['gZhID'](require, './USER_AGENTS')['USER_AGENT'] : $['getdata'](_0x343405['BOHgR']) ? $['getdata'](_0x343405['BOHgR']) : _0x343405['flQKF'],
                            'Referer': _0x343405['Ggrwc'],
                            'Content-Length': '36',
                            'Accept-Language': 'zh-cn'
                        }
                    };
                }
            }
            for (let _0x2b3bf8 of $['taskInfo']) {
                if (_0x343405['wVWgs'](_0x343405['OkKnV'], _0x343405['OkKnV'])) {
                    if (_0x2b3bf8['innerStatus'] === 0x4) {
                        console['log']('[' + _0x2b3bf8['title'] + '] 已经领取奖励');
                    } else if (_0x2b3bf8['innerStatus'] === 0x3) {
                        if (_0x343405['wVWgs'](_0x343405['pjvbB'], 'LyUve')) {
                            if (err) {} else {
                                if (data) data = JSON['parse'](data);
                            }
                        } else {
                            await _0x343405['EZSaU'](receiveTaskRedpacket, _0x2b3bf8['taskType']);
                        }
                    } else if (_0x343405['brZOD'](_0x2b3bf8['innerStatus'], 0x2)) {
                        if (_0x343405['jdsmP'] !== 'kPqMa') {
                            if (_0x343405['dGIWB'](_0x2b3bf8['taskType'], 0x0) && _0x2b3bf8['taskType'] !== 0x1) {
                                console['log']('开始做【' + _0x2b3bf8['title'] + '】任务');
                                await _0x343405['OrJtU'](active, _0x2b3bf8['taskType']);
                                console['log']('开始领取【' + _0x2b3bf8['title'] + '】任务所得红包奖励');
                                await _0x343405['OrJtU'](receiveTaskRedpacket, _0x2b3bf8['taskType']);
                            } else if (_0x343405['brZOD'](_0x2b3bf8['taskType'], 0x1)) {
                                console['log']('开始做【' + _0x2b3bf8['title'] + '】任务');
                                await _0x343405['BLZPp'](doAppTask);
                            } else {
                                console['log']('[' + _0x2b3bf8['title'] + '] 功能未开发');
                            }
                        } else {
                            $['logErr'](e, resp);
                        }
                    } else if (_0x343405['dGIWB'](_0x2b3bf8['innerStatus'], 0x4)) {
                        console['log']('\n开始领取【' + _0x2b3bf8['title'] + '】任务');
                        await _0x343405['OrJtU'](startTask, _0x2b3bf8['taskType']);
                        if (_0x343405['dGIWB'](_0x2b3bf8['taskType'], 0x0) && _0x343405['zlegn'](_0x2b3bf8['taskType'], 0x1)) {
                            if (_0x343405['Qrljm'](_0x343405['EVwQj'], _0x343405['MKQeM'])) {
                                console['log']('领红包失败：' + JSON['stringify'](data));
                            } else {
                                console['log']('开始做【' + _0x2b3bf8['title'] + '】任务');
                                await active(_0x2b3bf8['taskType']);
                                console['log']('开始领取【' + _0x2b3bf8['title'] + '】任务所得红包奖励');
                                await _0x343405['bYVeQ'](receiveTaskRedpacket, _0x2b3bf8['taskType']);
                            }
                        } else if (_0x2b3bf8['taskType'] === 0x1) {
                            if (_0x343405['qilpT'](_0x343405['JmyHh'], 'kjsfz')) {
                                resolve(data);
                            } else {
                                console['log']('开始做【' + _0x2b3bf8['title'] + '】任务');
                                await _0x343405['PMosE'](doAppTask);
                            }
                        } else {
                            console['log']('[' + _0x2b3bf8['title'] + '] 功能未开发');
                        }
                    }
                } else {
                    if (data) {
                        if (_0x343405['eUbpD'](type, '1') && _0x343405['wVWgs'](functionId, 'reportCcTask')) console['log']('京东首页点击“领券”逛10s任务:' + data);
                    }
                }
            }
        }
    } else {
        console['log']('\n获取任务列表异常：' + JSON['stringify']($['taskHomePageData']) + '\x0a');
    }
}
async function red() {
    var _0x212e77 = {
        'YUIoh': 'result',
        'akwvY': 'data',
        'FqPtp': 'rewards',
        'HTUiB': 'assistants',
        'KDLOx': function(_0x134439, _0x35a248) {
            return _0x134439 === _0x35a248;
        },
        'irUkD': 'biz_code',
        'BytnL': function(_0x28aaa6) {
            return _0x28aaa6();
        },
        'abrXL': function(_0x29cb7b, _0x43c021) {
            return _0x29cb7b === _0x43c021;
        },
        'goiED': 'redpacketInfo',
        'XdZyh': 'requireAssistNum',
        'UIYpD': 'remainRedpacketNumber',
        'oyFeA': 'waitOpenTimes',
        'ChxIn': function(_0x18f24b, _0x12c726) {
            return _0x18f24b > _0x12c726;
        },
        'DExbM': function(_0x57a6a0, _0x85b7ab) {
            return _0x57a6a0(_0x85b7ab);
        },
        'wfSkx': 'bhOlK',
        'dpWOb': 'biz_msg'
    };
    $['hasSendNumber'] = 0x0;
    $['assistants'] = 0x0;
    if ($['h5activityIndex'] && $['h5activityIndex']['data'] && $['h5activityIndex']['data'][_0x212e77['YUIoh']]) {
        const _0x41ac71 = $['h5activityIndex'][_0x212e77['akwvY']]['result'][_0x212e77['FqPtp']] || [];
        $['hasSendNumber'] = $['h5activityIndex']['data'][_0x212e77['YUIoh']]['hasSendNumber'];
        if ($['h5activityIndex'][_0x212e77['akwvY']][_0x212e77['YUIoh']][_0x212e77['HTUiB']]) {
            $['assistants'] = $['h5activityIndex'][_0x212e77['akwvY']]['result'][_0x212e77['HTUiB']]['length'] || 0x0;
        }
    }
    if ($['h5activityIndex'] && $['h5activityIndex']['data'] && _0x212e77['KDLOx']($['h5activityIndex']['data'][_0x212e77['irUkD']], 0x2712)) {
        await _0x212e77['BytnL'](h5launch);
    } else if ($['h5activityIndex'] && $['h5activityIndex']['data'] && _0x212e77['abrXL']($['h5activityIndex']['data']['biz_code'], 0x4e21)) {
        const _0x55a73d = $['h5activityIndex']['data'][_0x212e77['YUIoh']]['redpacketInfo']['id'];
        if (_0x55a73d) $['redPacketId']['push'](_0x55a73d);
        console['log']('\n\n当前待拆红包ID:' + $['h5activityIndex'][_0x212e77['akwvY']]['result'][_0x212e77['goiED']]['id'] + '，进度：再邀' + $['h5activityIndex'][_0x212e77['akwvY']][_0x212e77['YUIoh']][_0x212e77['XdZyh']] + '个好友，开第' + ($['hasSendNumber'] + 0x1) + '个红包。当前已拆红包：' + $['hasSendNumber'] + '个，剩余' + $['h5activityIndex']['data'][_0x212e77['YUIoh']][_0x212e77['UIYpD']] + '个红包待开，已有' + $['assistants'] + '好友助力\x0a\x0a');
        const _0x4c2e61 = $['h5activityIndex'][_0x212e77['akwvY']]['result'][_0x212e77['goiED']][_0x212e77['oyFeA']] || 0x0;
        console['log']('当前可拆红包个数：' + _0x4c2e61);
        if (_0x212e77['ChxIn'](_0x4c2e61, 0x0)) {
            for (let _0x5b1734 = 0x0; _0x5b1734 < new Array(_0x4c2e61)['fill']('')['length']; _0x5b1734++) {
                if (!_0x55a73d) break;
                await _0x212e77['DExbM'](h5receiveRedpacket, _0x55a73d);
                await $['wait'](0x1f4);
            }
        }
    } else if ($['h5activityIndex'] && $['h5activityIndex']['data'] && _0x212e77['abrXL']($['h5activityIndex']['data'][_0x212e77['irUkD']], 0x4e22)) {
        if (_0x212e77['wfSkx'] === 'nNenQ') {
            console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
            console['log'](JSON['stringify'](err));
        } else {
            console['log']('\x0a' + $['h5activityIndex']['data'][_0x212e77['dpWOb']] + '\x0a');
        }
    }
}

function taskHomePage() {
    var _0x403b2d = {
        'CKbSv': 'data',
        'cGIdC': function(_0x20a4e3, _0x2e6acb) {
            return _0x20a4e3 === _0x2e6acb;
        },
        'PmxdC': 'IXwAU',
        'GLADd': function(_0x599fd3, _0x5aa7cc) {
            return _0x599fd3(_0x5aa7cc);
        },
        'Cbmwh': function(_0x4a5982, _0x5404be, _0x41f8f1) {
            return _0x4a5982(_0x5404be, _0x41f8f1);
        }
    };
    return new Promise(_0x28917b => {
        var _0x48d30b = {
            'PjntL': 'result',
            'Abymp': 'redPacketId',
            'bycLZ': _0x403b2d['CKbSv'],
            'Mgeoo': function(_0x59fc8a, _0x276979) {
                return _0x403b2d['cGIdC'](_0x59fc8a, _0x276979);
            },
            'EFQpW': _0x403b2d['PmxdC'],
            'JYcjz': function(_0x3c4ef4, _0x5cf408) {
                return _0x403b2d['GLADd'](_0x3c4ef4, _0x5cf408);
            }
        };
        if ('geiti' !== 'geiti') {
            console['log']('' + JSON['stringify'](err));
            console['log']($['name'] + ' API请求失败，请检查网路重试');
        } else {
            $['post'](_0x403b2d['Cbmwh'](taskUrl, arguments['callee']['name']['toString'](), {
                'clientInfo': {}
            }), (_0x3a0e46, _0x470d23, _0x2fc571) => {
                try {
                    if (_0x3a0e46) {
                        console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                        console['log'](JSON['stringify'](_0x3a0e46));
                    } else {
                        $['taskHomePageData'] = JSON['parse'](_0x2fc571);
                    }
                } catch (_0x5e978a) {
                    $['logErr'](_0x5e978a, _0x470d23);
                } finally {
                    if (_0x48d30b['Mgeoo'](_0x48d30b['EFQpW'], _0x48d30b['EFQpW'])) {
                        _0x48d30b['JYcjz'](_0x28917b, _0x2fc571);
                    } else {
                        console['log']('\n\n发起助力红包 成功：红包ID ' + _0x2fc571['data'][_0x48d30b['PjntL']][_0x48d30b['Abymp']]);
                        $['redPacketId']['push'](_0x2fc571[_0x48d30b['bycLZ']]['result'][_0x48d30b['Abymp']]);
                    }
                }
            });
        }
    });
}

function startTask(_0x4576c2) {
    var _0x5c4db6 = {
        'hwIMO': function(_0x237346, _0x37b860) {
            return _0x237346 !== _0x37b860;
        },
        'PzvHs': 'RJCUm',
        'MWXCY': function(_0x274ff0, _0x1298b6) {
            return _0x274ff0 !== _0x1298b6;
        },
        'uKNTS': 'NcFJa',
        'UYZfM': 'SIUJs',
        'hySFI': function(_0x1f6b26, _0x51b653) {
            return _0x1f6b26(_0x51b653);
        },
        'rNwKp': 'CookieJD',
        'ZnoMp': 'CookiesJD',
        'NJsHw': function(_0x3245de, _0x5bbf9b) {
            return _0x3245de === _0x5bbf9b;
        },
        'iLdue': 'iXUWE',
        'kpTDq': function(_0x1a3264, _0x2e85ab, _0x1381ce) {
            return _0x1a3264(_0x2e85ab, _0x1381ce);
        },
        'OyFtZ': 'token',
        'gehjB': function(_0x9eb12f, _0x28751c) {
            return _0x9eb12f + _0x28751c;
        },
        'lQvFm': function(_0x3d1307, _0x22964c) {
            return _0x3d1307 + _0x22964c;
        }
    };
    let _0x3cae7e = {
        'taskType': _0x4576c2
    };
    _0x3cae7e[_0x5c4db6['OyFtZ']] = $['md5']($['md5'](_0x5c4db6['gehjB'](_0x5c4db6['lQvFm']('j', JSON['stringify'](_0x3cae7e)), 'D')));
    return new Promise(_0x5e346 => {
        var _0x1d5c05 = {
            'IIEmk': _0x5c4db6['rNwKp'],
            'JZKuT': 'CookieJD2',
            'MAGfl': function(_0x1a1a6f, _0x2cc6d2) {
                return _0x5c4db6['hySFI'](_0x1a1a6f, _0x2cc6d2);
            },
            'hCekI': _0x5c4db6['ZnoMp']
        };
        if (_0x5c4db6['NJsHw'](_0x5c4db6['iLdue'], 'LpEgy')) {
            cookiesArr = [$['getdata'](_0x1d5c05['IIEmk']), $['getdata'](_0x1d5c05['JZKuT']), ..._0x1d5c05['MAGfl'](jsonParse, $['getdata'](_0x1d5c05['hCekI']) || '[]')['map'](_0x4c9c20 => _0x4c9c20['cookie'])]['filter'](_0x535059 => !!_0x535059);
        } else {
            $['post'](_0x5c4db6['kpTDq'](taskUrl, arguments['callee']['name']['toString'](), _0x3cae7e), (_0x1ec6d9, _0x33cbc8, _0x3cae7e) => {
                try {
                    if (_0x5c4db6['hwIMO'](_0x5c4db6['PzvHs'], 'RJCUm')) {
                        console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                        console['log'](JSON['stringify'](_0x1ec6d9));
                    } else {
                        if (_0x1ec6d9) {
                            console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                            console['log'](JSON['stringify'](_0x1ec6d9));
                        } else {
                            if (_0x5c4db6['MWXCY'](_0x5c4db6['uKNTS'], _0x5c4db6['UYZfM'])) {
                                console['log']('领取任务：' + _0x3cae7e);
                                _0x3cae7e = JSON['parse'](_0x3cae7e);
                            } else {
                                console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                                console['log'](JSON['stringify'](_0x1ec6d9));
                            }
                        }
                    }
                } catch (_0x842815) {
                    $['logErr'](_0x842815, _0x33cbc8);
                } finally {
                    _0x5c4db6['hySFI'](_0x5e346, _0x3cae7e);
                }
            });
        }
    });
}
async function active(_0x5e9255) {
    var _0x50af32 = {
        'sLtjr': 'result',
        'ZVyOU': 'discount',
        'CDgqW': function(_0x572c8e, _0x16d476) {
            return _0x572c8e(_0x16d476);
        },
        'eijki': function(_0x2c5e28, _0x1b2d77) {
            return _0x2c5e28 !== _0x1b2d77;
        },
        'oXZJq': 'lwnkh',
        'ZJbWm': 'yuCMZ',
        'FqKGb': function(_0x6b34a3, _0x4ae946) {
            return _0x6b34a3 === _0x4ae946;
        },
        'viDYw': function(_0x53b650, _0x2c3e23) {
            return _0x53b650 !== _0x2c3e23;
        },
        'AUPlM': 'SbTsm',
        'qhQTg': function(_0x4febc0, _0x4183e5, _0x11df4a) {
            return _0x4febc0(_0x4183e5, _0x11df4a);
        },
        'pvuOe': 'iwFxb',
        'vcVJO': 'qhRux'
    };
    const _0x3a2101 = await _0x50af32['CDgqW'](getTaskDetailForColor, _0x5e9255);
    if (_0x3a2101 && _0x3a2101['code'] === 0x0) {
        if (_0x50af32['eijki']('lwnkh', _0x50af32['oXZJq'])) {
            console['log']('拆红包获得：' + data['data'][_0x50af32['sLtjr']][_0x50af32['ZVyOU']] + '元');
        } else {
            if (_0x3a2101['data'] && _0x3a2101['data']['result']) {
                const {
                    advertDetails
                } = _0x3a2101['data']['result'];
                for (let _0x50bb38 of advertDetails) {
                    if (_0x50af32['eijki'](_0x50af32['ZJbWm'], _0x50af32['ZJbWm'])) {
                        console['log']('券后9.9抽奖获失败：今日3次抽奖机会已用完\n');
                    } else {
                        await $['wait'](0x3e8);
                        if (_0x50bb38['id'] && _0x50af32['FqKGb'](_0x50bb38['status'], 0x0)) {
                            if (_0x50af32['viDYw'](_0x50af32['AUPlM'], _0x50af32['AUPlM'])) {
                                data = JSON['parse'](data);
                            } else {
                                await _0x50af32['qhQTg'](taskReportForColor, _0x5e9255, _0x50bb38['id']);
                            }
                        }
                    }
                }
            } else {
                console['log']('任务列表为空,手动进入app内检查 是否存在[从京豆首页进领券中心逛30秒]的任务,如存在,请手动完成再运行脚本');
                $['msg']('' + $['name'], '', '手动进入app内检查\n是否存在[从京豆首页进领券中心逛30秒]的任务\n如存在,请手动完成再运行脚本');
                if ($['isNode']()) await notify['sendNotify']($['name'] + ' - 账号' + $['index'] + ' - ' + $['nickName'], '执行脚本出现异常\n请手动进入app内检查\n是否存在[从京豆首页进领券中心逛30秒]的任务\n如存在,请手动完成再运行脚本');
            }
        }
    } else {
        if (_0x50af32['viDYw'](_0x50af32['pvuOe'], _0x50af32['vcVJO'])) {
            console['log']('---具体任务详情---' + JSON['stringify'](_0x3a2101));
        } else {
            console['log']('券后9.9抽奖获得【优惠券】：' + data['result']['luckyDrawData']['discount'] + '元：' + data['result']['luckyDrawData']['prizeName'] + '，' + data['result']['luckyDrawData']['quotaDesc']);
        }
    }
}

function getTaskDetailForColor(_0x21ceba) {
    var _0x2447ca = {
        'dHLGA': 'bjKqK',
        'aaPrQ': 'uMDrH',
        'oPwgz': function(_0x5cb327, _0x531dad) {
            return _0x5cb327 !== _0x531dad;
        },
        'MwdLa': 'isWgf',
        'GXWMY': function(_0xd4d10b, _0x1e2779, _0x36fcd2) {
            return _0xd4d10b(_0x1e2779, _0x36fcd2);
        }
    };
    const _0x4df8dd = {
        'clientInfo': {},
        'taskType': _0x21ceba
    };
    return new Promise(_0x44c1a3 => {
        var _0x30d936 = {
            'AfiSJ': _0x2447ca['dHLGA'],
            'qdkGH': _0x2447ca['aaPrQ'],
            'rdPqV': function(_0x37385f, _0x28b58f) {
                return _0x2447ca['oPwgz'](_0x37385f, _0x28b58f);
            },
            'Behgc': _0x2447ca['MwdLa']
        };
        $['post'](_0x2447ca['GXWMY'](taskUrl, arguments['callee']['name']['toString'](), _0x4df8dd), (_0x408882, _0x3f894d, _0x4df8dd) => {
            if ('bjKqK' !== _0x30d936['AfiSJ']) {
                $['logErr'](e, _0x3f894d);
            } else {
                try {
                    if (_0x30d936['qdkGH'] === 'Fhbzw') {
                        console['log']('[' + item['title'] + '] 功能未开发');
                    } else {
                        if (_0x408882) {
                            console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                            console['log'](JSON['stringify'](_0x408882));
                        } else {
                            _0x4df8dd = JSON['parse'](_0x4df8dd);
                        }
                    }
                } catch (_0x50640a) {
                    $['logErr'](_0x50640a, _0x3f894d);
                } finally {
                    if (_0x30d936['rdPqV'](_0x30d936['Behgc'], _0x30d936['Behgc'])) {
                        $['done']();
                    } else {
                        _0x44c1a3(_0x4df8dd);
                    }
                }
            }
        });
    });
}

function taskReportForColor(_0x29cb59, _0x206599) {
    var _0x3e698f = {
        'Oxcwz': function(_0x26db53, _0x4d9a8a) {
            return _0x26db53 === _0x4d9a8a;
        },
        'pIycF': function(_0x3793c2, _0x591e53) {
            return _0x3793c2 !== _0x591e53;
        },
        'ovnlu': 'UGqlv',
        'MEWzh': 'iIqei',
        'uKOze': 'Nyiiu',
        'ounMc': function(_0x5abdad, _0x4dc23c) {
            return _0x5abdad(_0x4dc23c);
        },
        'BrkHk': 'MRoLy',
        'AttNj': 'rVNuQ',
        'dTuLG': function(_0x43ebbb, _0x435541, _0x57d559) {
            return _0x43ebbb(_0x435541, _0x57d559);
        },
        'xDeva': 'token',
        'BTWoC': function(_0x181476, _0x7b2eca) {
            return _0x181476 + _0x7b2eca;
        }
    };
    const _0x52cf7e = {
        'taskType': _0x29cb59,
        'detailId': _0x206599
    };
    _0x52cf7e[_0x3e698f['xDeva']] = $['md5']($['md5'](_0x3e698f['BTWoC']('j' + JSON['stringify'](_0x52cf7e), 'D')));
    return new Promise(_0x3d5a3d => {
        var _0x1103c6 = {
            'DbEfI': function(_0x14bd8f, _0x31c12b) {
                return _0x3e698f['Oxcwz'](_0x14bd8f, _0x31c12b);
            },
            'sZRoN': function(_0xd67910, _0x271b3d) {
                return _0x3e698f['pIycF'](_0xd67910, _0x271b3d);
            },
            'MYdHr': 'ldhcL',
            'rIxkf': _0x3e698f['ovnlu'],
            'PWnpx': _0x3e698f['MEWzh'],
            'EXGJi': _0x3e698f['uKOze'],
            'stjAc': function(_0x302d81, _0x125eb0) {
                return _0x3e698f['ounMc'](_0x302d81, _0x125eb0);
            }
        };
        if (_0x3e698f['BrkHk'] === _0x3e698f['AttNj']) {
            if (err) {
                console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                console['log'](JSON['stringify'](err));
            } else {
                _0x52cf7e = JSON['parse'](_0x52cf7e);
                if (_0x52cf7e['data']['success'] && _0x1103c6['DbEfI'](_0x52cf7e['data']['biz_code'], 0x0)) {
                    console['log']('红包领取成功，获得' + _0x52cf7e['data']['result']['discount'] + '元\x0a');
                    $['discount'] += Number(_0x52cf7e['data']['result']['discount']);
                }
            }
        } else {
            $['post'](_0x3e698f['dTuLG'](taskUrl, arguments['callee']['name']['toString'](), _0x52cf7e), (_0x51f1dd, _0x56125b, _0x52cf7e) => {
                try {
                    if (_0x1103c6['sZRoN'](_0x1103c6['MYdHr'], _0x1103c6['rIxkf'])) {
                        if (_0x51f1dd) {
                            console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                            console['log'](JSON['stringify'](_0x51f1dd));
                        } else {
                            _0x52cf7e = JSON['parse'](_0x52cf7e);
                        }
                    } else {
                        $['taskHomePageData'] = JSON['parse'](_0x52cf7e);
                    }
                } catch (_0x4edcf1) {
                    $['logErr'](_0x4edcf1, _0x56125b);
                } finally {
                    if (_0x1103c6['PWnpx'] === _0x1103c6['EXGJi']) {
                        console['log']('发起助力红包 失败：' + JSON['stringify'](_0x52cf7e));
                    } else {
                        _0x1103c6['stjAc'](_0x3d5a3d, _0x52cf7e);
                    }
                }
            });
        }
    });
}

function receiveTaskRedpacket(_0x173aa2) {
    var _0x1ab7ac = {
        'OCiUB': 'data',
        'EwBaE': 'rewards',
        'OtjGc': function(_0x2c66fc, _0x10047f) {
            return _0x2c66fc !== _0x10047f;
        },
        'FQUly': 'ijhmI',
        'wkwIP': 'TGEqN',
        'jElgX': function(_0x398352, _0x55e0ad) {
            return _0x398352 === _0x55e0ad;
        },
        'DVCCj': function(_0x58ac3b, _0x58783f) {
            return _0x58ac3b(_0x58783f);
        },
        'StEGC': 'FAOHo',
        'AMWwh': 'HhUXg',
        'lkJcS': 'assistants'
    };
    const _0x138c8f = {
        'clientInfo': {},
        'taskType': _0x173aa2
    };
    return new Promise(_0x3a6f01 => {
        var _0x13a50c = {
            'BuRBE': _0x1ab7ac['OCiUB'],
            'UQpUI': _0x1ab7ac['lkJcS']
        };
        $['post'](taskUrl(arguments['callee']['name']['toString'](), _0x138c8f), (_0x1d104c, _0xac65d9, _0x1b00bb) => {
            var _0x3857f5 = {
                'rPRxR': 'result',
                'CNPzj': _0x1ab7ac['OCiUB'],
                'NCRUg': _0x1ab7ac['EwBaE']
            };
            if (_0x1ab7ac['OtjGc'](_0x1ab7ac['FQUly'], 'ijhmI')) {
                _0x1b00bb = JSON['parse'](_0x1b00bb);
                $['h5activityIndex'] = _0x1b00bb;
                $['discount'] = 0x0;
                if ($['h5activityIndex'] && $['h5activityIndex']['data'] && $['h5activityIndex']['data'][_0x3857f5['rPRxR']]) {
                    const _0x4304b8 = $['h5activityIndex'][_0x3857f5['CNPzj']]['result'][_0x3857f5['NCRUg']] || [];
                    for (let _0xdd3c2b of _0x4304b8) {
                        $['discount'] += _0xdd3c2b['packetSum'];
                    }
                    if ($['discount']) $['discount'] = $['discount']['toFixed'](0x2);
                }
            } else {
                try {
                    if (_0x1ab7ac['wkwIP'] !== 'TGEqN') {
                        $['assistants'] = $['h5activityIndex'][_0x13a50c['BuRBE']]['result'][_0x13a50c['UQpUI']]['length'] || 0x0;
                    } else {
                        if (_0x1d104c) {
                            console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                            console['log'](JSON['stringify'](_0x1d104c));
                        } else {
                            _0x1b00bb = JSON['parse'](_0x1b00bb);
                            if (_0x1b00bb['data']['success'] && _0x1ab7ac['jElgX'](_0x1b00bb['data']['biz_code'], 0x0)) {
                                console['log']('红包领取成功，获得' + _0x1b00bb['data']['result']['discount'] + '元\x0a');
                                $['discount'] += _0x1ab7ac['DVCCj'](Number, _0x1b00bb['data']['result']['discount']);
                            }
                        }
                    }
                } catch (_0x3292e6) {
                    if (_0x1ab7ac['jElgX'](_0x1ab7ac['StEGC'], _0x1ab7ac['AMWwh'])) {
                        console['log']('[' + item['title'] + '] 功能未开发');
                    } else {
                        $['logErr'](_0x3292e6, _0xac65d9);
                    }
                } finally {
                    _0x1ab7ac['DVCCj'](_0x3a6f01, _0x1b00bb);
                }
            }
        });
    });
}

function jinli_h5assist(_0x3da845) {
    var _0x1ea728 = {
        'Mdkjs': 'biz_code',
        'muoWP': 'data',
        'pPoju': 'result',
        'gknYB': 'statusDesc',
        'IhYIy': function(_0x33cafa, _0x12158f) {
            return _0x33cafa === _0x12158f;
        },
        'dJPVx': 'status',
        'XaPLa': function(_0x283226, _0x229a7f) {
            return _0x283226 === _0x229a7f;
        },
        'fnxfp': function(_0x4d6cdf, _0x5f1077) {
            return _0x4d6cdf !== _0x5f1077;
        },
        'pAIWv': 'tPxOL',
        'OhONp': function(_0x27de55, _0x3d901e) {
            return _0x27de55 !== _0x3d901e;
        },
        'yhNnG': 'Kmuyz',
        'bEGuw': 'qnswu',
        'NQPpf': function(_0x28f09c, _0xe104ce) {
            return _0x28f09c !== _0xe104ce;
        },
        'pQEAf': 'ELEYm',
        'aFJvk': function(_0x3462ea, _0x1d0ddd) {
            return _0x3462ea === _0x1d0ddd;
        },
        'xWiqk': function(_0x278e86, _0x4bc60a) {
            return _0x278e86 !== _0x4bc60a;
        },
        'ogGBe': function(_0x44d447, _0x2872db) {
            return _0x44d447 === _0x2872db;
        },
        'kNIbI': function(_0x494a10) {
            return _0x494a10();
        },
        'CuBBv': function(_0x252815, _0x54be68) {
            return _0x252815 !== _0x54be68;
        },
        'HMicf': 'jJvSa',
        'PsoKl': function(_0x3750a6, _0x5cbb89, _0x355b63) {
            return _0x3750a6(_0x5cbb89, _0x355b63);
        }
    };
    const _0x259b83 = {
        'clientInfo': {},
        'redPacketId': _0x3da845,
        'followShop': 0x0,
        'promUserState': ''
    };
    const _0x2bfed4 = _0x1ea728['PsoKl'](taskUrl, arguments['callee']['name']['toString'](), _0x259b83);
    return new Promise(_0x395ade => {
        var _0x29f3a7 = {
            'NVhEQ': 'https://bean.m.jd.com/bean/signIndex.action',
            'BMIlC': function(_0x36a4e9, _0xb657d4) {
                return _0x36a4e9 === _0xb657d4;
            }
        };
        if (_0x1ea728['CuBBv'](_0x1ea728['HMicf'], 'jJvSa')) {
            data = JSON['parse'](data);
            if (data && data['data'] && data['data'][_0x1ea728['Mdkjs']] === 0x0) {
                console['log']('助力结果：' + data[_0x1ea728['muoWP']][_0x1ea728['pPoju']][_0x1ea728['gknYB']]);
                if (_0x1ea728['IhYIy'](data['data'][_0x1ea728['pPoju']][_0x1ea728['dJPVx']], 0x3)) $['canHelp'] = ![];
                if (_0x1ea728['XaPLa'](data['data']['result'][_0x1ea728['dJPVx']], 0x9)) $['canHelp'] = ![];
            } else {
                console['log']('助力异常：' + JSON['stringify'](data));
            }
        } else {
            $['post'](_0x2bfed4, (_0x89f069, _0x3f7ad6, _0x5ea799) => {
                var _0x1af3f1 = {
                    'WGjsg': _0x1ea728['pPoju'],
                    'rmuzd': 'statusDesc'
                };
                if (_0x1ea728['fnxfp'](_0x1ea728['pAIWv'], 'PIqpA')) {
                    try {
                        if (_0x89f069) {
                            if (_0x1ea728['OhONp'](_0x1ea728['yhNnG'], _0x1ea728['bEGuw'])) {
                                console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                                console['log'](JSON['stringify'](_0x89f069));
                            } else {
                                $['msg']($['name'], '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取', _0x29f3a7['NVhEQ'], {
                                    'open-url': _0x29f3a7['NVhEQ']
                                });
                                return;
                            }
                        } else {
                            if (_0x1ea728['NQPpf'](_0x1ea728['pQEAf'], _0x1ea728['pQEAf'])) {
                                url += '&_stk=' + encodeURIComponent(stk);
                            } else {
                                _0x5ea799 = JSON['parse'](_0x5ea799);
                                if (_0x5ea799 && _0x5ea799['data'] && _0x1ea728['aFJvk'](_0x5ea799['data'][_0x1ea728['Mdkjs']], 0x0)) {
                                    if (_0x1ea728['xWiqk']('acwzP', 'acwzP')) {
                                        if (_0x29f3a7['BMIlC'](type, '1') && functionId === 'reportCcTask') console['log']('京东首页点击“领券”逛10s任务:' + _0x5ea799);
                                    } else {
                                        console['log']('助力结果：' + _0x5ea799['data'][_0x1ea728['pPoju']][_0x1ea728['gknYB']]);
                                        if (_0x1ea728['ogGBe'](_0x5ea799['data'][_0x1ea728['pPoju']]['status'], 0x3)) $['canHelp'] = ![];
                                        if (_0x1ea728['ogGBe'](_0x5ea799[_0x1ea728['muoWP']][_0x1ea728['pPoju']][_0x1ea728['dJPVx']], 0x9)) $['canHelp'] = ![];
                                    }
                                } else {
                                    console['log']('助力异常：' + JSON['stringify'](_0x5ea799));
                                }
                            }
                        }
                    } catch (_0x2e80a0) {
                        $['logErr'](_0x2e80a0, _0x3f7ad6);
                    } finally {
                        _0x1ea728['kNIbI'](_0x395ade);
                    }
                } else {
                    console['log']('\n\n发起助力红包 失败：' + _0x5ea799['data'][_0x1af3f1['WGjsg']][_0x1af3f1['rmuzd']]);
                }
            });
        }
    });
}

function h5receiveRedpacket(_0x58b12a) {
    var _0x1653d2 = {
        'anGzu': function(_0x4a7026) {
            return _0x4a7026();
        },
        'cnNFq': function(_0x55a4ba) {
            return _0x55a4ba();
        },
        'toukA': function(_0x5ae0f1, _0x477ff3) {
            return _0x5ae0f1 === _0x477ff3;
        },
        'zZubm': 'bTbDa',
        'iyizO': 'cShng',
        'GSYRT': function(_0x2a293b, _0x4b1a5a) {
            return _0x2a293b !== _0x4b1a5a;
        },
        'UnYru': 'jogHL',
        'GUBUz': 'LDvvb',
        'vEUkG': function(_0x192b34, _0x187531) {
            return _0x192b34 !== _0x187531;
        },
        'vuEoS': 'YuWol',
        'lRxEN': 'biz_code',
        'pQyzu': function(_0x324e32, _0x59d76c) {
            return _0x324e32 !== _0x59d76c;
        },
        'GhJez': 'result',
        'cHjXR': 'discount',
        'cRMYK': 'CzppR',
        'xLNjq': 'sPGfT',
        'ZLISn': function(_0x5ca755, _0x1672d6) {
            return _0x5ca755(_0x1672d6);
        },
        'wknsN': function(_0x3c8bee, _0x40d2d1) {
            return _0x3c8bee + _0x40d2d1;
        },
        'OFPkB': function(_0x441348, _0x2665ee) {
            return _0x441348 + _0x2665ee;
        },
        'PuleR': function(_0x7b7ca9, _0x5b4e01) {
            return _0x7b7ca9 + _0x5b4e01;
        },
        'tmvEn': '*/*',
        'CFDsL': 'token',
        'dblOu': function(_0x2c382c, _0x150589, _0x3e4a4e) {
            return _0x2c382c(_0x150589, _0x3e4a4e);
        }
    };
    const _0x5bb9f8 = {
        'redPacketId': _0x58b12a
    };
    _0x5bb9f8[_0x1653d2['CFDsL']] = $['md5']($['md5'](_0x1653d2['PuleR']('j' + JSON['stringify'](_0x5bb9f8), 'D')));
    const _0x77ccd8 = _0x1653d2['dblOu'](taskUrl, arguments['callee']['name']['toString'](), _0x5bb9f8);
    return new Promise(_0x5807b0 => {
        var _0x4c3b15 = {
            'zHptg': function(_0x10eb56, _0x3e5b4f) {
                return _0x1653d2['wknsN'](_0x10eb56, _0x3e5b4f);
            },
            'EEVnZ': function(_0x1e2302, _0x1e4449) {
                return _0x1653d2['OFPkB'](_0x1e2302, _0x1e4449);
            },
            'lxcSN': function(_0x2415cd, _0x1cf824) {
                return _0x1653d2['PuleR'](_0x2415cd, _0x1cf824);
            },
            'pxxIs': _0x1653d2['tmvEn'],
            'MBPXe': function(_0x13c397, _0x579d72) {
                return _0x13c397(_0x579d72);
            }
        };
        $['post'](_0x77ccd8, (_0x205eec, _0x2dfe52, _0x5bb9f8) => {
            var _0x36705a = {
                'ryWTL': function(_0x19421e) {
                    return _0x1653d2['anGzu'](_0x19421e);
                },
                'QaPvC': function(_0x346ef2) {
                    return _0x1653d2['cnNFq'](_0x346ef2);
                }
            };
            try {
                if (_0x1653d2['toukA'](_0x1653d2['zZubm'], _0x1653d2['iyizO'])) {
                    let _0x2b5753 = 'https://wq.jd.com/cubeactive/steprewardv3/' + functionId + '?activeId=489177&publishFlag=1&channel=7&' + body + '&sceneval=2&g_login_type=1&timestamp=' + Date['now']() + '&_=' + _0x4c3b15['zHptg'](Date['now'](), 0x2) + '&_ste=1';
                    const _0x399f33 = _0x4c3b15['EEVnZ'](_0x4c3b15['EEVnZ'](Math['random']()['toString'](0x24)['slice'](0x2, 0xa), Math['random']()['toString'](0x24)['slice'](0x2, 0xa)) + Math['random']()['toString'](0x24)['slice'](0x2, 0xa) + Math['random']()['toString'](0x24)['slice'](0x2, 0xa), Math['random']()['toString'](0x24)['slice'](0x2, 0xa));
                    _0x2b5753 += '&phoneid=' + _0x399f33;
                    _0x2b5753 += '&stepreward_jstoken=' + (_0x4c3b15['lxcSN'](_0x4c3b15['lxcSN'](Math['random']()['toString'](0x24)['slice'](0x2, 0xa), Math['random']()['toString'](0x24)['slice'](0x2, 0xa)), Math['random']()['toString'](0x24)['slice'](0x2, 0xa)) + Math['random']()['toString'](0x24)['slice'](0x2, 0xa));
                    if (stk) {
                        _0x2b5753 += '&_stk=' + encodeURIComponent(stk);
                    }
                    return {
                        'url': _0x2b5753,
                        'headers': {
                            'Host': 'wq.jd.com',
                            'Cookie': cookie,
                            'accept': _0x4c3b15['pxxIs'],
                            'user-agent': 'jdpingou;iPhone;4.8.2;14.5.1;' + _0x399f33 + ';network/wifi;model/iPhone13,4;appBuild/100546;ADID/00000000-0000-0000-0000-000000000000;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/318;pap/JA2019_3111789;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
                            'accept-language': 'zh-cn',
                            'referer': 'https://wqactive.jd.com/cube/front/activePublish/step_reward/489177.html?aid=489177'
                        }
                    };
                } else {
                    if (_0x205eec) {
                        if (_0x1653d2['GSYRT'](_0x1653d2['UnYru'], _0x1653d2['GUBUz'])) {
                            console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                            console['log'](JSON['stringify'](_0x205eec));
                        } else {
                            if (_0x5bb9f8) _0x5bb9f8 = JSON['parse'](_0x5bb9f8);
                        }
                    } else {
                        if (_0x1653d2['vEUkG'](_0x1653d2['vuEoS'], _0x1653d2['vuEoS'])) {
                            _0x36705a['ryWTL'](_0x5807b0);
                        } else {
                            _0x5bb9f8 = JSON['parse'](_0x5bb9f8);
                            if (_0x5bb9f8 && _0x5bb9f8['data'] && _0x5bb9f8['data'][_0x1653d2['lRxEN']] === 0x0) {
                                if (_0x1653d2['pQyzu']('asHXN', 'asHXN')) {
                                    _0x36705a['QaPvC'](_0x5807b0);
                                } else {
                                    console['log']('拆红包获得：' + _0x5bb9f8['data'][_0x1653d2['GhJez']][_0x1653d2['cHjXR']] + '元');
                                }
                            } else {
                                console['log']('领红包失败：' + JSON['stringify'](_0x5bb9f8));
                            }
                        }
                    }
                }
            } catch (_0xd9a9b0) {
                $['logErr'](_0xd9a9b0, _0x2dfe52);
            } finally {
                if (_0x1653d2['cRMYK'] === _0x1653d2['xLNjq']) {
                    url = 'https://api.m.jd.com/client.action?functionId=' + functionId + '&body=' + _0x4c3b15['MBPXe'](escape, JSON['stringify'](body)) + '&uuid=8888888&client=apple&clientVersion=9.4.1&st=1617158358007&sign=a15f78e5846f9b0178dcabb1093a6a7f&sv=100';
                } else {
                    _0x1653d2['ZLISn'](_0x5807b0, _0x5bb9f8);
                }
            }
        });
    });
}

function h5launch() {
    var _0x357983 = {
        'agUwU': function(_0x176c62, _0x5c2480) {
            return _0x176c62 === _0x5c2480;
        },
        'EdkcN': 'biz_code',
        'FtzGO': 'data',
        'clIfc': 'result',
        'zONsZ': 'redPacketId',
        'QcZiZ': function(_0x195f47, _0x4e1686) {
            return _0x195f47 !== _0x4e1686;
        },
        'aFfCL': function(_0xd06929, _0x499142) {
            return _0xd06929(_0x499142);
        },
        'IwDyn': 'Loyig',
        'mhfnV': 'iJJZP',
        'ZEOAU': function(_0x596d0f, _0x1c530b, _0x5de503) {
            return _0x596d0f(_0x1c530b, _0x5de503);
        }
    };
    const _0x1f2cc3 = {
        'clientInfo': {},
        'followShop': 0x0,
        'promUserState': ''
    };
    const _0x1dbeb8 = _0x357983['ZEOAU'](taskUrl, arguments['callee']['name']['toString'](), _0x1f2cc3);
    return new Promise(_0x37b4cb => {
        if (_0x357983['IwDyn'] !== _0x357983['mhfnV']) {
            $['post'](_0x1dbeb8, (_0x484059, _0x5b0d72, _0x53d23d) => {
                try {
                    if (_0x484059) {
                        console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                        console['log'](JSON['stringify'](_0x484059));
                    } else {
                        _0x53d23d = JSON['parse'](_0x53d23d);
                        if (_0x53d23d && _0x53d23d['data'] && _0x357983['agUwU'](_0x53d23d['data'][_0x357983['EdkcN']], 0x0)) {
                            if (_0x53d23d[_0x357983['FtzGO']]['result']['redPacketId']) {
                                console['log']('\n\n发起助力红包 成功：红包ID ' + _0x53d23d[_0x357983['FtzGO']][_0x357983['clIfc']][_0x357983['zONsZ']]);
                                $['redPacketId']['push'](_0x53d23d[_0x357983['FtzGO']][_0x357983['clIfc']][_0x357983['zONsZ']]);
                            } else {
                                console['log']('\n\n发起助力红包 失败：' + _0x53d23d[_0x357983['FtzGO']]['result']['statusDesc']);
                            }
                        } else {
                            console['log']('发起助力红包 失败：' + JSON['stringify'](_0x53d23d));
                        }
                    }
                } catch (_0x2c7a81) {
                    if (_0x357983['QcZiZ']('ayYbN', 'UBXsq')) {
                        $['logErr'](_0x2c7a81, _0x5b0d72);
                    } else {
                        console['log']('\n获取任务列表异常：' + JSON['stringify']($['taskHomePageData']) + '\x0a');
                    }
                } finally {
                    _0x357983['aFfCL'](_0x37b4cb, _0x53d23d);
                }
            });
        } else {
            _0x357983['aFfCL'](_0x37b4cb, data);
        }
    });
}

function h5activityIndex() {
    var _0x1880c1 = {
        'paDFH': 'KRrLq',
        'YxcaF': 'result',
        'EEJGO': function(_0x32dfff, _0x2f7c10) {
            return _0x32dfff !== _0x2f7c10;
        },
        'UDTcL': 'FfzaC',
        'VemlY': 'oZJvF',
        'fHCaY': 'data',
        'TsSGF': 'rewards',
        'pfrhc': function(_0x1a77e5, _0xf514e5) {
            return _0x1a77e5 !== _0xf514e5;
        },
        'jeMXJ': 'OzNDv',
        'jxJtg': 'packetSum',
        'NOqfB': 'mJoRi',
        'wemTL': function(_0x11972a, _0xabc9cf) {
            return _0x11972a === _0xabc9cf;
        },
        'DxqAf': 'jqVxJ',
        'TokZu': function(_0x4f0c50) {
            return _0x4f0c50();
        },
        'OonSa': function(_0x47d8ac, _0x5ca460, _0x4fafd5) {
            return _0x47d8ac(_0x5ca460, _0x4fafd5);
        }
    };
    const _0x1d430d = {
        'clientInfo': {},
        'isjdapp': 0x1
    };
    const _0x11fc4b = _0x1880c1['OonSa'](taskUrl, arguments['callee']['name']['toString'](), _0x1d430d);
    return new Promise(_0x40da69 => {
        $['post'](_0x11fc4b, async (_0x3720ec, _0x42a7ea, _0x1988dc) => {
            var _0x31b3cb = {
                'HThfW': function(_0x252732, _0x30b47d) {
                    return _0x252732(_0x30b47d);
                }
            };
            if (_0x1880c1['paDFH'] !== _0x1880c1['paDFH']) {
                if (_0x1988dc['result']['luckyDrawData']['redPacketId']) {
                    console['log']('券后9.9抽奖获得【红包】：' + _0x1988dc['result']['luckyDrawData']['quota'] + '元');
                } else {
                    console['log']('券后9.9抽奖获得【优惠券】：' + _0x1988dc['result']['luckyDrawData']['discount'] + '元：' + _0x1988dc['result']['luckyDrawData']['prizeName'] + '，' + _0x1988dc['result']['luckyDrawData']['quotaDesc']);
                }
            } else {
                try {
                    if (_0x3720ec) {
                        console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                        console['log'](JSON['stringify'](_0x3720ec));
                    } else {
                        _0x1988dc = JSON['parse'](_0x1988dc);
                        $['h5activityIndex'] = _0x1988dc;
                        $['discount'] = 0x0;
                        if ($['h5activityIndex'] && $['h5activityIndex']['data'] && $['h5activityIndex']['data'][_0x1880c1['YxcaF']]) {
                            if (_0x1880c1['EEJGO'](_0x1880c1['UDTcL'], _0x1880c1['VemlY'])) {
                                const _0x1a7aa1 = $['h5activityIndex'][_0x1880c1['fHCaY']][_0x1880c1['YxcaF']][_0x1880c1['TsSGF']] || [];
                                for (let _0x632a46 of _0x1a7aa1) {
                                    if (_0x1880c1['pfrhc'](_0x1880c1['jeMXJ'], _0x1880c1['jeMXJ'])) {
                                        _0x40da69(_0x1988dc);
                                    } else {
                                        $['discount'] += _0x632a46[_0x1880c1['jxJtg']];
                                    }
                                }
                                if ($['discount']) $['discount'] = $['discount']['toFixed'](0x2);
                            } else {
                                $['logErr'](e, _0x42a7ea);
                            }
                        }
                    }
                } catch (_0x4a4a8d) {
                    if (_0x1880c1['NOqfB'] === _0x1880c1['NOqfB']) {
                        $['logErr'](_0x4a4a8d, _0x42a7ea);
                    } else {
                        if (_0x3720ec) {
                            console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                            console['log'](JSON['stringify'](_0x3720ec));
                        } else {
                            _0x1988dc = JSON['parse'](_0x1988dc);
                        }
                    }
                } finally {
                    if (_0x1880c1['wemTL'](_0x1880c1['DxqAf'], _0x1880c1['DxqAf'])) {
                        _0x1880c1['TokZu'](_0x40da69);
                    } else {
                        _0x31b3cb['HThfW'](_0x40da69, _0x1988dc);
                    }
                }
            }
        });
    });
}
async function doAppTask(_0x1702a9 = '1') {
    var _0x4d6f41 = {
        'IXqyt': 'CouponCenter',
        'vJyNy': 'openapp.jdmobile%3a%2f%2fvirtual%3fparams%3d%7b%5c%22category%5c%22%3a%5c%22jump%5c%22%2c%5c%22des%5c%22%3a%5c%22couponCenter%5c%22%7d',
        'yDMsN': function(_0x542680, _0x97188, _0x4d71c3, _0x51cccc) {
            return _0x542680(_0x97188, _0x4d71c3, _0x51cccc);
        },
        'kqqxL': 'getCcTaskList',
        'uLgnS': '727',
        'hRYsy': 'reportCcTask'
    };
    let _0x48d54c = {
        'pageClickKey': _0x4d6f41['IXqyt'],
        'childActivityUrl': _0x4d6f41['vJyNy'],
        'lat': '',
        'globalLat': '',
        'lng': '',
        'globalLng': ''
    };
    await _0x4d6f41['yDMsN'](getCcTaskList, _0x4d6f41['kqqxL'], _0x48d54c, _0x1702a9);
    _0x48d54c = {
        'globalLng': '',
        'globalLat': '',
        'monitorSource': 'ccgroup_ios_index_task',
        'monitorRefer': '',
        'taskType': '1',
        'childActivityUrl': 'openapp.jdmobile%3a%2f%2fvirtual%3fparams%3d%7b%5c%22category%5c%22%3a%5c%22jump%5c%22%2c%5c%22des%5c%22%3a%5c%22couponCenter%5c%22%7d',
        'pageClickKey': _0x4d6f41['IXqyt'],
        'lat': '',
        'taskId': _0x4d6f41['uLgnS'],
        'lng': ''
    };
    await $['wait'](0x2904);
    await _0x4d6f41['yDMsN'](getCcTaskList, _0x4d6f41['hRYsy'], _0x48d54c, _0x1702a9);
}

function getCcTaskList(_0x55c843, _0x592e3b, _0x1b03a6 = '1') {
    var _0x729707 = {
        'xkLrR': function(_0x569945, _0x230c09) {
            return _0x569945(_0x230c09);
        },
        'RSRqo': function(_0x4aff6e, _0x3973d8) {
            return _0x4aff6e === _0x3973d8;
        },
        'nsZSq': 'hkUsW',
        'sbwgr': function(_0x411019, _0x3ca12a) {
            return _0x411019 === _0x3ca12a;
        },
        'yoYTA': 'reportCcTask',
        'DjHDG': function(_0x3340fb, _0x28d534) {
            return _0x3340fb !== _0x28d534;
        },
        'JywmN': 'qngjE',
        'iTaCk': 'getCcTaskList',
        'FRLWy': 'gyAMi',
        'BmbQy': function(_0x3819bb, _0x47831f) {
            return _0x3819bb === _0x47831f;
        },
        'rjIQT': 'APQHR',
        'wHufo': 'gzip, deflate, br',
        'cPFMy': 'zh-cn',
        'eIFKf': 'api.m.jd.com',
        'hvCJT': 'https://h5.m.jd.com',
        'cZkPe': 'https://h5.m.jd.com/babelDiy/Zeus/4ZK4ZpvoSreRB92RRo8bpJAQNoTq/index.html',
        'tQSca': './USER_AGENTS'
    };
    let _0x1dbe90 = '';
    return new Promise(_0x9472e3 => {
        if (_0x729707['sbwgr'](_0x55c843, _0x729707['iTaCk'])) {
            if (_0x729707['FRLWy'] === _0x729707['FRLWy']) {
                _0x1dbe90 = 'https://api.m.jd.com/client.action?functionId=' + _0x55c843 + '&body=' + escape(JSON['stringify'](_0x592e3b)) + '&uuid=8888888&client=apple&clientVersion=9.4.1&st=1617158358007&sign=a15f78e5846f9b0178dcabb1093a6a7f&sv=100';
            } else {
                _0x729707['xkLrR'](_0x9472e3, data);
            }
        } else if (_0x729707['BmbQy'](_0x55c843, 'reportCcTask')) {
            if ('APQHR' !== _0x729707['rjIQT']) {
                console['log']('领取任务：' + data);
                data = JSON['parse'](data);
            } else {
                _0x1dbe90 = 'https://api.m.jd.com/client.action?functionId=' + _0x55c843 + '&body=' + _0x729707['xkLrR'](escape, JSON['stringify'](_0x592e3b)) + '&uuid=8888888&client=apple&clientVersion=9.4.1&st=1617158435079&sign=7eff07437dd817dbfa348c209fd5c129&sv=120';
            }
        }
        const _0x29777f = {
            'url': _0x1dbe90,
            'body': 'body=' + _0x729707['xkLrR'](escape, JSON['stringify'](_0x592e3b)),
            'headers': {
                'Accept': 'application/json, text/plain, */*',
                'Accept-Encoding': _0x729707['wHufo'],
                'Accept-Language': _0x729707['cPFMy'],
                'Connection': 'keep-alive',
                'Content-Length': '63',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Host': _0x729707['eIFKf'],
                'Origin': _0x729707['hvCJT'],
                'Cookie': cookie,
                'Referer': _0x729707['cZkPe'],
                'User-Agent': $['isNode']() ? process['env']['JD_USER_AGENT'] ? process['env']['JD_USER_AGENT'] : require(_0x729707['tQSca'])['USER_AGENT'] : $['getdata']('JDUA') ? $['getdata']('JDUA') : 'jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1'
            }
        };
        $['post'](_0x29777f, async (_0x334c05, _0x2a62bb, _0xbcc588) => {
            try {
                if (_0x334c05) {
                    console['log']('' + JSON['stringify'](_0x334c05));
                    console['log']($['name'] + ' API请求失败，请检查网路重试');
                } else {
                    if (_0xbcc588) {
                        if (_0x729707['RSRqo']('hkUsW', _0x729707['nsZSq'])) {
                            if (_0x1b03a6 === '1' && _0x729707['sbwgr'](_0x55c843, _0x729707['yoYTA'])) console['log']('京东首页点击“领券”逛10s任务:' + _0xbcc588);
                        } else {
                            console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                            console['log'](JSON['stringify'](_0x334c05));
                        }
                    }
                }
            } catch (_0x1fa1ba) {
                $['logErr'](_0x1fa1ba, _0x2a62bb);
            } finally {
                if (_0x729707['DjHDG']('QVwiw', _0x729707['JywmN'])) {
                    _0x9472e3();
                } else {
                    $['logErr'](e, _0x2a62bb);
                }
            }
        });
    });
}

function getAuthorShareCode(_0x20682b = 'http://adguard.ipq.co/jd_red.json') {
    var _0x1016ff = {
        'qiRwi': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88',
        'sXmvu': function(_0x27ac4f, _0x51f49d) {
            return _0x27ac4f * _0x51f49d;
        }
    };
    return new Promise(_0x2811f7 => {
        var _0x922ddf = {
            'dWeqD': 'OaWZz',
            'HBCpT': function(_0x5178f3, _0x313359) {
                return _0x5178f3(_0x313359);
            }
        };
        const _0x4f1226 = {
            'url': _0x20682b + '?' + new Date(),
            'timeout': 0x2710,
            'headers': {
                'User-Agent': _0x1016ff['qiRwi']
            }
        };
        if ($['isNode']() && process['env']['TG_PROXY_HOST'] && process['env']['TG_PROXY_PORT']) {
            const _0x40d23a = require('tunnel');
            const _0x110a64 = {
                'https': _0x40d23a['httpsOverHttp']({
                    'proxy': {
                        'host': process['env']['TG_PROXY_HOST'],
                        'port': _0x1016ff['sXmvu'](process['env']['TG_PROXY_PORT'], 0x1)
                    }
                })
            };
            Object['assign'](_0x4f1226, {
                'agent': _0x110a64
            });
        }
        $['get'](_0x4f1226, async (_0x129c54, _0xdb5e21, _0x5c1114) => {
            try {
                if (_0x922ddf['dWeqD'] !== 'OaWZz') {
                    if (_0x129c54) {
                        console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                        console['log'](JSON['stringify'](_0x129c54));
                    } else {
                        _0x5c1114 = JSON['parse'](_0x5c1114);
                    }
                } else {
                    if (_0x129c54) {} else {
                        if (_0x5c1114) _0x5c1114 = JSON['parse'](_0x5c1114);
                    }
                }
            } catch (_0x5868e3) {} finally {
                _0x922ddf['HBCpT'](_0x2811f7, _0x5c1114);
            }
        });
    });
}

function enrollFriend(_0x5893aa = 'KQSQrUhLbZ96UjqxmNNf4q69ZYAu-H_T6ib4RnThhaE') {
    var _0x29b4a8 = {
        'DnWeT': function(_0x28c1a9) {
            return _0x28c1a9();
        },
        'kKBxs': 'JYVGj',
        'RgQrw': 'yyyyMMdd',
        'XnmQk': function(_0x420137, _0x326a93, _0x3390f0, _0xa71e39) {
            return _0x420137(_0x326a93, _0x3390f0, _0xa71e39);
        },
        'PogUQ': 'EnrollFriend',
        'PubER': 'activeId,channel,joinDate,phoneid,publishFlag,strPin,timestamp'
    };
    return new Promise(_0x543cdb => {
        if (_0x29b4a8['kKBxs'] === _0x29b4a8['kKBxs']) {
            const _0x48b820 = 'strPin=' + _0x5893aa + '&joinDate=' + $['time'](_0x29b4a8['RgQrw']);
            const _0x2afd11 = _0x29b4a8['XnmQk'](taskCubeactiveUrl, _0x29b4a8['PogUQ'], _0x48b820, _0x29b4a8['PubER']);
            $['get'](_0x2afd11, (_0x33804e, _0xbe622c, _0x50c7d0) => {
                _0x29b4a8['DnWeT'](_0x543cdb);
            });
        } else {
            $['logErr'](e);
        }
    });
}

function taskCubeactiveUrl(_0x4c26ff, _0x2639d7 = '', _0x238c9d) {
    var _0x226d6a = {
        'SLLEe': function(_0x1ddd80, _0x4b3d28) {
            return _0x1ddd80 + _0x4b3d28;
        },
        'kbGnu': function(_0x62b1d7, _0x591424) {
            return _0x62b1d7 + _0x591424;
        },
        'MmbHD': function(_0x408c98, _0x3faee5) {
            return _0x408c98 + _0x3faee5;
        },
        'bbEqe': function(_0x34f255, _0x31bfa5) {
            return _0x34f255(_0x31bfa5);
        },
        'vEhxk': 'zh-cn',
        'Hgibe': 'https://wqactive.jd.com/cube/front/activePublish/step_reward/489177.html?aid=489177'
    };
    let _0x442300 = 'https://wq.jd.com/cubeactive/steprewardv3/' + _0x4c26ff + '?activeId=489177&publishFlag=1&channel=7&' + _0x2639d7 + '&sceneval=2&g_login_type=1&timestamp=' + Date['now']() + '&_=' + (Date['now']() + 0x2) + '&_ste=1';
    const _0xfa751f = _0x226d6a['SLLEe'](Math['random']()['toString'](0x24)['slice'](0x2, 0xa), Math['random']()['toString'](0x24)['slice'](0x2, 0xa)) + Math['random']()['toString'](0x24)['slice'](0x2, 0xa) + Math['random']()['toString'](0x24)['slice'](0x2, 0xa) + Math['random']()['toString'](0x24)['slice'](0x2, 0xa);
    _0x442300 += '&phoneid=' + _0xfa751f;
    _0x442300 += '&stepreward_jstoken=' + _0x226d6a['kbGnu'](_0x226d6a['MmbHD'](_0x226d6a['MmbHD'](Math['random']()['toString'](0x24)['slice'](0x2, 0xa), Math['random']()['toString'](0x24)['slice'](0x2, 0xa)), Math['random']()['toString'](0x24)['slice'](0x2, 0xa)), Math['random']()['toString'](0x24)['slice'](0x2, 0xa));
    if (_0x238c9d) {
        _0x442300 += '&_stk=' + _0x226d6a['bbEqe'](encodeURIComponent, _0x238c9d);
    }
    return {
        'url': _0x442300,
        'headers': {
            'Host': 'wq.jd.com',
            'Cookie': cookie,
            'accept': '*/*',
            'user-agent': 'jdpingou;iPhone;4.8.2;14.5.1;' + _0xfa751f + ';network/wifi;model/iPhone13,4;appBuild/100546;ADID/00000000-0000-0000-0000-000000000000;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/318;pap/JA2019_3111789;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
            'accept-language': _0x226d6a['vEhxk'],
            'referer': _0x226d6a['Hgibe']
        }
    };
}

function taskUrl(_0x2f1bb6, _0x46d026) {
    var _0x1faad8 = {
        'DGfLV': 'api.m.jd.com',
        'EvguI': 'gzip, deflate, br',
        'qClll': '*/*',
        'SqFzL': function(_0x293b37, _0x285673) {
            return _0x293b37(_0x285673);
        },
        'UpCOf': './USER_AGENTS',
        'VFnUL': 'JDUA',
        'UCcnU': 'jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
        'YoDgS': 'https://happy.m.jd.com/babelDiy/zjyw/3ugedFa7yA6NhxLN5gw2L3PF9sQC/index.html'
    };
    return {
        'url': JD_API_HOST + '?appid=jd_mp_h5&functionId=' + _0x2f1bb6 + '&loginType=2&client=jd_mp_h5&t=' + new Date()['getTime']() * 0x3e8,
        'body': 'body=' + JSON['stringify'](_0x46d026),
        'headers': {
            'Host': _0x1faad8['DGfLV'],
            'Content-Type': 'application/x-www-form-urlencoded',
            'Origin': 'https://happy.m.jd.com',
            'Accept-Encoding': _0x1faad8['EvguI'],
            'Cookie': cookie,
            'Connection': 'keep-alive',
            'Accept': _0x1faad8['qClll'],
            'User-Agent': $['isNode']() ? process['env']['JD_USER_AGENT'] ? process['env']['JD_USER_AGENT'] : _0x1faad8['SqFzL'](require, _0x1faad8['UpCOf'])['USER_AGENT'] : $['getdata'](_0x1faad8['VFnUL']) ? $['getdata'](_0x1faad8['VFnUL']) : _0x1faad8['UCcnU'],
            'Referer': _0x1faad8['YoDgS'],
            'Content-Length': '36',
            'Accept-Language': 'zh-cn'
        }
    };
};
_0xods = 'jsjiami.com.v6'

function TotalBean() {
  return new Promise(async resolve => {
    const options = {
      url: "https://me-api.jd.com/user_new/info/GetJDUserInfoUnion",
      headers: {
        Host: "me-api.jd.com",
        Accept: "*/*",
        Connection: "keep-alive",
        Cookie: cookie,
        "User-Agent": $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"),
        "Accept-Language": "zh-cn",
        "Referer": "https://home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&",
        "Accept-Encoding": "gzip, deflate, br"
      }
    }
    $.get(options, (err, resp, data) => {
      try {
        if (err) {
          $.logErr(err)
        } else {
          if (data) {
            data = JSON.parse(data);
            if (data['retcode'] === "1001") {
              $.isLogin = false; //cookie过期
              return;
            }
            if (data['retcode'] === "0" && data.data && data.data.hasOwnProperty("userInfo")) {
              $.nickName = data.data.userInfo.baseInfo.nickname;
            }
          } else {
            $.log('京东服务器返回空数据');
          }
        }
      } catch (e) {
        $.logErr(e)
      } finally {
        resolve();
      }
    })
  })
}

function jsonParse(str) {
  if (typeof str == "string") {
    try {
      return JSON.parse(str);
    } catch (e) {
      console.log(e);
      $.msg($.name, '', '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie')
      return [];
    }
  }
}
// prettier-ignore
// md5
!function(n){function t(n,t){var r=(65535&n)+(65535&t);return(n>>16)+(t>>16)+(r>>16)<<16|65535&r}function r(n,t){return n<<t|n>>>32-t}function e(n,e,o,u,c,f){return t(r(t(t(e,n),t(u,f)),c),o)}function o(n,t,r,o,u,c,f){return e(t&r|~t&o,n,t,u,c,f)}function u(n,t,r,o,u,c,f){return e(t&o|r&~o,n,t,u,c,f)}function c(n,t,r,o,u,c,f){return e(t^r^o,n,t,u,c,f)}function f(n,t,r,o,u,c,f){return e(r^(t|~o),n,t,u,c,f)}function i(n,r){n[r>>5]|=128<<r%32,n[14+(r+64>>>9<<4)]=r;var e,i,a,d,h,l=1732584193,g=-271733879,v=-1732584194,m=271733878;for(e=0;e<n.length;e+=16){i=l,a=g,d=v,h=m,g=f(g=f(g=f(g=f(g=c(g=c(g=c(g=c(g=u(g=u(g=u(g=u(g=o(g=o(g=o(g=o(g,v=o(v,m=o(m,l=o(l,g,v,m,n[e],7,-680876936),g,v,n[e+1],12,-389564586),l,g,n[e+2],17,606105819),m,l,n[e+3],22,-1044525330),v=o(v,m=o(m,l=o(l,g,v,m,n[e+4],7,-176418897),g,v,n[e+5],12,1200080426),l,g,n[e+6],17,-1473231341),m,l,n[e+7],22,-45705983),v=o(v,m=o(m,l=o(l,g,v,m,n[e+8],7,1770035416),g,v,n[e+9],12,-1958414417),l,g,n[e+10],17,-42063),m,l,n[e+11],22,-1990404162),v=o(v,m=o(m,l=o(l,g,v,m,n[e+12],7,1804603682),g,v,n[e+13],12,-40341101),l,g,n[e+14],17,-1502002290),m,l,n[e+15],22,1236535329),v=u(v,m=u(m,l=u(l,g,v,m,n[e+1],5,-165796510),g,v,n[e+6],9,-1069501632),l,g,n[e+11],14,643717713),m,l,n[e],20,-373897302),v=u(v,m=u(m,l=u(l,g,v,m,n[e+5],5,-701558691),g,v,n[e+10],9,38016083),l,g,n[e+15],14,-660478335),m,l,n[e+4],20,-405537848),v=u(v,m=u(m,l=u(l,g,v,m,n[e+9],5,568446438),g,v,n[e+14],9,-1019803690),l,g,n[e+3],14,-187363961),m,l,n[e+8],20,1163531501),v=u(v,m=u(m,l=u(l,g,v,m,n[e+13],5,-1444681467),g,v,n[e+2],9,-51403784),l,g,n[e+7],14,1735328473),m,l,n[e+12],20,-1926607734),v=c(v,m=c(m,l=c(l,g,v,m,n[e+5],4,-378558),g,v,n[e+8],11,-2022574463),l,g,n[e+11],16,1839030562),m,l,n[e+14],23,-35309556),v=c(v,m=c(m,l=c(l,g,v,m,n[e+1],4,-1530992060),g,v,n[e+4],11,1272893353),l,g,n[e+7],16,-155497632),m,l,n[e+10],23,-1094730640),v=c(v,m=c(m,l=c(l,g,v,m,n[e+13],4,681279174),g,v,n[e],11,-358537222),l,g,n[e+3],16,-722521979),m,l,n[e+6],23,76029189),v=c(v,m=c(m,l=c(l,g,v,m,n[e+9],4,-640364487),g,v,n[e+12],11,-421815835),l,g,n[e+15],16,530742520),m,l,n[e+2],23,-995338651),v=f(v,m=f(m,l=f(l,g,v,m,n[e],6,-198630844),g,v,n[e+7],10,1126891415),l,g,n[e+14],15,-1416354905),m,l,n[e+5],21,-57434055),v=f(v,m=f(m,l=f(l,g,v,m,n[e+12],6,1700485571),g,v,n[e+3],10,-1894986606),l,g,n[e+10],15,-1051523),m,l,n[e+1],21,-2054922799),v=f(v,m=f(m,l=f(l,g,v,m,n[e+8],6,1873313359),g,v,n[e+15],10,-30611744),l,g,n[e+6],15,-1560198380),m,l,n[e+13],21,1309151649),v=f(v,m=f(m,l=f(l,g,v,m,n[e+4],6,-145523070),g,v,n[e+11],10,-1120210379),l,g,n[e+2],15,718787259),m,l,n[e+9],21,-343485551),l=t(l,i),g=t(g,a),v=t(v,d),m=t(m,h)}return[l,g,v,m]}function a(n){var t,r="",e=32*n.length;for(t=0;t<e;t+=8){r+=String.fromCharCode(n[t>>5]>>>t%32&255)}return r}function d(n){var t,r=[];for(r[(n.length>>2)-1]=void 0,t=0;t<r.length;t+=1){r[t]=0}var e=8*n.length;for(t=0;t<e;t+=8){r[t>>5]|=(255&n.charCodeAt(t/8))<<t%32}return r}function h(n){return a(i(d(n),8*n.length))}function l(n,t){var r,e,o=d(n),u=[],c=[];for(u[15]=c[15]=void 0,o.length>16&&(o=i(o,8*n.length)),r=0;r<16;r+=1){u[r]=909522486^o[r],c[r]=1549556828^o[r]}return e=i(u.concat(d(t)),512+8*t.length),a(i(c.concat(e),640))}function g(n){var t,r,e="";for(r=0;r<n.length;r+=1){t=n.charCodeAt(r),e+="0123456789abcdef".charAt(t>>>4&15)+"0123456789abcdef".charAt(15&t)}return e}function v(n){return unescape(encodeURIComponent(n))}function m(n){return h(v(n))}function p(n){return g(m(n))}function s(n,t){return l(v(n),v(t))}function C(n,t){return g(s(n,t))}function A(n,t,r){return t?r?s(t,n):C(t,n):r?m(n):p(n)}$.md5=A}(this);
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
