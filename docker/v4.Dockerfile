FROM node:lts-alpine
ARG SHELL_REPO=github
ARG SHELL_REPO_URL=$SHELL_REPO.com
ARG SCRIPTS_REPO=gitee
ARG SCRIPTS_REPO_URL=$SCRIPTS_REPO.com
ARG SHELL_REPO=$SCRIPTS_REPO_URL
ARG JD_SHELL=jd_shell
ARG JD_SHELL_BRANCH=master
ARG JD_SHELL_HOST=$SHELL_REPO_URL
#ARG JD_SHELL_KEY="NEED_REPLACE"
ARG JD_SCRIPTS=jd_scripts
ARG JD_SCRIPTS_BRANCH=master
ARG JD_SCRIPTS_HOST=$SCRIPTS_REPO_URL
ARG JD_SCRIPTS_KEY="-----BEGIN OPENSSH PRIVATE KEY-----\nb3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAABFwAAAAdzc2gtcn\nNhAAAAAwEAAQAAAQEAnp6iSeC0djJQA/whdCTLXYU1/SWEUYMV6NRnPCga8Ndum4j/poTR\n77RAKRcnW2+bKBXuNZz3NZBm1pucH1sebL4cqUY41eEIHLjQ0rO97pO4sz2W+I3SgRUWVa\nADklnzGeqHWjhI4ue5f52wb2nmWR8Y6FSYJ6T7dsdkgEffIlXpJMTtJ9WXF/t2eB2pOjsO\nebLwNbeJv/om6aSp6MIWYM2QykveHkA0lKgwt3ibk8a40/j41gcTcd4qllbPeKZKJLOOCb\n9xMxvKmY8YsYNL+v8wUzTLPNwTq93bZqcxebHbs0rwI7m0yxXfCPzMiHIPsrBD48zZr/pq\nzNCivUljuQAAA8hmFR8JZhUfCQAAAAdzc2gtcnNhAAABAQCenqJJ4LR2MlAD/CF0JMtdhT\nX9JYRRgxXo1Gc8KBrw126biP+mhNHvtEApFydbb5soFe41nPc1kGbWm5wfWx5svhypRjjV\n4QgcuNDSs73uk7izPZb4jdKBFRZVoAOSWfMZ6odaOEji57l/nbBvaeZZHxjoVJgnpPt2x2\nSAR98iVekkxO0n1ZcX+3Z4Hak6Ow55svA1t4m/+ibppKnowhZgzZDKS94eQDSUqDC3eJuT\nxrjT+PjWBxNx3iqWVs94pkoks44Jv3EzG8qZjxixg0v6/zBTNMs83BOr3dtmpzF5sduzSv\nAjubTLFd8I/MyIcg+ysEPjzNmv+mrM0KK9SWO5AAAAAwEAAQAAAQEAlHxf49TMWpFCwlg2\nYOlIzuUy4yVJtpyF2A1uDqxke+zQCB25ZIKVnFUactzP5RKXJnFRKzMjYCsred71yYyc8K\nMPZY7tCZq841ZHddb5B+uVTYVsXIU298truwAuF8TIhAw+ZMCnynGt/r75OXLjRa6MvIDk\nZshU9p41gLjHMvXLzTjQxb2fXH3j+X392ztTHCUcLq6ELjnUX1FpXrL10oQ+uFv/mHOpHO\nr4oap4GvF2XCMu38oAqcwS7POZRf2Sg6hB1jUvYBCREhurKADinlTz+BadFEC73bNBEjyb\noAFBhP5XYMYCLeLi9uz5gssU95yyWnSmWsCQqIkVvC6LAQAAAIAuErrNvDlaAyS7/Kz/YT\nLbprqUOcnrliMLFGYI3LzxstAazkCbLpMCbhvliaE3PFLFcHsJWbKvsb4KTIaUgB+0cdQm\nJiVVQw2xBpz/Wj4XDiNawDd5T4OJhCRUIopkMxGMeYUodypJeTmWyB/gwV0f/kc4RMV//+\nJHTwvWuuPbsgAAAIEA0hcC9gDQUXz7NpQGjwMPvo4FDoAcEBN/Vm9u+NrVyU0ojdjXaKIN\nC1MPGRBmwthrwxIiIVT5UGhwmWBCHvK4lGG9OQyXQEmmAlmLeciM1OUaQrD7XI+UWqm79B\nK4CDwzd9ilw5N+8P+jp0H2bwxQDlNh6qYFUPqnaBpQaI0HENEAAACBAMFIPaNnBWJWuIJb\nilUOD/iAy/dO/urYQrAgDbapggbNDJmJSFx2mmOhice5e9gxHOnmWlrxTmNSjHfC6PDxuX\n+Co8nGUonFLqPTxOgtUjBI+qzvQFzUmMyeW0r1koSDVYHUjbRuypz9AYhYo29jF/u8c8Ut\nj1Cg7qY5UOxtex5pAAAAETE0NTQxMTkyODlAcXEuY29tAQ==\n-----END OPENSSH PRIVATE KEY-----"
ENV PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin \
    LANG=zh_CN.UTF-8 \
    SHELL=/bin/bash \
    PS1="\u@\h:\w \$ " \
    JD_DIR=/jd \
    ENABLE_HANGUP=false \
    ENABLE_RESET_REPO_URL=true \
    JD_SHELL_URL=https://$JD_SHELL_HOST/jiulan/$JD_SHELL \
    JD_SCRIPTS_URL=git@$JD_SCRIPTS_HOST:jiulan/$JD_SCRIPTS.git
WORKDIR $JD_DIR
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories \
    && apk update -f \
    && apk upgrade \
    && apk --no-cache add -f \
        bash \
        coreutils \
        git \
        wget \
        curl \
        nano \
        tzdata \
        perl \
        openssh-client \
    && rm -rf /var/cache/apk/* \
    && ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
    && echo "Asia/Shanghai" > /etc/timezone \
    && mkdir -p /root/.ssh \
    ##&& echo $JD_SHELL_KEY | perl -pe "{s|_| |g; s|@|\n|g}" > /root/.ssh/$JD_SHELL \
    && echo $JD_SCRIPTS_KEY | perl -pe "{s|_| |g; s|@|\n|g}" > /root/.ssh/$JD_SCRIPTS \
    && chmod 600 /root/.ssh/$JD_SCRIPTS \
    && echo -e "Host $JD_SHELL_HOST\n\tHostname $REPO_URL\n\tIdentityFile=/root/.ssh/$JD_SHELL\n\nHost $JD_SCRIPTS_HOST\n\tHostname $REPO_URL\n\tIdentityFile=/root/.ssh/$JD_SCRIPTS" > /root/.ssh/config \
    && echo -e "\n\nHost *\n  StrictHostKeyChecking no\n" >> /etc/ssh/ssh_config \
    && chmod 644 /root/.ssh/config \
    && ssh-keyscan $REPO_URL > /root/.ssh/known_hosts \
    && git clone -b $JD_SHELL_BRANCH $JD_SHELL_URL $JD_DIR \
    && npm install -g pm2 \
    && ln -sf $JD_DIR/jtask.sh /usr/local/bin/jtask \
    && ln -sf $JD_DIR/jtask.sh /usr/local/bin/otask \
    && ln -sf $JD_DIR/jtask.sh /usr/local/bin/mtask \
    && ln -sf $JD_DIR/jup.sh /usr/local/bin/jup \
    && ln -sf $JD_DIR/jlog.sh /usr/local/bin/jlog \
    && ln -sf $JD_DIR/jcode.sh /usr/local/bin/jcode \
    && ln -sf $JD_DIR/jcsv.sh /usr/local/bin/jcsv \
    && cp -f $JD_DIR/docker/docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh \
    && chmod 777 /usr/local/bin/docker-entrypoint.sh \
    && chmod 777 $JD_DIR/*.sh \
    && rm -rf /root/.npm
ENTRYPOINT ["docker-entrypoint.sh"]
