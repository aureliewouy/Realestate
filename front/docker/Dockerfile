FROM node:16 as build-stage

WORKDIR /front
COPY . /front
#   Install Dependencies.
COPY ./package*.json .

RUN yarn install
RUN yarn build
