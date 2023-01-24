FROM node:16
WORKDIR /usr/src/app

COPY ./package*.json ./
COPY ./lerna.json ./
COPY ./tsconfig.json ./
COPY ./packages/utils/package*.json ./packages/utils/
COPY ./packages/components/package*.json ./packages/components/
COPY ./packages/pokedex/package*.json ./packages/pokedex/

RUN npm i

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
