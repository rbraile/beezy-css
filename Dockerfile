from node:10.16.0-alpine

RUN mkdir /app
WORKDIR /app

COPY . /app/
RUN rm -rf package-lock.json
RUN rm -rf ./node_modules

RUN npm i

EXPOSE  3000

CMD npm run dev