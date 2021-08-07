from common import jd_union
from common import zhihu_spider, web_spider
from dao import zh_answer_dao
from dao import zh_goods_dao
from dao import zh_question_dao
from dao import zh_search_dao
from dao import zh_log_dao
from dao import zh_config_dao
from utils import *

new_day_hour = "00"

# 更新知乎问题的阅读量
def update_zhihu_question():
    yestoday_date = get_yestoday_date()  # 昨天的日期
    is_new_day = get_current_hour() == new_day_hour  # 判断今天是不是全新的一天

    success_num = 0

    question_list = zh_question_dao.query_question_list()
    for question in question_list:
        # 更新问题的数据（浏览量、点赞数、新增浏览数）
        title, view_num, answer_num = zhihu_spider.get_view_and_answer_num(question.qid)
        if title is None:
            continue

        # 如果是新的一天，更新问题数据到历史记录，更新问题的截止昨日阅读数和回答数
        if is_new_day:
            zh_question_dao.add_question_history(question.qid, yestoday_date, view_num, answer_num)
            zh_question_dao.update_question_yestoday(question.qid, view_num, answer_num)

        # 更新浏览量、点赞数
        zh_question_dao.update_question(question.qid, title, view_num, answer_num)

        success_num += 1

    zh_log_dao.add_log(1, "sync_question", "success_question_num:{}".format(success_num))


# 更新知乎回答的排名和点赞数
def update_zhihu_answer():
    yestoday_date = get_yestoday_date()  # 昨天的日期
    is_new_day = get_current_hour() == new_day_hour  # 判断今天是不是全新的一天

    success_num = 0

    answer_list = zh_answer_dao.query_answer_list()
    for answer in answer_list:
        # 爬取知乎问题的答案排名
        rank, like = zhihu_spider.get_rank_and_like(answer.qid, answer.aid)

        # 如果是新的一天，更新回答数据到历史记录，更新回答昨日点赞数和排名
        if is_new_day:
            zh_answer_dao.add_answer_history(answer.qid, answer.aid, yestoday_date, like, rank)
            zh_answer_dao.update_answer_yestoday(answer.aid, like, rank)

        # 更新点赞数、排名
        zh_answer_dao.update_answer(answer.aid, like, rank)

        success_num += 1

    zh_log_dao.add_log(1, "sync_answer", "success_answer_num:{}".format(success_num))


def update_qa(qid, aid):
    # 更新问题的数据（浏览量、点赞数、新增浏览数）
    title, view_num, answer_num = zhihu_spider.get_view_and_answer_num(qid)

    # 更新浏览量、点赞数
    zh_question_dao.update_question(qid, title, view_num, answer_num)

    # 爬取知乎问题的答案排名
    rank, like = zhihu_spider.get_rank_and_like(qid, aid)

    # 更新点赞数、排名
    zh_answer_dao.update_answer(aid, like, rank)


# 更新 JD 商品数据
def update_jd_goods(sku_ids):
    if sku_ids is not None:
        goods_name, price, fee_rate, fee, jd_sale, order_num, cid1, cid1_name, cid2, cid2_name, cid3, cid3_name = jd_union.get_sku_info_single(
            sku_ids)
        if goods_name is not None:
            zh_goods_dao.update_goods(sku_ids, '无效商品', 0, 0, 0, 0, 0, 0, '', 0, '', 0, '')
        else:
            zh_goods_dao.update_goods(sku_ids, goods_name, price, fee_rate, fee, jd_sale, order_num, cid1,
                                      cid1_name, cid2, cid2_name, cid3, cid3_name)
        return

    success_num = 0

    goods_list = zh_goods_dao.query_goods_list()
    for goods in goods_list:
        goods_name, price, fee_rate, fee, jd_sale, order_num, cid1, cid1_name, cid2, cid2_name, cid3, cid3_name = jd_union.get_sku_info_single(goods.sku_id)

        if goods_name is None:
            zh_goods_dao.update_goods(goods.sku_id, '无效商品', 0, 0, 0, 0, 0, 0, '', 0, '', 0, '')
        else:
            zh_goods_dao.update_goods(goods.sku_id, goods_name, price, fee_rate, fee, jd_sale, order_num, cid1,
                                      cid1_name, cid2, cid2_name, cid3, cid3_name)

        success_num += 1

    zh_log_dao.add_log(1, "sync_goods", "success_goods_num:{}".format(success_num))


# 查询知乎文章排名
def query_article_rank(user_id):
    top = "【排名统计】"
    mid = ""
    end = ""

    article_list = zh_search_dao.query_search_list(user_id)
    for article in article_list:
        mid = str(article.update_time)
        end = end + "\n[" + str(article.rank) + "] " + article.keyword
        if article.remark is not None and article.remark != "":
            end = end + "(" + article.remark + ")"

    return top + mid + end


# 查询知乎今日佣金
def query_zhihu_earnings():
    today = datetime.datetime.now().strftime('%Y-%m-%d')

    top1 = "[知乎-1] "
    mid1 = "订单量："
    end1 = " 佣金："

    count1, sum1 = zhihu_spider.get_zhihu_earnings(today, today, zh_config_dao.query_config('dxck').value)

    top2 = "[知乎-2] "
    mid2 = "订单量："
    end2 = " 佣金："

    count2, sum2 = zhihu_spider.get_zhihu_earnings(today, today, zh_config_dao.query_config('lsck').value)

    return top1 + mid1 + str(count1) + end1 + str(sum1/100), sum1/100, top2 + mid2 + str(count2) + end2 + str(sum2/100), sum2/100


# 查询京粉今日佣金
def query_jingfen_earnings():
    today = datetime.datetime.now().strftime('%Y-%m-%d')

    top1 = "[京粉-1] "
    mid1 = "订单量："
    end1 = " 佣金："

    count1, sum1 = zhihu_spider.get_jingfen_earnings(today, today, zh_config_dao.query_config('jfck').value)

    return top1 + mid1 + str(count1) + end1 + str(sum1), sum1


# 查询知+今日消耗
def query_zhijia_pay():
    top = "[知+消耗] "

    today = datetime.datetime.now().strftime('%Y-%m-%d')
    pay = zhihu_spider.get_zhijia_pay(today, today, zh_config_dao.query_config('zjck').value)

    return top + str(pay/100), pay/100

# 查询今日总收入
def query_today_earnings():
    zhihu_earnings1, num1, zhihu_earnings2, num2 = query_zhihu_earnings()
    jingfen_earnings, num3 = query_jingfen_earnings()
    zhijia_pay, num4 = query_zhijia_pay()

    total = int(num1 + num2 + num3 - num4)

    return '总计：' + str(total) + "\n\n" + zhihu_earnings1 + "\n" + zhihu_earnings2 + "\n" + jingfen_earnings + "\n" + zhijia_pay

# 查询今日阅读和点赞
def query_today_data():
    return zhihu_spider.get_zhihu_card_data(zh_config_dao.query_config('dxck').value)

# 查询文章点赞数
def get_zhihu_like():
    return web_spider.get_zhihu_like('https://zhuanlan.zhihu.com/p/354168117') + '\n' + web_spider.get_zhihu_like('https://zhuanlan.zhihu.com/p/367100764') + '\n' + web_spider.get_zhihu_like('https://zhuanlan.zhihu.com/p/356450592')


if __name__ == '__main__':
    print(get_zhihu_like())
