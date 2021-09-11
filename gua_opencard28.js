/*
9.11~9.13 母婴有机日 好物超值购 [gua_opencard28.js]
新增开卡脚本 (脚本已加密
一次性脚本

邀请一人20豆 被邀请也有10豆(有可能没有豆
开1组卡 抽奖可能获得20京豆(有可能有抽到空气💨
关注10京豆 (有可能是空气💨
加购10京豆 (有可能是空气💨 默认不加购 如需加购请设置环境变量[guaopencard_addSku28]为"true"

第一个账号助力作者 其他依次助力CK1
第一个CK失效会退出脚本

邀请上限5人
ck1满5人自动换ck2...

默认脚本不执行
如需执行脚本请设置环境变量
guaopencard28="true"

All变量适用
————————————————
入口：[ 9.11~9.13 母婴有机日 好物超值购 (https://lzdz1-isv.isvjcloud.com/dingzhi/dz/openCard/activity?activityId=e7fe51d43cd845cd85f8be756192c74c&shareUuid=d9a73da5bfb2476f917b004fc0ce833c)]

请求太频繁会被黑ip
过10分钟再执行

============Quantumultx===============
[task_local]
#9.11~9.13 母婴有机日 好物超值购
47 1,20 11-13 9 * https://raw.githubusercontent.com/smiek2221/scripts/master/gua_opencard28.js, tag=9.11~9.13 母婴有机日 好物超值购, enabled=true

================Loon==============
[Script]
cron "47 1,20 11-13 9 *" script-path=https://raw.githubusercontent.com/smiek2221/scripts/master/gua_opencard28.js,tag=9.11~9.13 母婴有机日 好物超值购

===============Surge=================
9.11~9.13 母婴有机日 好物超值购 = type=cron,cronexp="47 1,20 11-13 9 *",wake-system=1,timeout=3600,script-path=https://raw.githubusercontent.com/smiek2221/scripts/master/gua_opencard28.js

============小火箭=========
9.11~9.13 母婴有机日 好物超值购 = type=cron,script-path=https://raw.githubusercontent.com/smiek2221/scripts/master/gua_opencard28.js, cronexpr="47 1,20 11-13 9 *", timeout=3600, enable=true
*/
let guaopencard_addSku = "false"
let guaopencard = "false"

const $ = new Env('9.11~9.13 母婴有机日 好物超值购');
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const notify = $.isNode() ? require('./sendNotify') : '';

/*
 *Progcessed By JSDec in 13.83s
 *JSDec - JSDec.js.org
 */
let cookiesArr = [],
    cookie = '';
let activityCookie = '';
let lz_jdpin_token = '';
if ($['isNode']()) {
    Object['keys'](jdCookieNode)['forEach'](_0x4a640f => {
        cookiesArr['push'](jdCookieNode[_0x4a640f]);
    });
    if (process['env']['JD_DEBUG'] && process['env']['JD_DEBUG'] === 'false') console['log'] = () => {};
} else {
    cookiesArr = [$['getdata']('CookieJD'), $['getdata']('CookieJD2'), ...jsonParse($['getdata']('CookiesJD') || '[]')['map'](_0x4e4a5e => _0x4e4a5e['cookie'])]['filter'](_0x4b03a3 => !!_0x4b03a3);
}
guaopencard_addSku = $['isNode']() ? process['env']['guaopencard_addSku28'] ? process['env']['guaopencard_addSku28'] : '' + guaopencard_addSku : $['getdata']('guaopencard_addSku28') ? $['getdata']('guaopencard_addSku28') : '' + guaopencard_addSku;
guaopencard_addSku = $['isNode']() ? process['env']['guaopencard_addSku_All'] ? process['env']['guaopencard_addSku_All'] : '' + guaopencard_addSku : $['getdata']('guaopencard_addSku_All') ? $['getdata']('guaopencard_addSku_All') : '' + guaopencard_addSku;
guaopencard = $['isNode']() ? process['env']['guaopencard28'] ? process['env']['guaopencard28'] : '' + guaopencard : $['getdata']('guaopencard28') ? $['getdata']('guaopencard28') : '' + guaopencard;
guaopencard = $['isNode']() ? process['env']['guaopencard_All'] ? process['env']['guaopencard_All'] : '' + guaopencard : $['getdata']('guaopencard_All') ? $['getdata']('guaopencard_All') : '' + guaopencard;
message = '';
$['outFlag'] = ![];
!(async () => {
    var _0x3db725 = {
        'qEVgf': '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie',
        'joTFw': function(_0x2befb6) {
            return _0x2befb6();
        },
        'BETAD': function(_0x3878d2, _0x3e8c2d) {
            return _0x3878d2 === _0x3e8c2d;
        },
        'wqEUQ': 'ioLZe',
        'eTeAf': '【提示】请先获取cookie\n直接使用NobyDa的京东签到获取',
        'NwrDW': 'https://bean.m.jd.com/',
        'iWosI': function(_0x5b4168, _0x379d22) {
            return _0x5b4168 != _0x379d22;
        },
        'qpbKa': function(_0x5b1171, _0xe2a4fb) {
            return _0x5b1171 + _0xe2a4fb;
        },
        'ORxCO': 'true',
        'IdrtH': function(_0x4bea65, _0xd70777) {
            return _0x4bea65 !== _0xd70777;
        },
        'qqGGh': 'ZXLpZ',
        'BccRo': '如需执行脚本请设置环境变量[guaopencard28]为"true"',
        'rrSCz': 'alUvc',
        'HbIUA': 'dda05844d9ed445d9a56bb1931419c76',
        'pDlMe': 'e7fe51d43cd845cd85f8be756192c74c',
        'tsowU': function(_0x20cd22, _0x5e25e0) {
            return _0x20cd22 < _0x5e25e0;
        },
        'biLdN': function(_0x172a73, _0x3c09be) {
            return _0x172a73(_0x3c09be);
        },
        'MDjHM': function(_0x1df6e4, _0x4839c1) {
            return _0x1df6e4 + _0x4839c1;
        },
        'MtFtR': function(_0x52faae) {
            return _0x52faae();
        },
        'UCAVc': function(_0xdd3ebf, _0x3a63bd) {
            return _0xdd3ebf == _0x3a63bd;
        },
        'xKyai': '此ip已被限制，请过10分钟后再执行脚本'
    };
    if (!cookiesArr[0x0]) {
        if (_0x3db725['BETAD'](_0x3db725['wqEUQ'], _0x3db725['wqEUQ'])) {
            $['msg']($['name'], _0x3db725['eTeAf'], _0x3db725['NwrDW'], {
                'open-url': _0x3db725['NwrDW']
            });
            return;
        } else {
            console['log'](e);
            $['msg']($['name'], '', _0x3db725['qEVgf']);
            return [];
        }
    }
    if ($['isNode']()) {
        if (_0x3db725['iWosI'](_0x3db725['qpbKa'](guaopencard, ''), _0x3db725['ORxCO'])) {
            if (_0x3db725['IdrtH'](_0x3db725['qqGGh'], _0x3db725['qqGGh'])) {
                _0x3db725['joTFw'](resolve);
            } else {
                console['log'](_0x3db725['BccRo']);
            }
        }
        if (_0x3db725['iWosI'](_0x3db725['qpbKa'](guaopencard, ''), _0x3db725['ORxCO'])) {
            if (_0x3db725['IdrtH'](_0x3db725['rrSCz'], _0x3db725['rrSCz'])) {
                console['log'](data);
            } else {
                return;
            }
        }
    }
    $['shareUuidArr'] = [];
    $['shareUuid'] = _0x3db725['HbIUA'];
    $['activityId'] = _0x3db725['pDlMe'];
    console['log']('入口:\nhttps://lzdz1-isv.isvjcloud.com/dingzhi/dz/openCard/activity?activityId=' + $['activityId'] + '&shareUuid=' + $['shareUuid']);
    for (let _0x52bd17 = 0x0; _0x3db725['tsowU'](_0x52bd17, cookiesArr['length']); _0x52bd17++) {
        cookie = cookiesArr[_0x52bd17];
        if (cookie) {
            $['UserName'] = _0x3db725['biLdN'](decodeURIComponent, cookie['match'](/pt_pin=([^; ]+)(?=;?)/) && cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
            $['index'] = _0x3db725['MDjHM'](_0x52bd17, 0x1);
            await _0x3db725['joTFw'](getUA);
            console['log']('\n\n******开始【京东账号' + $['index'] + '】' + $['UserName'] + '*********\n');
            await _0x3db725['MtFtR'](run);
            if (_0x3db725['UCAVc'](_0x52bd17, 0x0) && !$['actorUuid']) break;
            if ($['outFlag']) break;
        }
    }
    if ($['outFlag']) {
        let _0x5c809d = _0x3db725['xKyai'];
        $['msg']($['name'], '', '' + _0x5c809d);
        if ($['isNode']()) await notify['sendNotify']('' + $['name'], '' + _0x5c809d);
    }
})()['catch'](_0xb4aac2 => $['logErr'](_0xb4aac2))['finally'](() => $['done']());
async function run() {
    var _0x2f3c72 = {
        'gObjb': function(_0x14031d, _0x2ab332) {
            return _0x14031d != _0x2ab332;
        },
        'DKGqW': 'object',
        'TQKEY': function(_0x53d6c0, _0x4af495) {
            return _0x53d6c0 > _0x4af495;
        },
        'wuVrA': 'LZ_TOKEN_KEY=',
        'ZmTQQ': function(_0x5300a8, _0x5c8ce6) {
            return _0x5300a8 + _0x5c8ce6;
        },
        'ssblM': 'LZ_TOKEN_VALUE=',
        'TvPva': function(_0xb83858) {
            return _0xb83858();
        },
        'GQTov': function(_0x31df43, _0x29352d) {
            return _0x31df43 == _0x29352d;
        },
        'AWdvW': function(_0x272794, _0x50e2c6) {
            return _0x272794 !== _0x50e2c6;
        },
        'RZbax': 'sQmYy',
        'QQhrr': function(_0x4e3990, _0x405543) {
            return _0x4e3990 !== _0x405543;
        },
        'FQwVw': 'oZqbF',
        'lQYEP': 'BqZeN',
        'iVMUG': '此ip已被限制，请过10分钟后再执行脚本\n',
        'fLRxm': '获取[token]失败！',
        'OGmZM': function(_0x18c3f6, _0x12dd93) {
            return _0x18c3f6 === _0x12dd93;
        },
        'Phskf': 'undefined',
        'adwHj': function(_0x167935, _0x5ada88) {
            return _0x167935 == _0x5ada88;
        },
        'OSnUn': '获取活动信息失败！',
        'pElYp': function(_0x51d1c5) {
            return _0x51d1c5();
        },
        'ccEAE': 'https://img10.360buyimg.com/imgzone/jfs/t1/7020/27/13511/6142/5c5138d8E4df2e764/5a1216a3a5043c5d.png',
        'YfyJK': function(_0x585d90) {
            return _0x585d90();
        },
        'SHtpN': '获取不到[actorUuid]退出执行，请重新执行',
        'OjilB': function(_0x1ce48b) {
            return _0x1ce48b();
        },
        'TfPXA': function(_0x47db8b, _0x482541) {
            return _0x47db8b !== _0x482541;
        },
        'eASKf': 'yAkMk',
        'JVLSK': 'GczLW',
        'sRQQH': '0|3|4|1|5|2',
        'qgcga': function(_0x2ea8c5, _0x27d247) {
            return _0x2ea8c5(_0x27d247);
        },
        'WPPHQ': function(_0x4877b1) {
            return _0x4877b1();
        },
        'egsOl': function(_0x4a2330, _0x387378, _0x5a2d2a) {
            return _0x4a2330(_0x387378, _0x5a2d2a);
        },
        'mNzKC': function(_0x46d624, _0x52a72f) {
            return _0x46d624 + _0x52a72f;
        },
        'DOepo': function(_0x114d80, _0x43c482) {
            return _0x114d80 * _0x43c482;
        },
        'cWwcu': function(_0x41c58f, _0x23b8e6) {
            return _0x41c58f == _0x23b8e6;
        },
        'ddnmN': '1|2|5|0|4|3',
        'OTCCl': function(_0x448cce, _0x4aefa2) {
            return _0x448cce(_0x4aefa2);
        },
        'MbLnv': function(_0x5158e3, _0x26a288, _0xcb777) {
            return _0x5158e3(_0x26a288, _0xcb777);
        },
        'cUsbF': function(_0x25c7c3, _0x15550b) {
            return _0x25c7c3 + _0x15550b;
        },
        'CXzar': function(_0x5b4383, _0x40a8d6) {
            return _0x5b4383 * _0x40a8d6;
        },
        'HjncY': function(_0x1e3106, _0x2a3886) {
            return _0x1e3106 == _0x2a3886;
        },
        'oLDpQ': function(_0x17624b, _0x49bf90) {
            return _0x17624b(_0x49bf90);
        },
        'tswCp': function(_0x24d829, _0x2c2d57) {
            return _0x24d829 == _0x2c2d57;
        },
        'quXvw': function(_0x552115, _0x40c8b3) {
            return _0x552115 + _0x40c8b3;
        },
        'YFLlf': '关注: ',
        'gfCEx': function(_0x52118d, _0x501f9f) {
            return _0x52118d * _0x501f9f;
        },
        'xgRwe': function(_0x165d45, _0x2afb12) {
            return _0x165d45 + _0x2afb12;
        },
        'xJTsc': '加购: ',
        'TZLQe': function(_0x289fad, _0x39e4a1) {
            return _0x289fad + _0x39e4a1;
        },
        'SZTPy': 'true',
        'UdGrs': '如需加购请设置环境变量[guaopencard_addSku28]为"true"',
        'FCDFW': function(_0x42cc19) {
            return _0x42cc19();
        },
        'XOkcs': function(_0x4cce36, _0x22dae3) {
            return _0x4cce36 == _0x22dae3;
        },
        'fvoxB': function(_0x14e563, _0x45e1f6, _0x1bd3f7) {
            return _0x14e563(_0x45e1f6, _0x1bd3f7);
        },
        'nNuue': function(_0x532e8b, _0x3b7e84) {
            return _0x532e8b + _0x3b7e84;
        },
        'rEgMT': '当前助力:',
        'WWhUn': 'Dlhej',
        'boEWT': 'LJMfB',
        'cocyG': function(_0x1294d4, _0x4e1854) {
            return _0x1294d4 === _0x4e1854;
        },
        'vNaFX': '账号1获取不到[shareUuid]退出执行，请重新执行',
        'CUTmQ': function(_0x1ff142, _0x48b0e0) {
            return _0x1ff142 !== _0x48b0e0;
        },
        'QVxfn': function(_0x4f344c, _0x2751de) {
            return _0x4f344c === _0x2751de;
        },
        'UMKcg': 'dda05844d9ed445d9a56bb1931419c76',
        'uRnMc': function(_0x48165d, _0x280913) {
            return _0x48165d + _0x280913;
        },
        'iDiRg': function(_0x79bc32, _0x207528) {
            return _0x79bc32 * _0x207528;
        },
        'YcEgH': function(_0x50d1cf, _0x1b9ff1, _0x5b10b) {
            return _0x50d1cf(_0x1b9ff1, _0x5b10b);
        },
        'hydym': function(_0x3428f5, _0x377fa6) {
            return _0x3428f5 * _0x377fa6;
        }
    };
    try {
        lz_jdpin_token = '';
        $['Token'] = '';
        $['Pin'] = '';
        await _0x2f3c72['TvPva'](getCk);
        if (_0x2f3c72['GQTov'](activityCookie, '')) {
            if (_0x2f3c72['AWdvW'](_0x2f3c72['RZbax'], _0x2f3c72['RZbax'])) {
                console['log'](data);
            } else {
                console['log']('获取cookie失败');
                return;
            }
        }
        if ($['outFlag']) {
            if (_0x2f3c72['QQhrr'](_0x2f3c72['FQwVw'], _0x2f3c72['lQYEP'])) {
                console['log'](_0x2f3c72['iVMUG']);
                return;
            } else {
                if (_0x2f3c72['gObjb'](typeof setcookies, _0x2f3c72['DKGqW'])) {
                    setcookie = setcookies['split'](',');
                } else setcookie = setcookies;
                for (let _0x2ad118 of setcookie) {
                    let _0x296650 = _0x2ad118['split'](';')[0x0]['trim']();
                    if (_0x296650['split']('=')[0x1]) {
                        if (_0x2f3c72['TQKEY'](_0x296650['indexOf'](_0x2f3c72['wuVrA']), -0x1)) LZ_TOKEN_KEY = _0x2f3c72['ZmTQQ'](_0x296650['replace'](/ /g, ''), ';');
                        if (_0x2f3c72['TQKEY'](_0x296650['indexOf'](_0x2f3c72['ssblM']), -0x1)) LZ_TOKEN_VALUE = _0x2f3c72['ZmTQQ'](_0x296650['replace'](/ /g, ''), ';');
                    }
                }
            }
        }
        await _0x2f3c72['TvPva'](getToken);
        if (_0x2f3c72['GQTov']($['Token'], '')) {
            console['log'](_0x2f3c72['fLRxm']);
            return;
        }
        await _0x2f3c72['TvPva'](getSimpleActInfoVo);
        $['nickname'] = '';
        await _0x2f3c72['TvPva'](getMyPing);
        if (_0x2f3c72['OGmZM']($['Pin'], '') || _0x2f3c72['GQTov'](typeof $['shopId'], _0x2f3c72['Phskf']) || _0x2f3c72['adwHj'](typeof $['venderId'], _0x2f3c72['Phskf'])) {
            $['log'](_0x2f3c72['OSnUn']);
            return;
        }
        await _0x2f3c72['pElYp'](accessLogWithAD);
        $['attrTouXiang'] = _0x2f3c72['ccEAE'];
        await _0x2f3c72['pElYp'](getUserInfo);
        $['actorUuid'] = '';
        await _0x2f3c72['YfyJK'](getActorUuid);
        if (!$['actorUuid']) {
            console['log'](_0x2f3c72['SHtpN']);
            return;
        }
        await _0x2f3c72['YfyJK'](drawContent);
        await $['wait'](0x3e8);
        let _0x241379 = await _0x2f3c72['OjilB'](checkOpenCard);
        $['allOpenCard'] = _0x241379['allOpenCard'] ? !![] : ![];
        if (_0x241379 && !_0x241379['allOpenCard'] && !$['outFlag']) {
            if (_0x2f3c72['TfPXA'](_0x2f3c72['eASKf'], _0x2f3c72['JVLSK'])) {
                let _0x449973 = !![];
                for (let _0x4aa9b6 of _0x241379['cardList1'] && _0x241379['cardList1'] || []) {
                    if (_0x2f3c72['adwHj'](_0x4aa9b6['status'], 0x0)) {
                        var _0x4258cf = _0x2f3c72['sRQQH']['split']('|'),
                            _0x3d9acb = 0x0;
                        while (!![]) {
                            switch (_0x4258cf[_0x3d9acb++]) {
                                case '0':
                                    if (_0x449973) console['log']('组1');
                                    continue;
                                case '1':
                                    await _0x2f3c72['qgcga'](join, _0x4aa9b6['value']);
                                    continue;
                                case '2':
                                    await _0x2f3c72['WPPHQ'](drawContent);
                                    continue;
                                case '3':
                                    if (_0x449973) _0x449973 = ![];
                                    continue;
                                case '4':
                                    console['log'](_0x4aa9b6['name']);
                                    continue;
                                case '5':
                                    await $['wait'](_0x2f3c72['egsOl'](parseInt, _0x2f3c72['mNzKC'](_0x2f3c72['DOepo'](Math['random'](), 0x3e8), 0x1388), 0xa));
                                    continue;
                            }
                            break;
                        }
                    }
                }
                _0x449973 = !![];
                for (let _0x5d6db8 of _0x241379['cardList2'] && _0x241379['cardList2'] || []) {
                    if (_0x2f3c72['cWwcu'](_0x5d6db8['status'], 0x0)) {
                        var _0x2307e4 = _0x2f3c72['ddnmN']['split']('|'),
                            _0x290e78 = 0x0;
                        while (!![]) {
                            switch (_0x2307e4[_0x290e78++]) {
                                case '0':
                                    await _0x2f3c72['OTCCl'](join, _0x5d6db8['value']);
                                    continue;
                                case '1':
                                    if (_0x449973) console['log']('组2');
                                    continue;
                                case '2':
                                    if (_0x449973) _0x449973 = ![];
                                    continue;
                                case '3':
                                    await _0x2f3c72['WPPHQ'](drawContent);
                                    continue;
                                case '4':
                                    await $['wait'](_0x2f3c72['MbLnv'](parseInt, _0x2f3c72['cUsbF'](_0x2f3c72['CXzar'](Math['random'](), 0x3e8), 0x1388), 0xa));
                                    continue;
                                case '5':
                                    console['log'](_0x5d6db8['name']);
                                    continue;
                            }
                            break;
                        }
                    }
                }
                await $['wait'](0x3e8);
                await _0x2f3c72['WPPHQ'](drawContent);
                _0x241379 = await _0x2f3c72['WPPHQ'](checkOpenCard);
                await $['wait'](0x3e8);
            } else {
                console['log'](data);
            }
        }
        if (_0x241379 && _0x2f3c72['HjncY'](_0x241379['score1'], 0x1) && !$['outFlag']) await _0x2f3c72['oLDpQ'](startDraw, 0x1);
        if (_0x241379 && _0x2f3c72['tswCp'](_0x241379['score2'], 0x1) && !$['outFlag']) await _0x2f3c72['oLDpQ'](startDraw, 0x2);
        $['log'](_0x2f3c72['quXvw'](_0x2f3c72['YFLlf'], $['followShop']));
        if (!$['followShop'] && !$['outFlag']) await _0x2f3c72['WPPHQ'](followShop);
        if (!$['followShop'] && !$['outFlag']) await $['wait'](_0x2f3c72['MbLnv'](parseInt, _0x2f3c72['quXvw'](_0x2f3c72['gfCEx'](Math['random'](), 0x3e8), 0x1388), 0xa));
        $['log'](_0x2f3c72['xgRwe'](_0x2f3c72['xJTsc'], $['addSku']));
        if (!$['addSku'] && _0x2f3c72['gObjb'](_0x2f3c72['TZLQe'](guaopencard_addSku, ''), _0x2f3c72['SZTPy'])) console['log'](_0x2f3c72['UdGrs']);
        if (!$['addSku'] && _0x2f3c72['tswCp'](guaopencard_addSku, _0x2f3c72['SZTPy']) && !$['outFlag']) await _0x2f3c72['FCDFW'](addSku);
        if (!$['addSku'] && _0x2f3c72['XOkcs'](guaopencard_addSku, _0x2f3c72['SZTPy']) && !$['outFlag']) await $['wait'](_0x2f3c72['fvoxB'](parseInt, _0x2f3c72['TZLQe'](_0x2f3c72['gfCEx'](Math['random'](), 0x3e8), 0x1388), 0xa));
        await _0x2f3c72['FCDFW'](getDrawRecordHasCoupon);
        await $['wait'](0x3e8);
        $['ShareCount'] = 0x0;
        await _0x2f3c72['FCDFW'](getShareRecord);
        $['log']($['actorUuid']);
        $['log'](_0x2f3c72['nNuue'](_0x2f3c72['rEgMT'], $['shareUuid']));
        if ($['actorUuid']) {
            if (_0x2f3c72['TfPXA'](_0x2f3c72['WWhUn'], _0x2f3c72['boEWT'])) {
                $['shareUuidArr']['push']({
                    'shareUuid': $['actorUuid'],
                    'count': $['ShareCount'],
                    'index': $['index']
                });
            } else {
                if (_0x2f3c72['TQKEY'](name['indexOf'](_0x2f3c72['wuVrA']), -0x1)) LZ_TOKEN_KEY = _0x2f3c72['ZmTQQ'](name['replace'](/ /g, ''), ';');
                if (_0x2f3c72['TQKEY'](name['indexOf'](_0x2f3c72['ssblM']), -0x1)) LZ_TOKEN_VALUE = _0x2f3c72['ZmTQQ'](name['replace'](/ /g, ''), ';');
            }
        } else if (_0x2f3c72['cocyG']($['index'], 0x1)) {
            console['log'](_0x2f3c72['vNaFX']);
            return;
        }
        if ((!$['followShop'] || !$['allOpenCard']) && _0x2f3c72['CUTmQ']($['index'], 0x1)) _0x2f3c72['fvoxB'](updateShareUuid, $['shareUuid'], 0x1);
        if (_0x2f3c72['QVxfn']($['index'], 0x1) || _0x2f3c72['XOkcs']($['shareUuid'], _0x2f3c72['UMKcg'])) _0x2f3c72['fvoxB'](updateShareUuid, $['shareUuid'], 0x0);
        await $['wait'](_0x2f3c72['fvoxB'](parseInt, _0x2f3c72['uRnMc'](_0x2f3c72['iDiRg'](Math['random'](), 0x3e8), 0x1388), 0xa));
        if (!$['followShop']) await $['wait'](_0x2f3c72['YcEgH'](parseInt, _0x2f3c72['uRnMc'](_0x2f3c72['hydym'](Math['random'](), 0x3e8), 0x2710), 0xa));
    } catch (_0x87a679) {
        console['log'](_0x87a679);
    }
}

function updateShareUuid(_0x3e86c4, _0x5d9806) {
    var _0x3cc47b = {
        'UXTjA': function(_0x40eeae) {
            return _0x40eeae();
        },
        'PSqWF': function(_0x4bfc26, _0x4e115b) {
            return _0x4bfc26 == _0x4e115b;
        },
        'anjsn': function(_0x931de9, _0x2c1699) {
            return _0x931de9 == _0x2c1699;
        },
        'ELOPc': function(_0x442441, _0x3e7ae6) {
            return _0x442441 >= _0x3e7ae6;
        },
        'wEARn': function(_0x144b38, _0x3b9977) {
            return _0x144b38 == _0x3b9977;
        },
        'mDVfO': function(_0x46c92e, _0x2a2d02) {
            return _0x46c92e < _0x2a2d02;
        },
        'wgQkD': function(_0x2d9965, _0x20c580) {
            return _0x2d9965 !== _0x20c580;
        },
        'pNNPm': 'mjCTa',
        'SNbiU': 'ZVHwe'
    };
    let _0x2c4854 = 0x0;
    for (let _0x391fd1 in $['shareUuidArr']) {
        if ($['shareUuidArr'][_0x391fd1] && _0x3cc47b['PSqWF']($['shareUuidArr'][_0x391fd1]['shareUuid'], _0x3e86c4)) {
            _0x2c4854 = _0x391fd1;
            break;
        }
    }
    if (_0x3cc47b['anjsn'](_0x5d9806, 0x1)) $['shareUuidArr'][_0x2c4854]['count']++;
    if (_0x3cc47b['ELOPc']($['shareUuidArr'][_0x2c4854]['count'], 0x5) || _0x3cc47b['wEARn'](_0x5d9806, 0x0)) {
        console['log']('助力码[' + $['shareUuidArr'][_0x2c4854]['shareUuid'] + '] 已邀请' + $['shareUuidArr'][_0x2c4854]['count']);
        for (let _0x5269aa in $['shareUuidArr']) {
            if ($['shareUuidArr'][_0x5269aa] && _0x3cc47b['mDVfO']($['shareUuidArr'][_0x5269aa]['count'], 0x5)) {
                if (_0x3cc47b['wgQkD'](_0x3cc47b['pNNPm'], _0x3cc47b['SNbiU'])) {
                    $['shareUuid'] = $['shareUuidArr'][_0x5269aa]['shareUuid'];
                    console['log']('更新助力码[' + $['shareUuid'] + '] 账号' + $['shareUuidArr'][_0x5269aa]['index'] + ' 已邀请' + $['shareUuidArr'][_0x5269aa]['count']);
                    break;
                } else {
                    _0x3cc47b['UXTjA'](resolve);
                }
            }
        }
    }
}

function getDrawRecordHasCoupon() {
    var _0x2e5ea6 = {
        'Ycpcj': function(_0x6db1b7, _0x404d79) {
            return _0x6db1b7 == _0x404d79;
        },
        'UVgRL': '此ip已被限制，请过10分钟后再执行脚本\n',
        'APlpx': function(_0x50910c) {
            return _0x50910c();
        },
        'zHxLS': function(_0x2acbaa, _0x31a433) {
            return _0x2acbaa(_0x31a433);
        },
        'tBDAh': function(_0x374a95, _0x3bd94b) {
            return _0x374a95 === _0x3bd94b;
        },
        'rJUGt': 'hVWjM',
        'vqaav': 'YmtDg',
        'hmjMQ': 'XzRAO',
        'iokao': 'ItCtR',
        'FXtYU': 'object',
        'xxtAt': function(_0xf16eb3, _0x3367b3) {
            return _0xf16eb3 !== _0x3367b3;
        },
        'vpLSK': 'hiSwY',
        'YYdoA': 'ezoti',
        'PfiUB': function(_0x1e5d6c, _0x5e720c) {
            return _0x1e5d6c == _0x5e720c;
        },
        'OgURg': '邀请好友',
        'aYtBD': function(_0x350756, _0x2ee09c) {
            return _0x350756 == _0x2ee09c;
        },
        'FozJV': function(_0x1426ac, _0x30b3a4) {
            return _0x1426ac != _0x30b3a4;
        },
        'QboIc': function(_0x5c8145, _0x1de37e) {
            return _0x5c8145 != _0x1de37e;
        },
        'jLCjm': function(_0x59a2ff, _0x6ccd56) {
            return _0x59a2ff + _0x6ccd56;
        },
        'AJFGj': function(_0x33f4fa, _0x160d9d) {
            return _0x33f4fa > _0x160d9d;
        },
        'AOhJQ': function(_0x2537e4, _0x10b59c) {
            return _0x2537e4 * _0x10b59c;
        },
        'KgRqv': function(_0xb77901, _0x48f5cc, _0x5461b2) {
            return _0xb77901(_0x48f5cc, _0x5461b2);
        },
        'iYGST': 'Ngeir',
        'hZGZu': 'xOciu',
        'odUoU': function(_0x6a0aba, _0x2f452e) {
            return _0x6a0aba !== _0x2f452e;
        },
        'jfiWY': 'lnWkr',
        'weEJe': 'aXbKD',
        'kjUhy': function(_0x2bede1, _0x848f04) {
            return _0x2bede1 === _0x848f04;
        },
        'GRROB': 'qxcEU',
        'hLkoy': 'YaJkj',
        'ewEgz': function(_0x56e489, _0x379887) {
            return _0x56e489(_0x379887);
        },
        'dnRfX': '/dingzhi/taskact/openCardcommon/getDrawRecordHasCoupon'
    };
    return new Promise(_0x4cd846 => {
        var _0x2af1c7 = {
            'ALeur': function(_0x3f91ca, _0xcc8891) {
                return _0x2e5ea6['Ycpcj'](_0x3f91ca, _0xcc8891);
            },
            'lwVmM': _0x2e5ea6['UVgRL'],
            'wsflE': function(_0x356e9f) {
                return _0x2e5ea6['APlpx'](_0x356e9f);
            },
            'RfFPj': function(_0x57fad4, _0x1607fc) {
                return _0x2e5ea6['zHxLS'](_0x57fad4, _0x1607fc);
            },
            'yFzWU': function(_0x5e7dac, _0x265dc7) {
                return _0x2e5ea6['tBDAh'](_0x5e7dac, _0x265dc7);
            },
            'kMUjy': _0x2e5ea6['rJUGt'],
            'hVkGe': _0x2e5ea6['vqaav'],
            'CdEbB': _0x2e5ea6['hmjMQ'],
            'czUdV': _0x2e5ea6['iokao'],
            'VDjaL': _0x2e5ea6['FXtYU'],
            'obnjX': function(_0x1c4f38, _0x49acce) {
                return _0x2e5ea6['xxtAt'](_0x1c4f38, _0x49acce);
            },
            'FUayv': _0x2e5ea6['vpLSK'],
            'ArSST': _0x2e5ea6['YYdoA'],
            'XRndC': function(_0x506622, _0x5c989d) {
                return _0x2e5ea6['PfiUB'](_0x506622, _0x5c989d);
            },
            'SVhxl': _0x2e5ea6['OgURg'],
            'WKaMn': function(_0x574efd, _0x3ad4e8) {
                return _0x2e5ea6['aYtBD'](_0x574efd, _0x3ad4e8);
            },
            'zuIIK': function(_0x4e208a, _0x2d38d2) {
                return _0x2e5ea6['FozJV'](_0x4e208a, _0x2d38d2);
            },
            'lYfbE': function(_0x48dcb7, _0x526700) {
                return _0x2e5ea6['QboIc'](_0x48dcb7, _0x526700);
            },
            'tahMZ': function(_0x1a182c, _0x5afce7) {
                return _0x2e5ea6['jLCjm'](_0x1a182c, _0x5afce7);
            },
            'bmikK': function(_0xa2137b, _0x100591) {
                return _0x2e5ea6['AJFGj'](_0xa2137b, _0x100591);
            },
            'DoWhC': function(_0x3ca4a2, _0x559d1c) {
                return _0x2e5ea6['AOhJQ'](_0x3ca4a2, _0x559d1c);
            },
            'WXjuT': function(_0x1a4d69, _0x5fdce, _0x2350fe) {
                return _0x2e5ea6['KgRqv'](_0x1a4d69, _0x5fdce, _0x2350fe);
            },
            'CCHLD': function(_0xbac8e3, _0x100f64) {
                return _0x2e5ea6['aYtBD'](_0xbac8e3, _0x100f64);
            },
            'wZSTb': _0x2e5ea6['iYGST'],
            'naLwd': _0x2e5ea6['hZGZu'],
            'qQMpt': function(_0x564f9b, _0x24439e) {
                return _0x2e5ea6['odUoU'](_0x564f9b, _0x24439e);
            },
            'hXELi': _0x2e5ea6['jfiWY'],
            'WkyIn': _0x2e5ea6['weEJe']
        };
        if (_0x2e5ea6['kjUhy'](_0x2e5ea6['GRROB'], _0x2e5ea6['hLkoy'])) {
            setcookie = setcookies['split'](',');
        } else {
            let _0x31a396 = 'activityId=' + $['activityId'] + '&actorUuid=' + $['actorUuid'] + '&pin=' + _0x2e5ea6['ewEgz'](encodeURIComponent, $['Pin']) + '&num=0&sortSuatus=1';
            $['post'](_0x2e5ea6['KgRqv'](taskPostUrl, _0x2e5ea6['dnRfX'], _0x31a396), async (_0x51b740, _0x928006, _0xe06690) => {
                var _0x123569 = {
                    'JAFEM': function(_0x468247) {
                        return _0x2af1c7['wsflE'](_0x468247);
                    },
                    'HAwKO': function(_0x2f3c7f, _0x10a1fe) {
                        return _0x2af1c7['RfFPj'](_0x2f3c7f, _0x10a1fe);
                    }
                };
                if (_0x2af1c7['yFzWU'](_0x2af1c7['kMUjy'], _0x2af1c7['hVkGe'])) {
                    if (_0x928006['statusCode'] && _0x2af1c7['ALeur'](_0x928006['statusCode'], 0x1ed)) {
                        console['log'](_0x2af1c7['lwVmM']);
                        $['outFlag'] = !![];
                    }
                    console['log']('' + $['toStr'](_0x51b740));
                    console['log']($['name'] + ' API请求失败，请检查网路重试');
                } else {
                    try {
                        if (_0x2af1c7['yFzWU'](_0x2af1c7['CdEbB'], _0x2af1c7['czUdV'])) {
                            _0x123569['JAFEM'](_0x4cd846);
                        } else {
                            if (_0x51b740) {
                                console['log']('' + $['toStr'](_0x51b740));
                                console['log']($['name'] + ' API请求失败，请检查网路重试');
                            } else {
                                res = $['toObj'](_0xe06690);
                                if (_0x2af1c7['ALeur'](typeof res, _0x2af1c7['VDjaL'])) {
                                    if (_0x2af1c7['yFzWU'](res['result'], !![]) && res['data']) {
                                        console['log']('我的奖品：');
                                        let _0x421cc6 = 0x0;
                                        let _0x475017 = 0x0;
                                        for (let _0x31c9ff in res['data']) {
                                            if (_0x2af1c7['obnjX'](_0x2af1c7['FUayv'], _0x2af1c7['ArSST'])) {
                                                let _0x46f0c4 = res['data'][_0x31c9ff];
                                                if (_0x2af1c7['XRndC'](_0x46f0c4['value'], _0x2af1c7['SVhxl'])) _0x421cc6++;
                                                if (_0x2af1c7['WKaMn'](_0x46f0c4['value'], _0x2af1c7['SVhxl'])) _0x475017 = _0x46f0c4['infoName']['replace']('京豆', '');
                                                if (_0x2af1c7['zuIIK'](_0x46f0c4['value'], _0x2af1c7['SVhxl'])) console['log']('' + (_0x2af1c7['lYfbE'](_0x46f0c4['infoType'], 0xa) && _0x2af1c7['tahMZ'](_0x46f0c4['value'], ':') || '') + _0x46f0c4['infoName']);
                                            } else {
                                                _0x123569['HAwKO'](_0x4cd846, res && res['data'] || '');
                                            }
                                        }
                                        if (_0x2af1c7['bmikK'](_0x421cc6, 0x0)) console['log']('邀请好友(' + _0x421cc6 + '):' + (_0x2af1c7['DoWhC'](_0x421cc6, _0x2af1c7['WXjuT'](parseInt, _0x475017, 0xa)) || 0x1e) + '京豆');
                                    } else if (_0x2af1c7['CCHLD'](typeof res, _0x2af1c7['VDjaL']) && res['errorMessage']) {
                                        console['log']('我的奖品 ' + (res['errorMessage'] || ''));
                                    } else {
                                        console['log'](_0xe06690);
                                    }
                                } else {
                                    if (_0x2af1c7['yFzWU'](_0x2af1c7['wZSTb'], _0x2af1c7['naLwd'])) {
                                        msg += ' 额外获得:' + res['data']['beanNumMember'] + '京豆';
                                    } else {
                                        console['log'](_0xe06690);
                                    }
                                }
                            }
                        }
                    } catch (_0x4ebc3b) {
                        if (_0x2af1c7['qQMpt'](_0x2af1c7['hXELi'], _0x2af1c7['WkyIn'])) {
                            $['logErr'](_0x4ebc3b, _0x928006);
                        } else {
                            _0x123569['JAFEM'](_0x4cd846);
                        }
                    } finally {
                        _0x2af1c7['wsflE'](_0x4cd846);
                    }
                }
            });
        }
    });
}

function getShareRecord() {
    var _0xbfef16 = {
        'IgQjN': function(_0xf1ea58, _0x3b7f9b) {
            return _0xf1ea58 == _0x3b7f9b;
        },
        'vFJxb': 'object',
        'VYmAK': function(_0x57e5a8, _0x4feb6f) {
            return _0x57e5a8 === _0x4feb6f;
        },
        'iHnzk': function(_0x2adbef, _0x2a69f1) {
            return _0x2adbef == _0x2a69f1;
        },
        'RPGWY': function(_0x49c185, _0x32c923) {
            return _0x49c185 !== _0x32c923;
        },
        'KcTQs': 'WCfTn',
        'IFYfn': 'wthKD',
        'rBckv': function(_0x49b671, _0x333f3a) {
            return _0x49b671 === _0x333f3a;
        },
        'nYrim': 'pWZZG',
        'FvdvP': 'otTSi',
        'PtkAc': function(_0xe1f6ca) {
            return _0xe1f6ca();
        },
        'FiiUH': function(_0x20be9a) {
            return _0x20be9a();
        },
        'ICooo': function(_0x5b129b, _0x326933) {
            return _0x5b129b == _0x326933;
        },
        'hhTzc': 'string',
        'goOrj': '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie',
        'rHLAP': function(_0x33f64a, _0x58c2fe) {
            return _0x33f64a === _0x58c2fe;
        },
        'OznId': 'gBgDv',
        'CwnBc': function(_0x10400b, _0x2e472d) {
            return _0x10400b(_0x2e472d);
        },
        'sMmyv': function(_0x5e43c4, _0xf159bc, _0x38c832) {
            return _0x5e43c4(_0xf159bc, _0x38c832);
        },
        'TuNIY': '/dingzhi/taskact/openCardcommon/getShareRecord'
    };
    return new Promise(_0x5e6c71 => {
        var _0x213e9b = {
            'Weans': function(_0x1a4251) {
                return _0xbfef16['FiiUH'](_0x1a4251);
            },
            'vptLz': function(_0x171894, _0x1dd4d0) {
                return _0xbfef16['ICooo'](_0x171894, _0x1dd4d0);
            },
            'XnfGE': _0xbfef16['hhTzc'],
            'aXbMA': _0xbfef16['goOrj']
        };
        if (_0xbfef16['rHLAP'](_0xbfef16['OznId'], _0xbfef16['OznId'])) {
            let _0x2b87bf = 'activityId=' + $['activityId'] + '&actorUuid=' + $['actorUuid'] + '&pin=' + _0xbfef16['CwnBc'](encodeURIComponent, $['Pin']) + '&num=0&sortSuatus=1';
            $['post'](_0xbfef16['sMmyv'](taskPostUrl, _0xbfef16['TuNIY'], _0x2b87bf), async (_0x5f4268, _0x1b40c2, _0xfd9a3d) => {
                try {
                    if (_0x5f4268) {
                        console['log']('' + $['toStr'](_0x5f4268));
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    } else {
                        res = $['toObj'](_0xfd9a3d);
                        if (_0xbfef16['IgQjN'](typeof res, _0xbfef16['vFJxb'])) {
                            if (_0xbfef16['VYmAK'](res['result'], !![]) && res['data']) {
                                $['ShareCount'] = res['data']['length'];
                                $['log']('=========== 你邀请了:' + res['data']['length'] + '个');
                            } else if (_0xbfef16['iHnzk'](typeof res, _0xbfef16['vFJxb']) && res['errorMessage']) {
                                if (_0xbfef16['RPGWY'](_0xbfef16['KcTQs'], _0xbfef16['IFYfn'])) {
                                    console['log']('' + (res['errorMessage'] || ''));
                                } else {
                                    _0x213e9b['Weans'](_0x5e6c71);
                                }
                            } else {
                                console['log'](_0xfd9a3d);
                            }
                        } else {
                            console['log'](_0xfd9a3d);
                        }
                    }
                } catch (_0x14ba3e) {
                    if (_0xbfef16['rBckv'](_0xbfef16['nYrim'], _0xbfef16['FvdvP'])) {
                        if (_0x213e9b['vptLz'](typeof str, _0x213e9b['XnfGE'])) {
                            try {
                                return JSON['parse'](str);
                            } catch (_0x4656b5) {
                                console['log'](_0x4656b5);
                                $['msg']($['name'], '', _0x213e9b['aXbMA']);
                                return [];
                            }
                        }
                    } else {
                        $['logErr'](_0x14ba3e, _0x1b40c2);
                    }
                } finally {
                    _0xbfef16['PtkAc'](_0x5e6c71);
                }
            });
        } else {
            $['logErr'](e, resp);
        }
    });
}

function addSku() {
    var _0x493ba1 = {
        'cgDEV': function(_0x584dcf) {
            return _0x584dcf();
        },
        'CxgGy': function(_0x59908b, _0x2f425a) {
            return _0x59908b > _0x2f425a;
        },
        'DKZLQ': 'LZ_TOKEN_KEY=',
        'WcfTC': function(_0x5ee061, _0xfa8a3d) {
            return _0x5ee061 + _0xfa8a3d;
        },
        'BVgTr': 'LZ_TOKEN_VALUE=',
        'lYOSB': function(_0x1ac27a, _0x4780ef) {
            return _0x1ac27a === _0x4780ef;
        },
        'FFqPI': 'AjjVV',
        'YcYQT': 'svUss',
        'ExFDm': function(_0x13683b, _0x4621bd) {
            return _0x13683b !== _0x4621bd;
        },
        'niVHe': 'vzggl',
        'PWsCd': 'LzkDj',
        'CSORN': function(_0xecd8da, _0x450cba) {
            return _0xecd8da == _0x450cba;
        },
        'QmSgJ': '此ip已被限制，请过10分钟后再执行脚本\n',
        'Sewlv': 'object',
        'PjSKR': function(_0x9b07e4, _0x537082) {
            return _0x9b07e4 === _0x537082;
        },
        'bkdmj': 'kOnik',
        'GdWVu': 'VxkBz',
        'ZjdDj': 'JYcBQ',
        'kMlaK': function(_0x166cc4, _0x2b4019) {
            return _0x166cc4 || _0x2b4019;
        },
        'PTNUa': '空气💨',
        'klbKY': function(_0x3137dc, _0x4a0463) {
            return _0x3137dc === _0x4a0463;
        },
        'sjKcE': 'EXryl',
        'EAVGw': 'irwJe',
        'sBpaU': function(_0x216908, _0x31b437) {
            return _0x216908 !== _0x31b437;
        },
        'lfsic': 'kWeeU',
        'pUoYJ': 'NDscm',
        'uUqCn': 'iTaAc',
        'DsVSS': function(_0x434d88) {
            return _0x434d88();
        },
        'nzmzo': function(_0x13130d, _0x474c04) {
            return _0x13130d(_0x474c04);
        },
        'NLMjG': function(_0x4829ee, _0x3f8e25, _0x51d10b) {
            return _0x4829ee(_0x3f8e25, _0x51d10b);
        },
        'HBdln': '/dingzhi/dz/openCard/saveTask'
    };
    return new Promise(_0x5d00e0 => {
        let _0x2211dc = 'activityId=' + $['activityId'] + '&pin=' + _0x493ba1['nzmzo'](encodeURIComponent, $['Pin']) + '&actorUuid=' + $['actorUuid'] + '&taskType=2&taskValue=4394245';
        $['post'](_0x493ba1['NLMjG'](taskPostUrl, _0x493ba1['HBdln'], _0x2211dc), async (_0xf6f944, _0x3a14be, _0x374630) => {
            var _0x37ccd7 = {
                'ptXbL': function(_0xb1aed3) {
                    return _0x493ba1['cgDEV'](_0xb1aed3);
                },
                'XSZLc': function(_0x2ddff9, _0x54a7fa) {
                    return _0x493ba1['CxgGy'](_0x2ddff9, _0x54a7fa);
                },
                'SNzQt': _0x493ba1['DKZLQ'],
                'UdxpZ': function(_0x3854a3, _0x22b0f9) {
                    return _0x493ba1['WcfTC'](_0x3854a3, _0x22b0f9);
                },
                'PDZrF': function(_0x528e84, _0x50cc85) {
                    return _0x493ba1['CxgGy'](_0x528e84, _0x50cc85);
                },
                'rSiHL': _0x493ba1['BVgTr'],
                'HSwvr': function(_0x149bef, _0x302a0c) {
                    return _0x493ba1['WcfTC'](_0x149bef, _0x302a0c);
                }
            };
            if (_0x493ba1['lYOSB'](_0x493ba1['FFqPI'], _0x493ba1['FFqPI'])) {
                try {
                    if (_0x493ba1['lYOSB'](_0x493ba1['YcYQT'], _0x493ba1['YcYQT'])) {
                        if (_0xf6f944) {
                            if (_0x493ba1['ExFDm'](_0x493ba1['niVHe'], _0x493ba1['PWsCd'])) {
                                if (_0x3a14be['statusCode'] && _0x493ba1['CSORN'](_0x3a14be['statusCode'], 0x1ed)) {
                                    console['log'](_0x493ba1['QmSgJ']);
                                    $['outFlag'] = !![];
                                }
                                console['log']('' + $['toStr'](_0xf6f944));
                                console['log']($['name'] + ' API请求失败，请检查网路重试');
                            } else {
                                console['log']('activityContent ' + (res['errorMessage'] || ''));
                            }
                        } else {
                            res = $['toObj'](_0x374630);
                            if (_0x493ba1['CSORN'](typeof res, _0x493ba1['Sewlv'])) {
                                if (_0x493ba1['PjSKR'](_0x493ba1['bkdmj'], _0x493ba1['bkdmj'])) {
                                    if (_0x493ba1['PjSKR'](res['result'], !![]) && res['data']) {
                                        if (_0x493ba1['ExFDm'](_0x493ba1['GdWVu'], _0x493ba1['GdWVu'])) {
                                            $['logErr'](e, _0x3a14be);
                                        } else {
                                            let _0x5fc7ad = '';
                                            if (res['data']['addBeanNum']) {
                                                if (_0x493ba1['PjSKR'](_0x493ba1['ZjdDj'], _0x493ba1['ZjdDj'])) {
                                                    _0x5fc7ad = res['data']['addBeanNum'] + '京豆';
                                                } else {
                                                    console['log'](_0x374630);
                                                }
                                            }
                                            console['log']('加购获得：' + _0x493ba1['kMlaK'](_0x5fc7ad, _0x493ba1['PTNUa']));
                                        }
                                    } else if (_0x493ba1['CSORN'](typeof res, _0x493ba1['Sewlv']) && res['errorMessage']) {
                                        console['log']('加购 ' + (res['errorMessage'] || ''));
                                    } else {
                                        if (_0x493ba1['klbKY'](_0x493ba1['sjKcE'], _0x493ba1['EAVGw'])) {
                                            console['log']('加购 ' + (res['errorMessage'] || ''));
                                        } else {
                                            console['log'](_0x374630);
                                        }
                                    }
                                } else {
                                    if (_0xf6f944) {
                                        console['log']('' + JSON['stringify'](_0xf6f944));
                                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                                    } else {
                                        if (_0x374630) {
                                            _0x374630 = JSON['parse'](_0x374630);
                                        }
                                    }
                                }
                            } else {
                                if (_0x493ba1['sBpaU'](_0x493ba1['lfsic'], _0x493ba1['lfsic'])) {
                                    _0x37ccd7['ptXbL'](_0x5d00e0);
                                } else {
                                    console['log'](_0x374630);
                                }
                            }
                        }
                    } else {
                        $['logErr'](e, _0x3a14be);
                    }
                } catch (_0x4d175a) {
                    $['logErr'](_0x4d175a, _0x3a14be);
                } finally {
                    if (_0x493ba1['sBpaU'](_0x493ba1['pUoYJ'], _0x493ba1['uUqCn'])) {
                        _0x493ba1['DsVSS'](_0x5d00e0);
                    } else {
                        setcookie = setcookies['split'](',');
                    }
                }
            } else {
                let _0x4d9b5b = ck['split'](';')[0x0]['trim']();
                if (_0x4d9b5b['split']('=')[0x1]) {
                    if (_0x37ccd7['XSZLc'](_0x4d9b5b['indexOf'](_0x37ccd7['SNzQt']), -0x1)) LZ_TOKEN_KEY = _0x37ccd7['UdxpZ'](_0x4d9b5b['replace'](/ /g, ''), ';');
                    if (_0x37ccd7['PDZrF'](_0x4d9b5b['indexOf'](_0x37ccd7['rSiHL']), -0x1)) LZ_TOKEN_VALUE = _0x37ccd7['HSwvr'](_0x4d9b5b['replace'](/ /g, ''), ';');
                }
            }
        });
    });
}

function followShop() {
    var _0x28a3df = {
        'VBtPa': function(_0x4c6f07, _0x5993b3) {
            return _0x4c6f07 == _0x5993b3;
        },
        'FOQnr': '此ip已被限制，请过10分钟后再执行脚本\n',
        'TsRHK': function(_0x54cbc2, _0xb94da5) {
            return _0x54cbc2 === _0xb94da5;
        },
        'VqVcB': 'TpJFU',
        'iWLrI': 'zgRFz',
        'QhnjJ': 'HIrpG',
        'esyJU': 'kFsCC',
        'PgUXG': function(_0x3b3d44, _0x515458) {
            return _0x3b3d44 == _0x515458;
        },
        'nSpDr': function(_0x263f65, _0xd18af3) {
            return _0x263f65 !== _0xd18af3;
        },
        'eYGwy': 'izbRB',
        'yBRFC': function(_0x537b09, _0x99c44f) {
            return _0x537b09 == _0x99c44f;
        },
        'IFNdS': 'object',
        'EnRPH': 'pJvrp',
        'ZVCxl': function(_0x189d9e, _0x4636fd) {
            return _0x189d9e === _0x4636fd;
        },
        'QcAnW': 'ZWuCs',
        'jWJzt': 'DiUcq',
        'LNbkp': function(_0x50091f, _0x435748) {
            return _0x50091f || _0x435748;
        },
        'FTVPE': '空气💨',
        'nkLYQ': 'gkTof',
        'HVzVv': 'ZqFjf',
        'OPuUk': function(_0x3254c8, _0x4f8b62) {
            return _0x3254c8 === _0x4f8b62;
        },
        'fznrY': 'SZsXj',
        'Sqlhd': function(_0x39999a) {
            return _0x39999a();
        },
        'VtWEm': function(_0x351571, _0x1a415c) {
            return _0x351571 != _0x1a415c;
        },
        'LAamA': 'undefined',
        'ARpTd': '如需执行脚本请设置环境变量[guaopencard28]为"true"',
        'eyZAh': '获取失败',
        'RDrWC': function(_0x2ad7b1, _0x186c55) {
            return _0x2ad7b1 === _0x186c55;
        },
        'MMViS': 'DDzDK',
        'TbXis': function(_0x45d626, _0x5e9005) {
            return _0x45d626(_0x5e9005);
        },
        'sSFlC': function(_0x680113, _0x16b8f4, _0x12a7a0) {
            return _0x680113(_0x16b8f4, _0x12a7a0);
        },
        'eOAKd': '/dingzhi/dz/openCard/followShop'
    };
    return new Promise(_0x4afc9d => {
        var _0x1ffc48 = {
            'MNuih': function(_0x5e28b3, _0x9876c5) {
                return _0x28a3df['VtWEm'](_0x5e28b3, _0x9876c5);
            },
            'YjlLp': _0x28a3df['LAamA'],
            'YsZwK': _0x28a3df['ARpTd'],
            'FWKim': _0x28a3df['eyZAh']
        };
        if (_0x28a3df['RDrWC'](_0x28a3df['MMViS'], _0x28a3df['MMViS'])) {
            let _0x42cc82 = 'activityId=' + $['activityId'] + '&pin=' + _0x28a3df['TbXis'](encodeURIComponent, $['Pin']) + '&actorUuid=' + $['actorUuid'] + '&shareUuid=' + $['shareUuid'] + '&taskType=23&taskValue=1000002520';
            $['post'](_0x28a3df['sSFlC'](taskPostUrl, _0x28a3df['eOAKd'], _0x42cc82), async (_0x2d04c9, _0xf7ac80, _0x43f6f1) => {
                var _0x167d7a = {
                    'NiLhJ': function(_0x10419b, _0x41dfef) {
                        return _0x28a3df['VBtPa'](_0x10419b, _0x41dfef);
                    },
                    'ffImE': _0x28a3df['FOQnr']
                };
                try {
                    if (_0x28a3df['TsRHK'](_0x28a3df['VqVcB'], _0x28a3df['iWLrI'])) {
                        if (_0xf7ac80['statusCode'] && _0x167d7a['NiLhJ'](_0xf7ac80['statusCode'], 0x1ed)) {
                            console['log'](_0x167d7a['ffImE']);
                            $['outFlag'] = !![];
                        }
                        console['log']('' + $['toStr'](_0x2d04c9));
                        console['log']($['name'] + ' cookie API请求失败，请检查网路重试');
                    } else {
                        if (_0x2d04c9) {
                            if (_0x28a3df['TsRHK'](_0x28a3df['QhnjJ'], _0x28a3df['esyJU'])) {
                                console['log'](e);
                            } else {
                                if (_0xf7ac80['statusCode'] && _0x28a3df['PgUXG'](_0xf7ac80['statusCode'], 0x1ed)) {
                                    if (_0x28a3df['nSpDr'](_0x28a3df['eYGwy'], _0x28a3df['eYGwy'])) {
                                        if (res['data'] && _0x1ffc48['MNuih'](typeof res['data']['secretPin'], _0x1ffc48['YjlLp'])) $['Pin'] = res['data']['secretPin'];
                                        if (res['data'] && _0x1ffc48['MNuih'](typeof res['data']['nickname'], _0x1ffc48['YjlLp'])) $['nickname'] = res['data']['nickname'];
                                    } else {
                                        console['log'](_0x28a3df['FOQnr']);
                                        $['outFlag'] = !![];
                                    }
                                }
                                console['log']('' + $['toStr'](_0x2d04c9));
                                console['log']($['name'] + ' API请求失败，请检查网路重试');
                            }
                        } else {
                            res = $['toObj'](_0x43f6f1);
                            if (_0x28a3df['yBRFC'](typeof res, _0x28a3df['IFNdS'])) {
                                if (_0x28a3df['nSpDr'](_0x28a3df['EnRPH'], _0x28a3df['EnRPH'])) {
                                    console['log'](_0x43f6f1);
                                } else {
                                    if (_0x28a3df['ZVCxl'](res['result'], !![]) && res['data']) {
                                        if (_0x28a3df['nSpDr'](_0x28a3df['QcAnW'], _0x28a3df['jWJzt'])) {
                                            let _0x274c8e = '';
                                            if (res['data']['addBeanNum']) {
                                                _0x274c8e = res['data']['addBeanNum'] + '京豆';
                                            }
                                            if (res['data']['beanNumMember'] && res['data']['assistSendStatus']) {
                                                _0x274c8e += ' 额外获得:' + res['data']['beanNumMember'] + '京豆';
                                            }
                                            console['log']('关注获得：' + _0x28a3df['LNbkp'](_0x274c8e, _0x28a3df['FTVPE']));
                                        } else {
                                            console['log'](_0x1ffc48['YsZwK']);
                                        }
                                    } else if (_0x28a3df['yBRFC'](typeof res, _0x28a3df['IFNdS']) && res['errorMessage']) {
                                        console['log']('关注 ' + (res['errorMessage'] || ''));
                                    } else {
                                        console['log'](_0x43f6f1);
                                    }
                                }
                            } else {
                                console['log'](_0x43f6f1);
                            }
                        }
                    }
                } catch (_0x2091ab) {
                    if (_0x28a3df['nSpDr'](_0x28a3df['nkLYQ'], _0x28a3df['HVzVv'])) {
                        $['logErr'](_0x2091ab, _0xf7ac80);
                    } else {
                        console['log'](_0x43f6f1);
                    }
                } finally {
                    if (_0x28a3df['OPuUk'](_0x28a3df['fznrY'], _0x28a3df['fznrY'])) {
                        _0x28a3df['Sqlhd'](_0x4afc9d);
                    } else {
                        console['log'](_0x167d7a['ffImE']);
                        $['outFlag'] = !![];
                    }
                }
            });
        } else {
            console['log']('获取助力池');
            console['log']('助力码:' + (readShareCodeRes['data'] && readShareCodeRes['data'][0x0] || _0x1ffc48['FWKim']));
            $['shareUuid'] = readShareCodeRes['data'] && readShareCodeRes['data'][0x0] || $['shareUuid'];
        }
    });
}

function getshopactivityId(_0x3ce5dc) {
    var _0x3a6282 = {
        'LYoNn': function(_0x4374ab, _0x59a2cd) {
            return _0x4374ab > _0x59a2cd;
        },
        'nEkAY': 'lz_jdpin_token=',
        'EzrMH': function(_0x32be90, _0x2f8b34) {
            return _0x32be90 + _0x2f8b34;
        },
        'PsMOd': 'LZ_TOKEN_KEY=',
        'EiJIi': function(_0x24e085, _0x72566a) {
            return _0x24e085 + _0x72566a;
        },
        'oSBKt': 'LZ_TOKEN_VALUE=',
        'zqNLH': function(_0x332831, _0x148469) {
            return _0x332831 === _0x148469;
        },
        'wSjNy': 'HepSj',
        'MdWeC': 'zHBBH',
        'UETwl': function(_0x1480ed, _0x2d4231) {
            return _0x1480ed == _0x2d4231;
        },
        'TnOvx': function(_0x3cdf19, _0x821ebf) {
            return _0x3cdf19 !== _0x821ebf;
        },
        'pvMLb': 'mzhhq',
        'iKoHw': 'YxPeD',
        'ISnOb': function(_0x48b09e) {
            return _0x48b09e();
        },
        'HUUzG': function(_0x3906b2, _0xddac0b) {
            return _0x3906b2(_0xddac0b);
        }
    };
    return new Promise(_0x157a3c => {
        var _0x4c79bc = {
            'wKBkO': function(_0x8389b8, _0x2e7648) {
                return _0x3a6282['LYoNn'](_0x8389b8, _0x2e7648);
            },
            'zmINO': _0x3a6282['nEkAY'],
            'iXTqU': function(_0x2c61e7, _0x4fcbfa) {
                return _0x3a6282['EzrMH'](_0x2c61e7, _0x4fcbfa);
            },
            'cIMXo': _0x3a6282['PsMOd'],
            'EBYnu': function(_0x11fc38, _0x508aaa) {
                return _0x3a6282['EiJIi'](_0x11fc38, _0x508aaa);
            },
            'KQTYp': function(_0x3f19c0, _0x2b5180) {
                return _0x3a6282['LYoNn'](_0x3f19c0, _0x2b5180);
            },
            'SCCDh': _0x3a6282['oSBKt'],
            'YNkJm': function(_0x1b53c8, _0x2a86e9) {
                return _0x3a6282['EiJIi'](_0x1b53c8, _0x2a86e9);
            },
            'yJfSe': function(_0x3c3da5, _0x3ef4be) {
                return _0x3a6282['zqNLH'](_0x3c3da5, _0x3ef4be);
            },
            'NuewN': _0x3a6282['wSjNy'],
            'NLzuT': _0x3a6282['MdWeC'],
            'NjyqV': function(_0x30a664, _0x26c076) {
                return _0x3a6282['UETwl'](_0x30a664, _0x26c076);
            },
            'lTcyo': function(_0x49bf4a, _0x1c8226) {
                return _0x3a6282['TnOvx'](_0x49bf4a, _0x1c8226);
            },
            'XmpLm': _0x3a6282['pvMLb'],
            'eXeEg': function(_0x12dcb1, _0x619280) {
                return _0x3a6282['TnOvx'](_0x12dcb1, _0x619280);
            },
            'cYWhB': _0x3a6282['iKoHw'],
            'aYRvB': function(_0x112704) {
                return _0x3a6282['ISnOb'](_0x112704);
            }
        };
        $['get'](_0x3a6282['HUUzG'](shopactivityId, '' + _0x3ce5dc), async (_0x469d8b, _0x5d1baa, _0x43e075) => {
            if (_0x4c79bc['yJfSe'](_0x4c79bc['NuewN'], _0x4c79bc['NLzuT'])) {
                let _0x3978d1 = ck['split'](';')[0x0]['trim']();
                if (_0x3978d1['split']('=')[0x1]) {
                    if (_0x4c79bc['wKBkO'](_0x3978d1['indexOf'](_0x4c79bc['zmINO']), -0x1)) lz_jdpin_token = _0x4c79bc['iXTqU'](_0x3978d1['replace'](/ /g, ''), ';');
                    if (_0x4c79bc['wKBkO'](_0x3978d1['indexOf'](_0x4c79bc['cIMXo']), -0x1)) LZ_TOKEN_KEY = _0x4c79bc['EBYnu'](_0x3978d1['replace'](/ /g, ''), ';');
                    if (_0x4c79bc['KQTYp'](_0x3978d1['indexOf'](_0x4c79bc['SCCDh']), -0x1)) LZ_TOKEN_VALUE = _0x4c79bc['YNkJm'](_0x3978d1['replace'](/ /g, ''), ';');
                }
            } else {
                try {
                    _0x43e075 = JSON['parse'](_0x43e075);
                    if (_0x4c79bc['NjyqV'](_0x43e075['success'], !![])) {
                        $['shopactivityId'] = _0x43e075['result']['interestsRuleList'] && _0x43e075['result']['interestsRuleList'][0x0] && _0x43e075['result']['interestsRuleList'][0x0]['interestsInfo'] && _0x43e075['result']['interestsRuleList'][0x0]['interestsInfo']['activityId'] || '';
                    }
                } catch (_0x4eab33) {
                    if (_0x4c79bc['lTcyo'](_0x4c79bc['XmpLm'], _0x4c79bc['XmpLm'])) {
                        console['log']('' + $['toStr'](_0x469d8b));
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    } else {
                        $['logErr'](_0x4eab33, _0x5d1baa);
                    }
                } finally {
                    if (_0x4c79bc['eXeEg'](_0x4c79bc['cYWhB'], _0x4c79bc['cYWhB'])) {
                        cookiesArr['push'](jdCookieNode[item]);
                    } else {
                        _0x4c79bc['aYRvB'](_0x157a3c);
                    }
                }
            }
        });
    });
}

function shopactivityId(_0x13e32d) {
    var _0x1aa775 = {
        'cWKhq': 'text/plain; Charset=UTF-8',
        'ShtCl': 'https://api.m.jd.com',
        'qwAXo': 'api.m.jd.com',
        'pHfAq': '*/*',
        'QrxUJ': 'application/x-www-form-urlencoded'
    };
    return {
        'url': 'https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=getShopOpenCardInfo&body=%7B%22venderId%22%3A%22' + _0x13e32d + '%22%2C%22channel%22%3A401%7D&client=H5&clientVersion=9.2.0&uuid=88888',
        'headers': {
            'Content-Type': _0x1aa775['cWKhq'],
            'Origin': _0x1aa775['ShtCl'],
            'Host': _0x1aa775['qwAXo'],
            'accept': _0x1aa775['pHfAq'],
            'User-Agent': $['UA'],
            'content-type': _0x1aa775['QrxUJ'],
            'Referer': 'https://shopmember.m.jd.com/shopcard/?venderId=' + _0x13e32d + '&shopId=' + _0x13e32d + '&venderType=5&channel=401&returnUrl=https://lzdz1-isv.isvjcloud.com/dingzhi/dz/openCard/activity?activityId=' + $['activityId'] + '&shareUuid=' + $['shareUuid'],
            'Cookie': cookie
        },
        'timeout': 0x7530
    };
}

function join(_0x5ee602) {
    var _0x121e66 = {
        'qUHRE': '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie',
        'gdcnB': function(_0x188d51, _0xb1dc64) {
            return _0x188d51 == _0xb1dc64;
        },
        'kHFjY': 'object',
        'JPAvd': function(_0x3c6c59, _0x54b98b) {
            return _0x3c6c59 === _0x54b98b;
        },
        'uuLkw': function(_0x2f2564, _0x3c8bc8) {
            return _0x2f2564 !== _0x3c8bc8;
        },
        'OZCbF': 'yCovJ',
        'bDkKO': 'ZFsUw',
        'GzNpd': 'XtofL',
        'jWmyB': function(_0x207560, _0x1bcfd9) {
            return _0x207560 == _0x1bcfd9;
        },
        'abFAF': 'FpyFH',
        'CNlYG': 'gVRAa',
        'KgtiI': 'dwMpH',
        'uuqLF': 'gbrAp',
        'QIkkQ': function(_0x33749b) {
            return _0x33749b();
        },
        'GCgrc': function(_0x1a343f, _0x2a45a7) {
            return _0x1a343f || _0x2a45a7;
        },
        'ZtRFQ': 'abcdef0123456789',
        'uiOEP': function(_0x3ea3f8, _0x2f31ce) {
            return _0x3ea3f8 < _0x2f31ce;
        },
        'YMRwB': function(_0x1bc6c9, _0x10a7f4) {
            return _0x1bc6c9 * _0x10a7f4;
        },
        'ucwlu': function(_0x33f4d7, _0x411790) {
            return _0x33f4d7(_0x411790);
        },
        'DoYci': function(_0x4cfc2e, _0x1d2729) {
            return _0x4cfc2e(_0x1d2729);
        }
    };
    return new Promise(async _0x336154 => {
        var _0x870ca2 = {
            'gzJDd': function(_0x348c21, _0xbb8e69) {
                return _0x121e66['GCgrc'](_0x348c21, _0xbb8e69);
            },
            'YQEzJ': _0x121e66['ZtRFQ'],
            'OrcSW': function(_0x5eea16, _0x236d5f) {
                return _0x121e66['uiOEP'](_0x5eea16, _0x236d5f);
            },
            'hzVZf': function(_0x3ec760, _0x4ef17c) {
                return _0x121e66['YMRwB'](_0x3ec760, _0x4ef17c);
            },
            'oRToT': function(_0x48b3af, _0x18e45b) {
                return _0x121e66['JPAvd'](_0x48b3af, _0x18e45b);
            },
            'ozzsj': function(_0x4824b1, _0x577f91) {
                return _0x121e66['jWmyB'](_0x4824b1, _0x577f91);
            },
            'IOvqz': _0x121e66['kHFjY']
        };
        $['shopactivityId'] = '';
        await $['wait'](0x3e8);
        await _0x121e66['ucwlu'](getshopactivityId, _0x5ee602);
        $['get'](_0x121e66['DoYci'](ruhui, '' + _0x5ee602), async (_0x589b40, _0x499adf, _0x3983ac) => {
            var _0x59a88f = {
                'DffFJ': _0x121e66['qUHRE']
            };
            try {
                let _0x26f326 = $['toObj'](_0x3983ac);
                if (_0x121e66['gdcnB'](typeof _0x26f326, _0x121e66['kHFjY'])) {
                    if (_0x121e66['JPAvd'](_0x26f326['success'], !![])) {
                        console['log'](_0x26f326['message']);
                        if (_0x26f326['result'] && _0x26f326['result']['giftInfo']) {
                            if (_0x121e66['uuLkw'](_0x121e66['OZCbF'], _0x121e66['bDkKO'])) {
                                for (let _0x229b78 of _0x26f326['result']['giftInfo']['giftList']) {
                                    if (_0x121e66['uuLkw'](_0x121e66['GzNpd'], _0x121e66['GzNpd'])) {
                                        e = _0x870ca2['gzJDd'](e, 0x20);
                                        let _0x55d192 = _0x870ca2['YQEzJ'],
                                            _0x559982 = _0x55d192['length'],
                                            _0x2a1cd7 = '';
                                        for (_0x229b78 = 0x0; _0x870ca2['OrcSW'](_0x229b78, e); _0x229b78++) _0x2a1cd7 += _0x55d192['charAt'](Math['floor'](_0x870ca2['hzVZf'](Math['random'](), _0x559982)));
                                        return _0x2a1cd7;
                                    } else {
                                        console['log']('入会获得:' + _0x229b78['discountString'] + _0x229b78['prizeName'] + _0x229b78['secondLineDesc']);
                                    }
                                }
                            } else {
                                try {
                                    return JSON['parse'](str);
                                } catch (_0x2c58b6) {
                                    console['log'](_0x2c58b6);
                                    $['msg']($['name'], '', _0x59a88f['DffFJ']);
                                    return [];
                                }
                            }
                        }
                    } else if (_0x121e66['jWmyB'](typeof _0x26f326, _0x121e66['kHFjY']) && _0x26f326['message']) {
                        if (_0x121e66['uuLkw'](_0x121e66['abFAF'], _0x121e66['CNlYG'])) {
                            console['log']('' + (_0x26f326['message'] || ''));
                        } else {
                            if (_0x870ca2['oRToT'](_0x26f326['result'], !![]) && _0x26f326['data']) {
                                $['ShareCount'] = _0x26f326['data']['length'];
                                $['log']('=========== 你邀请了:' + _0x26f326['data']['length'] + '个');
                            } else if (_0x870ca2['ozzsj'](typeof _0x26f326, _0x870ca2['IOvqz']) && _0x26f326['errorMessage']) {
                                console['log']('' + (_0x26f326['errorMessage'] || ''));
                            } else {
                                console['log'](_0x3983ac);
                            }
                        }
                    } else {
                        if (_0x121e66['uuLkw'](_0x121e66['KgtiI'], _0x121e66['uuqLF'])) {
                            console['log'](_0x3983ac);
                        } else {
                            console['log'](_0x3983ac);
                        }
                    }
                } else {
                    console['log'](_0x3983ac);
                }
            } catch (_0x2156d0) {
                $['logErr'](_0x2156d0, _0x499adf);
            } finally {
                _0x121e66['QIkkQ'](_0x336154);
            }
        });
    });
}

function ruhui(_0x249eda) {
    var _0x863032 = {
        'NEwNQ': 'text/plain; Charset=UTF-8',
        'BOwry': 'https://api.m.jd.com',
        'miEyG': 'api.m.jd.com',
        'AHfQm': '*/*',
        'sUQWq': 'application/x-www-form-urlencoded'
    };
    let _0x2155a9 = '';
    if ($['shopactivityId']) _0x2155a9 = ',"activityId":' + $['shopactivityId'];
    return {
        'url': 'https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=bindWithVender&body={"venderId":"' + _0x249eda + '","shopId":"' + _0x249eda + '","bindByVerifyCodeFlag":1,"registerExtend":{},"writeChildFlag":0' + _0x2155a9 + ',"channel":401}&client=H5&clientVersion=9.2.0&uuid=88888',
        'headers': {
            'Content-Type': _0x863032['NEwNQ'],
            'Origin': _0x863032['BOwry'],
            'Host': _0x863032['miEyG'],
            'accept': _0x863032['AHfQm'],
            'User-Agent': $['UA'],
            'content-type': _0x863032['sUQWq'],
            'Referer': 'https://shopmember.m.jd.com/shopcard/?venderId=' + _0x249eda + '&shopId=' + _0x249eda + '&venderType=5&channel=401&returnUrl=https://lzdz1-isv.isvjcloud.com/dingzhi/dz/openCard/activity?activityId=' + $['activityId'] + '&shareUuid=' + $['shareUuid'],
            'Cookie': cookie
        },
        'timeout': 0x7530
    };
}

function startDraw(_0x2720c9) {
    var _0x2c09b1 = {
        'WKVct': function(_0x4cece5) {
            return _0x4cece5();
        },
        'xnWPo': function(_0x59fbba, _0x51ea76) {
            return _0x59fbba !== _0x51ea76;
        },
        'EXQCP': 'ZFTjG',
        'WoLWy': 'wInif',
        'Jljwp': function(_0x225d30, _0x40f44d) {
            return _0x225d30 === _0x40f44d;
        },
        'Ecaag': 'eXXsr',
        'tiNtE': 'gOnST',
        'rNsbA': function(_0x14ce6f, _0x5543cd) {
            return _0x14ce6f == _0x5543cd;
        },
        'GBgHa': 'object',
        'UOyTX': 'dWygo',
        'TiGRP': '空气💨',
        'zRods': 'csBqh',
        'txjOl': 'JAzde',
        'NENgr': 'sFHFH',
        'tjeHq': 'GLusp',
        'uGFgU': 'NMkjA',
        'rOkSY': function(_0x10143a) {
            return _0x10143a();
        },
        'OXXxa': '此ip已被限制，请过10分钟后再执行脚本\n',
        'YvDUC': function(_0x30b6de, _0x5b116a) {
            return _0x30b6de(_0x5b116a);
        },
        'GOjIA': function(_0x382bb6, _0xcfbf7c, _0x6f551d) {
            return _0x382bb6(_0xcfbf7c, _0x6f551d);
        },
        'ziJiW': '/dingzhi/dz/openCard/startDraw'
    };
    return new Promise(_0x11e857 => {
        var _0x3980f9 = {
            'zpAWQ': _0x2c09b1['OXXxa']
        };
        let _0x19d9b8 = 'activityId=' + $['activityId'] + '&actorUuid=' + $['actorUuid'] + '&pin=' + _0x2c09b1['YvDUC'](encodeURIComponent, $['Pin']) + '&type=' + _0x2720c9;
        $['post'](_0x2c09b1['GOjIA'](taskPostUrl, _0x2c09b1['ziJiW'], _0x19d9b8), async (_0xe9d38d, _0x523424, _0x3d47b4) => {
            var _0x4b7475 = {
                'GLOXz': function(_0x2909a2) {
                    return _0x2c09b1['WKVct'](_0x2909a2);
                }
            };
            if (_0x2c09b1['xnWPo'](_0x2c09b1['EXQCP'], _0x2c09b1['WoLWy'])) {
                try {
                    if (_0xe9d38d) {
                        if (_0x2c09b1['Jljwp'](_0x2c09b1['Ecaag'], _0x2c09b1['tiNtE'])) {
                            _0x4b7475['GLOXz'](_0x11e857);
                        } else {
                            console['log']('' + $['toStr'](_0xe9d38d));
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        }
                    } else {
                        res = $['toObj'](_0x3d47b4);
                        if (_0x2c09b1['rNsbA'](typeof res, _0x2c09b1['GBgHa'])) {
                            if (_0x2c09b1['xnWPo'](_0x2c09b1['UOyTX'], _0x2c09b1['UOyTX'])) {
                                console['log'](_0x3d47b4);
                            } else {
                                if (_0x2c09b1['Jljwp'](res['result'], !![]) && res['data']) {
                                    console['log']('抽奖获得：' + (res['data']['drawOk'] && res['data']['name'] || _0x2c09b1['TiGRP']));
                                } else if (_0x2c09b1['rNsbA'](typeof res, _0x2c09b1['GBgHa']) && res['errorMessage']) {
                                    if (_0x2c09b1['xnWPo'](_0x2c09b1['zRods'], _0x2c09b1['txjOl'])) {
                                        console['log']('抽奖 ' + (res['errorMessage'] || ''));
                                    } else {
                                        $['logErr'](e, _0x523424);
                                    }
                                } else {
                                    if (_0x2c09b1['xnWPo'](_0x2c09b1['NENgr'], _0x2c09b1['NENgr'])) {
                                        console['log'](_0x3980f9['zpAWQ']);
                                        return;
                                    } else {
                                        console['log'](_0x3d47b4);
                                    }
                                }
                            }
                        } else {
                            console['log'](_0x3d47b4);
                        }
                    }
                } catch (_0x2695ba) {
                    if (_0x2c09b1['xnWPo'](_0x2c09b1['tjeHq'], _0x2c09b1['uGFgU'])) {
                        $['logErr'](_0x2695ba, _0x523424);
                    } else {
                        return JSON['parse'](str);
                    }
                } finally {
                    _0x2c09b1['rOkSY'](_0x11e857);
                }
            } else {
                $['logErr'](e, _0x523424);
            }
        });
    });
}

function checkOpenCard() {
    var _0x1f705d = {
        'IKLra': function(_0x33aa88, _0x230eee) {
            return _0x33aa88 > _0x230eee;
        },
        'zaJhc': 'LZ_TOKEN_KEY=',
        'DCmDG': function(_0x4a1bdf, _0x41c91d) {
            return _0x4a1bdf + _0x41c91d;
        },
        'RCJJc': function(_0x49fda9, _0x4f8213) {
            return _0x49fda9 > _0x4f8213;
        },
        'ZLkvz': 'LZ_TOKEN_VALUE=',
        'TKjgG': function(_0x4b1119, _0x107c2e) {
            return _0x4b1119 + _0x107c2e;
        },
        'gfkaX': function(_0x3af5e9, _0x5ee1ef) {
            return _0x3af5e9 === _0x5ee1ef;
        },
        'zQYgK': 'bLztD',
        'dvwTM': function(_0x28fade, _0xb7c624) {
            return _0x28fade !== _0xb7c624;
        },
        'wlhts': 'object',
        'avCzo': function(_0x31f70b, _0x19a2a3) {
            return _0x31f70b !== _0x19a2a3;
        },
        'UDhNT': 'fLFBV',
        'JOtls': 'NsgLG',
        'yoZgt': function(_0x36ba7c, _0x7ea789) {
            return _0x36ba7c(_0x7ea789);
        },
        'BQcdJ': function(_0x3aae42, _0x365595, _0x34c05c) {
            return _0x3aae42(_0x365595, _0x34c05c);
        },
        'SZWFM': '/dingzhi/dz/openCard/checkOpenCard'
    };
    return new Promise(_0xa311a7 => {
        var _0x529253 = {
            'WyIuN': function(_0xdc17bf, _0x5e43ea) {
                return _0x1f705d['IKLra'](_0xdc17bf, _0x5e43ea);
            },
            'hNvlf': _0x1f705d['zaJhc'],
            'Bitnc': function(_0x5e6383, _0x3188c9) {
                return _0x1f705d['DCmDG'](_0x5e6383, _0x3188c9);
            },
            'AXUcV': function(_0x316863, _0x3af13e) {
                return _0x1f705d['RCJJc'](_0x316863, _0x3af13e);
            },
            'HpljU': _0x1f705d['ZLkvz'],
            'RhHky': function(_0x194738, _0x4f1484) {
                return _0x1f705d['TKjgG'](_0x194738, _0x4f1484);
            },
            'PgKiv': function(_0xe36ba6, _0x56605c) {
                return _0x1f705d['gfkaX'](_0xe36ba6, _0x56605c);
            },
            'vaaOt': _0x1f705d['zQYgK'],
            'Esrdg': function(_0x11fccf, _0x3c7e16) {
                return _0x1f705d['dvwTM'](_0x11fccf, _0x3c7e16);
            },
            'xaRuN': _0x1f705d['wlhts'],
            'hywSp': function(_0x1b6bf0, _0x14a93b) {
                return _0x1f705d['avCzo'](_0x1b6bf0, _0x14a93b);
            },
            'uKdtF': _0x1f705d['UDhNT'],
            'lxTED': _0x1f705d['JOtls'],
            'OBzOM': function(_0x33b4b9, _0xa330c1) {
                return _0x1f705d['yoZgt'](_0x33b4b9, _0xa330c1);
            }
        };
        let _0x4653d6 = 'activityId=' + $['activityId'] + '&pin=' + _0x1f705d['yoZgt'](encodeURIComponent, $['Pin']) + '&actorUuid=' + $['actorUuid'] + '&shareUuid=' + $['shareUuid'];
        $['post'](_0x1f705d['BQcdJ'](taskPostUrl, _0x1f705d['SZWFM'], _0x4653d6), async (_0x413f9a, _0x1c2844, _0x535526) => {
            try {
                if (_0x413f9a) {
                    if (_0x529253['PgKiv'](_0x529253['vaaOt'], _0x529253['vaaOt'])) {
                        console['log']('' + $['toStr'](_0x413f9a));
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    } else {
                        $['logErr'](e, _0x1c2844);
                    }
                } else {
                    res = $['toObj'](_0x535526);
                    if (_0x529253['Esrdg'](typeof res, _0x529253['xaRuN'])) {
                        if (_0x529253['hywSp'](_0x529253['uKdtF'], _0x529253['lxTED'])) {
                            console['log'](_0x535526);
                        } else {
                            if (_0x529253['WyIuN'](name['indexOf'](_0x529253['hNvlf']), -0x1)) LZ_TOKEN_KEY = _0x529253['Bitnc'](name['replace'](/ /g, ''), ';');
                            if (_0x529253['AXUcV'](name['indexOf'](_0x529253['HpljU']), -0x1)) LZ_TOKEN_VALUE = _0x529253['RhHky'](name['replace'](/ /g, ''), ';');
                        }
                    }
                }
            } catch (_0x5ec1c8) {
                $['logErr'](_0x5ec1c8, _0x1c2844);
            } finally {
                _0x529253['OBzOM'](_0xa311a7, res && res['data'] || '');
            }
        });
    });
}

function drawContent() {
    var _0x2316df = {
        'RgfOR': function(_0x4c7ec2, _0xbf8b9f) {
            return _0x4c7ec2 === _0xbf8b9f;
        },
        'lGehP': 'qSHXy',
        'qJHnU': 'IzFwh',
        'BwNDS': function(_0x47d453) {
            return _0x47d453();
        },
        'fBFOV': function(_0x2e3449, _0x393dcf) {
            return _0x2e3449 !== _0x393dcf;
        },
        'DzTCi': 'jirDQ',
        'jVybo': 'kEazx',
        'KCtaO': function(_0x28bba6, _0x2faf5c) {
            return _0x28bba6(_0x2faf5c);
        },
        'zjSZI': function(_0x2a559c, _0xa23084, _0x1d8cfe) {
            return _0x2a559c(_0xa23084, _0x1d8cfe);
        },
        'ZFxLD': '/dingzhi/taskact/openCardcommon/drawContent'
    };
    return new Promise(_0x2707b5 => {
        var _0x29fae1 = {
            'wUEAB': function(_0xf7a11d, _0x413fe1) {
                return _0x2316df['RgfOR'](_0xf7a11d, _0x413fe1);
            },
            'qXZCw': _0x2316df['lGehP'],
            'PzFVA': _0x2316df['qJHnU'],
            'JycGc': function(_0x4cb02c) {
                return _0x2316df['BwNDS'](_0x4cb02c);
            }
        };
        if (_0x2316df['fBFOV'](_0x2316df['DzTCi'], _0x2316df['jVybo'])) {
            let _0x5a299e = 'activityId=' + $['activityId'] + '&pin=' + _0x2316df['KCtaO'](encodeURIComponent, $['Pin']);
            $['post'](_0x2316df['zjSZI'](taskPostUrl, _0x2316df['ZFxLD'], _0x5a299e), async (_0x39897c, _0x1f6ebf, _0x481105) => {
                try {
                    if (_0x39897c) {
                        if (_0x29fae1['wUEAB'](_0x29fae1['qXZCw'], _0x29fae1['PzFVA'])) {
                            console['log']('' + (res['message'] || ''));
                        } else {
                            console['log']('' + $['toStr'](_0x39897c));
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        }
                    } else {}
                } catch (_0x172fd4) {
                    $['logErr'](_0x172fd4, _0x1f6ebf);
                } finally {
                    _0x29fae1['JycGc'](_0x2707b5);
                }
            });
        } else {
            console['log'](data);
        }
    });
}

function getActorUuid() {
    var _0x1e6323 = {
        'wqtwB': '此ip已被限制，请过10分钟后再执行脚本\n',
        'gQSwG': function(_0x281616, _0x3bf5ba) {
            return _0x281616 === _0x3bf5ba;
        },
        'xTlZQ': 'false',
        'KicYM': function(_0x566d19, _0x30dfcb) {
            return _0x566d19 !== _0x30dfcb;
        },
        'SeczZ': 'MYOYd',
        'qOwSn': 'wETPJ',
        'TXpwF': function(_0x37a3f0, _0x43d117) {
            return _0x37a3f0 == _0x43d117;
        },
        'CHDkM': function(_0x37b9ba, _0x1807a7) {
            return _0x37b9ba == _0x1807a7;
        },
        'nZbuk': 'object',
        'nFvqz': function(_0x1ed2e8, _0x3fe558) {
            return _0x1ed2e8 !== _0x3fe558;
        },
        'xCtNC': 'NsTzO',
        'ZZCFV': function(_0x42add2, _0x228d22) {
            return _0x42add2 != _0x228d22;
        },
        'tBiAm': 'undefined',
        'bsddd': function(_0x260132, _0x254f59) {
            return _0x260132 != _0x254f59;
        },
        'hGndu': function(_0x405b23, _0x43ea51) {
            return _0x405b23 === _0x43ea51;
        },
        'cXfTX': 'kKGeR',
        'PSzzM': 'eRxos',
        'DDNPc': 'GgvbI',
        'QRnOp': 'iONfQ',
        'OnQcC': 'nkFhd',
        'fRBYr': function(_0x469a47) {
            return _0x469a47();
        },
        'DCqGX': '空气💨',
        'jWEcG': function(_0x156773, _0x23b9b2) {
            return _0x156773(_0x23b9b2);
        },
        'oPMGI': function(_0x19c508, _0x514245) {
            return _0x19c508(_0x514245);
        },
        'maSiS': function(_0x1fc760, _0x2e0667, _0x2b93e2) {
            return _0x1fc760(_0x2e0667, _0x2b93e2);
        },
        'wwIGk': '/dingzhi/dz/openCard/activityContent'
    };
    return new Promise(_0x50e5c2 => {
        var _0x44d3ce = {
            'lTGok': _0x1e6323['DCqGX']
        };
        let _0x3ced8a = 'activityId=' + $['activityId'] + '&pin=' + _0x1e6323['jWEcG'](encodeURIComponent, $['Pin']) + '&pinImg=' + _0x1e6323['oPMGI'](encodeURIComponent, $['attrTouXiang']) + '&nick=' + _0x1e6323['oPMGI'](encodeURIComponent, $['nickname']) + '&cjyxPin=&cjhyPin=&shareUuid=' + $['shareUuid'];
        $['post'](_0x1e6323['maSiS'](taskPostUrl, _0x1e6323['wwIGk'], _0x3ced8a), async (_0x5a425, _0x1e7a5d, _0x55ceb0) => {
            var _0x1f26c1 = {
                'HxOuL': _0x1e6323['wqtwB'],
                'Werda': function(_0x30694a, _0x5f03d7) {
                    return _0x1e6323['gQSwG'](_0x30694a, _0x5f03d7);
                },
                'SJHzH': _0x1e6323['xTlZQ']
            };
            try {
                if (_0x1e6323['KicYM'](_0x1e6323['SeczZ'], _0x1e6323['qOwSn'])) {
                    if (_0x5a425) {
                        if (_0x1e7a5d['statusCode'] && _0x1e6323['TXpwF'](_0x1e7a5d['statusCode'], 0x1ed)) {
                            console['log'](_0x1e6323['wqtwB']);
                            $['outFlag'] = !![];
                        }
                        console['log']('' + $['toStr'](_0x5a425));
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    } else {
                        res = $['toObj'](_0x55ceb0);
                        if (_0x1e6323['CHDkM'](typeof res, _0x1e6323['nZbuk']) && res['result'] && _0x1e6323['gQSwG'](res['result'], !![])) {
                            if (_0x1e6323['nFvqz'](_0x1e6323['xCtNC'], _0x1e6323['xCtNC'])) {
                                console['log'](_0x1f26c1['HxOuL']);
                                $['outFlag'] = !![];
                            } else {
                                if (_0x1e6323['ZZCFV'](typeof res['data']['followShop']['allStatus'], _0x1e6323['tBiAm'])) $['followShop'] = res['data']['followShop']['allStatus'];
                                if (_0x1e6323['ZZCFV'](typeof res['data']['addSku']['allStatus'], _0x1e6323['tBiAm'])) $['addSku'] = res['data']['addSku']['allStatus'];
                                if (_0x1e6323['bsddd'](typeof res['data']['actorUuid'], _0x1e6323['tBiAm'])) $['actorUuid'] = res['data']['actorUuid'];
                            }
                        } else if (_0x1e6323['CHDkM'](typeof res, _0x1e6323['nZbuk']) && res['errorMessage']) {
                            if (_0x1e6323['hGndu'](_0x1e6323['cXfTX'], _0x1e6323['PSzzM'])) {
                                console['log']('抽奖获得：' + (res['data']['drawOk'] && res['data']['name'] || _0x44d3ce['lTGok']));
                            } else {
                                console['log']('activityContent ' + (res['errorMessage'] || ''));
                            }
                        } else {
                            console['log'](_0x55ceb0);
                        }
                    }
                } else {
                    $['logErr'](e, _0x1e7a5d);
                }
            } catch (_0x4c4184) {
                if (_0x1e6323['hGndu'](_0x1e6323['DDNPc'], _0x1e6323['QRnOp'])) {
                    Object['keys'](jdCookieNode)['forEach'](_0x2cd16d => {
                        cookiesArr['push'](jdCookieNode[_0x2cd16d]);
                    });
                    if (process['env']['JD_DEBUG'] && _0x1f26c1['Werda'](process['env']['JD_DEBUG'], _0x1f26c1['SJHzH'])) console['log'] = () => {};
                } else {
                    $['logErr'](_0x4c4184, _0x1e7a5d);
                }
            } finally {
                if (_0x1e6323['hGndu'](_0x1e6323['OnQcC'], _0x1e6323['OnQcC'])) {
                    _0x1e6323['fRBYr'](_0x50e5c2);
                } else {
                    $['logErr'](e, _0x1e7a5d);
                }
            }
        });
    });
}

function getUserInfo() {
    var _0x1f7b55 = {
        'rZUgF': function(_0x139ef4, _0x526cde) {
            return _0x139ef4 === _0x526cde;
        },
        'mjIaR': 'pqdkB',
        'fVpom': 'EZCes',
        'IoLPT': function(_0x111b36, _0x43f2c0) {
            return _0x111b36 === _0x43f2c0;
        },
        'UfoNm': 'gZpGS',
        'CeUhm': 'Hrczk',
        'tdBGS': function(_0xf4285b, _0x3b531e) {
            return _0xf4285b == _0x3b531e;
        },
        'RuFgP': 'object',
        'eSqGK': function(_0xd005ab, _0x1e1b63) {
            return _0xd005ab !== _0x1e1b63;
        },
        'jneWp': 'LXiaN',
        'EzQwT': 'HmMSt',
        'dfoQD': function(_0x4eb867, _0xe9b8) {
            return _0x4eb867 != _0xe9b8;
        },
        'PmuPU': 'undefined',
        'AQdji': 'https://img10.360buyimg.com/imgzone/jfs/t1/7020/27/13511/6142/5c5138d8E4df2e764/5a1216a3a5043c5d.png',
        'Ifego': function(_0x45f066, _0x29e966) {
            return _0x45f066 == _0x29e966;
        },
        'MjQwn': 'ECpRq',
        'GYbtH': function(_0x68971) {
            return _0x68971();
        },
        'UmxpN': '空气💨',
        'Blgyx': function(_0x1b68b2, _0x41ad58) {
            return _0x1b68b2 == _0x41ad58;
        },
        'aqJQS': function(_0x248628, _0x3a279d) {
            return _0x248628(_0x3a279d);
        },
        'VcMEZ': function(_0x20a985, _0x561cd8, _0x322db5) {
            return _0x20a985(_0x561cd8, _0x322db5);
        },
        'WXCNu': '/wxActionCommon/getUserInfo'
    };
    return new Promise(_0xfb7daf => {
        var _0xb42604 = {
            'ZLODn': function(_0x2075f4, _0x2300bd) {
                return _0x1f7b55['IoLPT'](_0x2075f4, _0x2300bd);
            },
            'PLcbV': _0x1f7b55['UmxpN'],
            'Aknbu': function(_0x58aca9, _0x357f7d) {
                return _0x1f7b55['Blgyx'](_0x58aca9, _0x357f7d);
            },
            'CYXiq': _0x1f7b55['RuFgP']
        };
        let _0xf3d3b7 = 'pin=' + _0x1f7b55['aqJQS'](encodeURIComponent, $['Pin']);
        $['post'](_0x1f7b55['VcMEZ'](taskPostUrl, _0x1f7b55['WXCNu'], _0xf3d3b7), async (_0x598b6f, _0x4781c9, _0x3f84de) => {
            if (_0x1f7b55['rZUgF'](_0x1f7b55['mjIaR'], _0x1f7b55['fVpom'])) {
                if (_0xb42604['ZLODn'](res['result'], !![]) && res['data']) {
                    console['log']('抽奖获得：' + (res['data']['drawOk'] && res['data']['name'] || _0xb42604['PLcbV']));
                } else if (_0xb42604['Aknbu'](typeof res, _0xb42604['CYXiq']) && res['errorMessage']) {
                    console['log']('抽奖 ' + (res['errorMessage'] || ''));
                } else {
                    console['log'](_0x3f84de);
                }
            } else {
                try {
                    if (_0x598b6f) {
                        console['log']('' + $['toStr'](_0x598b6f));
                        console['log']($['name'] + ' getUserInfo API请求失败，请检查网路重试');
                    } else {
                        if (_0x1f7b55['IoLPT'](_0x1f7b55['UfoNm'], _0x1f7b55['CeUhm'])) {
                            console['log']('' + $['toStr'](_0x598b6f));
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        } else {
                            res = $['toObj'](_0x3f84de);
                            if (_0x1f7b55['tdBGS'](typeof res, _0x1f7b55['RuFgP']) && res['result'] && _0x1f7b55['IoLPT'](res['result'], !![])) {
                                if (_0x1f7b55['eSqGK'](_0x1f7b55['jneWp'], _0x1f7b55['EzQwT'])) {
                                    if (res['data'] && _0x1f7b55['dfoQD'](typeof res['data']['yunMidImageUrl'], _0x1f7b55['PmuPU'])) $['attrTouXiang'] = res['data']['yunMidImageUrl'] || _0x1f7b55['AQdji'];
                                } else {
                                    console['log']('' + $['toStr'](_0x598b6f));
                                    console['log']($['name'] + ' API请求失败，请检查网路重试');
                                }
                            } else if (_0x1f7b55['Ifego'](typeof res, _0x1f7b55['RuFgP']) && res['errorMessage']) {
                                if (_0x1f7b55['eSqGK'](_0x1f7b55['MjQwn'], _0x1f7b55['MjQwn'])) {
                                    console['log'](_0x3f84de);
                                } else {
                                    console['log']('getUserInfo ' + (res['errorMessage'] || ''));
                                }
                            } else {
                                console['log'](_0x3f84de);
                            }
                        }
                    }
                } catch (_0x4157f3) {
                    $['logErr'](_0x4157f3, _0x4781c9);
                } finally {
                    _0x1f7b55['GYbtH'](_0xfb7daf);
                }
            }
        });
    });
}

function accessLogWithAD() {
    var _0x2c0a77 = {
        'ntuFn': 'headers',
        'WpVrW': 'set-cookie',
        'BKCRO': 'Set-Cookie',
        'vuGCn': function(_0x43c9d0, _0x5b881a) {
            return _0x43c9d0 != _0x5b881a;
        },
        'IAyxt': 'object',
        'DZoem': function(_0x1e434f, _0x12496e) {
            return _0x1e434f > _0x12496e;
        },
        'zATyg': 'LZ_TOKEN_KEY=',
        'dqmTi': function(_0x80d0de, _0xa22b7b) {
            return _0x80d0de + _0xa22b7b;
        },
        'pULEL': function(_0x5bbba7, _0x3a8ea7) {
            return _0x5bbba7 > _0x3a8ea7;
        },
        'yHzPp': 'LZ_TOKEN_VALUE=',
        'jIBpE': function(_0x127ffa, _0x3b6d8c) {
            return _0x127ffa && _0x3b6d8c;
        },
        'EjWGV': function(_0x5ef3d3, _0x5102db) {
            return _0x5ef3d3 === _0x5102db;
        },
        'PDFfH': 'REFDC',
        'hnMqy': 'OGxLh',
        'JxDSr': function(_0x4301c0) {
            return _0x4301c0();
        },
        'qgHSV': function(_0x5cdd8e, _0x2f16d4) {
            return _0x5cdd8e(_0x2f16d4);
        },
        'hnrsp': function(_0xf28faa, _0x35282e) {
            return _0xf28faa(_0x35282e);
        },
        'DYZTi': function(_0x453394, _0x52e4cc, _0x44e855) {
            return _0x453394(_0x52e4cc, _0x44e855);
        },
        'vKfId': '/common/accessLogWithAD'
    };
    return new Promise(_0x19c43b => {
        var _0x28bddc = {
            'WtAnL': _0x2c0a77['ntuFn'],
            'kJNIB': _0x2c0a77['WpVrW'],
            'zJZtP': _0x2c0a77['BKCRO'],
            'QLcPi': function(_0x40a041, _0x35279f) {
                return _0x2c0a77['vuGCn'](_0x40a041, _0x35279f);
            },
            'UOgIn': _0x2c0a77['IAyxt'],
            'XCpzj': function(_0x26f8b2, _0x49b523) {
                return _0x2c0a77['DZoem'](_0x26f8b2, _0x49b523);
            },
            'adWDP': _0x2c0a77['zATyg'],
            'oqlOv': function(_0xdd11cb, _0x53ccec) {
                return _0x2c0a77['dqmTi'](_0xdd11cb, _0x53ccec);
            },
            'nNCQz': function(_0x17ba02, _0x23f842) {
                return _0x2c0a77['pULEL'](_0x17ba02, _0x23f842);
            },
            'JarGU': _0x2c0a77['yHzPp'],
            'zPqEa': function(_0xee7f9f, _0x5b98d1) {
                return _0x2c0a77['jIBpE'](_0xee7f9f, _0x5b98d1);
            },
            'gsqbt': function(_0x317809, _0x4635c3) {
                return _0x2c0a77['EjWGV'](_0x317809, _0x4635c3);
            },
            'CVeAT': _0x2c0a77['PDFfH'],
            'GsPgC': _0x2c0a77['hnMqy'],
            'KFmah': function(_0x401474) {
                return _0x2c0a77['JxDSr'](_0x401474);
            }
        };
        let _0x3837e7 = 'https://lzdz1-isv.isvjcloud.com/dingzhi/dz/openCard/activity?activityId=' + $['activityId'] + '&shareUuid=' + $['shareUuid'];
        let _0x2be7b2 = 'venderId=' + ($['shopId'] || $['venderId']) + '&code=99&pin=' + _0x2c0a77['qgHSV'](encodeURIComponent, $['Pin']) + '&activityId=' + $['activityId'] + '&pageUrl=' + _0x2c0a77['hnrsp'](encodeURIComponent, _0x3837e7) + '&subType=APP&adSource=null';
        $['post'](_0x2c0a77['DYZTi'](taskPostUrl, _0x2c0a77['vKfId'], _0x2be7b2), async (_0x16c415, _0x7e29ec, _0x599538) => {
            try {
                if (_0x16c415) {
                    console['log']('' + $['toStr'](_0x16c415));
                    console['log']($['name'] + ' API请求失败，请检查网路重试');
                } else {
                    let _0x463430 = '';
                    let _0x2df720 = '';
                    let _0x529a2e = _0x7e29ec[_0x28bddc['WtAnL']][_0x28bddc['kJNIB']] || _0x7e29ec[_0x28bddc['WtAnL']][_0x28bddc['zJZtP']] || '';
                    let _0x330dc0 = '';
                    if (_0x529a2e) {
                        if (_0x28bddc['QLcPi'](typeof _0x529a2e, _0x28bddc['UOgIn'])) {
                            _0x330dc0 = _0x529a2e['split'](',');
                        } else _0x330dc0 = _0x529a2e;
                        for (let _0x53a2bd of _0x330dc0) {
                            let _0x9ec37b = _0x53a2bd['split'](';')[0x0]['trim']();
                            if (_0x9ec37b['split']('=')[0x1]) {
                                if (_0x28bddc['XCpzj'](_0x9ec37b['indexOf'](_0x28bddc['adWDP']), -0x1)) _0x463430 = _0x28bddc['oqlOv'](_0x9ec37b['replace'](/ /g, ''), ';');
                                if (_0x28bddc['nNCQz'](_0x9ec37b['indexOf'](_0x28bddc['JarGU']), -0x1)) _0x2df720 = _0x28bddc['oqlOv'](_0x9ec37b['replace'](/ /g, ''), ';');
                            }
                        }
                    }
                    if (_0x28bddc['zPqEa'](_0x463430, _0x2df720)) activityCookie = _0x463430 + ' ' + _0x2df720;
                }
            } catch (_0x5b3907) {
                if (_0x28bddc['gsqbt'](_0x28bddc['CVeAT'], _0x28bddc['GsPgC'])) {
                    console['log'](_0x599538);
                } else {
                    $['logErr'](_0x5b3907, _0x7e29ec);
                }
            } finally {
                _0x28bddc['KFmah'](_0x19c43b);
            }
        });
    });
}

function getMyPing() {
    var _0x785ca3 = {
        'wEtDX': function(_0x3e1e2a, _0x5355ac) {
            return _0x3e1e2a || _0x5355ac;
        },
        'tUron': '空气💨',
        'AQLxc': function(_0x330fb1) {
            return _0x330fb1();
        },
        'nlRtU': '【提示】请先获取cookie\n直接使用NobyDa的京东签到获取',
        'WBayj': 'https://bean.m.jd.com/',
        'RqYZx': function(_0x4fcf71, _0x4369e1) {
            return _0x4fcf71 === _0x4369e1;
        },
        'NKVFR': 'loRMR',
        'UtWnC': function(_0x146065, _0x125956) {
            return _0x146065 === _0x125956;
        },
        'gtnWP': 'ImNaU',
        'JjNlR': 'lNwsv',
        'ZMwLx': function(_0x55b35e, _0x13d35b) {
            return _0x55b35e == _0x13d35b;
        },
        'RPGOB': function(_0x34140e, _0x34c0f9) {
            return _0x34140e === _0x34c0f9;
        },
        'IFqeu': 'hfFIi',
        'VxLVv': 'JmXtI',
        'ZClRX': '此ip已被限制，请过10分钟后再执行脚本\n',
        'YYTns': 'baTPn',
        'Xeuyj': 'headers',
        'oqOSv': 'set-cookie',
        'zOVef': 'Set-Cookie',
        'ZJUUq': function(_0x22f40b, _0x36ce7f) {
            return _0x22f40b != _0x36ce7f;
        },
        'YAKpz': 'object',
        'olIAN': function(_0x1a7c6b, _0x4c75cc) {
            return _0x1a7c6b > _0x4c75cc;
        },
        'iBOBN': 'lz_jdpin_token=',
        'OYLCm': function(_0x55dc6b, _0x5b72a8) {
            return _0x55dc6b + _0x5b72a8;
        },
        'KxbDi': 'LZ_TOKEN_KEY=',
        'VaWma': function(_0x3aec41, _0x221c72) {
            return _0x3aec41 + _0x221c72;
        },
        'syYyf': 'LZ_TOKEN_VALUE=',
        'DMiaL': function(_0x4f32c1, _0x193a4c) {
            return _0x4f32c1 + _0x193a4c;
        },
        'iLpil': function(_0x364897, _0x5318d3) {
            return _0x364897 && _0x5318d3;
        },
        'gdEqg': 'undefined',
        'urSpA': function(_0x1452a4, _0x584139) {
            return _0x1452a4 == _0x584139;
        },
        'vVfBT': 'WIBxw',
        'GwvDe': 'LwQZf',
        'fyjNI': function(_0x156d06, _0x1d9e03) {
            return _0x156d06 === _0x1d9e03;
        },
        'ieOwt': 'YeFyA',
        'nfoxN': 'pHsLE',
        'BnHjg': function(_0x220f6a, _0x2f3b42, _0x680617) {
            return _0x220f6a(_0x2f3b42, _0x680617);
        },
        'hLqJh': '/customer/getMyPing'
    };
    return new Promise(_0x35f3c5 => {
        var _0xe35176 = {
            'cyskd': function(_0x4ec4ad) {
                return _0x785ca3['AQLxc'](_0x4ec4ad);
            },
            'CEVKg': _0x785ca3['nlRtU'],
            'FZZpC': _0x785ca3['WBayj'],
            'gwwxx': function(_0xc5dd4f, _0x273dd2) {
                return _0x785ca3['RqYZx'](_0xc5dd4f, _0x273dd2);
            },
            'IFdwT': _0x785ca3['NKVFR'],
            'ZprVK': function(_0x16abee, _0xfea475) {
                return _0x785ca3['UtWnC'](_0x16abee, _0xfea475);
            },
            'pHOjU': _0x785ca3['gtnWP'],
            'xMamT': _0x785ca3['JjNlR'],
            'VXcAP': function(_0x418711, _0x286374) {
                return _0x785ca3['ZMwLx'](_0x418711, _0x286374);
            },
            'UswUe': function(_0x4fd882, _0x51eb2f) {
                return _0x785ca3['RPGOB'](_0x4fd882, _0x51eb2f);
            },
            'MwAhf': _0x785ca3['IFqeu'],
            'CpuQC': _0x785ca3['VxLVv'],
            'EWBPe': _0x785ca3['ZClRX'],
            'EngQq': _0x785ca3['YYTns'],
            'bvGfg': _0x785ca3['Xeuyj'],
            'lacoO': _0x785ca3['oqOSv'],
            'shxtP': _0x785ca3['zOVef'],
            'EKetb': function(_0x133451, _0x828c65) {
                return _0x785ca3['ZJUUq'](_0x133451, _0x828c65);
            },
            'qBbLj': _0x785ca3['YAKpz'],
            'YFMfi': function(_0x203c42, _0x508bf4) {
                return _0x785ca3['olIAN'](_0x203c42, _0x508bf4);
            },
            'fAHcY': _0x785ca3['iBOBN'],
            'PKKws': function(_0x57128b, _0x57620a) {
                return _0x785ca3['OYLCm'](_0x57128b, _0x57620a);
            },
            'aHyaC': function(_0x39350c, _0x329c67) {
                return _0x785ca3['olIAN'](_0x39350c, _0x329c67);
            },
            'UxpoE': _0x785ca3['KxbDi'],
            'LyoFX': function(_0xb39076, _0xd84e) {
                return _0x785ca3['VaWma'](_0xb39076, _0xd84e);
            },
            'hebCX': _0x785ca3['syYyf'],
            'Bvhgm': function(_0xd56a43, _0x5e66c7) {
                return _0x785ca3['DMiaL'](_0xd56a43, _0x5e66c7);
            },
            'RRTVI': function(_0x2a4fba, _0xf7137f) {
                return _0x785ca3['iLpil'](_0x2a4fba, _0xf7137f);
            },
            'iuGNK': _0x785ca3['gdEqg'],
            'nkKbu': function(_0x25e1cc, _0x400863) {
                return _0x785ca3['urSpA'](_0x25e1cc, _0x400863);
            },
            'HvTtV': function(_0x9632dc, _0x5a017e) {
                return _0x785ca3['RPGOB'](_0x9632dc, _0x5a017e);
            },
            'rntwP': _0x785ca3['vVfBT'],
            'FFxQR': _0x785ca3['GwvDe']
        };
        if (_0x785ca3['fyjNI'](_0x785ca3['ieOwt'], _0x785ca3['nfoxN'])) {
            let _0x3bd7d2 = '';
            if (res['data']['addBeanNum']) {
                _0x3bd7d2 = res['data']['addBeanNum'] + '京豆';
            }
            if (res['data']['beanNumMember'] && res['data']['assistSendStatus']) {
                _0x3bd7d2 += ' 额外获得:' + res['data']['beanNumMember'] + '京豆';
            }
            console['log']('关注获得：' + _0x785ca3['wEtDX'](_0x3bd7d2, _0x785ca3['tUron']));
        } else {
            let _0x404df6 = 'userId=' + ($['shopId'] || $['venderId']) + '&token=' + $['Token'] + '&fromType=APP';
            $['post'](_0x785ca3['BnHjg'](taskPostUrl, _0x785ca3['hLqJh'], _0x404df6), async (_0x336f69, _0x293aed, _0x17e857) => {
                if (_0xe35176['gwwxx'](_0xe35176['IFdwT'], _0xe35176['IFdwT'])) {
                    try {
                        if (_0xe35176['ZprVK'](_0xe35176['pHOjU'], _0xe35176['xMamT'])) {
                            setcookie = setcookies['split'](',');
                        } else {
                            if (_0x336f69) {
                                if (_0x293aed['statusCode'] && _0xe35176['VXcAP'](_0x293aed['statusCode'], 0x1ed)) {
                                    if (_0xe35176['UswUe'](_0xe35176['MwAhf'], _0xe35176['CpuQC'])) {
                                        if (_0x336f69) {
                                            console['log']('' + $['toStr'](_0x336f69));
                                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                                        } else {}
                                    } else {
                                        console['log'](_0xe35176['EWBPe']);
                                        $['outFlag'] = !![];
                                    }
                                }
                                console['log']('' + $['toStr'](_0x336f69));
                                console['log']($['name'] + ' getMyPing API请求失败，请检查网路重试');
                            } else {
                                if (_0xe35176['UswUe'](_0xe35176['EngQq'], _0xe35176['EngQq'])) {
                                    let _0xcf90ef = '';
                                    let _0x483968 = '';
                                    let _0x265e6b = _0x293aed[_0xe35176['bvGfg']][_0xe35176['lacoO']] || _0x293aed[_0xe35176['bvGfg']][_0xe35176['shxtP']] || '';
                                    let _0x13b818 = '';
                                    if (_0x265e6b) {
                                        if (_0xe35176['EKetb'](typeof _0x265e6b, _0xe35176['qBbLj'])) {
                                            _0x13b818 = _0x265e6b['split'](',');
                                        } else _0x13b818 = _0x265e6b;
                                        for (let _0x3d684b of _0x13b818) {
                                            let _0x36bf8b = _0x3d684b['split'](';')[0x0]['trim']();
                                            if (_0x36bf8b['split']('=')[0x1]) {
                                                if (_0xe35176['YFMfi'](_0x36bf8b['indexOf'](_0xe35176['fAHcY']), -0x1)) lz_jdpin_token = _0xe35176['PKKws'](_0x36bf8b['replace'](/ /g, ''), ';');
                                                if (_0xe35176['aHyaC'](_0x36bf8b['indexOf'](_0xe35176['UxpoE']), -0x1)) _0xcf90ef = _0xe35176['LyoFX'](_0x36bf8b['replace'](/ /g, ''), ';');
                                                if (_0xe35176['aHyaC'](_0x36bf8b['indexOf'](_0xe35176['hebCX']), -0x1)) _0x483968 = _0xe35176['Bvhgm'](_0x36bf8b['replace'](/ /g, ''), ';');
                                            }
                                        }
                                    }
                                    if (_0xe35176['RRTVI'](_0xcf90ef, _0x483968)) activityCookie = _0xcf90ef + ' ' + _0x483968;
                                    let _0xf546a = $['toObj'](_0x17e857);
                                    if (_0xe35176['VXcAP'](typeof _0xf546a, _0xe35176['qBbLj']) && _0xf546a['result'] && _0xe35176['UswUe'](_0xf546a['result'], !![])) {
                                        if (_0xf546a['data'] && _0xe35176['EKetb'](typeof _0xf546a['data']['secretPin'], _0xe35176['iuGNK'])) $['Pin'] = _0xf546a['data']['secretPin'];
                                        if (_0xf546a['data'] && _0xe35176['EKetb'](typeof _0xf546a['data']['nickname'], _0xe35176['iuGNK'])) $['nickname'] = _0xf546a['data']['nickname'];
                                    } else if (_0xe35176['nkKbu'](typeof _0xf546a, _0xe35176['qBbLj']) && _0xf546a['errorMessage']) {
                                        console['log']('getMyPing ' + (_0xf546a['errorMessage'] || ''));
                                    } else {
                                        console['log'](_0x17e857);
                                    }
                                } else {
                                    _0xe35176['cyskd'](_0x35f3c5);
                                }
                            }
                        }
                    } catch (_0x36e5db) {
                        if (_0xe35176['HvTtV'](_0xe35176['rntwP'], _0xe35176['FFxQR'])) {
                            $['msg']($['name'], _0xe35176['CEVKg'], _0xe35176['FZZpC'], {
                                'open-url': _0xe35176['FZZpC']
                            });
                            return;
                        } else {
                            $['logErr'](_0x36e5db, _0x293aed);
                        }
                    } finally {
                        _0xe35176['cyskd'](_0x35f3c5);
                    }
                } else {
                    $['logErr'](e, _0x293aed);
                }
            });
        }
    });
}

function getSimpleActInfoVo() {
    var _0x52cde9 = {
        'zwBEk': function(_0x5059f1, _0x4ce4a2) {
            return _0x5059f1 == _0x4ce4a2;
        },
        'BpQMb': '此ip已被限制，请过10分钟后再执行脚本\n',
        'qESZw': function(_0x57229c, _0x41bdfc) {
            return _0x57229c != _0x41bdfc;
        },
        'hylOJ': 'object',
        'PzMTD': function(_0x4ce6e7, _0x14dd8c) {
            return _0x4ce6e7 > _0x14dd8c;
        },
        'sDpUX': 'lz_jdpin_token=',
        'EDWTA': function(_0x5a0844, _0x1d3b97) {
            return _0x5a0844 + _0x1d3b97;
        },
        'BRRnr': 'LZ_TOKEN_KEY=',
        'DmJTq': 'LZ_TOKEN_VALUE=',
        'UrWNE': 'undefined',
        'TNDuw': function(_0x214533, _0x1b27ab) {
            return _0x214533 != _0x1b27ab;
        },
        'WoHft': function(_0x359e32, _0x3e5eab) {
            return _0x359e32 === _0x3e5eab;
        },
        'xrZzZ': 'ZeBLU',
        'ReJna': 'SqbDG',
        'niQPh': 'BbWoM',
        'anHOS': 'gVJam',
        'nlQEY': function(_0x18a92e, _0x3e5c73) {
            return _0x18a92e !== _0x3e5c73;
        },
        'ParCV': 'DevrG',
        'yhbqI': 'PIfJR',
        'CyEJE': function(_0x2c580d, _0x53748b) {
            return _0x2c580d === _0x53748b;
        },
        'zGIDL': 'cfZUH',
        'mHQsk': 'UmwBc',
        'hCrsz': function(_0x166d4c, _0x1c3334) {
            return _0x166d4c == _0x1c3334;
        },
        'PRVmw': function(_0x54d93f) {
            return _0x54d93f();
        },
        'HpmbR': function(_0x3e610b, _0x309c82, _0x169bc0) {
            return _0x3e610b(_0x309c82, _0x169bc0);
        },
        'NOQJs': '/dz/common/getSimpleActInfoVo'
    };
    return new Promise(_0x38e71c => {
        var _0xf44ff = {
            'kydEZ': function(_0x54d4f9, _0x5d8618) {
                return _0x52cde9['zwBEk'](_0x54d4f9, _0x5d8618);
            },
            'rPcFy': _0x52cde9['BpQMb'],
            'mVtQS': function(_0x34f786, _0x4b3891) {
                return _0x52cde9['qESZw'](_0x34f786, _0x4b3891);
            },
            'yrerz': _0x52cde9['hylOJ'],
            'jMgSU': function(_0x1129be, _0x249f49) {
                return _0x52cde9['PzMTD'](_0x1129be, _0x249f49);
            },
            'WAveO': _0x52cde9['sDpUX'],
            'lyvsF': function(_0x30b01f, _0x294525) {
                return _0x52cde9['EDWTA'](_0x30b01f, _0x294525);
            },
            'bQxux': _0x52cde9['BRRnr'],
            'GDxBj': _0x52cde9['DmJTq'],
            'ZygmL': _0x52cde9['UrWNE'],
            'ncxIj': function(_0x61ca9e, _0x3a2715) {
                return _0x52cde9['TNDuw'](_0x61ca9e, _0x3a2715);
            },
            'toYwY': function(_0x3e9962, _0x147d44) {
                return _0x52cde9['WoHft'](_0x3e9962, _0x147d44);
            },
            'PQmNl': _0x52cde9['xrZzZ'],
            'GBZDc': _0x52cde9['ReJna'],
            'enXaD': _0x52cde9['niQPh'],
            'NiJsu': _0x52cde9['anHOS'],
            'fhQhJ': function(_0x2240c9, _0x55ac11) {
                return _0x52cde9['nlQEY'](_0x2240c9, _0x55ac11);
            },
            'VPuBD': _0x52cde9['ParCV'],
            'UAzKr': _0x52cde9['yhbqI'],
            'EWHDE': function(_0x13d2af, _0x592443) {
                return _0x52cde9['CyEJE'](_0x13d2af, _0x592443);
            },
            'cnntJ': _0x52cde9['zGIDL'],
            'jsBKd': _0x52cde9['mHQsk'],
            'DaifM': function(_0x2a534e, _0x3f4cc4) {
                return _0x52cde9['TNDuw'](_0x2a534e, _0x3f4cc4);
            },
            'oRsiS': function(_0x4bc770, _0x416458) {
                return _0x52cde9['TNDuw'](_0x4bc770, _0x416458);
            },
            'WwtFi': function(_0x4c519f, _0x5048ba) {
                return _0x52cde9['hCrsz'](_0x4c519f, _0x5048ba);
            },
            'NUQHB': function(_0xe271c3) {
                return _0x52cde9['PRVmw'](_0xe271c3);
            }
        };
        let _0x415b16 = 'activityId=' + $['activityId'];
        $['post'](_0x52cde9['HpmbR'](taskPostUrl, _0x52cde9['NOQJs'], _0x415b16), async (_0x34de62, _0x32cd76, _0x5f9151) => {
            var _0x44ff4d = {
                'EsvpZ': function(_0x389fcd, _0x1f85d6) {
                    return _0xf44ff['mVtQS'](_0x389fcd, _0x1f85d6);
                },
                'BPzep': _0xf44ff['yrerz'],
                'KqWDL': function(_0x1e0f1b, _0x42be69) {
                    return _0xf44ff['jMgSU'](_0x1e0f1b, _0x42be69);
                },
                'RAEKV': _0xf44ff['WAveO'],
                'YNBTG': function(_0x1f633e, _0x2619f0) {
                    return _0xf44ff['lyvsF'](_0x1f633e, _0x2619f0);
                },
                'bRefU': _0xf44ff['bQxux'],
                'rSsPj': _0xf44ff['GDxBj'],
                'YOJps': function(_0x2430a6, _0x53f41e) {
                    return _0xf44ff['lyvsF'](_0x2430a6, _0x53f41e);
                },
                'dQUyf': _0xf44ff['rPcFy'],
                'OoxfL': _0xf44ff['ZygmL'],
                'TUGui': function(_0xb57797, _0x5cc229) {
                    return _0xf44ff['ncxIj'](_0xb57797, _0x5cc229);
                },
                'VEBds': function(_0xd037ed, _0x185969) {
                    return _0xf44ff['ncxIj'](_0xd037ed, _0x185969);
                }
            };
            if (_0xf44ff['toYwY'](_0xf44ff['PQmNl'], _0xf44ff['GBZDc'])) {
                if (_0x44ff4d['EsvpZ'](typeof setcookies, _0x44ff4d['BPzep'])) {
                    setcookie = setcookies['split'](',');
                } else setcookie = setcookies;
                for (let _0x5e7002 of setcookie) {
                    let _0x44b76d = _0x5e7002['split'](';')[0x0]['trim']();
                    if (_0x44b76d['split']('=')[0x1]) {
                        if (_0x44ff4d['KqWDL'](_0x44b76d['indexOf'](_0x44ff4d['RAEKV']), -0x1)) lz_jdpin_token = _0x44ff4d['YNBTG'](_0x44b76d['replace'](/ /g, ''), ';');
                        if (_0x44ff4d['KqWDL'](_0x44b76d['indexOf'](_0x44ff4d['bRefU']), -0x1)) LZ_TOKEN_KEY = _0x44ff4d['YNBTG'](_0x44b76d['replace'](/ /g, ''), ';');
                        if (_0x44ff4d['KqWDL'](_0x44b76d['indexOf'](_0x44ff4d['rSsPj']), -0x1)) LZ_TOKEN_VALUE = _0x44ff4d['YOJps'](_0x44b76d['replace'](/ /g, ''), ';');
                    }
                }
            } else {
                try {
                    if (_0x34de62) {
                        if (_0xf44ff['toYwY'](_0xf44ff['enXaD'], _0xf44ff['NiJsu'])) {
                            console['log'](_0x44ff4d['dQUyf']);
                            $['outFlag'] = !![];
                        } else {
                            if (_0x32cd76['statusCode'] && _0xf44ff['kydEZ'](_0x32cd76['statusCode'], 0x1ed)) {
                                if (_0xf44ff['fhQhJ'](_0xf44ff['VPuBD'], _0xf44ff['UAzKr'])) {
                                    console['log'](_0xf44ff['rPcFy']);
                                    $['outFlag'] = !![];
                                } else {
                                    if (_0x44ff4d['EsvpZ'](typeof res['data']['followShop']['allStatus'], _0x44ff4d['OoxfL'])) $['followShop'] = res['data']['followShop']['allStatus'];
                                    if (_0x44ff4d['TUGui'](typeof res['data']['addSku']['allStatus'], _0x44ff4d['OoxfL'])) $['addSku'] = res['data']['addSku']['allStatus'];
                                    if (_0x44ff4d['VEBds'](typeof res['data']['actorUuid'], _0x44ff4d['OoxfL'])) $['actorUuid'] = res['data']['actorUuid'];
                                }
                            }
                            console['log']('' + JSON['stringify'](_0x34de62));
                            console['log']($['name'] + ' getSimpleActInfoVo API请求失败，请检查网路重试');
                        }
                    } else {
                        if (_0xf44ff['EWHDE'](_0xf44ff['cnntJ'], _0xf44ff['cnntJ'])) {
                            res = $['toObj'](_0x5f9151);
                            if (_0xf44ff['kydEZ'](typeof res, _0xf44ff['yrerz']) && res['result'] && _0xf44ff['EWHDE'](res['result'], !![])) {
                                if (_0xf44ff['EWHDE'](_0xf44ff['jsBKd'], _0xf44ff['jsBKd'])) {
                                    if (_0xf44ff['DaifM'](typeof res['data']['shopId'], _0xf44ff['ZygmL'])) $['shopId'] = res['data']['shopId'];
                                    if (_0xf44ff['oRsiS'](typeof res['data']['venderId'], _0xf44ff['ZygmL'])) $['venderId'] = res['data']['venderId'];
                                } else {
                                    if (_0x32cd76['statusCode'] && _0xf44ff['kydEZ'](_0x32cd76['statusCode'], 0x1ed)) {
                                        console['log'](_0xf44ff['rPcFy']);
                                        $['outFlag'] = !![];
                                    }
                                    console['log']('' + JSON['stringify'](_0x34de62));
                                    console['log']($['name'] + ' getSimpleActInfoVo API请求失败，请检查网路重试');
                                }
                            } else if (_0xf44ff['WwtFi'](typeof res, _0xf44ff['yrerz']) && res['errorMessage']) {
                                console['log']('getSimpleActInfoVo ' + (res['errorMessage'] || ''));
                            } else {
                                console['log'](_0x5f9151);
                            }
                        } else {
                            console['log'](_0x5f9151);
                        }
                    }
                } catch (_0x57ad8b) {
                    $['logErr'](_0x57ad8b, _0x32cd76);
                } finally {
                    _0xf44ff['NUQHB'](_0x38e71c);
                }
            }
        });
    });
}

function getToken() {
    var _0x545ca8 = {
        'UeGRR': function(_0x226700, _0x267d3f) {
            return _0x226700 !== _0x267d3f;
        },
        'xgozE': 'object',
        'BRMPq': function(_0x44c5ef, _0x43012e) {
            return _0x44c5ef == _0x43012e;
        },
        'lcYYA': function(_0x3ed351, _0x115590) {
            return _0x3ed351 == _0x115590;
        },
        'eIqWb': function(_0x201f06, _0x4af82f) {
            return _0x201f06 != _0x4af82f;
        },
        'fKIiJ': 'undefined',
        'RxfLf': function(_0x1a5f3b, _0x432668) {
            return _0x1a5f3b === _0x432668;
        },
        'Udtcb': 'EJQwK',
        'Quwog': 'OtzdS',
        'JlUWt': 'FDcet',
        'FoQaD': function(_0x2d6c1a, _0x185938) {
            return _0x2d6c1a === _0x185938;
        },
        'insZk': 'CvsHC',
        'gnJNT': function(_0x3dc249) {
            return _0x3dc249();
        },
        'vaLIA': 'aarea=16_1315_1316_53522&body=%7B%22url%22%3A%22https%3A%5C/%5C/lzdz1-isv.isvjcloud.com%22%2C%22id%22%3A%22%22%7D&build=167814&client=apple&clientVersion=10.1.4&d_brand=apple&d_model=iPhone8%2C1&eid=eidId10b812191seBCFGmtbeTX2vXF3lbgDAVwQhSA8wKqj6OA9J4foPQm3UzRwrrLdO23B3E2wCUY/bODH01VnxiEnAUvoM6SiEnmP3IPqRuO%2By/%2BZo&isBackground=N&joycious=63&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=2f7578cb634065f9beae94d013f172e197d62283&osVersion=13.1.2&partner=apple&rfs=0000&scope=01&screen=750%2A1334&sign=6e5cce15256837cc4c42186f65c01fbe&st=1631327178178&sv=110&uemps=0-0&uts=0f31TVRjBSsqndu4/jgUPz6uymy50MQJEko/MukN5W8uB91RffxHo9crviR7Nw9jPaUc6k0QsUvuGQj/C3gE8Cgt8hSuwSwAUSr5aW%2B8WQSxiI79xUt5htEcZ11nYP3fUFbLG4BzPsSi5J9RNIYYIr96Wgs8W9LCfjJHR13kZJLnSYMgzVjOJCT9Qa9qc/KVB/ZVd%2BDi99EqW6D2o17jUg%3D%3D&uuid=hjudwgohxzVu96krv/T6Hg%3D%3D&wifiBssid=796606e8e181aa5865ec20728a27238b',
        'uUhaL': 'application/x-www-form-urlencoded',
        'RmWKG': 'api.m.jd.com'
    };
    return new Promise(_0x22efe5 => {
        var _0x2969b9 = {
            'JrEbJ': function(_0x4b4eca, _0x409063) {
                return _0x545ca8['UeGRR'](_0x4b4eca, _0x409063);
            },
            'cNHvY': _0x545ca8['xgozE'],
            'gVawh': function(_0x590bbd, _0x16d523) {
                return _0x545ca8['BRMPq'](_0x590bbd, _0x16d523);
            },
            'GFnnT': function(_0x25aa53, _0x24fbb2) {
                return _0x545ca8['lcYYA'](_0x25aa53, _0x24fbb2);
            },
            'IeWKL': function(_0x56ef51, _0x1b7804) {
                return _0x545ca8['eIqWb'](_0x56ef51, _0x1b7804);
            },
            'xtXWt': _0x545ca8['fKIiJ'],
            'BelTV': function(_0xbd231a, _0x24bebd) {
                return _0x545ca8['RxfLf'](_0xbd231a, _0x24bebd);
            },
            'NedgW': _0x545ca8['Udtcb'],
            'ySURd': _0x545ca8['Quwog'],
            'ZcoKF': _0x545ca8['JlUWt'],
            'ykHit': function(_0x27c5c7, _0x5847eb) {
                return _0x545ca8['FoQaD'](_0x27c5c7, _0x5847eb);
            },
            'TGugk': _0x545ca8['insZk'],
            'agXjU': function(_0x367ae9) {
                return _0x545ca8['gnJNT'](_0x367ae9);
            }
        };
        $['post']({
            'url': 'https://api.m.jd.com/client.action?functionId=isvObfuscator',
            'body': _0x545ca8['vaLIA'],
            'headers': {
                'Content-Type': _0x545ca8['uUhaL'],
                'Cookie': cookie,
                'Host': _0x545ca8['RmWKG'],
                'User-Agent': $['UA']
            },
            'timeout': 0x7530
        }, async (_0x29f549, _0x30ad12, _0x7b56bd) => {
            var _0x3b3182 = {
                'gxLZm': function(_0x24990e, _0x217b55) {
                    return _0x2969b9['JrEbJ'](_0x24990e, _0x217b55);
                },
                'CYFNY': _0x2969b9['cNHvY']
            };
            try {
                if (_0x29f549) {
                    console['log']('' + $['toStr'](_0x29f549));
                    console['log']($['name'] + ' isvObfuscator API请求失败，请检查网路重试');
                } else {
                    let _0x339949 = $['toObj'](_0x7b56bd);
                    if (_0x2969b9['gVawh'](typeof _0x339949, _0x2969b9['cNHvY']) && _0x2969b9['GFnnT'](_0x339949['errcode'], 0x0)) {
                        if (_0x2969b9['IeWKL'](typeof _0x339949['token'], _0x2969b9['xtXWt'])) $['Token'] = _0x339949['token'];
                    } else if (_0x2969b9['GFnnT'](typeof _0x339949, _0x2969b9['cNHvY']) && _0x339949['message']) {
                        if (_0x2969b9['BelTV'](_0x2969b9['NedgW'], _0x2969b9['ySURd'])) {
                            _0x339949 = $['toObj'](_0x7b56bd);
                            if (_0x3b3182['gxLZm'](typeof _0x339949, _0x3b3182['CYFNY'])) {
                                console['log'](_0x7b56bd);
                            }
                        } else {
                            console['log']('isvObfuscator ' + (_0x339949['message'] || ''));
                        }
                    } else {
                        if (_0x2969b9['JrEbJ'](_0x2969b9['ZcoKF'], _0x2969b9['ZcoKF'])) {
                            console['log'](_0x339949['message']);
                            if (_0x339949['result'] && _0x339949['result']['giftInfo']) {
                                for (let _0x3f6ceb of _0x339949['result']['giftInfo']['giftList']) {
                                    console['log']('入会获得:' + _0x3f6ceb['discountString'] + _0x3f6ceb['prizeName'] + _0x3f6ceb['secondLineDesc']);
                                }
                            }
                        } else {
                            console['log'](_0x7b56bd);
                        }
                    }
                }
            } catch (_0xb45723) {
                if (_0x2969b9['ykHit'](_0x2969b9['TGugk'], _0x2969b9['TGugk'])) {
                    $['logErr'](_0xb45723, _0x30ad12);
                } else {
                    console['log']('' + $['toStr'](_0x29f549));
                    console['log']($['name'] + ' isvObfuscator API请求失败，请检查网路重试');
                }
            } finally {
                _0x2969b9['agXjU'](_0x22efe5);
            }
        });
    });
}

function getCk() {
    var _0x203f20 = {
        'pLish': function(_0x17fdbc, _0x49dfe6) {
            return _0x17fdbc === _0x49dfe6;
        },
        'CjdYl': 'skGOe',
        'xsmBy': function(_0x2fa8ca, _0x1b57a7) {
            return _0x2fa8ca == _0x1b57a7;
        },
        'nriqy': '此ip已被限制，请过10分钟后再执行脚本\n',
        'NCnro': 'headers',
        'qXsqa': 'set-cookie',
        'royRT': 'Set-Cookie',
        'IsjQw': 'JsWUm',
        'ScdAz': 'XXVNI',
        'ayIKh': function(_0x5884c1, _0x4cc59c) {
            return _0x5884c1 != _0x4cc59c;
        },
        'bmDIY': 'object',
        'tWaLJ': 'ElJgS',
        'XRQXM': 'ajibB',
        'zPbIL': 'cSUmA',
        'pwpfh': function(_0x5e6980, _0x31f6f1) {
            return _0x5e6980 > _0x31f6f1;
        },
        'zHcZK': 'LZ_TOKEN_KEY=',
        'BoOgq': function(_0x478fc3, _0x48b2b9) {
            return _0x478fc3 + _0x48b2b9;
        },
        'ugKFg': function(_0x722915, _0x3c9e34) {
            return _0x722915 > _0x3c9e34;
        },
        'afRPM': 'LZ_TOKEN_VALUE=',
        'hLGst': function(_0x52110f, _0x4a6b5e) {
            return _0x52110f && _0x4a6b5e;
        },
        'zDFbC': function(_0xe80b3b) {
            return _0xe80b3b();
        },
        'whpBV': function(_0x15b73a, _0x1c69c8) {
            return _0x15b73a !== _0x1c69c8;
        },
        'SZJIv': 'PuHKU',
        'zRDVv': 'liwsE'
    };
    return new Promise(_0x51e23b => {
        var _0xcfd24b = {
            'HxdMy': function(_0x5653ca, _0x202fe3) {
                return _0x203f20['pLish'](_0x5653ca, _0x202fe3);
            },
            'osqUp': _0x203f20['CjdYl'],
            'BaSOQ': function(_0x5d96a3, _0x710e95) {
                return _0x203f20['xsmBy'](_0x5d96a3, _0x710e95);
            },
            'Pilri': _0x203f20['nriqy'],
            'zfFQs': _0x203f20['NCnro'],
            'BaleA': _0x203f20['qXsqa'],
            'uxfcK': _0x203f20['royRT'],
            'HsVAr': function(_0x5c1cd2, _0x5e5693) {
                return _0x203f20['pLish'](_0x5c1cd2, _0x5e5693);
            },
            'wPteZ': _0x203f20['IsjQw'],
            'hyziX': _0x203f20['ScdAz'],
            'ewzHk': function(_0x5ae9de, _0x5ceb3c) {
                return _0x203f20['ayIKh'](_0x5ae9de, _0x5ceb3c);
            },
            'rhFMd': _0x203f20['bmDIY'],
            'lAftP': function(_0x119896, _0x1cd92c) {
                return _0x203f20['pLish'](_0x119896, _0x1cd92c);
            },
            'lVqpO': _0x203f20['tWaLJ'],
            'CtnRt': _0x203f20['XRQXM'],
            'ZmZOC': _0x203f20['zPbIL'],
            'RAXLB': function(_0x200821, _0x547f9a) {
                return _0x203f20['pwpfh'](_0x200821, _0x547f9a);
            },
            'DkNBZ': _0x203f20['zHcZK'],
            'lAYBz': function(_0x5efeb4, _0x2fe4fc) {
                return _0x203f20['BoOgq'](_0x5efeb4, _0x2fe4fc);
            },
            'yoEKE': function(_0x34586e, _0x27bae7) {
                return _0x203f20['ugKFg'](_0x34586e, _0x27bae7);
            },
            'PHRFB': _0x203f20['afRPM'],
            'QKbuk': function(_0x30d34c, _0x4f2f9b) {
                return _0x203f20['hLGst'](_0x30d34c, _0x4f2f9b);
            },
            'xVBVX': function(_0x821ff9) {
                return _0x203f20['zDFbC'](_0x821ff9);
            }
        };
        if (_0x203f20['whpBV'](_0x203f20['SZJIv'], _0x203f20['zRDVv'])) {
            let _0x28bdfd = {
                'url': 'https://lzdz1-isv.isvjcloud.com/dingzhi/dz/openCard/activity?activityId=' + $['activityId'] + '&shareUuid=' + $['shareUuid'],
                'followRedirect': ![],
                'headers': {
                    'User-Agent': $['UA']
                },
                'timeout': 0x7530
            };
            $['get'](_0x28bdfd, async (_0x315cb3, _0x3b2181, _0x4d09b0) => {
                try {
                    if (_0xcfd24b['HxdMy'](_0xcfd24b['osqUp'], _0xcfd24b['osqUp'])) {
                        if (_0x315cb3) {
                            if (_0x3b2181['statusCode'] && _0xcfd24b['BaSOQ'](_0x3b2181['statusCode'], 0x1ed)) {
                                console['log'](_0xcfd24b['Pilri']);
                                $['outFlag'] = !![];
                            }
                            console['log']('' + $['toStr'](_0x315cb3));
                            console['log']($['name'] + ' cookie API请求失败，请检查网路重试');
                        } else {
                            let _0x51431b = '';
                            let _0x439121 = '';
                            let _0x133a0 = _0x3b2181[_0xcfd24b['zfFQs']][_0xcfd24b['BaleA']] || _0x3b2181[_0xcfd24b['zfFQs']][_0xcfd24b['uxfcK']] || '';
                            let _0x2fb66c = '';
                            if (_0x133a0) {
                                if (_0xcfd24b['HsVAr'](_0xcfd24b['wPteZ'], _0xcfd24b['hyziX'])) {
                                    $['logErr'](e, _0x3b2181);
                                } else {
                                    if (_0xcfd24b['ewzHk'](typeof _0x133a0, _0xcfd24b['rhFMd'])) {
                                        if (_0xcfd24b['lAftP'](_0xcfd24b['lVqpO'], _0xcfd24b['lVqpO'])) {
                                            _0x2fb66c = _0x133a0['split'](',');
                                        } else {
                                            console['log']('getSimpleActInfoVo ' + (res['errorMessage'] || ''));
                                        }
                                    } else _0x2fb66c = _0x133a0;
                                    for (let _0x3c830e of _0x2fb66c) {
                                        let _0xe7ae25 = _0x3c830e['split'](';')[0x0]['trim']();
                                        if (_0xe7ae25['split']('=')[0x1]) {
                                            if (_0xcfd24b['lAftP'](_0xcfd24b['CtnRt'], _0xcfd24b['ZmZOC'])) {
                                                msg = res['data']['addBeanNum'] + '京豆';
                                            } else {
                                                if (_0xcfd24b['RAXLB'](_0xe7ae25['indexOf'](_0xcfd24b['DkNBZ']), -0x1)) _0x51431b = _0xcfd24b['lAYBz'](_0xe7ae25['replace'](/ /g, ''), ';');
                                                if (_0xcfd24b['yoEKE'](_0xe7ae25['indexOf'](_0xcfd24b['PHRFB']), -0x1)) _0x439121 = _0xcfd24b['lAYBz'](_0xe7ae25['replace'](/ /g, ''), ';');
                                            }
                                        }
                                    }
                                }
                            }
                            if (_0xcfd24b['QKbuk'](_0x51431b, _0x439121)) activityCookie = _0x51431b + ' ' + _0x439121;
                        }
                    } else {
                        $['logErr'](e, _0x3b2181);
                    }
                } catch (_0x5824eb) {
                    $['logErr'](_0x5824eb, _0x3b2181);
                } finally {
                    _0xcfd24b['xVBVX'](_0x51e23b);
                }
            });
        } else {
            console['log'](data);
        }
    });
}

function taskPostUrl(_0xf4c913, _0x61a7d) {
    var _0xebdc4f = {
        'RCkxW': 'application/json',
        'CwJQy': 'zh-cn',
        'pAahQ': 'gzip, deflate, br',
        'QRuCf': 'keep-alive',
        'LwjWX': 'application/x-www-form-urlencoded',
        'lOukO': function(_0x1b6936, _0xc4e86f) {
            return _0x1b6936 + _0xc4e86f;
        },
        'MapcC': function(_0x44ce50, _0x4a44f3) {
            return _0x44ce50 + _0x4a44f3;
        },
        'EltMN': 'AUTH_C_USER=',
        'BokaK': 'lzdz1-isv.isvjcloud.com',
        'xlYPD': 'https://lzdz1-isv.isvjcloud.com',
        'VxSYy': 'XMLHttpRequest'
    };
    return {
        'url': 'https://lzdz1-isv.isvjcloud.com' + _0xf4c913,
        'body': _0x61a7d,
        'headers': {
            'Accept': _0xebdc4f['RCkxW'],
            'Accept-Language': _0xebdc4f['CwJQy'],
            'Accept-Encoding': _0xebdc4f['pAahQ'],
            'Connection': _0xebdc4f['QRuCf'],
            'Content-Type': _0xebdc4f['LwjWX'],
            'Cookie': '' + activityCookie + ($['Pin'] && _0xebdc4f['lOukO'](_0xebdc4f['MapcC'](_0xebdc4f['EltMN'], $['Pin']), ';') || '') + lz_jdpin_token,
            'Host': _0xebdc4f['BokaK'],
            'Origin': _0xebdc4f['xlYPD'],
            'X-Requested-With': _0xebdc4f['VxSYy'],
            'Referer': 'https://lzdz1-isv.isvjcloud.com/dingzhi/dz/openCard/activity?activityId=' + $['activityId'] + '&shareUuid=' + $['shareUuid'],
            'User-Agent': $['UA']
        },
        'timeout': 0x7530
    };
}
async function getUA() {
    var _0x401ca0 = {
        'oEkCe': function(_0x1c959c, _0x3f351c) {
            return _0x1c959c(_0x3f351c);
        },
        'ZBRWi': function(_0x3eca38, _0xb0e5bc) {
            return _0x3eca38 == _0xb0e5bc;
        },
        'oKjRM': function(_0x286f53) {
            return _0x286f53();
        },
        'lAAdq': function(_0x19c50d, _0x101f7d) {
            return _0x19c50d === _0x101f7d;
        },
        'fQHCZ': '获取失败'
    };
    $['UA'] = 'jdapp;iPhone;10.1.4;13.1.2;' + _0x401ca0['oEkCe'](randomString, 0x28) + ';network/wifi;model/iPhone8,1;appBuild/167814;jdSupportDarkMode/0';
    if (_0x401ca0['ZBRWi']($['index'], 0x1)) {
        const _0xa96835 = await _0x401ca0['oKjRM'](readShareCode);
        if (_0xa96835 && _0x401ca0['lAAdq'](_0xa96835['code'], 0xc8)) {
            console['log']('获取助力池');
            console['log']('助力码:' + (_0xa96835['data'] && _0xa96835['data'][0x0] || _0x401ca0['fQHCZ']));
            $['shareUuid'] = _0xa96835['data'] && _0xa96835['data'][0x0] || $['shareUuid'];
        }
    }
}

function readShareCode() {
    var _0x377937 = {
        'NPBkH': function(_0x5d782f, _0x2be022) {
            return _0x5d782f != _0x2be022;
        },
        'Qzked': 'undefined',
        'mgHVc': function(_0x309936, _0x37a300) {
            return _0x309936 === _0x37a300;
        },
        'JrHkq': 'BACDz',
        'RuDkn': 'dWrsj',
        'qioVH': function(_0xddd2c6, _0x3be716) {
            return _0xddd2c6 !== _0x3be716;
        },
        'zfYei': 'whztQ',
        'QQHMm': function(_0x469fe5, _0x4159f2) {
            return _0x469fe5(_0x4159f2);
        },
        'qwqeR': 'object',
        'nPiOZ': function(_0x413b8b, _0x5085ca) {
            return _0x413b8b > _0x5085ca;
        },
        'HNyUr': 'LZ_TOKEN_KEY=',
        'FMKFM': function(_0x37cbf1, _0x70ee2) {
            return _0x37cbf1 + _0x70ee2;
        },
        'HIWCD': function(_0x397bbb, _0xd20618) {
            return _0x397bbb > _0xd20618;
        },
        'hOAnb': 'LZ_TOKEN_VALUE=',
        'TWUoZ': function(_0x139e3b, _0x26237d) {
            return _0x139e3b + _0x26237d;
        },
        'CXdgN': 'ShiPP',
        'Bwqea': function(_0x34022e) {
            return _0x34022e();
        }
    };
    return new Promise(async _0x3b642c => {
        if (_0x377937['mgHVc'](_0x377937['CXdgN'], _0x377937['CXdgN'])) {
            $['get']({
                'url': 'https://jd.smiek.tk/info_opencard28',
                'timeout': 0x4e20
            }, (_0x39156b, _0x5ed27e, _0xe16591) => {
                var _0x1f10ba = {
                    'AOYYz': function(_0x120943, _0x271a00) {
                        return _0x377937['NPBkH'](_0x120943, _0x271a00);
                    },
                    'Ejzhi': _0x377937['Qzked']
                };
                if (_0x377937['mgHVc'](_0x377937['JrHkq'], _0x377937['RuDkn'])) {
                    console['log']('' + $['toStr'](_0x39156b));
                    console['log']($['name'] + ' API请求失败，请检查网路重试');
                } else {
                    try {
                        if (_0x39156b) {
                            console['log']('' + JSON['stringify'](_0x39156b));
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        } else {
                            if (_0xe16591) {
                                _0xe16591 = JSON['parse'](_0xe16591);
                            }
                        }
                    } catch (_0x2f0aac) {
                        if (_0x377937['qioVH'](_0x377937['zfYei'], _0x377937['zfYei'])) {
                            if (_0x1f10ba['AOYYz'](typeof res['token'], _0x1f10ba['Ejzhi'])) $['Token'] = res['token'];
                        } else {
                            $['logErr'](_0x2f0aac, _0x5ed27e);
                        }
                    } finally {
                        _0x377937['QQHMm'](_0x3b642c, _0xe16591);
                    }
                }
            });
            await $['wait'](0x4e20);
            _0x377937['Bwqea'](_0x3b642c);
        } else {
            if (_0x377937['NPBkH'](typeof setcookies, _0x377937['qwqeR'])) {
                setcookie = setcookies['split'](',');
            } else setcookie = setcookies;
            for (let _0x24c24f of setcookie) {
                let _0x3d01c1 = _0x24c24f['split'](';')[0x0]['trim']();
                if (_0x3d01c1['split']('=')[0x1]) {
                    if (_0x377937['nPiOZ'](_0x3d01c1['indexOf'](_0x377937['HNyUr']), -0x1)) LZ_TOKEN_KEY = _0x377937['FMKFM'](_0x3d01c1['replace'](/ /g, ''), ';');
                    if (_0x377937['HIWCD'](_0x3d01c1['indexOf'](_0x377937['hOAnb']), -0x1)) LZ_TOKEN_VALUE = _0x377937['TWUoZ'](_0x3d01c1['replace'](/ /g, ''), ';');
                }
            }
        }
    });
}

function randomString(_0x291198) {
    var _0x3a0719 = {
        'rziDa': function(_0x1e4d5b, _0x5e5d7f) {
            return _0x1e4d5b || _0x5e5d7f;
        },
        'GIfqJ': 'abcdef0123456789',
        'UYUDG': function(_0x4b6200, _0x588a94) {
            return _0x4b6200 < _0x588a94;
        },
        'sogoH': function(_0x4dba3d, _0x252b32) {
            return _0x4dba3d * _0x252b32;
        }
    };
    _0x291198 = _0x3a0719['rziDa'](_0x291198, 0x20);
    let _0xb7fa34 = _0x3a0719['GIfqJ'],
        _0xb22868 = _0xb7fa34['length'],
        _0x4fc8a3 = '';
    for (i = 0x0; _0x3a0719['UYUDG'](i, _0x291198); i++) _0x4fc8a3 += _0xb7fa34['charAt'](Math['floor'](_0x3a0719['sogoH'](Math['random'](), _0xb22868)));
    return _0x4fc8a3;
}

function jsonParse(_0x11c094) {
    var _0x2ac4da = {
        'Rbtuw': function(_0x42b779, _0x2ab2b7) {
            return _0x42b779(_0x2ab2b7);
        },
        'IGari': function(_0x307b5b) {
            return _0x307b5b();
        },
        'tyIYL': function(_0x1e3f4b, _0x51d4f8) {
            return _0x1e3f4b == _0x51d4f8;
        },
        'wBNQo': 'string',
        'HAmCA': function(_0x4787cc, _0x11e1b7) {
            return _0x4787cc === _0x11e1b7;
        },
        'cqFJK': 'Jtrtm',
        'IYDpX': function(_0x38bf2a, _0x6ac74) {
            return _0x38bf2a !== _0x6ac74;
        },
        'CXQFU': 'Mhhkp',
        'dzpEJ': '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie'
    };
    if (_0x2ac4da['tyIYL'](typeof _0x11c094, _0x2ac4da['wBNQo'])) {
        if (_0x2ac4da['HAmCA'](_0x2ac4da['cqFJK'], _0x2ac4da['cqFJK'])) {
            try {
                if (_0x2ac4da['IYDpX'](_0x2ac4da['CXQFU'], _0x2ac4da['CXQFU'])) {
                    _0x2ac4da['Rbtuw'](resolve, data);
                } else {
                    return JSON['parse'](_0x11c094);
                }
            } catch (_0x9088de) {
                console['log'](_0x9088de);
                $['msg']($['name'], '', _0x2ac4da['dzpEJ']);
                return [];
            }
        } else {
            _0x2ac4da['IGari'](resolve);
        }
    }
};
_0xodz = 'jsjiami.com.v6'


// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}


