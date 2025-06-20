FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . . 

EXPOSE 4500
CMD ["npm", "run", "dev"]