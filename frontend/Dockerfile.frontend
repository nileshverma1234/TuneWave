FROM node:16-alpine3.11

WORKDIR /frontend

COPY package*.json ./

RUN npm install 
COPY . .

RUN chown -R node /Frontend/node_modules

EXPOSE 3000
CMD ["npm", "start"]
