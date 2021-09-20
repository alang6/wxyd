/*
东东游戏[gua_ddgame.js]
只支持NodeJs环境 (脚本加密

共5款游戏
第1款 极速赛艇
  执行最短时间需要35秒
  倒计时在30秒 分数达到200 有机会获得随机数量的好玩豆
第2款 荒漠求生
  执行最短时间需要80秒
  三次生命 分数达到500 有机会获得随机数量的好玩豆
第3款 森林的秘密
  执行最短时间需要90秒
  15次机会 分数达到1000 有机会获得随机数量的好玩豆
第4款 潮玩总动员
  执行最短时间需要90秒
  120秒内 分数达到100 有机会获得随机数量的好玩豆
第5款 空中掠夺
  执行最短时间需要35秒
  30秒内 分数达到600 有机会获得随机数量的好玩豆
全执行最少需要6分钟/个账号
默认全执行

环境变量
guaDDGametype="1,3" //指定玩某款游戏
guaDDGametype="all" //空、不设置或者all 没有填指定内容不玩游戏 畅玩所以游戏


17 12/4 * * * https://raw.githubusercontent.com/smiek2221/scripts/master/gua_ddgame.js

*/
let guaDDGametype = "all"

const $ = new Env('东东游戏');
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const notify = $.isNode() ? require('./sendNotify') : '';
/*
 *Progcessed By JSDec in 3.33s
 *JSDec - JSDec.js.org
 */
let cookiesArr = [],
    cookie = '';
if ($['isNode']()) {
    Object['keys'](jdCookieNode)['forEach'](_0x4b9dd0 => {
        cookiesArr['push'](jdCookieNode[_0x4b9dd0]);
    });
    if (process['env']['JD_DEBUG'] && process['env']['JD_DEBUG'] === 'false') console['log'] = () => {};
} else {
    cookiesArr = [$['getdata']('CookieJD'), $['getdata']('CookieJD2'), ...jsonParse($['getdata']('CookiesJD') || '[]')['map'](_0x1e71c => _0x1e71c['cookie'])]['filter'](_0x959dd7 => !!_0x959dd7);
}
guaDDGametype = $['isNode']() ? process['env']['guaDDGametype'] ? process['env']['guaDDGametype'] : '' + guaDDGametype : $['getdata']('guaDDGametype') ? $['getdata']('guaDDGametype') : '' + guaDDGametype;
allMessage = '';
message = '';
let UA = '';
let lz_jdpin_token_cookie = '';
let activityCookie = '';
$['hotFlag'] = ![];
$['outFlag'] = ![];
$['temp'] = [];
$['Games'] = [{
    'adSource': 0x0,
    'name': '极速赛艇',
    'Maxfraction': 0x121,
    'Minfraction': 0xd2,
    'time': 0x23
}, {
    'adSource': 0x1,
    'name': '荒漠求生',
    'Maxfraction': 0x2bc,
    'Minfraction': 0x1fe,
    'time': 0x50
}, {
    'adSource': 0x2,
    'name': '森林的秘密',
    'Maxfraction': 0x7d0,
    'Minfraction': 0x3f2,
    'time': 0x5a
}, {
    'adSource': 0x3,
    'name': '潮玩总动员',
    'Maxfraction': 0xe6,
    'Minfraction': 0x6e,
    'time': 0x5a
}, {
    'adSource': 0x4,
    'name': '空中掠夺',
    'Maxfraction': 0x7d0,
    'Minfraction': 0x378,
    'time': 0x23
}];
!(async () => {
    var _0xe66b45 = {
        'wiElk': '获取[token]失败！',
        'tWYwP': function(_0x145fef, _0x287480) {
            return _0x145fef != _0x287480;
        },
        'moAPP': 'all',
        'Xsbjz': function(_0x3baf5a, _0x150a8c) {
            return _0x3baf5a !== _0x150a8c;
        },
        'QSBpH': function(_0x15e078, _0x4d75d7) {
            return _0x15e078 < _0x4d75d7;
        },
        'ImMVN': function(_0x2ff5fa, _0x4ae027) {
            return _0x2ff5fa(_0x4ae027);
        },
        'xWKMi': '【提示】请先获取cookie\n直接使用NobyDa的京东签到获取',
        'kYreo': 'https://bean.m.jd.com/',
        'jplTo': function(_0x52aae5, _0x462b27) {
            return _0x52aae5 < _0x462b27;
        },
        'PEhIo': function(_0x279d60, _0x20c8a0) {
            return _0x279d60 + _0x20c8a0;
        },
        'cGBbe': function(_0x4f92a5) {
            return _0x4f92a5();
        },
        'SKwrb': function(_0x3d31e4) {
            return _0x3d31e4();
        },
        'gNrOo': function(_0x6547d3, _0x148230) {
            return _0x6547d3 === _0x148230;
        },
        'JHrCs': 'RuRBL',
        'MBsnG': '此ip已被限制，请过10分钟后再执行脚本'
    };
    if (_0xe66b45['tWYwP'](guaDDGametype, _0xe66b45['moAPP']) && _0xe66b45['Xsbjz'](guaDDGametype, '') && (_0xe66b45['Xsbjz'](guaDDGametype['indexOf'](','), 0x1) && _0xe66b45['QSBpH'](_0xe66b45['ImMVN'](Number, guaDDGametype) || 0x0, 0x1))) {
        return;
    }
    if (!cookiesArr[0x0]) {
        $['msg']($['name'], _0xe66b45['xWKMi'], _0xe66b45['kYreo'], {
            'open-url': _0xe66b45['kYreo']
        });
        return;
    }
    for (let _0x3d2d0a = 0x0; _0xe66b45['jplTo'](_0x3d2d0a, cookiesArr['length']); _0x3d2d0a++) {
        cookie = cookiesArr[_0x3d2d0a];
        if (cookie) {
            $['UserName'] = _0xe66b45['ImMVN'](decodeURIComponent, cookie['match'](/pt_pin=([^; ]+)(?=;?)/) && cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
            $['index'] = _0xe66b45['PEhIo'](_0x3d2d0a, 0x1);
            message = '';
            $['bean'] = 0x0;
            $['hotFlag'] = ![];
            await _0xe66b45['cGBbe'](getUA);
            $['nickName'] = '';
            console['log']('\n\n******开始【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + '*********\n');
            await _0xe66b45['SKwrb'](run);
            if ($['outFlag']) break;
        }
    }
    if ($['outFlag']) {
        if (_0xe66b45['gNrOo'](_0xe66b45['JHrCs'], _0xe66b45['JHrCs'])) {
            let _0x58c90c = _0xe66b45['MBsnG'];
            $['msg']($['name'], '', '' + _0x58c90c);
            if ($['isNode']()) await notify['sendNotify']('' + $['name'], '' + _0x58c90c);
        } else {
            console['log'](_0xe66b45['wiElk']);
            return;
        }
    }
})()['catch'](_0x470a91 => $['logErr'](_0x470a91))['finally'](() => $['done']());
async function run() {
    var _0x3994af = {
        'RTCsm': function(_0x2f3184) {
            return _0x2f3184();
        },
        'XiFuM': function(_0x1b09d7) {
            return _0x1b09d7();
        },
        'pRSXo': 'Referer',
        'vEexA': 'Origin',
        'wQUiy': 'Cookie',
        'JJpyD': function(_0x3190d2, _0x1646a3) {
            return _0x3190d2 && _0x1646a3;
        },
        'uuFUX': function(_0x330836, _0x5f1187) {
            return _0x330836 + _0x5f1187;
        },
        'Ujcbv': 'AUTH_C_USER=',
        'aNtaY': '此ip已被限制，请过10分钟后再执行脚本\n',
        'cWLyb': function(_0x53f7a5, _0x3e3a19) {
            return _0x53f7a5 != _0x3e3a19;
        },
        'crGwn': 'undefined',
        'KyGkX': function(_0x4d9b67, _0x46336f) {
            return _0x4d9b67 != _0x46336f;
        },
        'HFDib': 'accessLogWithAD',
        'kpDIc': function(_0x4e095c, _0x5900ff) {
            return _0x4e095c === _0x5900ff;
        },
        'DvjzL': 'iSTCh',
        'EBtgj': 'yvYgh',
        'VrBhu': function(_0x3256d7, _0x541f2f) {
            return _0x3256d7 === _0x541f2f;
        },
        'QAbaX': 'qvHra',
        'YXOfz': 'all',
        'GPFty': function(_0x1ea06e, _0x1baaf1) {
            return _0x1ea06e !== _0x1baaf1;
        },
        'AnIxQ': function(_0xfae0e4, _0x234f7e) {
            return _0xfae0e4(_0x234f7e);
        },
        'UNMdq': function(_0x485eca, _0x190e66) {
            return _0x485eca(_0x190e66);
        },
        'qjECy': function(_0x41023b, _0x2d408d) {
            return _0x41023b == _0x2d408d;
        },
        'qQdLF': function(_0x20e12d, _0x5c5ff4) {
            return _0x20e12d === _0x5c5ff4;
        },
        'tJoyh': 'EoPVd',
        'VvGvV': 'LLmMp',
        'ShVYX': 'isvObfuscator',
        'QkXgv': function(_0x411a3, _0x3ac8e4) {
            return _0x411a3 == _0x3ac8e4;
        },
        'muBuX': 'NgQqZ',
        'GZtJn': '获取[token]失败！',
        'rQQQm': function(_0x2dbec1, _0x5c7479) {
            return _0x2dbec1(_0x5c7479);
        },
        'ridmh': 'getMyPing',
        'GNCKD': function(_0x280688, _0x2ef44d) {
            return _0x280688 === _0x2ef44d;
        },
        'mKDtE': 'KwpUq',
        'zWZyN': 'NQIoJ',
        'NKokv': function(_0x1233a4) {
            return _0x1233a4();
        },
        'NyYWB': 'https://img10.360buyimg.com/imgzone/jfs/t1/7020/27/13511/6142/5c5138d8E4df2e764/5a1216a3a5043c5d.png',
        'xDCzr': 'getUserInfo',
        'BHHZf': 'activityContent',
        'sdJaV': 'lvUUI',
        'elfpE': 'mTheX',
        'TpprW': '活动结束',
        'jWQcF': function(_0x2004ef, _0x15c36c) {
            return _0x2004ef * _0x15c36c;
        },
        'VpROa': function(_0x56f4dd, _0x4f79e5) {
            return _0x56f4dd / _0x4f79e5;
        },
        'TztYF': function(_0x3c6a20, _0x5d2047, _0x13cc31) {
            return _0x3c6a20(_0x5d2047, _0x13cc31);
        },
        'hflVH': function(_0x1cc086, _0x45edd4) {
            return _0x1cc086 + _0x45edd4;
        },
        'QfgiK': function(_0x2a8cc3, _0x456b27) {
            return _0x2a8cc3 * _0x456b27;
        },
        'BQclh': function(_0x467734, _0x52657c) {
            return _0x467734 - _0x52657c;
        },
        'fxYOm': function(_0x53862a, _0x121efe) {
            return _0x53862a + _0x121efe;
        },
        'yLZbe': function(_0x3f4d2b, _0x241453) {
            return _0x3f4d2b / _0x241453;
        },
        'uNgWW': function(_0x228127, _0x46c0e7) {
            return _0x228127 * _0x46c0e7;
        },
        'wJAjN': function(_0x30604d, _0x4e0084) {
            return _0x30604d / _0x4e0084;
        },
        'WXiSG': function(_0x56e363, _0x5be32a) {
            return _0x56e363 * _0x5be32a;
        },
        'jQSKd': function(_0x49fc3, _0x592e38) {
            return _0x49fc3 < _0x592e38;
        },
        'CzZzr': function(_0x58cae7, _0x5b0cde) {
            return _0x58cae7 !== _0x5b0cde;
        },
        'zSYOg': 'iJGEJ',
        'HXQxI': 'iCZuZ',
        'AJvtC': '上传数据中',
        'NbQUj': 'TKofn',
        'JbiKi': function(_0x1847ad, _0x15912d) {
            return _0x1847ad + _0x15912d;
        },
        'KObGm': function(_0x491a6a, _0x381571) {
            return _0x491a6a * _0x381571;
        },
        'ozETD': 'saveScore',
        'WdZQt': function(_0x5dd4bd, _0x2ccfe9, _0x2f2e62) {
            return _0x5dd4bd(_0x2ccfe9, _0x2f2e62);
        },
        'nZTAJ': function(_0x5f038d, _0x5388d5) {
            return _0x5f038d * _0x5388d5;
        }
    };
    try {
        if (_0x3994af['kpDIc'](_0x3994af['DvjzL'], _0x3994af['EBtgj'])) {
            _0x3994af['RTCsm'](resolve);
        } else {
            for (let _0x4ec2a9 of $['Games']) {
                if (_0x3994af['VrBhu'](_0x3994af['QAbaX'], _0x3994af['QAbaX'])) {
                    $['game'] = _0x4ec2a9;
                    $['adSource'] = $['game']['adSource'];
                    if (_0x3994af['KyGkX'](guaDDGametype, _0x3994af['YXOfz']) && _0x3994af['GPFty'](guaDDGametype, '')) {
                        let _0x377eef = guaDDGametype['split'](',');
                        if (!_0x377eef['includes'](_0x3994af['uuFUX'](_0x3994af['uuFUX'](_0x3994af['AnIxQ'](Number, $['adSource']) || 0x0, 0x1), ''))) continue;
                    }
                    console['log']('\n准备玩第' + _0x3994af['uuFUX'](_0x3994af['UNMdq'](Number, $['adSource']) || 0x0, 0x1) + '款[' + $['game']['name'] + ']游戏');
                    $['Token'] = '';
                    $['Pin'] = '';
                    $['hasEnd'] = !![];
                    lz_jdpin_token_cookie = '';
                    await _0x3994af['XiFuM'](getCk);
                    if (_0x3994af['qjECy'](activityCookie, '')) {
                        if (_0x3994af['qQdLF'](_0x3994af['tJoyh'], _0x3994af['VvGvV'])) {
                            _0x3994af['XiFuM'](resolve);
                        } else {
                            console['log']('获取cookie失败');
                            return;
                        }
                    }
                    await _0x3994af['UNMdq'](takePostRequest, _0x3994af['ShVYX']);
                    if (_0x3994af['QkXgv']($['Token'], '')) {
                        if (_0x3994af['GPFty'](_0x3994af['muBuX'], _0x3994af['muBuX'])) {
                            headers[_0x3994af['pRSXo']] = 'https://lzdz1-isv.isvjcloud.com/dingzhi/fugu/game/activity?activityId=dz210968869301&adSource=' + $['adSource'];
                            headers[_0x3994af['vEexA']] = 'https://lzdz1-isv.isvjcloud.com';
                            headers[_0x3994af['wQUiy']] = '' + (_0x3994af['JJpyD'](lz_jdpin_token_cookie, lz_jdpin_token_cookie) || '') + ($['Pin'] && _0x3994af['uuFUX'](_0x3994af['uuFUX'](_0x3994af['Ujcbv'], $['Pin']), ';') || '') + activityCookie;
                        } else {
                            console['log'](_0x3994af['GZtJn']);
                            return;
                        }
                    }
                    await _0x3994af['rQQQm'](takePostRequest, _0x3994af['ridmh']);
                    if (_0x3994af['QkXgv']($['Pin'], '')) {
                        if (_0x3994af['GNCKD'](_0x3994af['mKDtE'], _0x3994af['zWZyN'])) {
                            console['log'](e, resp);
                        } else {
                            console['log'](_0x3994af['GZtJn']);
                            return;
                        }
                    }
                    await _0x3994af['rQQQm'](takePostRequest, _0x3994af['HFDib']);
                    await _0x3994af['NKokv'](getIndex);
                    $['attrTouXiang'] = _0x3994af['NyYWB'];
                    await _0x3994af['rQQQm'](takePostRequest, _0x3994af['xDCzr']);
                    await _0x3994af['rQQQm'](takePostRequest, _0x3994af['BHHZf']);
                    if ($['hasEnd']) {
                        if (_0x3994af['GPFty'](_0x3994af['sdJaV'], _0x3994af['elfpE'])) {
                            console['log'](_0x3994af['TpprW']);
                            return;
                        } else {
                            console['log'](_0x3994af['aNtaY']);
                            $['outFlag'] = !![];
                        }
                    }
                    let _0x158462 = 0x0;
                    $['fraction'] = 0x0;
                    _0x158462 = _0x3994af['uuFUX'](Math['floor'](_0x3994af['jWQcF'](Math['random'](), 0x3)), Math['floor'](_0x3994af['VpROa']($['game']['time'], 0x5)));
                    $['fraction'] = _0x3994af['TztYF'](parseInt, _0x3994af['hflVH'](Math['floor'](_0x3994af['QfgiK'](Math['random'](), _0x3994af['BQclh']($['game']['Maxfraction'], $['game']['Minfraction']))), $['game']['Minfraction']), 0xa);
                    switch ($['game']['adSource']) {
                        case 0x1:
                            _0x158462 = _0x3994af['fxYOm'](Math['floor'](_0x3994af['QfgiK'](Math['random'](), 0x6)), Math['floor'](_0x3994af['yLZbe']($['game']['time'], 0x5)));
                            break;
                        case 0x2:
                        case 0x3:
                            $['fraction'] = _0x3994af['TztYF'](parseInt, _0x3994af['fxYOm'](_0x3994af['uNgWW'](Math['floor'](_0x3994af['wJAjN'](_0x3994af['WXiSG'](Math['random'](), _0x3994af['BQclh']($['game']['Maxfraction'], $['game']['Minfraction'])), 0xa)), 0xa), $['game']['Minfraction']), 0xa);
                            break;
                        default:
                            break;
                    }
                    for (let _0x568e1e = 0x0; _0x3994af['jQSKd'](_0x568e1e, 0x1); _0x568e1e++) {
                        if (_0x3994af['CzZzr'](_0x3994af['zSYOg'], _0x3994af['HXQxI'])) {
                            console['log'](_0x3994af['AJvtC']);
                            for (j = 0x1; _0x158462-- && !![]; j++) {
                                if (_0x3994af['GNCKD'](_0x3994af['NbQUj'], _0x3994af['NbQUj'])) {
                                    console['log']('等待5秒-第' + j + '/' + _0x3994af['fxYOm'](_0x158462, j) + '次');
                                    await $['wait'](0x1388);
                                    await $['wait'](_0x3994af['TztYF'](parseInt, _0x3994af['JbiKi'](_0x3994af['KObGm'](Math['random'](), 0x7d0), 0x3e8), 0xa));
                                } else {
                                    if (_0x3994af['cWLyb'](typeof res['token'], _0x3994af['crGwn'])) $['Token'] = res['token'];
                                }
                            }
                            await _0x3994af['rQQQm'](takePostRequest, _0x3994af['ozETD']);
                        } else {
                            console['log'](data);
                        }
                    }
                    await $['wait'](_0x3994af['WdZQt'](parseInt, _0x3994af['JbiKi'](_0x3994af['nZTAJ'](Math['random'](), 0x1388), 0x2710), 0xa));
                } else {
                    if (_0x3994af['KyGkX'](type, _0x3994af['HFDib'])) {
                        res = JSON['parse'](data);
                    }
                }
            }
        }
    } catch (_0x58995d) {
        console['log'](_0x58995d);
    }
}
async function takePostRequest(_0x21adaf) {
    var _0x3d8597 = {
        'deNOE': function(_0x17f9fe, _0x8b9889) {
            return _0x17f9fe !== _0x8b9889;
        },
        'hDmmO': 'wJHAP',
        'deTQr': function(_0x3ec23e, _0x4a88e1) {
            return _0x3ec23e(_0x4a88e1);
        },
        'pquXy': function(_0x910966, _0x87d48e) {
            return _0x910966 === _0x87d48e;
        },
        'vnXVj': 'wPWkj',
        'ZgJhQ': function(_0x5753c5, _0x57a79e) {
            return _0x5753c5 == _0x57a79e;
        },
        'XWLDP': '此ip已被限制，请过10分钟后再执行脚本\n',
        'AtNuA': function(_0x41e6a4, _0x55aa96, _0x26de7a) {
            return _0x41e6a4(_0x55aa96, _0x26de7a);
        },
        'usAil': function(_0x4b97a6, _0x102646) {
            return _0x4b97a6 === _0x102646;
        },
        'MhXEh': 'MBVCT',
        'QZxIM': 'ifMwc',
        'RerOf': function(_0x4d3ea8) {
            return _0x4d3ea8();
        },
        'bqBmO': '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie',
        'fICom': 'POST',
        'zTOvw': 'isvObfuscator',
        'eKWsk': 'getMyPing',
        'wzPbC': 'getSimpleActInfoVo',
        'PtygM': 'getSystemConfig',
        'jQmWJ': 'accessLogWithAD',
        'uPnkd': function(_0x3e302f, _0x38bd3b) {
            return _0x3e302f(_0x38bd3b);
        },
        'QunwD': 'getUserInfo',
        'JQWkT': 'activityContent',
        'LfZtO': 'getShowImg',
        'TiqQU': 'insertCrmPageVisit',
        'XTfic': 'saveScore',
        'HTsPX': 'form-data',
        'tjTVc': 'activityId',
        'yFdcw': 'dz210968869301',
        'QgNoW': 'uuid',
        'punVm': 'pin',
        'VHntU': 'type',
        'zpiir': 'score',
        'yWpxW': function(_0x286b15, _0x4b8365, _0x541a3c, _0x186b63) {
            return _0x286b15(_0x4b8365, _0x541a3c, _0x186b63);
        }
    };
    if ($['hotFlag']) return;
    let _0x5a1a5e = '';
    let _0x51e4c7 = '';
    let _0x3392e5 = _0x3d8597['fICom'];
    switch (_0x21adaf) {
        case _0x3d8597['zTOvw']:
            _0x5a1a5e = 'https://api.m.jd.com/client.action?functionId=isvObfuscator';
            _0x51e4c7 = 'body=%7B%22url%22%3A%20%22https%3A//lzdz1-isv.isvjcloud.com%22%2C%20%22id%22%3A%20%22%22%7D&uuid=edb968bd2fe145428b12ad85ed24cb72&client=apple&clientVersion=9.4.0&st=1632061754000&sv=120&sign=038f907f6bd1551f7017ca0547b00f85';
            break;
        case _0x3d8597['eKWsk']:
            _0x5a1a5e = 'https://lzdz1-isv.isvjcloud.com/customer/getMyPing';
            _0x51e4c7 = 'userId=688693&token=' + $['Token'] + '&fromType=APP';
            break;
        case _0x3d8597['wzPbC']:
            _0x5a1a5e = 'https://lzdz1-isv.isvjcloud.com/dz/common/getSimpleActInfoVo';
            _0x51e4c7 = 'activityId=dz210968869301';
            break;
        case _0x3d8597['PtygM']:
            _0x5a1a5e = 'https://lzdz1-isv.isvjcloud.com/wxCommonInfo/getSystemConfig';
            _0x51e4c7 = 'activityId=dz210968869301';
            break;
        case _0x3d8597['jQmWJ']:
            _0x5a1a5e = 'https://lzdz1-isv.isvjcloud.com/common/accessLogWithAD';
            let _0x578965 = 'https://lzdz1-isv.isvjcloud.com/dingzhi/fugu/game/activity?activityId=dz210968869301&adSource=' + $['adSource'];
            _0x51e4c7 = 'venderId=688693&code=99&pin=' + _0x3d8597['deTQr'](encodeURIComponent, $['Pin']) + '&activityId=dz210968869301&pageUrl=' + _0x3d8597['uPnkd'](encodeURIComponent, _0x578965) + '&subType=APP&adSource=' + $['adSource'];
            break;
        case _0x3d8597['QunwD']:
            _0x5a1a5e = 'https://lzdz1-isv.isvjcloud.com/wxActionCommon/getUserInfo';
            _0x51e4c7 = 'pin=' + _0x3d8597['uPnkd'](encodeURIComponent, $['Pin']);
            break;
        case _0x3d8597['JQWkT']:
            _0x5a1a5e = 'https://lzdz1-isv.isvjcloud.com/dingzhi/fugu/game/activityContent';
            _0x51e4c7 = 'activityId=dz210968869301&pin=' + _0x3d8597['uPnkd'](encodeURIComponent, $['Pin']) + '&pinImg=' + _0x3d8597['uPnkd'](encodeURIComponent, $['attrTouXiang']) + '&nick=' + _0x3d8597['uPnkd'](encodeURIComponent, $['nickname']) + '&cjyxPin=&cjhyPin=&shareUuid=&adSource=' + $['adSource'];
            break;
        case _0x3d8597['LfZtO']:
            _0x5a1a5e = 'https://lzdz1-isv.isvjcloud.com/dingzhi/union/poster/getShowImg';
            _0x51e4c7 = 'activityId=dz210968869301';
            break;
        case _0x3d8597['TiqQU']:
            _0x5a1a5e = 'https://lzdz1-isv.isvjcloud.com/crm/pageVisit/insertCrmPageVisit';
            _0x51e4c7 = 'venderId=688693&elementId=%E8%B7%B3%E8%BD%AC&pageId=dz210968869301&pin=' + _0x3d8597['uPnkd'](encodeURIComponent, $['Pin']);
            break;
        case _0x3d8597['XTfic']:
            _0x5a1a5e = 'https://lzdz1-isv.isvjcloud.com/dingzhi/fugu/game/saveScore';
            var _0x21c38f = _0x3d8597['uPnkd'](require, _0x3d8597['HTsPX']);
            var _0x546d0a = new _0x21c38f();
            let _0x3aee5f = _0x546d0a['getBoundary']();
            _0x546d0a['append'](_0x3d8597['tjTVc'], _0x3d8597['yFdcw']);
            _0x546d0a['append'](_0x3d8597['QgNoW'], $['actorUuid']);
            _0x546d0a['append'](_0x3d8597['punVm'], $['Pin']);
            _0x546d0a['append'](_0x3d8597['VHntU'], $['adSource']);
            _0x546d0a['append'](_0x3d8597['zpiir'], $['fraction']);
            _0x51e4c7 = {
                'flie': _0x546d0a,
                'boundary': _0x3aee5f
            };
            break;
        default:
            console['log']('错误' + _0x21adaf);
    }
    let _0x444d1f = _0x3d8597['yWpxW'](getPostRequest, _0x5a1a5e, _0x51e4c7, _0x3392e5);
    return new Promise(async _0x37366d => {
        var _0x5e278f = {
            'ftueZ': _0x3d8597['bqBmO']
        };
        $['post'](_0x444d1f, (_0x5f2295, _0x5a0ed1, _0x5b96a2) => {
            if (_0x3d8597['deNOE'](_0x3d8597['hDmmO'], _0x3d8597['hDmmO'])) {
                try {
                    return JSON['parse'](str);
                } catch (_0x2a67f3) {
                    console['log'](_0x2a67f3);
                    $['msg']($['name'], '', _0x5e278f['ftueZ']);
                    return [];
                }
            } else {
                try {
                    _0x3d8597['deTQr'](setActivityCookie, _0x5a0ed1);
                    if (_0x5f2295) {
                        if (_0x3d8597['pquXy'](_0x3d8597['vnXVj'], _0x3d8597['vnXVj'])) {
                            if (_0x5a0ed1 && _0x5a0ed1['statusCode'] && _0x3d8597['ZgJhQ'](_0x5a0ed1['statusCode'], 0x1ed)) {
                                console['log'](_0x3d8597['XWLDP']);
                                $['outFlag'] = !![];
                            }
                            console['log']('' + $['toStr'](_0x5f2295, _0x5f2295));
                            console['log'](_0x21adaf + ' API请求失败，请检查网路重试');
                        } else {
                            console['log'](_0x21adaf + ' ' + _0x5b96a2);
                        }
                    } else {
                        _0x3d8597['AtNuA'](dealReturn, _0x21adaf, _0x5b96a2);
                    }
                } catch (_0xeec710) {
                    if (_0x3d8597['usAil'](_0x3d8597['MhXEh'], _0x3d8597['QZxIM'])) {
                        console['log'](_0x21adaf + ' 执行任务异常');
                        console['log'](_0x5b96a2);
                        $['runFalag'] = ![];
                    } else {
                        console['log'](_0xeec710, _0x5a0ed1);
                    }
                } finally {
                    _0x3d8597['RerOf'](_0x37366d);
                }
            }
        });
    });
}
async function dealReturn(_0x33c806, _0x148b80) {
    var _0x4411b0 = {
        'Czmep': function(_0x4bf0c6, _0x29fb22) {
            return _0x4bf0c6 > _0x29fb22;
        },
        'wxbXu': 'LZ_TOKEN_KEY=',
        'gCMiF': function(_0x277184, _0x328fda) {
            return _0x277184 + _0x328fda;
        },
        'aVzIC': 'LZ_TOKEN_VALUE=',
        'SSzZf': function(_0x2c02a1, _0x3c9613) {
            return _0x2c02a1 + _0x3c9613;
        },
        'brXGc': 'lz_jdpin_token=',
        'EfzIt': function(_0x1de658, _0x29e65f) {
            return _0x1de658 + _0x29e65f;
        },
        'WMZKp': function(_0x4944da, _0x23e434) {
            return _0x4944da + _0x23e434;
        },
        'kcdzv': function(_0x581c38, _0x5703ca) {
            return _0x581c38 == _0x5703ca;
        },
        'EMJOA': '此ip已被限制，请过10分钟后再执行脚本\n',
        'LhDTJ': function(_0x6ce4b0, _0x4c5fa5) {
            return _0x6ce4b0(_0x4c5fa5);
        },
        'prBIu': function(_0x4c85c4, _0x9fec9f, _0x175ea8) {
            return _0x4c85c4(_0x9fec9f, _0x175ea8);
        },
        'kQHuK': 'CookieJD',
        'FEdPa': 'CookieJD2',
        'cNflS': 'CookiesJD',
        'Wfhcq': function(_0x5a6241, _0x5ae700) {
            return _0x5a6241 + _0x5ae700;
        },
        'EQMml': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'OYdsE': 'zh-cn',
        'rcshy': 'gzip, deflate, br',
        'ujIRj': 'keep-alive',
        'hwXzc': 'XMLHttpRequest',
        'exrvt': function(_0xc51725, _0x16fbc5) {
            return _0xc51725 > _0x16fbc5;
        },
        'Usqlt': 'lzdz1-isv.isvjcloud.com',
        'PyHga': 'Referer',
        'uOEOB': 'Origin',
        'jZNih': 'Cookie',
        'QXzqE': function(_0x45d158, _0x24b27f) {
            return _0x45d158 && _0x24b27f;
        },
        'zgmvH': 'AUTH_C_USER=',
        'WCOcq': function(_0xa75cf7, _0xf359c) {
            return _0xa75cf7 == _0xf359c;
        },
        'hDTnR': 'POST',
        'BUwBY': 'Content-Type',
        'fzGyo': 'application/x-www-form-urlencoded',
        'WTSRd': 'Accept',
        'ExyQD': 'application/json',
        'AwnhJ': function(_0x416575, _0x472f57) {
            return _0x416575 > _0x472f57;
        },
        'cihRS': 'dingzhi/fugu/game/saveScore',
        'HFugO': function(_0x561e78, _0x4d36f6) {
            return _0x561e78 == _0x4d36f6;
        },
        'elSmG': 'object',
        'nPwgP': '*/*',
        'HuIeQ': function(_0x3c0ae7, _0x16e34c) {
            return _0x3c0ae7 == _0x16e34c;
        },
        'Iwbpw': function(_0x14d748, _0x53ca34) {
            return _0x14d748 > _0x53ca34;
        },
        'WeoiN': function(_0x38d132, _0x34ca18) {
            return _0x38d132 != _0x34ca18;
        },
        'Iqbzu': 'accessLogWithAD',
        'XAXwJ': 'isvObfuscator',
        'KZCmt': function(_0x29195e, _0x4337d2) {
            return _0x29195e == _0x4337d2;
        },
        'biMaE': function(_0x111a4e, _0x1fd89d) {
            return _0x111a4e == _0x1fd89d;
        },
        'vUomm': 'undefined',
        'wLHOY': function(_0x2bf706, _0x5f823e) {
            return _0x2bf706 == _0x5f823e;
        },
        'xsSyC': function(_0x4fcbfd, _0x4c9763) {
            return _0x4fcbfd !== _0x4c9763;
        },
        'ScMxT': 'eyNYS',
        'EPZOF': 'TKJuG',
        'Gfllh': 'getSimpleActInfoVo',
        'yOaDp': 'getMyPing',
        'QcNOe': function(_0x1fa1e1, _0x194f73) {
            return _0x1fa1e1 === _0x194f73;
        },
        'zbxlX': 'ryFxK',
        'Prhss': function(_0x2865c7, _0x234e70) {
            return _0x2865c7 != _0x234e70;
        },
        'ZRKEj': function(_0xd5f906, _0x1dfa29) {
            return _0xd5f906 != _0x1dfa29;
        },
        'Lxobd': function(_0x4f2f65, _0xa0293d) {
            return _0x4f2f65 == _0xa0293d;
        },
        'MYqTG': 'NBOba',
        'TUpRV': 'ssNUN',
        'LoTek': 'wmkxO',
        'cjkJL': 'getUserInfo',
        'tilAl': function(_0x56e115, _0x396c65) {
            return _0x56e115 === _0x396c65;
        },
        'dyNFM': 'vjhsn',
        'vXtxS': 'RXAsT',
        'IkUAk': 'https://img10.360buyimg.com/imgzone/jfs/t1/7020/27/13511/6142/5c5138d8E4df2e764/5a1216a3a5043c5d.png',
        'MLpAc': function(_0x1d680e, _0x4b6348) {
            return _0x1d680e == _0x4b6348;
        },
        'tCFjv': 'activityContent',
        'mkgpb': function(_0x30e9ec, _0x5314e7) {
            return _0x30e9ec == _0x5314e7;
        },
        'oTIkC': function(_0x817efc, _0x5a8aff) {
            return _0x817efc === _0x5a8aff;
        },
        'SCKzu': function(_0x536e43, _0x51c373) {
            return _0x536e43 != _0x51c373;
        },
        'GgXfe': function(_0x6e7ec7, _0x8cacb0) {
            return _0x6e7ec7 != _0x8cacb0;
        },
        'BEDFk': function(_0x33e688, _0x520328) {
            return _0x33e688 == _0x520328;
        },
        'KMLox': 'DzCtl',
        'zxmbb': 'zlGCt',
        'PBNqu': function(_0x3465e0, _0x14ca23) {
            return _0x3465e0 !== _0x14ca23;
        },
        'zRsIK': 'dYQuw',
        'cwnDf': 'saveScore',
        'ISjfW': function(_0x41aaea, _0x21e8e5) {
            return _0x41aaea == _0x21e8e5;
        },
        'JUeBI': function(_0xdea6fe, _0x63b086) {
            return _0xdea6fe !== _0x63b086;
        },
        'TEDnc': 'tOTTM',
        'jwcFJ': 'CRrKY',
        'McbPR': function(_0x5279a3, _0x240b25) {
            return _0x5279a3 + _0x240b25;
        },
        'nckGF': 'hQsmW',
        'rAFtp': 'pEEVe',
        'bXjuE': 'ZNqBP',
        'kFNRa': 'getShowImg',
        'hjWjh': 'insertCrmPageVisit',
        'gaYRk': 'getSystemConfig',
        'Iawyy': 'IjZOB',
        'FcEdx': 'DwLuR',
        'KYaGl': 'FlTav',
        'XsStf': 'tFSNw'
    };
    let _0x3ff6ec = '';
    try {
        if (_0x4411b0['WeoiN'](_0x33c806, _0x4411b0['Iqbzu'])) {
            _0x3ff6ec = JSON['parse'](_0x148b80);
        }
    } catch (_0x5cbd46) {
        console['log'](_0x33c806 + ' 执行任务异常');
        console['log'](_0x148b80);
        $['runFalag'] = ![];
    }
    switch (_0x33c806) {
        case _0x4411b0['XAXwJ']:
            if (_0x4411b0['KZCmt'](typeof _0x3ff6ec, _0x4411b0['elSmG']) && _0x4411b0['biMaE'](_0x3ff6ec['errcode'], 0x0)) {
                if (_0x4411b0['WeoiN'](typeof _0x3ff6ec['token'], _0x4411b0['vUomm'])) $['Token'] = _0x3ff6ec['token'];
            } else if (_0x4411b0['wLHOY'](typeof _0x3ff6ec, _0x4411b0['elSmG']) && _0x3ff6ec['message']) {
                console['log']('isvObfuscator ' + (_0x3ff6ec['message'] || ''));
            } else {
                if (_0x4411b0['xsSyC'](_0x4411b0['ScMxT'], _0x4411b0['EPZOF'])) {
                    console['log'](_0x148b80);
                } else {
                    let _0x494944 = ck['split'](';')[0x0]['trim']();
                    if (_0x494944['split']('=')[0x1]) {
                        if (_0x4411b0['Czmep'](_0x494944['indexOf'](_0x4411b0['wxbXu']), -0x1)) LZ_TOKEN_KEY = _0x4411b0['gCMiF'](_0x494944['replace'](/ /g, ''), ';');
                        if (_0x4411b0['Czmep'](_0x494944['indexOf'](_0x4411b0['aVzIC']), -0x1)) LZ_TOKEN_VALUE = _0x4411b0['SSzZf'](_0x494944['replace'](/ /g, ''), ';');
                        if (_0x4411b0['Czmep'](_0x494944['indexOf'](_0x4411b0['brXGc']), -0x1)) lz_jdpin_token = _0x4411b0['EfzIt'](_0x4411b0['WMZKp']('', _0x494944['replace'](/ /g, '')), ';');
                    }
                }
            }
            break;
        case _0x4411b0['Gfllh']:
            break;
        case _0x4411b0['yOaDp']:
            if (_0x4411b0['wLHOY'](typeof _0x3ff6ec, _0x4411b0['elSmG']) && _0x3ff6ec['result'] && _0x4411b0['QcNOe'](_0x3ff6ec['result'], !![])) {
                if (_0x4411b0['QcNOe'](_0x4411b0['zbxlX'], _0x4411b0['zbxlX'])) {
                    if (_0x3ff6ec['data'] && _0x4411b0['Prhss'](typeof _0x3ff6ec['data']['secretPin'], _0x4411b0['vUomm'])) $['Pin'] = _0x3ff6ec['data']['secretPin'];
                    if (_0x3ff6ec['data'] && _0x4411b0['ZRKEj'](typeof _0x3ff6ec['data']['nickname'], _0x4411b0['vUomm'])) $['nickname'] = _0x3ff6ec['data']['nickname'];
                } else {
                    return JSON['parse'](str);
                }
            } else if (_0x4411b0['Lxobd'](typeof _0x3ff6ec, _0x4411b0['elSmG']) && _0x3ff6ec['errorMessage']) {
                if (_0x4411b0['QcNOe'](_0x4411b0['MYqTG'], _0x4411b0['MYqTG'])) {
                    console['log'](_0x33c806 + ' ' + (_0x3ff6ec['errorMessage'] || ''));
                } else {
                    if (resp['statusCode'] && _0x4411b0['kcdzv'](resp['statusCode'], 0x1ed)) {
                        console['log'](_0x4411b0['EMJOA']);
                        $['outFlag'] = !![];
                    }
                    console['log']('' + $['toStr'](err));
                    console['log']($['name'] + ' cookie API请求失败，请检查网路重试');
                }
            } else {
                if (_0x4411b0['QcNOe'](_0x4411b0['TUpRV'], _0x4411b0['LoTek'])) {
                    _0x3ff6ec = JSON['parse'](_0x148b80);
                } else {
                    console['log'](_0x33c806 + ' ' + _0x148b80);
                }
            }
            break;
        case _0x4411b0['cjkJL']:
            if (_0x4411b0['Lxobd'](typeof _0x3ff6ec, _0x4411b0['elSmG']) && _0x3ff6ec['result'] && _0x4411b0['tilAl'](_0x3ff6ec['result'], !![])) {
                if (_0x4411b0['xsSyC'](_0x4411b0['dyNFM'], _0x4411b0['vXtxS'])) {
                    if (_0x3ff6ec['data'] && _0x4411b0['ZRKEj'](typeof _0x3ff6ec['data']['yunMidImageUrl'], _0x4411b0['vUomm'])) $['attrTouXiang'] = _0x3ff6ec['data']['yunMidImageUrl'] || _0x4411b0['IkUAk'];
                } else {
                    _0x4411b0['LhDTJ'](setActivityCookie, resp);
                    if (err) {
                        if (resp && resp['statusCode'] && _0x4411b0['kcdzv'](resp['statusCode'], 0x1ed)) {
                            console['log'](_0x4411b0['EMJOA']);
                            $['outFlag'] = !![];
                        }
                        console['log']('' + $['toStr'](err, err));
                        console['log'](_0x33c806 + ' API请求失败，请检查网路重试');
                    } else {
                        _0x4411b0['prBIu'](dealReturn, _0x33c806, _0x148b80);
                    }
                }
            } else if (_0x4411b0['MLpAc'](typeof _0x3ff6ec, _0x4411b0['elSmG']) && _0x3ff6ec['errorMessage']) {
                console['log'](_0x33c806 + ' ' + (_0x3ff6ec['errorMessage'] || ''));
            } else {
                console['log'](_0x33c806 + ' ' + _0x148b80);
            }
            break;
        case _0x4411b0['tCFjv']:
            if (_0x4411b0['mkgpb'](typeof _0x3ff6ec, _0x4411b0['elSmG']) && _0x3ff6ec['result'] && _0x4411b0['oTIkC'](_0x3ff6ec['result'], !![])) {
                if (_0x4411b0['SCKzu'](typeof _0x3ff6ec['data']['actorUuid'], _0x4411b0['vUomm'])) $['actorUuid'] = _0x3ff6ec['data']['actorUuid'];
                if (_0x4411b0['GgXfe'](typeof _0x3ff6ec['data']['hasEnd'], _0x4411b0['vUomm'])) $['hasEnd'] = _0x3ff6ec['data']['hasEnd'];
            } else if (_0x4411b0['BEDFk'](typeof _0x3ff6ec, _0x4411b0['elSmG']) && _0x3ff6ec['errorMessage']) {
                if (_0x4411b0['oTIkC'](_0x4411b0['KMLox'], _0x4411b0['zxmbb'])) {
                    cookiesArr = [$['getdata'](_0x4411b0['kQHuK']), $['getdata'](_0x4411b0['FEdPa']), ..._0x4411b0['LhDTJ'](jsonParse, $['getdata'](_0x4411b0['cNflS']) || '[]')['map'](_0x49999f => _0x49999f['cookie'])]['filter'](_0x4b0994 => !!_0x4b0994);
                } else {
                    console['log'](_0x33c806 + ' ' + (_0x3ff6ec['errorMessage'] || ''));
                }
            } else {
                if (_0x4411b0['PBNqu'](_0x4411b0['zRsIK'], _0x4411b0['zRsIK'])) {
                    console['log']('游戏结束,获得' + (_0x3ff6ec['data']['score'] && _0x4411b0['Wfhcq'](_0x3ff6ec['data']['score'], '豆豆') || _0x148b80));
                } else {
                    console['log'](_0x33c806 + ' ' + _0x148b80);
                }
            }
            break;
        case _0x4411b0['cwnDf']:
            if (_0x4411b0['ISjfW'](typeof _0x3ff6ec, _0x4411b0['elSmG']) && _0x3ff6ec['result'] && _0x4411b0['oTIkC'](_0x3ff6ec['result'], !![])) {
                if (_0x3ff6ec['data']['mark']) {
                    if (_0x4411b0['JUeBI'](_0x4411b0['TEDnc'], _0x4411b0['jwcFJ'])) {
                        console['log']('游戏结束,获得' + (_0x3ff6ec['data']['score'] && _0x4411b0['McbPR'](_0x3ff6ec['data']['score'], '豆豆') || _0x148b80));
                    } else {
                        let _0x12e7aa = cookie;
                        let _0x5c1306 = '';
                        let _0x5b4adf = {
                            'Accept': _0x4411b0['EQMml'],
                            'Accept-Language': _0x4411b0['OYdsE'],
                            'Accept-Encoding': _0x4411b0['rcshy'],
                            'Connection': _0x4411b0['ujIRj'],
                            'Cookie': '' + _0x12e7aa,
                            'X-Requested-With': _0x4411b0['hwXzc'],
                            'User-Agent': '' + (UA || $['UA'])
                        };
                        if (_0x4411b0['exrvt'](url['indexOf'](_0x4411b0['Usqlt']), -0x1)) {
                            _0x5b4adf[_0x4411b0['PyHga']] = 'https://lzdz1-isv.isvjcloud.com/dingzhi/fugu/game/activity?activityId=dz210968869301&adSource=' + $['adSource'];
                            _0x5b4adf[_0x4411b0['uOEOB']] = 'https://lzdz1-isv.isvjcloud.com';
                            _0x5b4adf[_0x4411b0['jZNih']] = '' + (_0x4411b0['QXzqE'](lz_jdpin_token_cookie, lz_jdpin_token_cookie) || '') + ($['Pin'] && _0x4411b0['Wfhcq'](_0x4411b0['Wfhcq'](_0x4411b0['zgmvH'], $['Pin']), ';') || '') + activityCookie;
                        }
                        if (_0x4411b0['WCOcq'](method, _0x4411b0['hDTnR'])) {
                            _0x5b4adf[_0x4411b0['BUwBY']] = _0x4411b0['fzGyo'];
                            _0x5b4adf[_0x4411b0['WTSRd']] = _0x4411b0['ExyQD'];
                        }
                        if (_0x4411b0['AwnhJ'](url['indexOf'](_0x4411b0['cihRS']), -0x1) && _0x4411b0['HFugO'](typeof body, _0x4411b0['elSmG']) && body['boundary']) {
                            _0x5b4adf[_0x4411b0['BUwBY']] = 'multipart/form-data; boundary=' + body['boundary'];
                            _0x5b4adf[_0x4411b0['WTSRd']] = _0x4411b0['nPwgP'];
                            body = body['flie'];
                        }
                        return {
                            'url': url,
                            'method': method,
                            'headers': _0x5b4adf,
                            'body': body,
                            'timeout': 0x7530
                        };
                    }
                } else {
                    if (_0x4411b0['oTIkC'](_0x4411b0['nckGF'], _0x4411b0['rAFtp'])) {
                        console['log'](_0x4411b0['EMJOA']);
                        $['outFlag'] = !![];
                    } else {
                        console['log']('游戏结束,游戏失败 ' + _0x148b80);
                    }
                }
            } else if (_0x4411b0['ISjfW'](typeof _0x3ff6ec, _0x4411b0['elSmG']) && _0x3ff6ec['errorMessage']) {
                console['log'](_0x33c806 + ' ' + (_0x3ff6ec['errorMessage'] || ''));
            } else {
                if (_0x4411b0['JUeBI'](_0x4411b0['bXjuE'], _0x4411b0['bXjuE'])) {
                    console['log']('isvObfuscator ' + (_0x3ff6ec['message'] || ''));
                } else {
                    console['log'](_0x33c806 + ' ' + _0x148b80);
                }
            }
            break;
        case _0x4411b0['kFNRa']:
        case _0x4411b0['hjWjh']:
        case _0x4411b0['gaYRk']:
        case _0x4411b0['Iqbzu']:
            break;
        default:
            console['log'](_0x33c806 + '-> ' + _0x148b80);
    }
    if (_0x4411b0['ISjfW'](typeof _0x3ff6ec, _0x4411b0['elSmG']) && _0x3ff6ec['errorMessage']) {
        if (_0x4411b0['oTIkC'](_0x4411b0['Iawyy'], _0x4411b0['FcEdx'])) {
            _0x4411b0['LhDTJ'](setActivityCookie, resp);
            if (err) {
                if (resp['statusCode'] && _0x4411b0['HuIeQ'](resp['statusCode'], 0x1ed)) {
                    console['log'](_0x4411b0['EMJOA']);
                    $['outFlag'] = !![];
                }
                console['log']('' + $['toStr'](err));
                console['log']($['name'] + ' cookie API请求失败，请检查网路重试');
            } else {}
        } else {
            if (_0x4411b0['Iwbpw'](_0x3ff6ec['errorMessage']['indexOf']('火爆'), -0x1)) {
                if (_0x4411b0['JUeBI'](_0x4411b0['KYaGl'], _0x4411b0['XsStf'])) {
                    $['hotFlag'] = !![];
                } else {
                    if (_0x4411b0['Iwbpw'](_0x3ff6ec['errorMessage']['indexOf']('火爆'), -0x1)) {
                        $['hotFlag'] = !![];
                    }
                }
            }
        }
    }
}

function getPostRequest(_0x42dd18, _0x1e5c7a, _0x4b7a5c = 'POST') {
    var _0x3f6aed = {
        'StrTS': function(_0x22da52, _0x54e9e8) {
            return _0x22da52 == _0x54e9e8;
        },
        'TLywE': 'string',
        'gyyIu': '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie',
        'LHxkA': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'krBUJ': 'zh-cn',
        'gzBRd': 'gzip, deflate, br',
        'OZCwI': 'keep-alive',
        'SQItL': 'XMLHttpRequest',
        'Xcutn': function(_0x4725ef, _0xfe38f6) {
            return _0x4725ef > _0xfe38f6;
        },
        'QHXCV': 'lzdz1-isv.isvjcloud.com',
        'huHLP': 'Referer',
        'AWbev': 'Origin',
        'KMFSs': 'Cookie',
        'wudPz': function(_0x36d7f1, _0x2847e8) {
            return _0x36d7f1 && _0x2847e8;
        },
        'mELeU': function(_0x376707, _0x2dc2f1) {
            return _0x376707 + _0x2dc2f1;
        },
        'Sfmqh': function(_0x336c1a, _0x1067fc) {
            return _0x336c1a + _0x1067fc;
        },
        'yIQoZ': 'AUTH_C_USER=',
        'QeSZQ': function(_0x52e11f, _0x10ae05) {
            return _0x52e11f == _0x10ae05;
        },
        'oLIOl': 'POST',
        'KDMhw': 'Content-Type',
        'BmxST': 'application/x-www-form-urlencoded',
        'uqWiL': 'Accept',
        'HkIBV': 'application/json',
        'AjcUO': function(_0x257834, _0x18a7e2) {
            return _0x257834 > _0x18a7e2;
        },
        'aKPuN': 'dingzhi/fugu/game/saveScore',
        'fFgIt': function(_0xaa8cd2, _0x5f3561) {
            return _0xaa8cd2 == _0x5f3561;
        },
        'DGRiW': 'object',
        'lYwSL': function(_0x3b532b, _0x6380da) {
            return _0x3b532b !== _0x6380da;
        },
        'XIErc': 'tLEhB',
        'VEVJy': 'AjGGb',
        'SNccU': '*/*'
    };
    let _0x27eeff = cookie;
    let _0x366aa4 = '';
    let _0x1e29de = {
        'Accept': _0x3f6aed['LHxkA'],
        'Accept-Language': _0x3f6aed['krBUJ'],
        'Accept-Encoding': _0x3f6aed['gzBRd'],
        'Connection': _0x3f6aed['OZCwI'],
        'Cookie': '' + _0x27eeff,
        'X-Requested-With': _0x3f6aed['SQItL'],
        'User-Agent': '' + (UA || $['UA'])
    };
    if (_0x3f6aed['Xcutn'](_0x42dd18['indexOf'](_0x3f6aed['QHXCV']), -0x1)) {
        _0x1e29de[_0x3f6aed['huHLP']] = 'https://lzdz1-isv.isvjcloud.com/dingzhi/fugu/game/activity?activityId=dz210968869301&adSource=' + $['adSource'];
        _0x1e29de[_0x3f6aed['AWbev']] = 'https://lzdz1-isv.isvjcloud.com';
        _0x1e29de[_0x3f6aed['KMFSs']] = '' + (_0x3f6aed['wudPz'](lz_jdpin_token_cookie, lz_jdpin_token_cookie) || '') + ($['Pin'] && _0x3f6aed['mELeU'](_0x3f6aed['Sfmqh'](_0x3f6aed['yIQoZ'], $['Pin']), ';') || '') + activityCookie;
    }
    if (_0x3f6aed['QeSZQ'](_0x4b7a5c, _0x3f6aed['oLIOl'])) {
        _0x1e29de[_0x3f6aed['KDMhw']] = _0x3f6aed['BmxST'];
        _0x1e29de[_0x3f6aed['uqWiL']] = _0x3f6aed['HkIBV'];
    }
    if (_0x3f6aed['AjcUO'](_0x42dd18['indexOf'](_0x3f6aed['aKPuN']), -0x1) && _0x3f6aed['fFgIt'](typeof _0x1e5c7a, _0x3f6aed['DGRiW']) && _0x1e5c7a['boundary']) {
        if (_0x3f6aed['lYwSL'](_0x3f6aed['XIErc'], _0x3f6aed['VEVJy'])) {
            _0x1e29de[_0x3f6aed['KDMhw']] = 'multipart/form-data; boundary=' + _0x1e5c7a['boundary'];
            _0x1e29de[_0x3f6aed['uqWiL']] = _0x3f6aed['SNccU'];
            _0x1e5c7a = _0x1e5c7a['flie'];
        } else {
            if (_0x3f6aed['StrTS'](typeof str, _0x3f6aed['TLywE'])) {
                try {
                    return JSON['parse'](str);
                } catch (_0x3047dd) {
                    console['log'](_0x3047dd);
                    $['msg']($['name'], '', _0x3f6aed['gyyIu']);
                    return [];
                }
            }
        }
    }
    return {
        'url': _0x42dd18,
        'method': _0x4b7a5c,
        'headers': _0x1e29de,
        'body': _0x1e5c7a,
        'timeout': 0x7530
    };
}

function getIndex() {
    var _0x5d4ef7 = {
        'IwAPv': function(_0x68b1f2, _0x30fded) {
            return _0x68b1f2 == _0x30fded;
        },
        'oEUNC': '此ip已被限制，请过10分钟后再执行脚本\n',
        'fRdnC': function(_0x108ac7, _0x1d2ed6) {
            return _0x108ac7 === _0x1d2ed6;
        },
        'WCjId': 'yIQdr',
        'gpYOT': 'YrLPf',
        'Zoywm': function(_0x2a3e55) {
            return _0x2a3e55();
        },
        'ltfGR': function(_0x4860b1, _0x34394c) {
            return _0x4860b1 !== _0x34394c;
        },
        'pGyZi': 'SqDdu',
        'kQxpd': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'YeCiY': 'zh-cn',
        'yspyN': 'gzip, deflate, br',
        'uwTcR': 'keep-alive',
        'gyWut': function(_0x5a089c, _0x2220a4) {
            return _0x5a089c && _0x2220a4;
        },
        'iNhWN': function(_0x56a201, _0xd8c69d) {
            return _0x56a201 + _0xd8c69d;
        },
        'QFjcl': 'AUTH_C_USER='
    };
    return new Promise(_0x569022 => {
        var _0x4de159 = {
            'egbSg': function(_0xf59366, _0x508066) {
                return _0x5d4ef7['IwAPv'](_0xf59366, _0x508066);
            },
            'FOchf': _0x5d4ef7['oEUNC'],
            'NTxHM': function(_0x4faefc, _0x4e65ab) {
                return _0x5d4ef7['fRdnC'](_0x4faefc, _0x4e65ab);
            },
            'dOMoa': _0x5d4ef7['WCjId'],
            'ebQhD': _0x5d4ef7['gpYOT'],
            'hTzpY': function(_0x375e92) {
                return _0x5d4ef7['Zoywm'](_0x375e92);
            }
        };
        if (_0x5d4ef7['ltfGR'](_0x5d4ef7['pGyZi'], _0x5d4ef7['pGyZi'])) {
            console['log'](type + ' ' + data);
        } else {
            let _0x11c5b1 = {
                'url': 'https://lzdz1-isv.isvjcloud.com/lzclient/dzgames/jdmtxGames/Snake/index.html?uuid=' + $['actorUuid'] + '&pin=' + $['Pin'],
                'headers': {
                    'Accept': _0x5d4ef7['kQxpd'],
                    'Accept-Language': _0x5d4ef7['YeCiY'],
                    'Accept-Encoding': _0x5d4ef7['yspyN'],
                    'Connection': _0x5d4ef7['uwTcR'],
                    'Cookie': '' + (_0x5d4ef7['gyWut'](lz_jdpin_token_cookie, lz_jdpin_token_cookie) || '') + ($['Pin'] && _0x5d4ef7['iNhWN'](_0x5d4ef7['iNhWN'](_0x5d4ef7['QFjcl'], $['Pin']), ';') || '') + activityCookie,
                    'Referer': 'https://lzdz1-isv.isvjcloud.com/dingzhi/fugu/game/activity?activityId=dz210968869301&adSource=' + $['adSource'],
                    'User-Agent': $['UA']
                }
            };
            $['get'](_0x11c5b1, async (_0x5d0280, _0x579097, _0x16134a) => {
                var _0x247584 = {
                    'IIXtl': function(_0x21d5a9, _0x4d8854) {
                        return _0x4de159['egbSg'](_0x21d5a9, _0x4d8854);
                    },
                    'Otjhp': _0x4de159['FOchf']
                };
                try {} catch (_0x255a60) {
                    $['logErr'](_0x255a60, _0x579097);
                } finally {
                    if (_0x4de159['NTxHM'](_0x4de159['dOMoa'], _0x4de159['ebQhD'])) {
                        if (_0x579097 && _0x579097['statusCode'] && _0x247584['IIXtl'](_0x579097['statusCode'], 0x1ed)) {
                            console['log'](_0x247584['Otjhp']);
                            $['outFlag'] = !![];
                        }
                        console['log']('' + $['toStr'](_0x5d0280, _0x5d0280));
                        console['log'](type + ' API请求失败，请检查网路重试');
                    } else {
                        _0x4de159['hTzpY'](_0x569022);
                    }
                }
            });
        }
    });
}

function getCk() {
    var _0x173c9a = {
        'NjhSA': function(_0x23a67b, _0x312c37) {
            return _0x23a67b != _0x312c37;
        },
        'VgonG': 'undefined',
        'Aeyzl': 'https://img10.360buyimg.com/imgzone/jfs/t1/7020/27/13511/6142/5c5138d8E4df2e764/5a1216a3a5043c5d.png',
        'ZsJfZ': '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie',
        'MzpHr': function(_0x2c38c0, _0x3dc931) {
            return _0x2c38c0 !== _0x3dc931;
        },
        'ZyltZ': 'EVNcE',
        'oAxpT': 'yLOET',
        'Sxqhx': 'FjgkH',
        'aSwta': 'owTiL',
        'nDKDp': function(_0x930d5f, _0x4f3123) {
            return _0x930d5f(_0x4f3123);
        },
        'IqFoi': function(_0x3bf072, _0x1d6afc) {
            return _0x3bf072 === _0x1d6afc;
        },
        'GYwjW': 'LfSAy',
        'PpTKt': 'CxjoM',
        'VhGVO': function(_0x421616, _0x491ff2) {
            return _0x421616 == _0x491ff2;
        },
        'lGmsu': '此ip已被限制，请过10分钟后再执行脚本\n',
        'BEQuT': function(_0x3a810, _0x2736cc) {
            return _0x3a810 === _0x2736cc;
        },
        'CIXzc': 'qyJHQ',
        'CLWMb': 'OSRhQ',
        'QCvBP': 'ZqmUP',
        'FsyrY': function(_0x3a7dab) {
            return _0x3a7dab();
        }
    };
    return new Promise(_0x517780 => {
        var _0x30f9b2 = {
            'LoMbn': function(_0xc7ceca, _0x1408d6) {
                return _0x173c9a['NjhSA'](_0xc7ceca, _0x1408d6);
            },
            'aFGiy': _0x173c9a['VgonG'],
            'DAUsf': _0x173c9a['Aeyzl'],
            'cOpcJ': _0x173c9a['ZsJfZ'],
            'xpQYc': function(_0xc37288, _0x4aecdb) {
                return _0x173c9a['MzpHr'](_0xc37288, _0x4aecdb);
            },
            'yuUSu': _0x173c9a['ZyltZ'],
            'Akxnd': _0x173c9a['oAxpT'],
            'sMnUo': _0x173c9a['Sxqhx'],
            'UVIyx': _0x173c9a['aSwta'],
            'uZwFZ': function(_0x45d28e, _0x1cfbfb) {
                return _0x173c9a['nDKDp'](_0x45d28e, _0x1cfbfb);
            },
            'TMNLo': function(_0x23f42a, _0xe66abe) {
                return _0x173c9a['IqFoi'](_0x23f42a, _0xe66abe);
            },
            'tOrEU': _0x173c9a['GYwjW'],
            'aNaDx': _0x173c9a['PpTKt'],
            'GrkMK': function(_0x375f6b, _0x2e7240) {
                return _0x173c9a['VhGVO'](_0x375f6b, _0x2e7240);
            },
            'sKWXS': _0x173c9a['lGmsu'],
            'OaLDE': function(_0x120afe, _0x3322bd) {
                return _0x173c9a['BEQuT'](_0x120afe, _0x3322bd);
            },
            'VYOgN': _0x173c9a['CIXzc'],
            'FrhNc': _0x173c9a['CLWMb'],
            'SCRPI': _0x173c9a['QCvBP'],
            'HKyom': function(_0x24e41c) {
                return _0x173c9a['FsyrY'](_0x24e41c);
            }
        };
        let _0x479780 = {
            'url': 'https://lzdz1-isv.isvjcloud.com/dingzhi/fugu/game/activity?activityId=dz210968869301&adSource=' + $['adSource'],
            'followRedirect': ![],
            'headers': {
                'User-Agent': $['UA']
            }
        };
        $['get'](_0x479780, async (_0x1e6f01, _0x17d69f, _0x23b400) => {
            var _0x19537d = {
                'sdvfN': function(_0x523d36, _0x272477) {
                    return _0x30f9b2['LoMbn'](_0x523d36, _0x272477);
                },
                'flQSt': _0x30f9b2['aFGiy'],
                'JZShe': _0x30f9b2['DAUsf'],
                'nekAv': _0x30f9b2['cOpcJ']
            };
            if (_0x30f9b2['xpQYc'](_0x30f9b2['yuUSu'], _0x30f9b2['Akxnd'])) {
                try {
                    if (_0x30f9b2['xpQYc'](_0x30f9b2['sMnUo'], _0x30f9b2['UVIyx'])) {
                        _0x30f9b2['uZwFZ'](setActivityCookie, _0x17d69f);
                        if (_0x1e6f01) {
                            if (_0x30f9b2['TMNLo'](_0x30f9b2['tOrEU'], _0x30f9b2['aNaDx'])) {
                                $['logErr'](e, _0x17d69f);
                            } else {
                                if (_0x17d69f['statusCode'] && _0x30f9b2['GrkMK'](_0x17d69f['statusCode'], 0x1ed)) {
                                    console['log'](_0x30f9b2['sKWXS']);
                                    $['outFlag'] = !![];
                                }
                                console['log']('' + $['toStr'](_0x1e6f01));
                                console['log']($['name'] + ' cookie API请求失败，请检查网路重试');
                            }
                        } else {}
                    } else {
                        setcookie = setcookies['split'](',');
                    }
                } catch (_0x8e7191) {
                    if (_0x30f9b2['OaLDE'](_0x30f9b2['VYOgN'], _0x30f9b2['VYOgN'])) {
                        $['logErr'](_0x8e7191, _0x17d69f);
                    } else {
                        if (res['data'] && _0x19537d['sdvfN'](typeof res['data']['yunMidImageUrl'], _0x19537d['flQSt'])) $['attrTouXiang'] = res['data']['yunMidImageUrl'] || _0x19537d['JZShe'];
                    }
                } finally {
                    if (_0x30f9b2['xpQYc'](_0x30f9b2['FrhNc'], _0x30f9b2['SCRPI'])) {
                        _0x30f9b2['HKyom'](_0x517780);
                    } else {
                        console['log'](e);
                        $['msg']($['name'], '', _0x19537d['nekAv']);
                        return [];
                    }
                }
            } else {
                $['logErr'](e, _0x17d69f);
            }
        });
    });
}

function setActivityCookie(_0x618ea1) {
    var _0x5c189e = {
        'rYWxs': function(_0x1a922b, _0x42e2a4) {
            return _0x1a922b != _0x42e2a4;
        },
        'AYPMK': 'object',
        'dgzAT': function(_0x522ff4, _0x11770b) {
            return _0x522ff4 > _0x11770b;
        },
        'fBLyl': 'LZ_TOKEN_KEY=',
        'RJwBB': function(_0x4566b1, _0x1dc659) {
            return _0x4566b1 + _0x1dc659;
        },
        'EbaTz': function(_0x54fd0a, _0x53c616) {
            return _0x54fd0a > _0x53c616;
        },
        'BJQlA': 'LZ_TOKEN_VALUE=',
        'OQdEh': function(_0x381ea0, _0x278119) {
            return _0x381ea0 + _0x278119;
        },
        'qLEEO': 'lz_jdpin_token=',
        'SoaiY': 'headers',
        'mptUj': 'set-cookie',
        'bNNfg': 'Set-Cookie',
        'LmkzW': function(_0xfe9f66, _0x2305e4) {
            return _0xfe9f66 != _0x2305e4;
        },
        'wpOCQ': function(_0x35ed84, _0x589722) {
            return _0x35ed84 === _0x589722;
        },
        'VZImk': 'ORTBf',
        'ggpSG': function(_0x5a4576, _0x2de605) {
            return _0x5a4576 + _0x2de605;
        },
        'NTqPy': function(_0x2440aa, _0x5932aa) {
            return _0x2440aa > _0x5932aa;
        },
        'GtOzI': function(_0x3025f2, _0x556d80) {
            return _0x3025f2 + _0x556d80;
        },
        'bvFmW': function(_0x2a7067, _0x1d7a36) {
            return _0x2a7067 && _0x1d7a36;
        }
    };
    let _0x1457e3 = '';
    let _0xa09380 = '';
    let _0x4853e2 = '';
    let _0x5163a4 = _0x618ea1 && _0x618ea1[_0x5c189e['SoaiY']] && (_0x618ea1[_0x5c189e['SoaiY']][_0x5c189e['mptUj']] || _0x618ea1[_0x5c189e['SoaiY']][_0x5c189e['bNNfg']] || '') || '';
    let _0x188a33 = '';
    if (_0x5163a4) {
        if (_0x5c189e['LmkzW'](typeof _0x5163a4, _0x5c189e['AYPMK'])) {
            _0x188a33 = _0x5163a4['split'](',');
        } else _0x188a33 = _0x5163a4;
        for (let _0xf4989e of _0x188a33) {
            let _0x1a0aba = _0xf4989e['split'](';')[0x0]['trim']();
            if (_0x1a0aba['split']('=')[0x1]) {
                if (_0x5c189e['wpOCQ'](_0x5c189e['VZImk'], _0x5c189e['VZImk'])) {
                    if (_0x5c189e['EbaTz'](_0x1a0aba['indexOf'](_0x5c189e['fBLyl']), -0x1)) _0x1457e3 = _0x5c189e['OQdEh'](_0x1a0aba['replace'](/ /g, ''), ';');
                    if (_0x5c189e['EbaTz'](_0x1a0aba['indexOf'](_0x5c189e['BJQlA']), -0x1)) _0xa09380 = _0x5c189e['ggpSG'](_0x1a0aba['replace'](/ /g, ''), ';');
                    if (_0x5c189e['NTqPy'](_0x1a0aba['indexOf'](_0x5c189e['qLEEO']), -0x1)) _0x4853e2 = _0x5c189e['ggpSG'](_0x5c189e['GtOzI']('', _0x1a0aba['replace'](/ /g, '')), ';');
                } else {
                    if (_0x5c189e['rYWxs'](typeof _0x5163a4, _0x5c189e['AYPMK'])) {
                        _0x188a33 = _0x5163a4['split'](',');
                    } else _0x188a33 = _0x5163a4;
                    for (let _0x538c04 of _0x188a33) {
                        let _0x16d2b6 = _0x538c04['split'](';')[0x0]['trim']();
                        if (_0x16d2b6['split']('=')[0x1]) {
                            if (_0x5c189e['dgzAT'](_0x16d2b6['indexOf'](_0x5c189e['fBLyl']), -0x1)) _0x1457e3 = _0x5c189e['RJwBB'](_0x16d2b6['replace'](/ /g, ''), ';');
                            if (_0x5c189e['EbaTz'](_0x16d2b6['indexOf'](_0x5c189e['BJQlA']), -0x1)) _0xa09380 = _0x5c189e['OQdEh'](_0x16d2b6['replace'](/ /g, ''), ';');
                            if (_0x5c189e['EbaTz'](_0x16d2b6['indexOf'](_0x5c189e['qLEEO']), -0x1)) _0x4853e2 = _0x5c189e['OQdEh'](_0x5c189e['OQdEh']('', _0x16d2b6['replace'](/ /g, '')), ';');
                        }
                    }
                }
            }
        }
    }
    if (_0x5c189e['bvFmW'](_0x1457e3, _0xa09380)) activityCookie = _0x1457e3 + ' ' + _0xa09380;
    if (_0x4853e2) lz_jdpin_token_cookie = _0x4853e2;
}
async function getUA() {
    var _0x302dbd = {
        'hlFCy': function(_0x59d80b, _0x311e14) {
            return _0x59d80b(_0x311e14);
        }
    };
    $['UA'] = 'jdapp;iPhone;10.1.4;13.1.2;' + _0x302dbd['hlFCy'](randomString, 0x28) + ';network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1';
}

function randomString(_0x36fe72) {
    var _0x1c4221 = {
        'boTxp': function(_0x41132a, _0x1793b4) {
            return _0x41132a || _0x1793b4;
        },
        'Adzmh': 'abcdef0123456789',
        'dRTwt': function(_0x2a53e1, _0x3c4c53) {
            return _0x2a53e1 < _0x3c4c53;
        },
        'NhGCQ': function(_0x824f06, _0x403678) {
            return _0x824f06 * _0x403678;
        }
    };
    _0x36fe72 = _0x1c4221['boTxp'](_0x36fe72, 0x20);
    let _0x442fe0 = _0x1c4221['Adzmh'],
        _0x13c4c7 = _0x442fe0['length'],
        _0x2e9e37 = '';
    for (i = 0x0; _0x1c4221['dRTwt'](i, _0x36fe72); i++) _0x2e9e37 += _0x442fe0['charAt'](Math['floor'](_0x1c4221['NhGCQ'](Math['random'](), _0x13c4c7)));
    return _0x2e9e37;
}

function jsonParse(_0x445f6f) {
    var _0x5e8f14 = {
        'lCAqt': function(_0x426d5f, _0xc1eed2) {
            return _0x426d5f || _0xc1eed2;
        },
        'TeaEj': 'abcdef0123456789',
        'bNBAW': function(_0x23af7f, _0x50cca1) {
            return _0x23af7f < _0x50cca1;
        },
        'xsxhK': function(_0x3d96c3, _0x321358) {
            return _0x3d96c3 * _0x321358;
        },
        'lEbgd': function(_0x327d74, _0x440315) {
            return _0x327d74 == _0x440315;
        },
        'pUyvs': 'string',
        'XzQnZ': function(_0x2800b6, _0x110162) {
            return _0x2800b6 === _0x110162;
        },
        'XwVkq': 'ancdr',
        'xmJzH': '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie'
    };
    if (_0x5e8f14['lEbgd'](typeof _0x445f6f, _0x5e8f14['pUyvs'])) {
        try {
            return JSON['parse'](_0x445f6f);
        } catch (_0x22f9ab) {
            if (_0x5e8f14['XzQnZ'](_0x5e8f14['XwVkq'], _0x5e8f14['XwVkq'])) {
                console['log'](_0x22f9ab);
                $['msg']($['name'], '', _0x5e8f14['xmJzH']);
                return [];
            } else {
                _0x22f9ab = _0x5e8f14['lCAqt'](_0x22f9ab, 0x20);
                let _0x692335 = _0x5e8f14['TeaEj'],
                    _0x2b7764 = _0x692335['length'],
                    _0x2606f1 = '';
                for (i = 0x0; _0x5e8f14['bNBAW'](i, _0x22f9ab); i++) _0x2606f1 += _0x692335['charAt'](Math['floor'](_0x5e8f14['xsxhK'](Math['random'](), _0x2b7764)));
                return _0x2606f1;
            }
        }
    }
};
_0xodh = 'jsjiami.com.v6'

// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}

