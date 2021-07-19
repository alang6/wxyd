/*
整点京豆雨，每天8*16豆

boxjs订阅地址: https://raw.githubusercontent.com/nianyuguai/longzhuzhu/main/qx/longzhuzhu.boxjs.json

环境变量:
# 关闭京豆雨通知
export RAIN_NOTIFY_CONTROL="false"

已支持IOS双京东账号,Node.js支持N个京东账号
脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js

[task_local]
#整点京豆雨
1 0-23/1 * * * https://raw.githubusercontent.com/nianyuguai/longzhuzhu/main/qx/jd_super_redrain.js, tag=整点京豆雨, enabled=true

================Loon==============
[Script]
cron "1 0-23/1 * * *" script-path=https://raw.githubusercontent.com/nianyuguai/longzhuzhu/main/qx/jd_super_redrain.js,tag=整点京豆雨

===============Surge=================
整点京豆雨 = type=cron,cronexp="1 0-23/1 * * *",wake-system=1,timeout=20,script-path=https://raw.githubusercontent.com/nianyuguai/longzhuzhu/main/qx/jd_super_redrain.js

============小火箭=========
整点京豆雨= type=cron,script-path=https://raw.githubusercontent.com/nianyuguai/longzhuzhu/main/qx/jd_super_redrain.js, cronexpr="1 0-23/1 * * *",timeout=200, enable=true
 */
const $ = new Env('整点京豆雨');

const notify = $.isNode() ? require('./sendNotify') : '';
//Node.js用户请在jdCookie.js处填写京东ck;
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
//IOS等用户直接用NobyDa的jd cookie
let cookiesArr = [], cookie = '', message;

/*
 *Progcessed By JSDec in 0.61s
 *JSDec - JSDec.js.org
 */
let _0x52284b = '';
let _0x1fff84 = ![];
if ($['isNode']()) {
    Object['keys'](jdCookieNode)['forEach'](_0x39100b => {
        cookiesArr['push'](jdCookieNode[_0x39100b]);
    });
    if (process['env']['JD_DEBUG'] && process['env']['JD_DEBUG'] === 'false') console['log'] = () => {};
    if (JSON['stringify'](process['env'])['indexOf']('GITHUB') > -0x1) {
        process['exit'](0x0);
    }
} else {
    cookiesArr = [$['getdata']('CookieJD'), $['getdata']('CookieJD2'), ..._0x45775d($['getdata']('CookiesJD') || '[]')['map'](_0x50b8bf => _0x50b8bf['cookie'])]['filter'](_0x22c89a => !!_0x22c89a);
}
const _0x4a370d = 'https://api.m.jd.com/api';
!(async () => {
    var _0x5bb5bf = {
        'FSoxX': function(_0x155043, _0x220966) {
            return _0x155043 < _0x220966;
        },
        'BTfrM': function(_0x5ee65d, _0x4d0a21) {
            return _0x5ee65d + _0x4d0a21;
        },
        'GXLtl': function(_0x6d4081, _0x479bff, _0x473926) {
            return _0x6d4081(_0x479bff, _0x473926);
        },
        'rJhAp': function(_0x274a30, _0x25a624) {
            return _0x274a30 == _0x25a624;
        },
        'JLqbJ': function(_0x23ca3a, _0x3f875c) {
            return _0x23ca3a != _0x3f875c;
        },
        'FNpuI': 'RAIN_NOTIFY_CONTROL',
        'uuMdl': 'false',
        'REEDG': function(_0x149731, _0x1b1c64) {
            return _0x149731 === _0x1b1c64;
        },
        'VdthD': 'Mtpsk',
        'UggOR': 'hcNdw',
        'azvaC': '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取',
        'fjCby': 'https://bean.m.jd.com/',
        'RpbKh': 'SUPER_RAIN_RRA',
        'oROzH': function(_0x57a32c) {
            return _0x57a32c();
        },
        'mHYIJ': function(_0x5c2536, _0x3e9e7e) {
            return _0x5c2536(_0x3e9e7e);
        },
        'ryfGv': function(_0x110470, _0x3d36b5) {
            return _0x110470 < _0x3d36b5;
        },
        'cObZd': function(_0x35999c, _0x2d67b5) {
            return _0x35999c === _0x2d67b5;
        },
        'iZkPZ': 'IdDFB',
        'tUItj': function(_0x2663c3, _0x58c00d) {
            return _0x2663c3 % _0x58c00d;
        },
        'hDvdV': 'BUczm',
        'crYcg': 'nvykI',
        'kPkEO': function(_0x2f7481, _0x7c778f) {
            return _0x2f7481 > _0x7c778f;
        },
        'SKjEN': function(_0x13e970, _0x44af8c) {
            return _0x13e970 / _0x44af8c;
        },
        'iksqB': function(_0x3a0925, _0x3850e5) {
            return _0x3a0925 <= _0x3850e5;
        },
        'FniYK': function(_0x26509c, _0x1897d4, _0x539175) {
            return _0x26509c(_0x1897d4, _0x539175);
        },
        'XGtBB': function(_0x3b4732, _0x37179b) {
            return _0x3b4732 !== _0x37179b;
        },
        'IYweI': 'YjNLV',
        'DXIgg': 'ILzPT',
        'AHVfs': function(_0x129c67, _0x2e3236) {
            return _0x129c67(_0x2e3236);
        },
        'rJmlX': function(_0x34d48d) {
            return _0x34d48d();
        },
        'KXZSd': function(_0x410178, _0x412eb7) {
            return _0x410178 === _0x412eb7;
        },
        'YOLSD': 'UoObL'
    };
    console['log']('\x0a');
    if (!cookiesArr[0x0]) {
        if (_0x5bb5bf['REEDG'](_0x5bb5bf['VdthD'], _0x5bb5bf['UggOR'])) {
            console['log']('' + JSON['stringify'](err));
        } else {
            $['msg']($['name'], _0x5bb5bf['azvaC'], _0x5bb5bf['fjCby'], {
                'open-url': _0x5bb5bf['fjCby']
            });
            return;
        }
    }
    let _0x367461 = '';
    if (!$['isNode']() && $['getdata'](_0x5bb5bf['RpbKh'])) {
        _0x367461 = $['getdata'](_0x5bb5bf['RpbKh']);
        $['log']('本地配置RRA: ' + _0x367461);
    } else {
        let _0x8cb6a5 = _0x5bb5bf['oROzH'](_0x5172b1);
        console['log']('召唤龙王~');
        _0x367461 = await _0x5bb5bf['mHYIJ'](_0x581886, _0x8cb6a5);
        console['log']('召唤完成');
    }
    if (!_0x367461) {
        $['log']('今日龙王🐲休假，晴空万里☀️，改日再来～\n前往龙王庙祈福求雨: https://t.me/longzhuzhu');
        return;
    }
    let _0x45a7d7 = _0x367461['split'](';');
    _0x45a7d7 = _0x45a7d7['map'](_0x1df16e => _0x45bcf3(_0x1df16e));
    console['log']('龙王就位: ' + _0x45a7d7 + '\x0a');
    for (let _0x46df84 of _0x45a7d7) {
        let _0x5545b6 = {};
        for (let _0x526a17 = 0x0; _0x5bb5bf['ryfGv'](_0x526a17, 0x18); _0x526a17++) {
            if (_0x5bb5bf['cObZd'](_0x5bb5bf['iZkPZ'], _0x5bb5bf['iZkPZ'])) {
                _0x5545b6[_0x5bb5bf['mHYIJ'](String, _0x526a17)] = _0x46df84;
            } else {
                _0x1fff84 = !![];
                let _0x3eb47e = code['trim']()['replace'](/-/g, '');
                var _0x2a94c3 = _0x3eb47e['split']('')['reverse']()['join']('');
                var _0x1b9eb5 = _0x2a94c3['length'];
                var _0x4c9f4b;
                var _0x59b66a = [];
                for (var _0x4af5c1 = 0x0; _0x5bb5bf['FSoxX'](_0x4af5c1, _0x1b9eb5); _0x4af5c1 = _0x5bb5bf['BTfrM'](_0x4af5c1, 0x2)) {
                    _0x4c9f4b = _0x5bb5bf['GXLtl'](parseInt, _0x2a94c3['substr'](_0x4af5c1, 0x2), 0x10);
                    _0x59b66a['push'](String['fromCharCode'](_0x4c9f4b));
                }
                return _0x59b66a['join']('')['replace'](/#/g, '');
            }
        }
        let _0x5e9eb1 = _0x5bb5bf['tUItj'](_0x5bb5bf['BTfrM'](new Date()['getUTCHours'](), 0x8), 0x18);
        if (_0x5bb5bf['cObZd'](new Date()['getMinutes'](), 0x3b) && _0x1fff84) {
            await _0x5bb5bf['mHYIJ'](_0x531b44, 0xea60);
        }
        if (_0x5545b6[_0x5e9eb1]) {
            $['activityId'] = _0x5545b6[_0x5e9eb1];
            $['log']('RRA: ' + _0x46df84 + '\x0a');
        } else {
            if (_0x5bb5bf['cObZd'](_0x5bb5bf['hDvdV'], _0x5bb5bf['hDvdV'])) {
                $['log']('无法从本地读取配置，请检查运行时间');
                return;
            } else {
                $['logErr'](e, resp);
            }
        }
        for (let _0x115745 = 0x0; _0x5bb5bf['ryfGv'](_0x115745, cookiesArr['length']); _0x115745++) {
            if (cookiesArr[_0x115745]) {
                cookie = cookiesArr[_0x115745];
                $['UserName'] = _0x5bb5bf['mHYIJ'](decodeURIComponent, cookie['match'](/pt_pin=([^; ]+)(?=;?)/) && cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
                $['index'] = _0x5bb5bf['BTfrM'](_0x115745, 0x1);
                $['isLogin'] = !![];
                $['nickName'] = '';
                message = '';
                await _0x5bb5bf['oROzH'](_0x3a17fc);
                console['log']('\n******开始【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + '*********\n');
                if (!$['isLogin']) {
                    if (_0x5bb5bf['cObZd'](_0x5bb5bf['crYcg'], _0x5bb5bf['crYcg'])) {
                        $['msg']($['name'], '【提示】cookie已失效', '京东账号' + $['index'] + ' ' + ($['nickName'] || $['UserName']) + '\n请重新登录获取\nhttps://bean.m.jd.com/', {
                            'open-url': _0x5bb5bf['fjCby']
                        });
                        if ($['isNode']()) {
                            await notify['sendNotify']($['name'] + 'cookie已失效 - ' + $['UserName'], '京东账号' + $['index'] + ' ' + $['UserName'] + '\n请重新登录获取cookie');
                        }
                        continue;
                    } else {
                        if (_0x5bb5bf['rJhAp'](resp['statusCode'], 0x202)) {
                            console['log']('庙里挤不进去, 请稍后重试~');
                        } else {
                            console['log']('' + JSON['stringify'](err));
                        }
                        id = '';
                    }
                }
                if (_0x1fff84 && _0x5bb5bf['kPkEO'](_0x5bb5bf['SKjEN'](_0x115745, _0x5bb5bf['GXLtl'](_0x35ea2e, 0xf, 0x14)), 0x1) && _0x5bb5bf['iksqB'](_0x5bb5bf['GXLtl'](_0x35ea2e, 0x1, 0x64), _0x5bb5bf['FniYK'](_0x35ea2e, 0x14, 0x1e))) {
                    if (_0x5bb5bf['XGtBB'](_0x5bb5bf['IYweI'], _0x5bb5bf['DXIgg'])) {
                        _0x5bb5bf['AHVfs'](_0x531b44, _0x5bb5bf['FniYK'](_0x35ea2e, 0xfa, 0x1f4));
                        $['log']('异常：{"msg":"好可惜哦，奖品与你擦肩而过","code":"0","subCode":"5"}');
                        continue;
                    } else {
                        return !![];
                    }
                }
                await _0x5bb5bf['rJmlX'](_0x43cd7d);
            }
        }
    }
    if (_0x52284b && _0x5bb5bf['rJmlX'](_0x577a1f)) {
        if (_0x5bb5bf['KXZSd'](_0x5bb5bf['YOLSD'], _0x5bb5bf['YOLSD'])) {
            if ($['isNode']()) await notify['sendNotify']('' + $['name'], '' + _0x52284b);
            $['msg']($['name'], '', _0x52284b);
        } else {
            return _0x5bb5bf['JLqbJ']($['getdata'](_0x5bb5bf['FNpuI']), _0x5bb5bf['uuMdl']);
        }
    }
})()['catch'](_0x329105 => {
    $['log']('', '❌ ' + $['name'] + ', 失败! 原因: ' + _0x329105 + '!', '');
})['finally'](() => {
    $['done']();
});

function _0x531b44(_0x20ad8f) {
    return new Promise(_0x5dfc7f => setTimeout(_0x5dfc7f, _0x20ad8f));
}

function _0x45bcf3(_0x53c464) {
    var _0x43be0e = {
        'AwhME': function(_0x4ce980, _0x42286a) {
            return _0x4ce980 != _0x42286a;
        },
        'oWhzx': function(_0x4465f8, _0xccd65) {
            return _0x4465f8 < _0xccd65;
        },
        'BTfak': function(_0x19fb16, _0x3fab1c) {
            return _0x19fb16 + _0x3fab1c;
        },
        'oQCgQ': function(_0x479f58, _0x9529, _0x45fa55) {
            return _0x479f58(_0x9529, _0x45fa55);
        }
    };
    if (_0x43be0e['AwhME'](_0x53c464['indexOf']('-'), -0x1)) {
        _0x1fff84 = !![];
        let _0x180a09 = _0x53c464['trim']()['replace'](/-/g, '');
        var _0xe56b14 = _0x180a09['split']('')['reverse']()['join']('');
        var _0x747f0c = _0xe56b14['length'];
        var _0x9561a8;
        var _0x599eab = [];
        for (var _0x1c7000 = 0x0; _0x43be0e['oWhzx'](_0x1c7000, _0x747f0c); _0x1c7000 = _0x43be0e['BTfak'](_0x1c7000, 0x2)) {
            _0x9561a8 = _0x43be0e['oQCgQ'](parseInt, _0xe56b14['substr'](_0x1c7000, 0x2), 0x10);
            _0x599eab['push'](String['fromCharCode'](_0x9561a8));
        }
        return _0x599eab['join']('')['replace'](/#/g, '');
    } else {
        return _0x53c464;
    }
}

function _0x35ea2e(_0x3905b3, _0x9ba4f6) {
    var _0x23b48e = {
        'WvBVs': function(_0xc1d6e0, _0x2b8daf) {
            return _0xc1d6e0 + _0x2b8daf;
        },
        'itmdH': function(_0x488d67, _0x348055) {
            return _0x488d67 * _0x348055;
        },
        'JRrsX': function(_0x1e5588, _0x176ff9) {
            return _0x1e5588 - _0x176ff9;
        }
    };
    return _0x23b48e['WvBVs'](Math['floor'](_0x23b48e['itmdH'](Math['random'](), _0x23b48e['JRrsX'](_0x9ba4f6, _0x3905b3))), _0x3905b3);
}

function _0x43cd7d() {
    var _0x547c14 = {
        'rgFYu': function(_0x473681, _0x59e41f) {
            return _0x473681 != _0x59e41f;
        },
        'uGRbD': 'false',
        'TbSjA': function(_0x413ac2, _0x531448) {
            return _0x413ac2 !== _0x531448;
        },
        'gaHSf': 'lfAqV',
        'XXSTM': function(_0x3884b1, _0x4e24f0) {
            return _0x3884b1 === _0x4e24f0;
        },
        'QUsRt': 'wPtBw',
        'lExuZ': 'MUyrM',
        'pCkGy': function(_0x4fe4a5, _0x570b6a) {
            return _0x4fe4a5(_0x570b6a);
        },
        'nfHPK': 'ZDxzj',
        'dnkrp': 'auWBK',
        'xVLDL': function(_0x2558ca) {
            return _0x2558ca();
        },
        'hfYzp': function(_0x2010ea, _0x116ff8) {
            return _0x2010ea !== _0x116ff8;
        },
        'yebJU': 'mUEdA',
        'qEzgP': function(_0x1c331e, _0x2f839f, _0x2285cb) {
            return _0x1c331e(_0x2f839f, _0x2285cb);
        },
        'bqGsc': 'noahRedRainLottery'
    };
    return new Promise(_0x5a40eb => {
        var _0x15c2f7 = {
            'oMQmT': function(_0x4c2f52, _0x5f2d85) {
                return _0x547c14['rgFYu'](_0x4c2f52, _0x5f2d85);
            },
            'Wyoab': _0x547c14['uGRbD'],
            'bpDma': function(_0x53878a, _0x19d7de) {
                return _0x547c14['TbSjA'](_0x53878a, _0x19d7de);
            },
            'LpNhH': _0x547c14['gaHSf'],
            'ruWAD': function(_0x5b1ba7, _0x1e0d5f) {
                return _0x547c14['XXSTM'](_0x5b1ba7, _0x1e0d5f);
            },
            'zTkae': _0x547c14['QUsRt'],
            'uFFWm': _0x547c14['lExuZ'],
            'IokpU': function(_0x10e79d, _0x1c912b) {
                return _0x547c14['pCkGy'](_0x10e79d, _0x1c912b);
            },
            'zCZYY': function(_0x128843, _0x5dc0c3) {
                return _0x547c14['XXSTM'](_0x128843, _0x5dc0c3);
            },
            'torfy': _0x547c14['nfHPK'],
            'KKOSC': _0x547c14['dnkrp'],
            'Lpbco': function(_0xa13868, _0x25834e) {
                return _0x547c14['XXSTM'](_0xa13868, _0x25834e);
            },
            'ahOip': function(_0x265251) {
                return _0x547c14['xVLDL'](_0x265251);
            }
        };
        if (_0x547c14['hfYzp'](_0x547c14['yebJU'], _0x547c14['yebJU'])) {
            id = data['replace'](/[\r\n]/g, '');
        } else {
            const _0x55df22 = {
                'actId': $['activityId']
            };
            $['get'](_0x547c14['qEzgP'](_0x24e6d8, _0x547c14['bqGsc'], _0x55df22), (_0x129cf1, _0x516ee4, _0x3d36af) => {
                if (_0x15c2f7['bpDma'](_0x15c2f7['LpNhH'], _0x15c2f7['LpNhH'])) {
                    console['log']('庙里挤不进去, 请稍后重试~');
                } else {
                    try {
                        if (_0x129cf1) {
                            if (_0x15c2f7['ruWAD'](_0x15c2f7['zTkae'], _0x15c2f7['uFFWm'])) {
                                $['logErr'](e, _0x516ee4);
                            } else {
                                console['log']('' + JSON['stringify'](_0x129cf1));
                                console['log']($['name'] + ' API请求失败，请检查网路重试');
                            }
                        } else {
                            if (_0x15c2f7['IokpU'](_0x154d96, _0x3d36af)) {
                                if (_0x15c2f7['zCZYY'](_0x15c2f7['torfy'], _0x15c2f7['KKOSC'])) {
                                    return _0x15c2f7['oMQmT'](process['env']['RAIN_NOTIFY_CONTROL'], _0x15c2f7['Wyoab']);
                                } else {
                                    _0x3d36af = JSON['parse'](_0x3d36af);
                                    if (_0x15c2f7['Lpbco'](_0x3d36af['subCode'], '0')) {
                                        console['log']('领取成功，获得' + JSON['stringify'](_0x3d36af['lotteryResult']));
                                        message += '领取成功，获得 ' + _0x3d36af['lotteryResult']['jPeasList'][0x0]['quantity'] + '京豆';
                                        _0x52284b += '京东账号' + $['index'] + '-' + ($['nickName'] || $['UserName']) + '\n领取成功，获得 ' + _0x3d36af['lotteryResult']['jPeasList'][0x0]['quantity'] + '京豆' + (_0x15c2f7['bpDma']($['index'], cookiesArr['length']) ? '\x0a\x0a' : '\x0a\x0a');
                                    } else if (_0x15c2f7['Lpbco'](_0x3d36af['subCode'], '8')) {
                                        console['log']('今日次数已满');
                                        message += '领取失败，本场已领过';
                                    } else {
                                        console['log']('异常：' + JSON['stringify'](_0x3d36af));
                                    }
                                }
                            }
                        }
                    } catch (_0x4e03cd) {
                        $['logErr'](_0x4e03cd, _0x516ee4);
                    } finally {
                        _0x15c2f7['ahOip'](_0x5a40eb);
                    }
                }
            });
        }
    });
}

function _0x581886(_0x95abde) {
    var _0x1e3fe3 = {
        'TUkUg': function(_0x142862, _0x4a805f) {
            return _0x142862 === _0x4a805f;
        },
        'ruknc': 'retcode',
        'VIiXL': 'base',
        'NoZao': function(_0xb3a0b2, _0x38d7b0) {
            return _0xb3a0b2 !== _0x38d7b0;
        },
        'NgTRJ': 'cdlWw',
        'zzYfg': 'XTajK',
        'LeCeq': function(_0x1c8ac1, _0x510a77) {
            return _0x1c8ac1 == _0x510a77;
        },
        'WneUS': function(_0x311f91, _0x4f2e49) {
            return _0x311f91 === _0x4f2e49;
        },
        'lfykG': 'rtBBa',
        'itpDM': function(_0x4149af, _0x34a00f) {
            return _0x4149af !== _0x34a00f;
        },
        'AZezI': 'BAwaM',
        'wVLHQ': 'cErCC',
        'VICFv': function(_0x1ab683, _0x38b9d5) {
            return _0x1ab683(_0x38b9d5);
        }
    };
    return new Promise(_0x57598d => {
        var _0x48035c = {
            'JWCZs': function(_0x1c23d2, _0x39aeb3) {
                return _0x1e3fe3['TUkUg'](_0x1c23d2, _0x39aeb3);
            },
            'EepGE': _0x1e3fe3['ruknc'],
            'zxrNS': _0x1e3fe3['VIiXL'],
            'YhUuO': function(_0x29e42e, _0x1d2ec3) {
                return _0x1e3fe3['NoZao'](_0x29e42e, _0x1d2ec3);
            },
            'DOgny': _0x1e3fe3['NgTRJ'],
            'sZIHE': _0x1e3fe3['zzYfg'],
            'VBUUR': function(_0x2959bd, _0x1a4236) {
                return _0x1e3fe3['LeCeq'](_0x2959bd, _0x1a4236);
            },
            'SXvJG': function(_0x5281e6, _0x4652aa) {
                return _0x1e3fe3['WneUS'](_0x5281e6, _0x4652aa);
            },
            'vqIed': _0x1e3fe3['lfykG'],
            'QgOhj': function(_0x53b1b2, _0x102e19) {
                return _0x1e3fe3['itpDM'](_0x53b1b2, _0x102e19);
            },
            'ERQAK': _0x1e3fe3['AZezI'],
            'WlWwc': _0x1e3fe3['wVLHQ'],
            'yMBPB': function(_0x3557e2, _0x160c8f) {
                return _0x1e3fe3['VICFv'](_0x3557e2, _0x160c8f);
            }
        };
        let _0x44fb1a = '';
        $['get']({
            'url': _0x95abde
        }, async (_0x5b5fc8, _0x3d5d96, _0x2d5b60) => {
            if (_0x48035c['YhUuO'](_0x48035c['DOgny'], _0x48035c['DOgny'])) {
                return new Promise(_0x33a00d => setTimeout(_0x33a00d, time));
            } else {
                try {
                    if (_0x48035c['YhUuO'](_0x48035c['sZIHE'], _0x48035c['sZIHE'])) {
                        _0x44fb1a = '';
                    } else {
                        if (_0x5b5fc8) {
                            if (_0x48035c['VBUUR'](_0x3d5d96['statusCode'], 0x202)) {
                                console['log']('庙里挤不进去, 请稍后重试~');
                            } else {
                                if (_0x48035c['SXvJG'](_0x48035c['vqIed'], _0x48035c['vqIed'])) {
                                    console['log']('' + JSON['stringify'](_0x5b5fc8));
                                } else {
                                    _0x2d5b60 = JSON['parse'](_0x2d5b60);
                                    if (_0x48035c['JWCZs'](_0x2d5b60[_0x48035c['EepGE']], 0xd)) {
                                        $['isLogin'] = ![];
                                        return;
                                    }
                                    if (_0x48035c['JWCZs'](_0x2d5b60[_0x48035c['EepGE']], 0x0)) {
                                        $['nickName'] = _0x2d5b60[_0x48035c['zxrNS']] && _0x2d5b60[_0x48035c['zxrNS']]['nickname'] || $['UserName'];
                                    } else {
                                        $['nickName'] = $['UserName'];
                                    }
                                }
                            }
                            _0x44fb1a = '';
                        } else {
                            if (!!_0x2d5b60) {
                                _0x44fb1a = _0x2d5b60['replace'](/[\r\n]/g, '');
                            } else {
                                if (_0x48035c['QgOhj'](_0x48035c['ERQAK'], _0x48035c['ERQAK'])) {
                                    $['nickName'] = $['UserName'];
                                } else {
                                    _0x44fb1a = '';
                                }
                            }
                        }
                    }
                } catch (_0x11fd9e) {
                    $['logErr'](_0x11fd9e, _0x3d5d96);
                } finally {
                    if (_0x48035c['QgOhj'](_0x48035c['WlWwc'], _0x48035c['WlWwc'])) {
                        $['logErr'](e, _0x3d5d96);
                    } else {
                        _0x48035c['yMBPB'](_0x57598d, _0x44fb1a);
                    }
                }
            }
        });
    });
}

function _0x5172b1() {
    var _0x8f166a = {
        'iLRNw': 'https://jd-rra-1255594201.file.myqcloud.com/jd-live-rain.json',
        'wNZgG': 'JD_RRA_URL'
    };
    let _0x3c1502 = _0x8f166a['iLRNw'];
    if ($['isNode']() && process['env']['JD_RRA_URL']) {
        _0x3c1502 = process['env']['JD_RRA_URL'];
    } else if ($['getdata'](_0x8f166a['wNZgG'])) {
        _0x3c1502 = $['getdata'](_0x8f166a['wNZgG']);
    }
    return _0x3c1502;
}

function _0x577a1f() {
    var _0x584c06 = {
        'vKwzA': function(_0x51a557, _0x36cb55) {
            return _0x51a557 === _0x36cb55;
        },
        'kLVXt': function(_0x3ac1a9, _0x2f90bd) {
            return _0x3ac1a9 !== _0x2f90bd;
        },
        'qqUYP': function(_0x968f4, _0x29eb93) {
            return _0x968f4 === _0x29eb93;
        },
        'oLMTM': function(_0x180cfd, _0x14acaf) {
            return _0x180cfd != _0x14acaf;
        },
        'vZSDL': 'false',
        'iPYZK': 'RAIN_NOTIFY_CONTROL',
        'ZTtNY': 'AZKGi',
        'jQcur': 'qMkvd',
        'KIokv': function(_0x2cc3d1, _0x3fab21) {
            return _0x2cc3d1 != _0x3fab21;
        }
    };
    if ($['isNode']() && process['env']['RAIN_NOTIFY_CONTROL']) {
        return _0x584c06['oLMTM'](process['env']['RAIN_NOTIFY_CONTROL'], _0x584c06['vZSDL']);
    } else if ($['getdata'](_0x584c06['iPYZK'])) {
        if (_0x584c06['kLVXt'](_0x584c06['ZTtNY'], _0x584c06['jQcur'])) {
            return _0x584c06['KIokv']($['getdata'](_0x584c06['iPYZK']), _0x584c06['vZSDL']);
        } else {
            data = JSON['parse'](data);
            if (_0x584c06['vKwzA'](data['subCode'], '0')) {
                console['log']('领取成功，获得' + JSON['stringify'](data['lotteryResult']));
                message += '领取成功，获得 ' + data['lotteryResult']['jPeasList'][0x0]['quantity'] + '京豆';
                _0x52284b += '京东账号' + $['index'] + '-' + ($['nickName'] || $['UserName']) + '\n领取成功，获得 ' + data['lotteryResult']['jPeasList'][0x0]['quantity'] + '京豆' + (_0x584c06['kLVXt']($['index'], cookiesArr['length']) ? '\x0a\x0a' : '\x0a\x0a');
            } else if (_0x584c06['qqUYP'](data['subCode'], '8')) {
                console['log']('今日次数已满');
                message += '领取失败，本场已领过';
            } else {
                console['log']('异常：' + JSON['stringify'](data));
            }
        }
    }
    return !![];
}

function _0x24e6d8(_0x278287, _0x3c3dc0 = {}) {
    var _0xa75f3c = {
        'LMdZG': function(_0x3fe69e, _0x5c6c8a) {
            return _0x3fe69e(_0x5c6c8a);
        },
        'dSEPq': function(_0xed0269, _0x43a27f) {
            return _0xed0269 + _0x43a27f;
        },
        'NlaRN': function(_0x9e2b2e, _0x2da20e) {
            return _0x9e2b2e * _0x2da20e;
        },
        'moMlH': function(_0x1d1b0b, _0x12a5d5) {
            return _0x1d1b0b * _0x12a5d5;
        },
        'haCrz': function(_0x2e7c08, _0x1d8d17) {
            return _0x2e7c08 * _0x1d8d17;
        },
        'NIvtQ': '*/*',
        'IFeQQ': 'gzip, deflate, br',
        'KwLlJ': 'zh-cn',
        'WqzNM': 'keep-alive',
        'CMIZk': 'application/x-www-form-urlencoded',
        'knrFu': 'api.m.jd.com',
        'NQFfE': 'JD4iPhone/9.3.5 CFNetwork/1209 Darwin/20.2.0'
    };
    return {
        'url': _0x4a370d + '?functionId=' + _0x278287 + '&body=' + _0xa75f3c['LMdZG'](escape, JSON['stringify'](_0x3c3dc0)) + '&client=wh5&clientVersion=1.0.0&_=' + _0xa75f3c['dSEPq'](_0xa75f3c['dSEPq'](new Date()['getTime'](), _0xa75f3c['NlaRN'](_0xa75f3c['moMlH'](new Date()['getTimezoneOffset'](), 0x3c), 0x3e8)), _0xa75f3c['haCrz'](_0xa75f3c['haCrz'](_0xa75f3c['haCrz'](0x8, 0x3c), 0x3c), 0x3e8)),
        'headers': {
            'Accept': _0xa75f3c['NIvtQ'],
            'Accept-Encoding': _0xa75f3c['IFeQQ'],
            'Accept-Language': _0xa75f3c['KwLlJ'],
            'Connection': _0xa75f3c['WqzNM'],
            'Content-Type': _0xa75f3c['CMIZk'],
            'Host': _0xa75f3c['knrFu'],
            'Referer': 'https://h5.m.jd.com/active/redrain/index.html?id=' + $['activityId'] + '&lng=0.000000&lat=0.000000&sid=&un_area=',
            'Cookie': cookie,
            'User-Agent': _0xa75f3c['NQFfE']
        }
    };
}

function _0x3a17fc() {
    var _0x91648d = {
        'Ssmik': function(_0x45145c, _0x28d753) {
            return _0x45145c === _0x28d753;
        },
        'NkDCB': 'false',
        'Gdsae': function(_0x564917, _0x4e1238) {
            return _0x564917 > _0x4e1238;
        },
        'JmzTZ': 'GITHUB',
        'tzuQg': function(_0xcc46dc) {
            return _0xcc46dc();
        },
        'WCcnP': function(_0x59deb4, _0x52cc2d) {
            return _0x59deb4(_0x52cc2d);
        },
        'isxwi': function(_0x2fe9a2, _0x42dc2b) {
            return _0x2fe9a2 !== _0x42dc2b;
        },
        'yTmJG': 'NVvKe',
        'nkJVU': function(_0x5bf325, _0x39567d) {
            return _0x5bf325 !== _0x39567d;
        },
        'rlhzV': 'wvXhk',
        'HLRug': 'KZWEh',
        'psTHu': 'XGtKB',
        'nwnzP': 'retcode',
        'LftCo': function(_0xdb5f8a, _0x3efe22) {
            return _0xdb5f8a !== _0x3efe22;
        },
        'gHpwN': 'kJkbG',
        'zyvmj': 'base',
        'SSFAh': 'NagFW',
        'SzIQY': 'dMSkC',
        'YtGsL': function(_0xcde8d4, _0x143612) {
            return _0xcde8d4 !== _0x143612;
        },
        'rRrfR': 'NaRfw',
        'JPENA': 'weoxc',
        'iBmsc': '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取',
        'dyJTV': 'https://bean.m.jd.com/',
        'LvUQe': function(_0xd9e0d2, _0x1a14eb) {
            return _0xd9e0d2 === _0x1a14eb;
        },
        'THrXv': 'eJLkP',
        'mGUDm': 'application/json,text/plain, */*',
        'brKWK': 'application/x-www-form-urlencoded',
        'qCaVm': 'gzip, deflate, br',
        'iSyPB': 'zh-cn',
        'CjwgV': 'keep-alive',
        'wShxk': 'https://wqs.jd.com/my/jingdou/my.shtml?sceneval=2',
        'vTyFB': 'JD4iPhone/9.3.5 CFNetwork/1209 Darwin/20.2.0',
        'WmWst': 'JDUA'
    };
    return new Promise(async _0x5ada5f => {
        var _0x5bfe15 = {
            'RKtqA': _0x91648d['iBmsc'],
            'Wnzsz': _0x91648d['dyJTV']
        };
        if (_0x91648d['LvUQe'](_0x91648d['THrXv'], _0x91648d['THrXv'])) {
            const _0x501bd6 = {
                'url': 'https://wq.jd.com/user/info/QueryJDUserInfo?sceneval=2',
                'headers': {
                    'Accept': _0x91648d['mGUDm'],
                    'Content-Type': _0x91648d['brKWK'],
                    'Accept-Encoding': _0x91648d['qCaVm'],
                    'Accept-Language': _0x91648d['iSyPB'],
                    'Connection': _0x91648d['CjwgV'],
                    'Cookie': cookie,
                    'Referer': _0x91648d['wShxk'],
                    'User-Agent': $['isNode']() ? process['env']['JD_USER_AGENT'] ? process['env']['JD_USER_AGENT'] : _0x91648d['vTyFB'] : $['getdata'](_0x91648d['WmWst']) ? $['getdata'](_0x91648d['WmWst']) : _0x91648d['vTyFB']
                }
            };
            $['post'](_0x501bd6, (_0x51e139, _0x45f2fc, _0x3b45ca) => {
                var _0x2e0d74 = {
                    'oYGxX': function(_0x16b62c, _0x54aa82) {
                        return _0x91648d['Ssmik'](_0x16b62c, _0x54aa82);
                    },
                    'KDmya': _0x91648d['NkDCB'],
                    'Pdhih': function(_0x25ddcc, _0xb7c63a) {
                        return _0x91648d['Gdsae'](_0x25ddcc, _0xb7c63a);
                    },
                    'CiQHY': _0x91648d['JmzTZ'],
                    'YXeUS': function(_0x243d44) {
                        return _0x91648d['tzuQg'](_0x243d44);
                    },
                    'kWeKW': function(_0x38d80e, _0x345674) {
                        return _0x91648d['WCcnP'](_0x38d80e, _0x345674);
                    }
                };
                if (_0x91648d['isxwi'](_0x91648d['yTmJG'], _0x91648d['yTmJG'])) {
                    Object['keys'](jdCookieNode)['forEach'](_0x9d0d29 => {
                        cookiesArr['push'](jdCookieNode[_0x9d0d29]);
                    });
                    if (process['env']['JD_DEBUG'] && _0x2e0d74['oYGxX'](process['env']['JD_DEBUG'], _0x2e0d74['KDmya'])) console['log'] = () => {};
                    if (_0x2e0d74['Pdhih'](JSON['stringify'](process['env'])['indexOf'](_0x2e0d74['CiQHY']), -0x1)) {
                        process['exit'](0x0);
                    }
                } else {
                    try {
                        if (_0x51e139) {
                            if (_0x91648d['nkJVU'](_0x91648d['rlhzV'], _0x91648d['rlhzV'])) {
                                _0x2e0d74['YXeUS'](_0x5ada5f);
                            } else {
                                console['log']('' + JSON['stringify'](_0x51e139));
                                console['log']($['name'] + ' API请求失败，请检查网路重试');
                            }
                        } else {
                            if (_0x91648d['nkJVU'](_0x91648d['HLRug'], _0x91648d['psTHu'])) {
                                if (_0x3b45ca) {
                                    _0x3b45ca = JSON['parse'](_0x3b45ca);
                                    if (_0x91648d['Ssmik'](_0x3b45ca[_0x91648d['nwnzP']], 0xd)) {
                                        $['isLogin'] = ![];
                                        return;
                                    }
                                    if (_0x91648d['Ssmik'](_0x3b45ca[_0x91648d['nwnzP']], 0x0)) {
                                        if (_0x91648d['LftCo'](_0x91648d['gHpwN'], _0x91648d['gHpwN'])) {
                                            ids[_0x2e0d74['kWeKW'](String, i)] = codeItem;
                                        } else {
                                            $['nickName'] = _0x3b45ca[_0x91648d['zyvmj']] && _0x3b45ca[_0x91648d['zyvmj']]['nickname'] || $['UserName'];
                                        }
                                    } else {
                                        if (_0x91648d['Ssmik'](_0x91648d['SSFAh'], _0x91648d['SzIQY'])) {
                                            $['log']('今日龙王🐲休假，晴空万里☀️，改日再来～\n前往龙王庙祈福求雨: https://t.me/longzhuzhu');
                                            return;
                                        } else {
                                            $['nickName'] = $['UserName'];
                                        }
                                    }
                                } else {
                                    if (_0x91648d['YtGsL'](_0x91648d['rRrfR'], _0x91648d['rRrfR'])) {
                                        console['log']('' + JSON['stringify'](_0x51e139));
                                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                                    } else {
                                        console['log']('京东服务器返回空数据');
                                    }
                                }
                            } else {
                                $['log']('无法从本地读取配置，请检查运行时间');
                                return;
                            }
                        }
                    } catch (_0x9019da) {
                        if (_0x91648d['Ssmik'](_0x91648d['JPENA'], _0x91648d['JPENA'])) {
                            $['logErr'](_0x9019da, _0x45f2fc);
                        } else {
                            $['msg']($['name'], _0x5bfe15['RKtqA'], _0x5bfe15['Wnzsz'], {
                                'open-url': _0x5bfe15['Wnzsz']
                            });
                            return;
                        }
                    } finally {
                        _0x91648d['tzuQg'](_0x5ada5f);
                    }
                }
            });
        } else {
            $['log']('', '❌ ' + $['name'] + ', 失败! 原因: ' + e + '!', '');
        }
    });
}

function _0x154d96(_0x9dc722) {
    var _0x443c1a = {
        'NspQv': 'SUPER_RAIN_RRA',
        'eGpYI': function(_0x5bbab7, _0x559680) {
            return _0x5bbab7 === _0x559680;
        },
        'UpusT': 'FbvYJ',
        'GFSnN': function(_0x5b7ada, _0x99a201) {
            return _0x5b7ada == _0x99a201;
        },
        'OPUrT': 'object'
    };
    try {
        if (_0x443c1a['eGpYI'](_0x443c1a['UpusT'], _0x443c1a['UpusT'])) {
            if (_0x443c1a['GFSnN'](typeof JSON['parse'](_0x9dc722), _0x443c1a['OPUrT'])) {
                return !![];
            }
        } else {
            rras = $['getdata'](_0x443c1a['NspQv']);
            $['log']('本地配置RRA: ' + rras);
        }
    } catch (_0x12a19e) {
        console['log'](_0x12a19e);
        console['log']('京东服务器访问数据为空，请检查自身设备网络情况');
        return ![];
    }
}

function _0x45775d(_0x4139e7) {
    var _0xffc3ba = {
        'SyXTU': function(_0x32c357, _0x4b9657) {
            return _0x32c357 != _0x4b9657;
        },
        'FJQtK': function(_0x5ec063, _0x30daf6) {
            return _0x5ec063 < _0x30daf6;
        },
        'HYyVK': function(_0x301b37, _0x147640) {
            return _0x301b37 + _0x147640;
        },
        'WNQYl': function(_0x8afe65, _0x5ed94c, _0x47ffdb) {
            return _0x8afe65(_0x5ed94c, _0x47ffdb);
        },
        'VhtxH': '不要在BoxJS手动复制粘贴修改cookie',
        'YXaGJ': function(_0x3d6824, _0x290f55) {
            return _0x3d6824 == _0x290f55;
        },
        'ozioD': 'string',
        'PwXlp': function(_0x5959f6, _0x2f8746) {
            return _0x5959f6 === _0x2f8746;
        },
        'dfckc': 'JZbGR',
        'YDXTo': 'uWUiF',
        'XhOOa': function(_0x431a44, _0x2eb801) {
            return _0x431a44 === _0x2eb801;
        },
        'ceAzI': 'yZsZK',
        'qzbLg': 'SWUsr'
    };
    if (_0xffc3ba['YXaGJ'](typeof _0x4139e7, _0xffc3ba['ozioD'])) {
        try {
            if (_0xffc3ba['PwXlp'](_0xffc3ba['dfckc'], _0xffc3ba['YDXTo'])) {
                if (_0xffc3ba['SyXTU'](code['indexOf']('-'), -0x1)) {
                    _0x1fff84 = !![];
                    let _0x44b356 = code['trim']()['replace'](/-/g, '');
                    var _0x10030c = _0x44b356['split']('')['reverse']()['join']('');
                    var _0x1450d6 = _0x10030c['length'];
                    var _0x5e6c46;
                    var _0x572ffa = [];
                    for (var _0x4df6a8 = 0x0; _0xffc3ba['FJQtK'](_0x4df6a8, _0x1450d6); _0x4df6a8 = _0xffc3ba['HYyVK'](_0x4df6a8, 0x2)) {
                        _0x5e6c46 = _0xffc3ba['WNQYl'](parseInt, _0x10030c['substr'](_0x4df6a8, 0x2), 0x10);
                        _0x572ffa['push'](String['fromCharCode'](_0x5e6c46));
                    }
                    return _0x572ffa['join']('')['replace'](/#/g, '');
                } else {
                    return code;
                }
            } else {
                return JSON['parse'](_0x4139e7);
            }
        } catch (_0x5471fe) {
            if (_0xffc3ba['XhOOa'](_0xffc3ba['ceAzI'], _0xffc3ba['qzbLg'])) {
                try {
                    return JSON['parse'](_0x4139e7);
                } catch (_0x594a55) {
                    console['log'](_0x594a55);
                    $['msg']($['name'], '', _0xffc3ba['VhtxH']);
                    return [];
                }
            } else {
                console['log'](_0x5471fe);
                $['msg']($['name'], '', _0xffc3ba['VhtxH']);
                return [];
            }
        }
    }
};
_0xodO = 'jsjiami.com.v6'
// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
