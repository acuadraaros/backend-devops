FROM node:22

WORKDIR /usr/app

COPY package*.json ./

RUN npm ci

COPY . . 

RUN npm run build

#COPY node_modules ./node_modules
#COPY dist ./dist

EXPOSE 3020

CMD ["node","dist/index.js"]