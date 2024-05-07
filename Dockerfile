ARG NODE_VERSION=16.17.1
FROM node:${NODE_VERSION}-alpine

WORKDIR /news

COPY public/ /news/public
COPY src/ /news/src
COPY package.json /news/
COPY .env /news/

RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "start"]
