# GetJDCookies 非原创,修改自用

docker run -d --name jd_cookie -p 6789:6789 -e QYWX_KEY={QYWX_KEY} -e QYWX_AM={QYWX_AM} -e UPDATE_API={UPDATE_API} echowxsy/jd_cookie

sls deploy


<a href="https://github.com/msechen/autojd">一键安装面板+前端扫码</a>   链接,CK数量上限1K
