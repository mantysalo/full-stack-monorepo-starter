FROM node:12-buster-slim as build-stage

WORKDIR /app
COPY package*.json /app/
RUN npm install
ADD . /app
RUN npm run build

FROM nginx:stable

COPY --from=build-stage /app/build/ /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf