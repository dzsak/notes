FROM node:18-alpine

RUN apk add make

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node . .

USER node

RUN npm run build

EXPOSE 3000

CMD [ "node", "server/server.js" ]
