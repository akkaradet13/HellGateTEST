FROM node:16.15.1-alpine3.15 As development

WORKDIR /usr/src

COPY package*.json ./

RUN apk update \
  && apk add --no-cache git openssh bash \
  && yarn global add @nestjs/cli @nestjs/microservices

COPY . .

EXPOSE 4000 5001 9000 8080 8085 5000 4200 3333 8089 3000 27017
