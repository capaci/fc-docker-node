FROM node:18.12.1-slim

WORKDIR /app

RUN apt update && \
    apt install -y wget netcat && \
    wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
    chmod +x /usr/bin/wait-for

COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json

RUN npm ci


COPY . /app

ENTRYPOINT ["npm", "start"]
