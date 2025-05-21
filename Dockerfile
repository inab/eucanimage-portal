FROM debian:bullseye-slim

ARG HUGO_VERSION=0.147.2

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        curl \
        ca-certificates \
        bash \
        git \
        unzip && \
    curl -L -o hugo.tar.gz https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-amd64.tar.gz && \
    tar -xzf hugo.tar.gz && \
    mv hugo /usr/local/bin/hugo && \
    rm -rf hugo.tar.gz LICENSE README.md && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY . /app

RUN rm -rf themes/ananke && \
    git clone --depth 1 https://github.com/theNewDynamic/gohugo-theme-ananke.git themes/ananke

EXPOSE 1313

CMD ["hugo", "server", "--bind", "0.0.0.0", "--baseURL=http://localhost", "--disableFastRender", "--poll=700ms"]
