const $ = new Env('组队瓜分京豆');
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';

let UA = require('./USER_AGENTS.js')['USER_AGENT'];
const notify = $['isNode']() ? require('./sendNotify') : '';
let cookiesArr = [],
    cookie = '';
if ($['isNode']()) {
    Object['keys'](jdCookieNode)['forEach'](_0x1428ca => {
        cookiesArr['push'](jdCookieNode[_0x1428ca]);
    });
    if (process['env']['JD_DEBUG'] && process['env']['JD_DEBUG'] === 'false') console['log'] = () => {};
} else {
    cookiesArr = [$['getdata']('CookieJD'), $['getdata']('CookieJD2'), ...jsonParse($['getdata']('CookiesJD') || '[]')['map'](_0x171c29 => _0x171c29['cookie'])]['filter'](_0x5bc842 => !!_0x5bc842);
}!(async () => {
    var _0x1f8e8a = {
        'qoOMS': function(_0x5a827c, _0x487285) {
            return _0x5a827c(_0x487285);
        },
        'HMZGT': function(_0x2a9b25, _0x278640) {
            return _0x2a9b25(_0x278640);
        },
        'GJsom': '【提示】请先获取cookie\n直接使用NobyDa的京东签到获取',
        'csrue': 'https://bean.m.jd.com/',
        'mCtuC': 'lCgqa89RDFhTTgXPyHxpYBZ%2F%2BrKQoggHwKcj3bjOW9WAuJ9EExbqSricnEiBLbnP',
        'kxjwT': 'mseweb',
        'sHnMA': function(_0x5812fa, _0x5a84e2) {
            return _0x5812fa < _0x5a84e2;
        },
        'JPWTF': 'kAAie',
        'ImUvw': function(_0x2a3f99, _0x2069eb) {
            return _0x2a3f99 !== _0x2069eb;
        },
        'XuRfv': 'dYJRx',
        'pfJGm': function(_0x5b3a5d, _0x5d3a2e) {
            return _0x5b3a5d(_0x5d3a2e);
        },
        'UoJys': function(_0x445c7c, _0x203bd3) {
            return _0x445c7c + _0x203bd3;
        },
        'jPVUM': 'https://bean.m.jd.com/bean/signIndex.action',
        'ZRbJV': function(_0x725dcf, _0x260662) {
            return _0x725dcf === _0x260662;
        },
        'BzEeX': 'LbKBg',
        'OHaVN': 'UCwdo',
        'yZvRz': function(_0x4a5970) {
            return _0x4a5970();
        },
        'tqXoK': function(_0x35e79b, _0x327050) {
            return _0x35e79b !== _0x327050;
        },
        'AzXsQ': 'FcAwF',
        'oQSVq': 'RWnfm'
    };
    if (!cookiesArr[0x0]) {
        $['msg']($['name'], _0x1f8e8a['GJsom'], _0x1f8e8a['csrue'], {
            'open-url': _0x1f8e8a['csrue']
        });
        return;
    }
    $['inviter'] = 'lCgqa89RDFhTTgXPyHxpYBZ%2F%2BrKQoggHwKcj3bjOW9WAuJ9EExbqSricnEiBLbnP';
    $['DQCK'] = _0x1f8e8a['mCtuC'];
    $['inviterNick'] = _0x1f8e8a['kxjwT'];
    for (let _0x26a290 = 0x0; _0x1f8e8a['sHnMA'](_0x26a290, cookiesArr['length']); _0x26a290++) {
        if (_0x1f8e8a['JPWTF'] === 'kAAie') {
            await $['wait'](0x7d0);
            cookie = cookiesArr[_0x26a290];
            if (cookie) {
                if (_0x1f8e8a['ImUvw'](_0x1f8e8a['XuRfv'], 'dYJRx')) {
                    $['isLogin'] = ![];
                    console['log']('' + JSON['stringify'](err));
                    console['log']($['name'] + ' API请求失败，请检查网路重试');
                } else {
                    $['UserName'] = _0x1f8e8a['pfJGm'](decodeURIComponent, cookie['match'](/pt_pin=([^; ]+)(?=;?)/) && cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
                    $['index'] = _0x1f8e8a['UoJys'](_0x26a290, 0x1);
                    $['isLogin'] = !![];
                    $['nickName'] = '';
                    console['log']('\n\n******开始【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + '*********\x0a');
                    if (!$['isLogin']) {
                        $['msg']($['name'], '【提示】cookie已失效', '京东账号' + $['index'] + ' ' + ($['nickName'] || $['UserName']) + '\x0a请重新登录获取\x0ahttps://bean.m.jd.com/bean/signIndex.action', {
                            'open-url': _0x1f8e8a['jPVUM']
                        });
                        if ($['isNode']()) {
                            if (_0x1f8e8a['ZRbJV'](_0x1f8e8a['BzEeX'], _0x1f8e8a['OHaVN'])) {
                                data = JSON['parse'](data);
                                $['log']('isCanJoin: ' + data['data']['isCanJoin']);
                            } else {
                                await notify['sendNotify']($['name'] + 'cookie已失效 - ' + $['UserName'], '京东账号' + $['index'] + ' ' + $['UserName'] + '\x0a请重新登录获取cookie');
                            }
                        }
                        continue;
                    }
                    try {
                        await _0x1f8e8a['yZvRz'](main);
                    } catch (_0x10f8fa) {
                        $['logErr'](_0x10f8fa, '执行异常！');
                        if ($['index'] === 0x1) {
                            $['log']('亲先检查CK1，或者与作者取得联系！');
                            break;
                        }
                    }
                    if (_0x1f8e8a['ZRbJV']($['index'], 0x1) && $['myPingData']) {
                        if (_0x1f8e8a['tqXoK'](_0x1f8e8a['AzXsQ'], _0x1f8e8a['oQSVq'])) {
                            $['inviter'] = $['myPingData']['secretPin'];
                            $['DQCK'] = $['myPingData']['secretPin'];
                            $['inviterNick'] = $['UserName'];
                        } else {
                            _0x1f8e8a['qoOMS'](resolve, data['data']);
                        }
                    }
                }
            }
        } else {
            _0x1f8e8a['HMZGT'](resolve, data);
        }
    }
})()['catch'](_0x4708c7 => $['logErr'](_0x4708c7))['finally'](() => $['done']());
async function main() {
    var _0x5efbfa = {
        'akmJi': function(_0x138969) {
            return _0x138969();
        },
        'OXUGI': function(_0x457ab0) {
            return _0x457ab0();
        },
        'XrzlI': 'set-cookie',
        'DByeJ': function(_0x311e98, _0x197517) {
            return _0x311e98 + _0x197517;
        },
        'RmGHC': function(_0x4cb733, _0x1bf707) {
            return _0x4cb733 + _0x1bf707;
        },
        'xEzFf': function(_0x226d59, _0x12bfc6) {
            return _0x226d59 === _0x12bfc6;
        },
        'GOqLw': '400001',
        'gcNTu': '黑号!',
        'tkdoq': function(_0x90e338, _0x354ae8) {
            return _0x90e338 === _0x354ae8;
        },
        'CBSkW': 'ycvHF',
        'fHwel': 'LTazh',
        'njrKA': function(_0x380c1a) {
            return _0x380c1a();
        },
        'dMaTY': function(_0x39eee7) {
            return _0x39eee7();
        }
    };
    $['isvObfuscatorToken'] = await _0x5efbfa['akmJi'](getIsvObfuscatorToken);
    let _0x5852fa = await _0x5efbfa['OXUGI'](getHtml);
    let _0x26b273 = _0x5852fa['headers'][_0x5efbfa['XrzlI']]['filter'](_0x1ea711 => _0x1ea711['indexOf']('LZ_TOKEN_KEY') > -0x1)[0x0];
    let _0x5160f8 = _0x5852fa['headers'][_0x5efbfa['XrzlI']]['filter'](_0x594026 => _0x594026['indexOf']('LZ_TOKEN_VALUE') > -0x1)[0x0];
    _0x26b273 = _0x26b273['substr'](_0x5efbfa['DByeJ'](_0x26b273['indexOf']('='), 0x1));
    _0x5160f8 = _0x5160f8['substr'](_0x5efbfa['RmGHC'](_0x5160f8['indexOf']('='), 0x1));
    $['LZ_TOKEN_KEY'] = _0x26b273['substr'](0x0, _0x26b273['indexOf'](';'));
    $['LZ_TOKEN_VALUE'] = _0x5160f8['substr'](0x0, _0x5160f8['indexOf'](';'));
    $['myPingData'] = await getMyPing();
    if ($['myPingData'] === '' || _0x5efbfa['xEzFf']($['myPingData'], _0x5efbfa['GOqLw']) || !$['myPingData'] || !$['myPingData']['secretPin']) {
        $['log'](_0x5efbfa['gcNTu']);
        return;
    }
    let _0x320a8a = await getActivityInfo();
    let _0x588e1c = await _0x5efbfa['OXUGI'](getInviteRecord);
    let _0x505334 = await _0x5efbfa['OXUGI'](getIsInvited);
    await _0x5efbfa['OXUGI'](adLog);
    let _0x193ff7 = await _0x5efbfa['OXUGI'](getAcceptInvite);
    for (let _0x53ca75 of _0x320a8a['shopUrl']) {
        if (_0x5efbfa['tkdoq'](_0x5efbfa['CBSkW'], _0x5efbfa['fHwel'])) {
            data = JSON['parse'](data);
        } else {
            let _0x54900a = _0x53ca75['substr'](_0x53ca75['indexOf']('=') + 0x1);
            $['log']('入会 ' + _0x54900a);
            await join(_0x54900a);
        }
    }
    await _0x5efbfa['njrKA'](join2);
    await _0x5efbfa['dMaTY'](getOpenCardAllStatuesNew);
}

function getActivityInfo() {
    var _0x3d7f6d = {
        'fKSAY': 'Cefuu',
        'SAbtJ': '/microDz/invite/activity/wx/getActivityInfo',
        'gDzJZ': 'https://cjhydz-isv.isvjcloud.com/microDz/invite/activity/wx/getActivityInfo'
    };
    return new Promise(_0x40b382 => {
        var _0x42bd8c = {
            'KiUoY': _0x3d7f6d['fKSAY'],
            'sZjdc': function(_0x3a633d, _0x5d1fcc) {
                return _0x3a633d(_0x5d1fcc);
            }
        };
        let _0x4d2db4 = 'activityId=cc08a3fd60fe4ddb80820c2b1fb4b300';
        $['post'](taskPostUrl(_0x3d7f6d['SAbtJ'], _0x4d2db4, _0x3d7f6d['gDzJZ']), async (_0x57f8c3, _0x2e51e4, _0x4ca4cb) => {
            var _0x153b33 = {
                'LAtxz': function(_0xae0f3a, _0x4c1e4c) {
                    return _0xae0f3a(_0x4c1e4c);
                }
            };
            try {
                if (_0x57f8c3) {
                    console['log']($['name'] + ' API请求失败，请检查网路重试');
                } else {
                    if (_0x42bd8c['KiUoY'] === _0x42bd8c['KiUoY']) {
                        _0x4ca4cb = JSON['parse'](_0x4ca4cb);
                    } else {
                        _0x153b33['LAtxz'](_0x40b382, _0x4ca4cb);
                    }
                }
            } catch (_0x22ace7) {
                _0x4ca4cb = {
                    'data': {
                        'nowScore': 0x32
                    }
                };
                $['logErr'](_0x22ace7, _0x2e51e4);
            } finally {
                _0x42bd8c['sZjdc'](_0x40b382, _0x4ca4cb['data']);
            }
        });
    });
}

function getInviteRecord() {
    var _0x58ad78 = {
        'xgVUl': function(_0x5bca3e, _0x119f52) {
            return _0x5bca3e === _0x119f52;
        },
        'jfvLF': 'WeKIZ',
        'qyLLc': function(_0x4f1bfa, _0x470298) {
            return _0x4f1bfa !== _0x470298;
        },
        'SMsSn': 'FnIhP',
        'pAQhH': function(_0x33f4c0, _0x2b2e4a) {
            return _0x33f4c0(_0x2b2e4a);
        },
        'FaRst': 'zh-cn',
        'sfpIr': 'keep-alive',
        'PtbrW': function(_0x5ac4bc, _0x336051) {
            return _0x5ac4bc === _0x336051;
        },
        'uJIig': 'iWVii',
        'uVMTD': 'AqYeB',
        'Ezhkj': function(_0x4e8312, _0x5ebe17, _0x29ffea, _0x2c1cff) {
            return _0x4e8312(_0x5ebe17, _0x29ffea, _0x2c1cff);
        },
        'gUKbA': '/microDz/invite/activity/wx/inviteRecord',
        'fDiqC': 'https://cjhydz-isv.isvjcloud.com/microDz/invite/activity/wx/inviteRecord'
    };
    return new Promise(_0x518317 => {
        var _0x32254b = {
            'DAJgF': 'XMLHttpRequest',
            'lSeiR': _0x58ad78['FaRst'],
            'xgiGb': 'application/x-www-form-urlencoded; Charset=UTF-8',
            'limOg': 'https://cjhydz-isv.isvjcloud.com',
            'lZXjC': _0x58ad78['sfpIr']
        };
        if (_0x58ad78['PtbrW'](_0x58ad78['uJIig'], _0x58ad78['uVMTD'])) {
            $['logErr'](e, resp);
        } else {
            let _0x40c9a7 = 'activityId=cc08a3fd60fe4ddb80820c2b1fb4b300&inviter=' + _0x58ad78['pAQhH'](encodeURIComponent, $['myPingData']['secretPin']) + '&pageNo=1&pageSize=15&type=0';
            $['post'](_0x58ad78['Ezhkj'](taskPostUrl, _0x58ad78['gUKbA'], _0x40c9a7, _0x58ad78['fDiqC']), async (_0x5ae9e6, _0xa03af0, _0x13130d) => {
                try {
                    if (_0x5ae9e6) {
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    } else {
                        _0x13130d = JSON['parse'](_0x13130d);
                    }
                } catch (_0x5e95a6) {
                    if (_0x58ad78['xgVUl']('uvGer', _0x58ad78['jfvLF'])) {
                        $['log'](_0x13130d['message']);
                    } else {
                        $['logErr'](_0x5e95a6, _0xa03af0);
                    }
                } finally {
                    if (_0x58ad78['qyLLc'](_0x58ad78['SMsSn'], 'FnIhP')) {
                        return {
                            'url': 'https://cjhydz-isv.isvjcloud.com' + url,
                            'body': _0x40c9a7,
                            'headers': {
                                'Host': 'cjhydz-isv.isvjcloud.com',
                                'Accept': 'application/json',
                                'X-Requested-With': _0x32254b['DAJgF'],
                                'Accept-Language': _0x32254b['lSeiR'],
                                'Accept-Encoding': 'gzip, deflate, br',
                                'Content-Type': _0x32254b['xgiGb'],
                                'Origin': _0x32254b['limOg'],
                                'Connection': _0x32254b['lZXjC'],
                                'Referer': referer ? referer : 'https://lzdz1-isv.isvjcloud.com/lzclient/dz/2021jan/eliminateGame/0713eliminate/?activityId=735c30216dc640638ceb6e63ff6d8b17&shareUuid=' + $['shareUuid'] + '&adsource=&shareuserid4minipg=4oSXfUlJ1qzTqmn3%2Fgy2c9A1Drq3za4lh6LFLfledF1cdSiqMbCx5edEEaL3RnCSkdK3rLBQpEQH9V4tdrrh0w%3D%3D&shopid=0&lng=114.062541&lat=29.541254&sid=768a88cc4b9bd28cc8be56c2ae0d3e0w&un_area=4_48201_54794_0',
                                'User-Agent': UA,
                                'Cookie': cookie + ' LZ_TOKEN_KEY=' + $['LZ_TOKEN_KEY'] + '; LZ_TOKEN_VALUE=' + $['LZ_TOKEN_VALUE'] + '; AUTH_C_USER=' + $['myPingData']['secretPin'] + '; ' + $['lz_jdpin_token']
                            }
                        };
                    } else {
                        _0x58ad78['pAQhH'](_0x518317, _0x13130d['data']);
                    }
                }
            });
        }
    });
}

function getIsInvited() {
    var _0x30ec6e = {
        'gXzVG': function(_0x3cec13, _0x36783b) {
            return _0x3cec13(_0x36783b);
        },
        'dRWPj': 'bxCgf',
        'qlktB': function(_0x10dd20, _0x1f8db5) {
            return _0x10dd20 === _0x1f8db5;
        },
        'kdDae': 'qyaKS',
        'essml': function(_0x21b837, _0x422ec2) {
            return _0x21b837(_0x422ec2);
        },
        'llVOw': function(_0x3c8727, _0x2a98ce) {
            return _0x3c8727 === _0x2a98ce;
        },
        'ODrAe': 'hSFOO',
        'uMmWW': 'JWfTG',
        'SnlZS': function(_0x4ac1e2, _0x401cd9, _0xe7624b, _0x4e0c6a) {
            return _0x4ac1e2(_0x401cd9, _0xe7624b, _0x4e0c6a);
        },
        'aIHxM': '/microDz/invite/activity/wx/isInvited',
        'voukx': 'https://cjhydz-isv.isvjcloud.com/microDz/invite/activity/wx/isInvited'
    };
    return new Promise(_0x69e259 => {
        if (_0x30ec6e['llVOw'](_0x30ec6e['ODrAe'], _0x30ec6e['uMmWW'])) {
            _0x30ec6e['gXzVG'](_0x69e259, data);
        } else {
            let _0x241660 = 'activityId=cc08a3fd60fe4ddb80820c2b1fb4b300&pin=' + _0x30ec6e['essml'](encodeURIComponent, $['myPingData']['secretPin']);
            $['post'](_0x30ec6e['SnlZS'](taskPostUrl, _0x30ec6e['aIHxM'], _0x241660, _0x30ec6e['voukx']), async (_0x497425, _0x322ff7, _0x3d5f8c) => {
                try {
                    if (_0x497425) {
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    } else {
                        if (_0x30ec6e['dRWPj'] === _0x30ec6e['dRWPj']) {
                            _0x3d5f8c = JSON['parse'](_0x3d5f8c);
                        } else {
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        }
                    }
                } catch (_0x4cb385) {
                    if (_0x30ec6e['qlktB'](_0x30ec6e['kdDae'], 'qyaKS')) {
                        $['logErr'](_0x4cb385, _0x322ff7);
                    } else {
                        if (_0x497425) {
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        } else {}
                    }
                } finally {
                    _0x30ec6e['essml'](_0x69e259, _0x3d5f8c['data']);
                }
            });
        }
    });
}

function getAcceptInvite() {
    var _0x1c7b11 = {
        'paDfT': 'sbpCp',
        'EUgBn': function(_0x1a7e05, _0x16f48e) {
            return _0x1a7e05 === _0x16f48e;
        },
        'HjfEv': 'WWSsU',
        'SzIWk': 'mSWYk',
        'HsiJO': function(_0x554d8d, _0x27ffa1) {
            return _0x554d8d(_0x27ffa1);
        },
        'KBfwb': function(_0x2335cd, _0xc38a15) {
            return _0x2335cd(_0xc38a15);
        },
        'xZVRc': function(_0x53e886, _0x2274e0, _0x544526, _0xdbdab8) {
            return _0x53e886(_0x2274e0, _0x544526, _0xdbdab8);
        },
        'KvIaZ': '/microDz/invite/activity/wx/acceptInvite'
    };
    return new Promise(_0x2b8a64 => {
        let _0x165334 = 'activityId=cc08a3fd60fe4ddb80820c2b1fb4b300&inviter=' + encodeURIComponent($['DQCK']) + '&inviterImg=http%3A%2F%2Fstorage.360buyimg.com%2Fi.imageUpload%2F6a645f73495a76594b617266594d5731363237363637373836333031_mid.jpg&inviterNick=' + _0x1c7b11['KBfwb'](encodeURIComponent, $['inviterNick']) + '&invitee=' + _0x1c7b11['KBfwb'](encodeURIComponent, $['myPingData']['secretPin']) + '&inviteeImg=https%3A%2F%2Fimg10.360buyimg.com%2Fimgzone%2Fjfs%2Ft1%2F21383%2F2%2F6633%2F3879%2F5c5138d8E0967ccf2%2F91da57c5e2166005.jpg&inviteeNick=' + $['UserName'];
        $['post'](_0x1c7b11['xZVRc'](taskPostUrl, _0x1c7b11['KvIaZ'], _0x165334, 'https://cjhydz-isv.isvjcloud.com/microDz/invite/activity/wx/acceptInvite'), async (_0x5cffaf, _0x31f812, _0x2f7fdc) => {
            try {
                if (_0x1c7b11['paDfT'] !== 'zVthX') {
                    if (_0x5cffaf) {
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    } else {
                        _0x2f7fdc = JSON['parse'](_0x2f7fdc);
                        if (_0x2f7fdc['errorMessage']) {
                            if (_0x1c7b11['EUgBn'](_0x1c7b11['HjfEv'], _0x1c7b11['HjfEv'])) {
                                $['log']('' + _0x2f7fdc['errorMessage']);
                            } else {
                                console['log']('' + JSON['stringify'](_0x5cffaf));
                                console['log']($['name'] + ' API请求失败，请检查网路重试');
                            }
                        }
                    }
                } else {
                    _0x2b8a64(_0x31f812);
                }
            } catch (_0x330f41) {
                $['logErr'](_0x330f41, _0x31f812);
            } finally {
                if (_0x1c7b11['SzIWk'] !== 'Tpufh') {
                    _0x1c7b11['HsiJO'](_0x2b8a64, _0x2f7fdc['data']);
                } else {
                    $['log']('黑号!');
                    return;
                }
            }
        });
    });
}

function getOpenCardAllStatuesNew() {
    var _0x32c81b = {
        'Sbkbt': function(_0x2ccd57, _0x12a9d1) {
            return _0x2ccd57 === _0x12a9d1;
        },
        'rLjPY': 'FVApk',
        'sUNIy': function(_0x2a5dff, _0x366cfa) {
            return _0x2a5dff !== _0x366cfa;
        },
        'bhwQX': 'dlCdG',
        'oypFU': function(_0x13b4ef, _0x2aaaf0) {
            return _0x13b4ef === _0x2aaaf0;
        },
        'LIjMM': 'yaIQD',
        'vlsSR': 'lBTgD',
        'pQbEN': function(_0x58cf76, _0x582e2d) {
            return _0x58cf76(_0x582e2d);
        },
        'XcgnA': 'AQnzL',
        'biNOh': function(_0x2601a7, _0x4e0d4b, _0x12f92e, _0x3a6831) {
            return _0x2601a7(_0x4e0d4b, _0x12f92e, _0x3a6831);
        },
        'ONfZf': '/microDz/invite/activity/wx/getOpenCardAllStatuesNew',
        'dUNAW': 'https://cjhydz-isv.isvjcloud.com/microDz/invite/activity/wx/getOpenCardAllStatuesNew'
    };
    return new Promise(_0x887d17 => {
        var _0x3e8c2b = {
            'zYuoK': function(_0x119559, _0x22f55c) {
                return _0x32c81b['pQbEN'](_0x119559, _0x22f55c);
            }
        };
        if (_0x32c81b['sUNIy']('AQnzL', _0x32c81b['XcgnA'])) {
            _0x3e8c2b['zYuoK'](_0x887d17, data);
        } else {
            let _0x211cef = 'activityId=cc08a3fd60fe4ddb80820c2b1fb4b300&pin=' + _0x32c81b['pQbEN'](encodeURIComponent, $['myPingData']['secretPin']) + '&isInvited=1';
            $['post'](_0x32c81b['biNOh'](taskPostUrl, _0x32c81b['ONfZf'], _0x211cef, _0x32c81b['dUNAW']), async (_0x595633, _0x1df3e7, _0x3b7908) => {
                if (_0x32c81b['Sbkbt'](_0x32c81b['rLjPY'], _0x32c81b['rLjPY'])) {
                    try {
                        if (_0x595633) {
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        } else {
                            if (_0x32c81b['sUNIy'](_0x32c81b['bhwQX'], 'GPgjm')) {
                                _0x3b7908 = JSON['parse'](_0x3b7908);
                                $['log']('isCanJoin: ' + _0x3b7908['data']['isCanJoin']);
                            } else {
                                $['log'](_0x3b7908['message']);
                            }
                        }
                    } catch (_0x2d7f32) {
                        if (_0x32c81b['oypFU'](_0x32c81b['LIjMM'], _0x32c81b['vlsSR'])) {
                            _0x3b7908 = JSON['parse'](_0x3b7908);
                        } else {
                            $['logErr'](_0x2d7f32, _0x1df3e7);
                        }
                    } finally {
                        _0x32c81b['pQbEN'](_0x887d17, _0x3b7908['data']);
                    }
                } else {
                    $['logErr'](e, _0x1df3e7);
                }
            });
        }
    });
}

function join(_0x17cbef) {
    var _0x2ab2e6 = {
        'EUnfP': function(_0x1180fe, _0x2998ed) {
            return _0x1180fe == _0x2998ed;
        },
        'CjRZR': function(_0x1a35cf, _0x105895) {
            return _0x1a35cf(_0x105895);
        },
        'wyQLV': function(_0x592f4c, _0x67b2fd) {
            return _0x592f4c !== _0x67b2fd;
        },
        'orXaC': 'IrWaf',
        'qmEeu': function(_0x39c627, _0x2ffd87) {
            return _0x39c627(_0x2ffd87);
        }
    };
    return new Promise(_0x58d04d => {
        var _0x880ede = {
            'brcAy': function(_0x27875c, _0x35812f) {
                return _0x2ab2e6['CjRZR'](_0x27875c, _0x35812f);
            }
        };
        if (_0x2ab2e6['wyQLV'](_0x2ab2e6['orXaC'], 'IrWaf')) {
            _0x880ede['brcAy'](_0x58d04d, data['data']);
        } else {
            $['get'](_0x2ab2e6['qmEeu'](ruhui, '' + _0x17cbef), async (_0x34d1a2, _0xb2e3f5, _0x3340c2) => {
                try {
                    _0x3340c2 = _0x3340c2['match'](/(\{().+\})/)[0x1];
                    _0x3340c2 = JSON['parse'](_0x3340c2);
                    if (_0x2ab2e6['EUnfP'](_0x3340c2['success'], !![])) {
                        $['log'](_0x3340c2['message']);
                    } else if (_0x2ab2e6['EUnfP'](_0x3340c2['success'], ![])) {
                        $['log'](_0x3340c2['message']);
                    }
                } catch (_0x566ae8) {
                    $['logErr'](_0x566ae8, _0xb2e3f5);
                } finally {
                    _0x58d04d(_0x3340c2);
                }
            });
        }
    });
}

function ruhui(_0x206e14) {
    var _0x15ced3 = {
        'FThqs': 'text/plain; Charset=UTF-8',
        'CHOfu': 'https://api.m.jd.com',
        'fkBJG': 'api.m.jd.com',
        'IOwos': 'Mozilla/5.0 (Linux; U; Android 8.0.0; zh-cn; Mi Note 2 Build/OPR1.170623.032) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/61.0.3163.128 Mobile Safari/537.36 XiaoMi/MiuiBrowser/10.1.1',
        'niyiJ': 'application/x-www-form-urlencoded'
    };
    return {
        'url': 'https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=bindWithVender&body={"venderId":"' + _0x206e14 + '\",\"shopId\":\"' + _0x206e14 + '","bindByVerifyCodeFlag":1,"registerExtend":{"v_sex":"未知","v_name":"大品牌","v_birthday":"2021-07-23"},"writeChildFlag":0,"activityId":1454199,"channel":401}&client=H5&clientVersion=9.2.0&uuid=88888&jsonp=jsonp_1627049995456_46808',
        'headers': {
            'Content-Type': _0x15ced3['FThqs'],
            'Origin': _0x15ced3['CHOfu'],
            'Host': _0x15ced3['fkBJG'],
            'accept': '*/*',
            'User-Agent': _0x15ced3['IOwos'],
            'content-type': _0x15ced3['niyiJ'],
            'Referer': 'https://shopmember.m.jd.com/shopcard/?venderId=' + _0x206e14 + '&shopId=' + _0x206e14 + '&venderType=1&channel=102&returnUrl=https%%3A%%2F%%2Flzdz1-isv.isvjcloud.com%%2Fdingzhi%%2Fdz%%2FopenCard%%2Factivity%%2F7376465%%3FactivityId%%3Dd91d932b9a3d42b9ab77dd1d5e783839%%26shareUuid%%3Ded1873cb52384a6ab42671eb6aac841d',
            'Cookie': cookie
        }
    };
}

function join2() {
    var _0x59ead8 = {
        'KMErE': 'headers',
        'JhxQH': 'DdwpN',
        'fbVto': function(_0x3cf5ff, _0x2e05d4) {
            return _0x3cf5ff == _0x2e05d4;
        },
        'SyktH': 'KqOig',
        'xwFvN': 'tJSlb',
        'mdhZp': function(_0x287da1) {
            return _0x287da1();
        }
    };
    return new Promise(_0x5f0dfb => {
        var _0xcc9ff8 = {
            'mAQwk': _0x59ead8['KMErE'],
            'XmyFx': function(_0x3bb476, _0x1b34ba) {
                return _0x3bb476 !== _0x1b34ba;
            },
            'Zryei': _0x59ead8['JhxQH'],
            'WAhyI': 'OQOHS',
            'gDoRr': 'MrQEM',
            'WkWoy': function(_0x218bd0, _0x182ff0) {
                return _0x59ead8['fbVto'](_0x218bd0, _0x182ff0);
            },
            'hNkci': _0x59ead8['SyktH'],
            'PVwCa': _0x59ead8['xwFvN'],
            'RGmdJ': function(_0x2eabd3, _0x31dad2) {
                return _0x2eabd3(_0x31dad2);
            }
        };
        $['get'](_0x59ead8['mdhZp'](ruhui2), async (_0x26b54b, _0x197762, _0xff0cd) => {
            var _0x5911cb = {
                'fYgGP': _0xcc9ff8['mAQwk'],
                'oNxHq': 'set-cookie',
                'NemWW': function(_0x40b010, _0x46a472) {
                    return _0x40b010 == _0x46a472;
                }
            };
            try {
                if (_0xcc9ff8['XmyFx'](_0xcc9ff8['Zryei'], 'YOGTT')) {
                    _0xff0cd = _0xff0cd['match'](/(\{().+\})/)[0x1];
                    _0xff0cd = JSON['parse'](_0xff0cd);
                    if (_0xff0cd['success'] == !![]) {
                        if (_0xcc9ff8['WAhyI'] !== _0xcc9ff8['gDoRr']) {
                            $['log'](_0xff0cd['message']);
                        } else {
                            if (_0x26b54b) {
                                console['log']('' + JSON['stringify'](_0x26b54b));
                                console['log']($['name'] + ' API请求失败，请检查网路重试');
                            } else {
                                _0xff0cd = JSON['parse'](_0xff0cd);
                                $['lz_jdpin_token'] = _0x197762[_0x5911cb['fYgGP']][_0x5911cb['oNxHq']]['filter'](_0x147672 => _0x147672['indexOf']('lz_jdpin_token') !== -0x1)[0x0];
                            }
                        }
                    } else if (_0xcc9ff8['WkWoy'](_0xff0cd['success'], ![])) {
                        $['log'](_0xff0cd['message']);
                    }
                } else {
                    _0xff0cd = _0xff0cd['match'](/(\{().+\})/)[0x1];
                    _0xff0cd = JSON['parse'](_0xff0cd);
                    if (_0xff0cd['success'] == !![]) {
                        $['log'](_0xff0cd['message']);
                    } else if (_0x5911cb['NemWW'](_0xff0cd['success'], ![])) {
                        $['log'](_0xff0cd['message']);
                    }
                }
            } catch (_0x28a3f4) {
                $['logErr'](_0x28a3f4, _0x197762);
            } finally {
                if (_0xcc9ff8['hNkci'] === _0xcc9ff8['PVwCa']) {
                    $['log']('' + _0xff0cd['errorMessage']);
                } else {
                    _0xcc9ff8['RGmdJ'](_0x5f0dfb, _0xff0cd);
                }
            }
        });
    });
}

function ruhui2() {
    var _0xb4ab0a = {
        'gYUFH': 'text/plain; Charset=UTF-8',
        'WjETB': 'https://api.m.jd.com',
        'gxKXW': 'Mozilla/5.0 (Linux; U; Android 8.0.0; zh-cn; Mi Note 2 Build/OPR1.170623.032) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/61.0.3163.128 Mobile Safari/537.36 XiaoMi/MiuiBrowser/10.1.1',
        'PQkld': 'application/x-www-form-urlencoded'
    };
    return {
        'url': 'https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=bindWithVender&body=%7B%22venderId%22%3A%2210314962%22%2C%22shopId%22%3A%2210175519%22%2C%22bindByVerifyCodeFlag%22%3A1%2C%22registerExtend%22%3A%7B%22v_sex%22%3A%22%E6%9C%AA%E7%9F%A5%22%2C%22v_birthday%22%3A%221996-11-11%22%2C%22v_name%22%3A%22yyy%22%7D%2C%22writeChildFlag%22%3A0%2C%22channel%22%3A8802%7D&client=H5&clientVersion=9.2.0&uuid=88888&jsonp=jsonp_1628345987749_66821',
        'headers': {
            'Content-Type': _0xb4ab0a['gYUFH'],
            'Origin': _0xb4ab0a['WjETB'],
            'Host': 'api.m.jd.com',
            'accept': '*/*',
            'User-Agent': _0xb4ab0a['gxKXW'],
            'content-type': _0xb4ab0a['PQkld'],
            'Referer': 'https://shopmember.m.jd.com/shopcard/?venderId=10314962&shopId=10175519&channel=8802&returnUrl=https://cjhydz-isv.isvjcloud.com/microDz/invite/activity/wx/view/index/4438790?activityId=cc08a3fd60fe4ddb80820c2b1fb4b300&inviter=' + $['DQCK'] + '&inviterImg=http://storage.360buyimg.com/i.imageUpload/6a645f3639613631633262633231303231363238313235383234363133_mid.jpg&inviterNickName=Tsukasa%E9%B1%BC%E8%9B%8B&shareuserid4minipg=DQCK%2FksVMxxhAtP2wbQfI9A1Drq3za4lh6LFLfledF1cdSiqMbCx5edEEaL3RnCSkdK3rLBQpEQH9V4tdrrh0w%3D%3D&shopid=599119&lng=113.388014&lat=22.510994&sid=09fdc8e908526b5538a4ad4a265f40dw&un_area=19_1657_52093_0',
            'Cookie': cookie
        }
    };
}

function getWxCommonInfoToken() {
    var _0x2d6b11 = {
        'FBPzl': function(_0x5afcdb, _0x59d7a4) {
            return _0x5afcdb === _0x59d7a4;
        },
        'OapUq': 'WApDv',
        'mGdkW': 'lzdz1-isv.isvjcloud.com',
        'eWwFI': 'https://lzdz1-isv.isvjcloud.com'
    };
    return new Promise(_0x4bff7a => {
        var _0x308983 = {
            'PzDiI': function(_0x2b2846, _0x5a4111) {
                return _0x2d6b11['FBPzl'](_0x2b2846, _0x5a4111);
            },
            'fMRQa': 'gvXZh',
            'IhRiu': _0x2d6b11['OapUq']
        };
        $['post']({
            'url': 'https://lzdz1-isv.isvjcloud.com/wxCommonInfo/token',
            'headers': {
                'User-Agent': 'Mozilla/5.0 (Linux; U; Android 8.0.0; zh-cn; Mi Note 2 Build/OPR1.170623.032) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/61.0.3163.128 Mobile Safari/537.36 XiaoMi/MiuiBrowser/10.1.1',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Host': _0x2d6b11['mGdkW'],
                'Origin': _0x2d6b11['eWwFI'],
                'Referer': 'https://lzdz1-isv.isvjcloud.com/wxCommonInfo/token'
            }
        }, async (_0x143521, _0xca7741, _0x1f2e4d) => {
            try {
                if (_0x143521) {
                    $['isLogin'] = ![];
                    console['log']('' + JSON['stringify'](_0x143521));
                    console['log']($['name'] + ' API请求失败，请检查网路重试');
                } else {
                    if (_0x308983['PzDiI'](_0x308983['fMRQa'], _0x308983['IhRiu'])) {
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    } else {
                        _0x1f2e4d = JSON['parse'](_0x1f2e4d);
                    }
                }
            } catch (_0x2f9e18) {
                $['isLogin'] = ![];
                $['logErr'](_0x2f9e18, _0xca7741);
            } finally {
                _0x4bff7a(_0x1f2e4d);
            }
        });
    });
}

function getIsvObfuscatorToken() {
    var _0x2893f1 = {
        'zoOex': 'htAVb',
        'CDnKg': 'qaeFV',
        'MvuAb': 'rYDBD',
        'BGgfO': function(_0x3a8055, _0x3e1046) {
            return _0x3a8055 !== _0x3e1046;
        },
        'xUaUZ': 'eUHoh',
        'mmXIc': 'zFmVu',
        'VzbKI': function(_0x4ba4fa, _0x5a63e6) {
            return _0x4ba4fa(_0x5a63e6);
        },
        'PbItg': 'body=%7B%22id%22%3A%22%22%2C%22url%22%3A%22https%3A%2F%2Fcjhydz-isv.isvjcloud.com%22%7D',
        'UFQkT': 'Mozilla/5.0 (Linux; U; Android 8.0.0; zh-cn; Mi Note 2 Build/OPR1.170623.032) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/61.0.3163.128 Mobile Safari/537.36 XiaoMi/MiuiBrowser/10.1.1',
        'GICJq': 'application/x-www-form-urlencoded',
        'ewSzf': 'https://api.m.jd.com/client.action?functionId=isvObfuscator&clientVersion=10.0.4&build=88641&client=android&d_brand=OPPO&d_model=PCAM00&osVersion=10&screen=2208*1080&partner=oppo&oaid=&openudid=7049442d7e415232&eid=eidAfb0d81231cs3I4yd3GgLRjqcx9qFEcJEmyOMn1BwD8wvLt/pM7ENipVIQXuRiDyQ0FYw2aud9+AhtGqo1Zhp0TsLEgoKZvAWkaXhApgim9hlEyRB&sdkVersion=29&lang=zh_CN&uuid=7049442d7e415232&aid=7049442d7e415232&area=4_48201_54794_0&networkType=wifi&wifiBssid=774de7601b5cddf9aad1ae30f3a3dfc0&uts=zrHR4oLv7fO8bj08KaWkuJrGiAm%2FG6al3p01S3QPkHjEe70KB7DMBdz3cfE%2BRhrQIyj%2B2Jj2QqzA%2BpAdyk9V1ui51eL%2FoBnDH0kFw%2FNynmvOvct2RwpCzR7s0IfLFlCdif1pPkN560QPhIQm8X6wiYfI7PKqHbiI&uemps=0-0&st=1627949552040&sign=545fe280a8a65be83421dc76b0dc0cc8&sv=112'
    };
    return new Promise(_0x5a9bce => {
        $['post']({
            'url': 'https://api.m.jd.com/client.action?functionId=isvObfuscator&clientVersion=10.0.4&build=88641&client=android&d_brand=OPPO&d_model=PCAM00&osVersion=10&screen=2208*1080&partner=oppo&oaid=&openudid=7049442d7e415232&eid=eidAfb0d81231cs3I4yd3GgLRjqcx9qFEcJEmyOMn1BwD8wvLt/pM7ENipVIQXuRiDyQ0FYw2aud9+AhtGqo1Zhp0TsLEgoKZvAWkaXhApgim9hlEyRB&sdkVersion=29&lang=zh_CN&uuid=7049442d7e415232&aid=7049442d7e415232&area=4_48201_54794_0&networkType=wifi&wifiBssid=774de7601b5cddf9aad1ae30f3a3dfc0&uts=zrHR4oLv7fO8bj08KaWkuJrGiAm%2FG6al3p01S3QPkHjEe70KB7DMBdz3cfE%2BRhrQIyj%2B2Jj2QqzA%2BpAdyk9V1ui51eL%2FoBnDH0kFw%2FNynmvOvct2RwpCzR7s0IfLFlCdif1pPkN560QPhIQm8X6wiYfI7PKqHbiI&uemps=0-0&st=1627949552040&sign=545fe280a8a65be83421dc76b0dc0cc8&sv=112',
            'body': _0x2893f1['PbItg'],
            'headers': {
                'User-Agent': _0x2893f1['UFQkT'],
                'Content-Type': _0x2893f1['GICJq'],
                'Host': 'api.m.jd.com',
                'Referer': _0x2893f1['ewSzf'],
                'Cookie': cookie
            }
        }, async (_0x41e7df, _0x5cd722, _0x4630ae) => {
            try {
                if ('ivPTf' !== _0x2893f1['zoOex']) {
                    if (_0x41e7df) {
                        console['log']('' + JSON['stringify'](_0x41e7df));
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    } else {
                        if (_0x2893f1['CDnKg'] === _0x2893f1['MvuAb']) {
                            _0x4630ae = JSON['parse'](_0x4630ae);
                            if (_0x4630ae['errorMessage']) {
                                $['log']('' + _0x4630ae['errorMessage']);
                            }
                        } else {
                            _0x4630ae = JSON['parse'](_0x4630ae);
                        }
                    }
                } else {
                    _0x4630ae = {
                        'data': {
                            'nowScore': 0x32
                        }
                    };
                    $['logErr'](e, _0x5cd722);
                }
            } catch (_0x2c59e9) {
                if (_0x2893f1['BGgfO'](_0x2893f1['xUaUZ'], _0x2893f1['mmXIc'])) {
                    $['logErr'](_0x2c59e9, _0x5cd722);
                } else {
                    $['logErr'](_0x2c59e9, _0x5cd722);
                }
            } finally {
                _0x2893f1['VzbKI'](_0x5a9bce, _0x4630ae['token']);
            }
        });
    });
}

function getMyPing() {
    var _0x209503 = {
        'zVBWt': function(_0x351846, _0x451f73) {
            return _0x351846 !== _0x451f73;
        },
        'Ottdy': 'cpQkj',
        'vTWWq': 'gpFZQ',
        'tSBUd': function(_0x3b5e54, _0x30fe22) {
            return _0x3b5e54 !== _0x30fe22;
        },
        'fFTgP': 'headers',
        'ORLEz': function(_0x32cf6e, _0x589478) {
            return _0x32cf6e !== _0x589478;
        },
        'xPBqw': 'vFaIn',
        'NjxcY': 'JoScq',
        'kLVwj': 'application/x-www-form-urlencoded',
        'MKeNf': 'cjhydz-isv.isvjcloud.com'
    };
    return new Promise(_0x5754d5 => {
        var _0x36c1dc = {
            'tBEBk': function(_0x3608db, _0x171510) {
                return _0x3608db(_0x171510);
            }
        };
        if (_0x209503['ORLEz'](_0x209503['NjxcY'], _0x209503['NjxcY'])) {
            $['log'](data['message']);
        } else {
            $['post']({
                'url': 'https://cjhydz-isv.isvjcloud.com/customer/getMyPing',
                'body': 'userId=599119&token=' + $['isvObfuscatorToken'] + '&fromType=APP_pointRedeem',
                'headers': {
                    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
                    'Content-Type': _0x209503['kLVwj'],
                    'Host': _0x209503['MKeNf'],
                    'Referer': 'https://lzdz1-isv.isvjcloud.com/customer/getMyPing',
                    'Cookie': 'LZ_TOKEN_KEY=' + $['LZ_TOKEN_KEY'] + '; LZ_TOKEN_VALUE=' + $['LZ_TOKEN_VALUE'] + ';'
                }
            }, async (_0x484222, _0x3dc9d7, _0x30ecb9) => {
                if (_0x209503['zVBWt']('cpQkj', _0x209503['Ottdy'])) {
                    console['log']($['name'] + ' API请求失败，请检查网路重试');
                } else {
                    try {
                        if (_0x484222) {
                            if (_0x209503['vTWWq'] === 'gpFZQ') {
                                console['log']('' + JSON['stringify'](_0x484222));
                                console['log']($['name'] + ' API请求失败，请检查网路重试');
                            } else {
                                $['logErr'](e, _0x3dc9d7);
                            }
                        } else {
                            if (_0x209503['tSBUd']('LnBAg', 'vRvUx')) {
                                _0x30ecb9 = JSON['parse'](_0x30ecb9);
                                $['lz_jdpin_token'] = _0x3dc9d7[_0x209503['fFTgP']]['set-cookie']['filter'](_0x190661 => _0x190661['indexOf']('lz_jdpin_token') !== -0x1)[0x0];
                            } else {
                                _0x36c1dc['tBEBk'](_0x5754d5, _0x30ecb9);
                            }
                        }
                    } catch (_0x518732) {
                        $['logErr'](_0x518732, _0x3dc9d7);
                    } finally {
                        if (_0x209503['ORLEz'](_0x209503['xPBqw'], 'vFaIn')) {
                            $['log'](_0x30ecb9['message']);
                        } else {
                            _0x5754d5(_0x30ecb9['data']);
                        }
                    }
                }
            });
        }
    });
}

function getHtml() {
    var _0x33b19c = {
        'fFEKn': function(_0xb45848, _0xa807f9) {
            return _0xb45848(_0xa807f9);
        },
        'Fqdha': function(_0x47d317, _0x53b9f1) {
            return _0x47d317 === _0x53b9f1;
        },
        'Vjjqy': function(_0x1eb69d, _0x416686) {
            return _0x1eb69d !== _0x416686;
        },
        'pZAwz': 'cJTvP',
        'NmMcN': 'CookieJD2',
        'FIkYm': 'CookiesJD',
        'MagFp': function(_0x33d990, _0x1b27d2) {
            return _0x33d990 !== _0x1b27d2;
        },
        'JjnVD': 'sQaQR',
        'JLlBK': 'VQNBM'
    };
    return new Promise(_0x170b10 => {
        var _0x52bcd9 = {
            'wJqWo': function(_0x479327, _0x1d8e8b) {
                return _0x479327(_0x1d8e8b);
            },
            'AxNUI': function(_0x1c5ba2, _0x5498b6) {
                return _0x33b19c['fFEKn'](_0x1c5ba2, _0x5498b6);
            },
            'uUxdu': 'FcbRj',
            'CLWEA': function(_0x2100a8, _0x3c5375) {
                return _0x33b19c['Fqdha'](_0x2100a8, _0x3c5375);
            },
            'xNwCW': 'QaLWi',
            'JFoVt': 'cXHhk',
            'VborY': function(_0x5887e6, _0x708090) {
                return _0x33b19c['Vjjqy'](_0x5887e6, _0x708090);
            },
            'GuwVQ': _0x33b19c['pZAwz'],
            'NsZEv': _0x33b19c['NmMcN'],
            'Pfbpo': function(_0x4537fe, _0xe0628b) {
                return _0x33b19c['fFEKn'](_0x4537fe, _0xe0628b);
            },
            'jjeig': _0x33b19c['FIkYm']
        };
        if (_0x33b19c['MagFp'](_0x33b19c['JjnVD'], _0x33b19c['JLlBK'])) {
            $['get']({
                'url': 'https://cjhydz-isv.isvjcloud.com/microDz/invite/activity/wx/view/index/4438790?activityId=cc08a3fd60fe4ddb80820c2b1fb4b300&inviter=' + $['inviter'] + '&inviterImg=http://storage.360buyimg.com/i.imageUpload/6a645f3639613631633262633231303231363238313235383234363133_mid.jpg&inviterNickName=Tsukasa%E9%B1%BC%E8%9B%8B&shareuserid4minipg=DQCK%2FksVMxxhAtP2wbQfI9A1Drq3za4lh6LFLfledF1cdSiqMbCx5edEEaL3RnCSkdK3rLBQpEQH9V4tdrrh0w%3D%3D&shopid=599119&lng=113.388014&lat=22.510994&sid=09fdc8e908526b5538a4ad4a265f40dw&un_area=19_1657_52093_0',
                'headers': {
                    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
                    'Host': 'cjhydz-isv.isvjcloud.com',
                    'Referer': 'https://cjhydz-isv.isvjcloud.com/microDz/invite/activity/wx/view/index/4438790?activityId=cc08a3fd60fe4ddb80820c2b1fb4b300&inviter=' + $['inviter'] + '&inviterImg=http://storage.360buyimg.com/i.imageUpload/6a645f3639613631633262633231303231363238313235383234363133_mid.jpg&inviterNickName=Tsukasa%E9%B1%BC%E8%9B%8B&shareuserid4minipg=DQCK%2FksVMxxhAtP2wbQfI9A1Drq3za4lh6LFLfledF1cdSiqMbCx5edEEaL3RnCSkdK3rLBQpEQH9V4tdrrh0w%3D%3D&shopid=599119&lng=113.388014&lat=22.510994&sid=09fdc8e908526b5538a4ad4a265f40dw&un_area=19_1657_52093_0'
                }
            }, async (_0x150d31, _0x3690a0, _0x3c6f7e) => {
                var _0x234fa9 = {
                    'XqcwC': function(_0x1e4efc, _0x34fba8) {
                        return _0x52bcd9['AxNUI'](_0x1e4efc, _0x34fba8);
                    }
                };
                try {
                    if (_0x150d31) {
                        if (_0x52bcd9['uUxdu'] !== _0x52bcd9['uUxdu']) {
                            _0x234fa9['XqcwC'](_0x170b10, _0x3c6f7e['data']);
                        } else {
                            console['log']('' + JSON['stringify'](_0x150d31));
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        }
                    } else {}
                } catch (_0x54b534) {
                    if (_0x52bcd9['CLWEA'](_0x52bcd9['xNwCW'], _0x52bcd9['JFoVt'])) {
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    } else {
                        $['logErr'](_0x54b534, _0x3690a0);
                    }
                } finally {
                    if (_0x52bcd9['VborY'](_0x52bcd9['GuwVQ'], _0x52bcd9['GuwVQ'])) {
                        _0x52bcd9['wJqWo'](_0x170b10, _0x3c6f7e['data']);
                    } else {
                        _0x52bcd9['AxNUI'](_0x170b10, _0x3690a0);
                    }
                }
            });
        } else {
            cookiesArr = [$['getdata']('CookieJD'), $['getdata'](_0x52bcd9['NsZEv']), ..._0x52bcd9['Pfbpo'](jsonParse, $['getdata'](_0x52bcd9['jjeig']) || '[]')['map'](_0x542fa0 => _0x542fa0['cookie'])]['filter'](_0x4a2674 => !!_0x4a2674);
        }
    });
}

function getSimpleActInfoVo() {
    var _0x1e96ef = {
        'dBBAb': function(_0x5786b9, _0x4f13b4) {
            return _0x5786b9 === _0x4f13b4;
        },
        'ioRIz': 'YGMLD',
        'zIsSk': 'oAepx',
        'fBcFL': function(_0xbd5721, _0x3f9fd2) {
            return _0xbd5721 !== _0x3f9fd2;
        },
        'viiir': 'gCKjC',
        'woFcK': 'YcJrZ',
        'mCSeE': 'kUFSg',
        'SdleE': 'OkxhN',
        'mGsQU': function(_0x311d76, _0x4a3684) {
            return _0x311d76(_0x4a3684);
        },
        'VMtAJ': function(_0x466fc8, _0x13f5f8, _0xd75cdf, _0x3339e8) {
            return _0x466fc8(_0x13f5f8, _0xd75cdf, _0x3339e8);
        },
        'QEWUZ': '/dz/common/getSimpleActInfoVo'
    };
    return new Promise(_0x5909d3 => {
        $['post'](_0x1e96ef['VMtAJ'](taskPostUrl, _0x1e96ef['QEWUZ'], 'activityId=c225ad5922cf4ac8b4a68fd37f486088', 'https://lzdz1-isv.isvjcloud.com/dz/common/getSimpleActInfoVo'), async (_0x4146a8, _0x2c0d7d, _0xe8d9d6) => {
            if (_0x1e96ef['dBBAb'](_0x1e96ef['ioRIz'], _0x1e96ef['zIsSk'])) {
                if (_0x4146a8) {
                    $['isLogin'] = ![];
                    console['log']('' + JSON['stringify'](_0x4146a8));
                    console['log']($['name'] + ' API请求失败，请检查网路重试');
                } else {
                    _0xe8d9d6 = JSON['parse'](_0xe8d9d6);
                }
            } else {
                try {
                    if (_0x4146a8) {
                        if (_0x1e96ef['fBcFL'](_0x1e96ef['viiir'], _0x1e96ef['woFcK'])) {
                            console['log']('' + JSON['stringify'](_0x4146a8));
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        } else {
                            if (_0x4146a8) {
                                console['log']($['name'] + ' API请求失败，请检查网路重试');
                            } else {
                                _0xe8d9d6 = JSON['parse'](_0xe8d9d6);
                                if (_0xe8d9d6['errorMessage']) {
                                    $['log']('' + _0xe8d9d6['errorMessage']);
                                }
                            }
                        }
                    } else {
                        _0xe8d9d6 = JSON['parse'](_0xe8d9d6);
                    }
                } catch (_0x510af6) {
                    if ('JFfsp' === _0x1e96ef['mCSeE']) {
                        if (_0x4146a8) {
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        } else {}
                    } else {
                        $['logErr'](_0x510af6, _0x2c0d7d);
                    }
                } finally {
                    if (_0x1e96ef['dBBAb'](_0x1e96ef['SdleE'], _0x1e96ef['SdleE'])) {
                        _0x1e96ef['mGsQU'](_0x5909d3, _0xe8d9d6);
                    } else {
                        if (_0x4146a8) {
                            console['log']('' + JSON['stringify'](_0x4146a8));
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        } else {}
                    }
                }
            }
        });
    });
}

function shopInfo() {
    var _0x4bbf25 = {
        'SeZwN': function(_0x3a0848, _0x5e036f) {
            return _0x3a0848 === _0x5e036f;
        },
        'mXkyW': 'fkKzH',
        'uZYaS': 'tAtRz',
        'NSxut': 'Keep-Alive',
        'CFmnE': 'application/x-www-form-urlencoded; Charset=UTF-8',
        'REQwq': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
        'bMCjG': 'lzdz1-isv.isvjcloud.com'
    };
    return new Promise(_0x2d04f8 => {
        var _0x4b31a6 = {
            'JwZYF': function(_0x37c81e, _0x5ab2ff) {
                return _0x4bbf25['SeZwN'](_0x37c81e, _0x5ab2ff);
            },
            'uTBiL': _0x4bbf25['mXkyW'],
            'vRQkX': function(_0x3c81de, _0x54459b) {
                return _0x3c81de(_0x54459b);
            }
        };
        if (_0x4bbf25['uZYaS'] === _0x4bbf25['uZYaS']) {
            let _0x4dede7 = 'activityId=c225ad5922cf4ac8b4a68fd37f486088';
            $['post']({
                'url': 'https://lzdz1-isv.isvjcloud.com/dingzhi/shop/league/shopInfo',
                'body': _0x4dede7,
                'headers': {
                    'Connection': _0x4bbf25['NSxut'],
                    'Content-Type': _0x4bbf25['CFmnE'],
                    'Accept': '*/*',
                    'Accept-Language': 'zh-cn',
                    'Referer': 'https://lzdz1-isv.isvjcloud.com/dingzhi/shop/league/shopInfo',
                    'User-Agent': _0x4bbf25['REQwq'],
                    'Host': _0x4bbf25['bMCjG'],
                    'Cookie': 'LZ_TOKEN_KEY=' + $['LZ_TOKEN_KEY'] + '; LZ_TOKEN_VALUE=' + $['LZ_TOKEN_VALUE'] + '; AUTH_C_USER=' + $['myPingData']['secretPin'] + '; ' + $['lz_jdpin_token']
                }
            }, async (_0x3ce005, _0x56a3cd, _0x4386ff) => {
                if (_0x4b31a6['JwZYF'](_0x4b31a6['uTBiL'], _0x4b31a6['uTBiL'])) {
                    try {
                        if (_0x3ce005) {
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        } else {}
                    } catch (_0x2ed20e) {
                        $['logErr'](_0x2ed20e, _0x56a3cd);
                    } finally {
                        _0x4b31a6['vRQkX'](_0x2d04f8, _0x4386ff);
                    }
                } else {
                    $['logErr'](e, _0x56a3cd);
                }
            });
        } else {
            cookiesArr['push'](jdCookieNode[item]);
        }
    });
}

function index() {
    var _0x491873 = {
        'OLxFC': 'NDJso',
        'HJeKL': function(_0x3decb2, _0x52f683) {
            return _0x3decb2 === _0x52f683;
        },
        'NRDab': 'Qjoqc',
        'FygAM': 'Keep-Alive',
        'NGwVU': 'application/x-www-form-urlencoded; Charset=UTF-8',
        'Yvjvj': 'zh-cn',
        'XSaLl': 'https://lzdz1-isv.isvjcloud.com/dingzhi/shop/league/shopInfo',
        'xQBtU': 'h5.m.jd.com'
    };
    return new Promise(_0x48a17d => {
        let _0x15bbca = 'activityId=c225ad5922cf4ac8b4a68fd37f486088';
        $['get']({
            'url': 'https://h5.m.jd.com/babelDiy/Zeus/2vQWcFpeGVxMqGFiUbGAM3CzqvJS/index.html?1',
            'headers': {
                'Connection': _0x491873['FygAM'],
                'Content-Type': _0x491873['NGwVU'],
                'Accept': '*/*',
                'Accept-Language': _0x491873['Yvjvj'],
                'Referer': _0x491873['XSaLl'],
                'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
                'Host': _0x491873['xQBtU'],
                'Cookie': 'LZ_TOKEN_KEY=' + $['LZ_TOKEN_KEY'] + '; LZ_TOKEN_VALUE=' + $['LZ_TOKEN_VALUE'] + '; AUTH_C_USER=' + $['myPingData']['secretPin'] + '; ' + $['lz_jdpin_token']
            }
        }, async (_0x4c50b6, _0x4c080b, _0x3860b7) => {
            try {
                if (_0x491873['OLxFC'] !== _0x491873['OLxFC']) {
                    if (_0x4c50b6) {
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    } else {
                        _0x3860b7 = JSON['parse'](_0x3860b7);
                    }
                } else {
                    if (_0x4c50b6) {
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    } else {}
                }
            } catch (_0x320248) {
                if (_0x491873['HJeKL'](_0x491873['NRDab'], 'MFejt')) {
                    $['logErr'](_0x320248, _0x4c080b);
                } else {
                    $['logErr'](_0x320248, _0x4c080b);
                }
            } finally {
                _0x48a17d(_0x3860b7);
            }
        });
    });
}

function adLog() {
    var _0x447f95 = {
        'RJKaX': 'jrESZ',
        'FFeiv': function(_0x18600e, _0xa32323) {
            return _0x18600e(_0xa32323);
        },
        'vlADQ': 'cjhydz-isv.isvjcloud.com',
        'lvqfx': 'application/x-www-form-urlencoded; Charset=UTF-8',
        'FopOm': 'https://cjhydz-isv.isvjcloud.com/common/accessLog'
    };
    return new Promise(_0x300069 => {
        var _0xa2b6f3 = {
            'wyvCq': _0x447f95['RJKaX'],
            'zutdT': function(_0x3cc033, _0x3d5b8a) {
                return _0x447f95['FFeiv'](_0x3cc033, _0x3d5b8a);
            }
        };
        $['post']({
            'url': 'https://cjhydz-isv.isvjcloud.com/common/accessLog',
            'body': 'venderId=0&code=99&pin=' + _0x447f95['FFeiv'](encodeURIComponent, $['myPingData']['secretPin']) + '&activityId=cc08a3fd60fe4ddb80820c2b1fb4b300&pageUrl=https%3A%2F%2Fcjhydz-isv.isvjcloud.com%2FmicroDz%2Finvite%2Factivity%2Fwx%2Fview%2Findex%2F2388747%3FactivityId%3Dcc08a3fd60fe4ddb80820c2b1fb4b300%26inviter%3Djzv2jbYRftpJUlB6E7%2Ff3%2FL7ldxmgdCpzmNX2HGi4eBuw30v%2FPoVBgxrRDHHbTlt%26inviterImg%3Dhttp%3A%2F%2Fstorage.360buyimg.com%2Fi.imageUpload%2F6a645f73495a76594b617266594d5731363237363637373836333031%5Fmid.jpg%26inviterNickName%3D%E4%B8%8A%E8%AF%BE%E6%97%A0%E8%81%8A%E5%90%97%26shareuserid4minipg%3D4oSXfUlJ1qzTqmn3%252Fgy2c9A1Drq3za4lh6LFLfledF1cdSiqMbCx5edEEaL3RnCSkdK3rLBQpEQH9V4tdrrh0w%253D%253D%26shopid%3D599119%26lng%3D0.000000%26lat%3D0.000000%26sid%3D5fa6c7778669e4865e2e7e7ba5ea098w%26un%5Farea%3D17%5F1458%5F1463%5F43894&subType=',
            'headers': {
                'User-Agent': 'Mozilla/5.0 (Linux; U; Android 8.0.0; zh-cn; Mi Note 2 Build/OPR1.170623.032) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/61.0.3163.128 Mobile Safari/537.36 XiaoMi/MiuiBrowser/10.1.1',
                'Host': _0x447f95['vlADQ'],
                'Content-Type': _0x447f95['lvqfx'],
                'Referer': _0x447f95['FopOm'],
                'Cookie': 'LZ_TOKEN_KEY=' + $['LZ_TOKEN_KEY'] + '; LZ_TOKEN_VALUE=' + $['LZ_TOKEN_VALUE'] + '; AUTH_C_USER=' + $['myPingData']['secretPin'] + '; ' + $['lz_jdpin_token']
            }
        }, async (_0x1675ab, _0x5a1424, _0xd79c2e) => {
            try {
                if (_0x1675ab) {
                    if (_0xa2b6f3['wyvCq'] !== _0xa2b6f3['wyvCq']) {
                        _0xd79c2e = JSON['parse'](_0xd79c2e);
                    } else {
                        console['log']('' + JSON['stringify'](_0x1675ab));
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    }
                } else {}
            } catch (_0x5c10c1) {
                $['logErr'](_0x5c10c1, _0x5a1424);
            } finally {
                _0xa2b6f3['zutdT'](_0x300069, _0xd79c2e);
            }
        });
    });
}

function taskPostUrl(_0x4c7a32, _0x2b8afe, _0x25a62a) {
    var _0xcd31e3 = {
        'JHPIj': 'application/json',
        'FMxtT': 'XMLHttpRequest',
        'kInLQ': 'zh-cn',
        'pxvGi': 'gzip, deflate, br',
        'YWiwg': 'keep-alive'
    };
    return {
        'url': 'https://cjhydz-isv.isvjcloud.com' + _0x4c7a32,
        'body': _0x2b8afe,
        'headers': {
            'Host': 'cjhydz-isv.isvjcloud.com',
            'Accept': _0xcd31e3['JHPIj'],
            'X-Requested-With': _0xcd31e3['FMxtT'],
            'Accept-Language': _0xcd31e3['kInLQ'],
            'Accept-Encoding': _0xcd31e3['pxvGi'],
            'Content-Type': 'application/x-www-form-urlencoded; Charset=UTF-8',
            'Origin': 'https://cjhydz-isv.isvjcloud.com',
            'Connection': _0xcd31e3['YWiwg'],
            'Referer': _0x25a62a ? _0x25a62a : 'https://lzdz1-isv.isvjcloud.com/lzclient/dz/2021jan/eliminateGame/0713eliminate/?activityId=735c30216dc640638ceb6e63ff6d8b17&shareUuid=' + $['shareUuid'] + '&adsource=&shareuserid4minipg=4oSXfUlJ1qzTqmn3%2Fgy2c9A1Drq3za4lh6LFLfledF1cdSiqMbCx5edEEaL3RnCSkdK3rLBQpEQH9V4tdrrh0w%3D%3D&shopid=0&lng=114.062541&lat=29.541254&sid=768a88cc4b9bd28cc8be56c2ae0d3e0w&un_area=4_48201_54794_0',
            'User-Agent': UA,
            'Cookie': cookie + ' LZ_TOKEN_KEY=' + $['LZ_TOKEN_KEY'] + '; LZ_TOKEN_VALUE=' + $['LZ_TOKEN_VALUE'] + '; AUTH_C_USER=' + $['myPingData']['secretPin'] + '; ' + $['lz_jdpin_token']
        }
    };
};
_0xode = 'jsjiami.com.v6';

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
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}


