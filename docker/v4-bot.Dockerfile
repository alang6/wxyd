FROM nevinee/jd:v4
RUN apk add --no-cache -f \
        python3 \
        zlib-dev \
        jpeg-dev \
    && apk add --no-cache --virtual .build \
        gcc \
        python3-dev \
        musl-dev \
    && rm -rf /var/cache/apk/* \
    && ln -sf /usr/bin/python3 /usr/bin/python \
    && pip3 install --upgrade pip \
    && cd $JD_DIR/bot \
    && pip3 install -r requirements.txt \
    && apk del .build \
    && rm -rf /root/.cache
