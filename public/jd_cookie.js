window.JDCookie = function (api) {
  api = api || '.';
  var oMask, qrcontainer, qrbox, qrcode, refresh, tip, time;
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src =
    'https://cdn.jsdelivr.net/npm/davidshimjs-qrcodejs@0.0.2/qrcode.min.js';
  script.onload = function () {
    open();
  };
  document.getElementsByTagName('head')[0].appendChild(script);

  function checkLogin(user) {
    time = setInterval(() => {
      let timeStamp = new Date().getTime();
      ajax({
        url: api + '/cookie?t=' + timeStamp,
        method: 'post',
        data: { user, msg: msgInput.value },
        success: function (data) {
          if (data.err == 0) {
            clearInterval(time);
            qrcode.clear();
            qrbox.remove();
            userMsg = msgInput.value;
            msgInput.remove();
            tip.innerHTML =
              '<span>' +
              userMsg +
              '</span>' +
              '<p>' +
              data.cookie +
              '</p><button id="copyToClip">复制</button>';
            document.getElementById('copyToClip').onclick = function () {
              var aux = document.createElement('input');
              aux.setAttribute('value', data.cookie);
              document.body.appendChild(aux);
              aux.select();
              document.execCommand('copy');
              document.body.removeChild(aux);
            };
          } else if (data.err == 21) {
            clearInterval(time);
            refresh.style.display = 'flex';
          }
        },
      });
    }, 3000);
  }

  function get_code() {
    let timeStamp = new Date().getTime();
    ajax({
      url: api + '/qrcode?t=' + timeStamp,
      method: 'get',
      success: function (data) {
        if (data.err == 0) {
          refresh.style.display = 'none';
          qrcode.clear();
          qrcode.makeCode(data.qrcode);
          checkLogin(data.user);
        }
      },
    });
  }

  function open() {
    // 创建遮罩层
    oMask = document.createElement('div');
    oMask.id = 'mask';
    oMask.style.position = 'fixed';
    oMask.style.top = 0;
    oMask.style.right = 0;
    oMask.style.bottom = 0;
    oMask.style.left = 0;
    oMask.style.height = '100%';
    oMask.style.display = 'flex';
    oMask.style.justifyContent = 'center';
    oMask.style.alignItems = 'center';
    oMask.style.textAlign = 'center';
    oMask.style.backgroundColor = 'rgba(0, 0, 0, 0.45)';
    oMask.style.zIndex = 1001;
    document.body.appendChild(oMask);

    // 二维码容器
    qrcontainer = document.createElement('div');
    qrcontainer.style.position = 'relative';
    qrcontainer.style.width = '256px';
    qrcontainer.style.padding = '16px';
    qrcontainer.style.borderRadius = '8px';
    qrcontainer.style.border = '#6d8a88 1px solid';
    qrcontainer.style.backgroundColor = '#fff';
    qrcontainer.style.boxShadow = '0px 0px 7px 3px rgb(0 0 0 / 20%)';
    qrcontainer.style.boxSizing = 'content-box';
    oMask.appendChild(qrcontainer);

    // 二维码
    qrbox = document.createElement('div');
    qrbox.id = 'qrcode';
    qrcontainer.appendChild(qrbox);
    qrcode = new QRCode(qrbox, {
      text: '还在加载呢扫什么扫',
      correctLevel: QRCode.CorrectLevel.L,
    });

    // 刷新
    refresh = document.createElement('div');
    refresh.style.position = 'absolute';
    refresh.style.top = '16px';
    refresh.style.left = '16px';
    refresh.style.width = '256px';
    refresh.style.height = '256px';
    refresh.style.display = 'none';
    refresh.style.justifyContent = 'center';
    refresh.style.alignItems = 'center';
    refresh.style.color = '#ffffff';
    refresh.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    refresh.innerHTML = '<h3>二维码已失效</h3>';
    qrcontainer.appendChild(refresh);

    // 备注
    msgInput = document.createElement('input');
    msgInput.id = 'msg';
    msgInput.placeholder = '请输入备注信息，方便管理员识别账号';
    msgInput.style.width = '100%';
    msgInput.style.height = '24px';
    msgInput.style.marginTop = '16px';
    qrcontainer.appendChild(msgInput);

    // tip
    tip = document.createElement('div');
    tip.style.wordBreak = 'break-word';
    tip.style.paddingTop = '16px';
    tip.innerHTML =
      '请使用京东APP扫码<br>或截图用京东APP扫码<br>完成后请回到此页面复制cookie<br>请无视升级提示';
    qrcontainer.appendChild(tip);

    get_code();
    oMask.onclick = function (event) {
      console.log(event.target.id);
      if (event.target.id === 'mask') {
        clearInterval(time);
        oMask.remove();
      }
    };
  }

  function ajax(options) {
    var url = options.url;
    var method = options.method;
    var data = options.data;
    var success = options.success;
    var ajax = new XMLHttpRequest();
    ajax.open(method, url);
    if (method == 'post') {
      ajax.setRequestHeader('Content-type', 'application/json');
    }
    ajax.send(JSON.stringify(data));
    ajax.onreadystatechange = function () {
      if (ajax.readyState == 4 && ajax.status == 200) {
        success(JSON.parse(ajax.responseText));
      }
    };
  }
};
