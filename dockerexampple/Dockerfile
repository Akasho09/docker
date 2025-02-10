FROM node:22

WORKDIR /nextapp

COPY package* .

RUN npm install

COPY . .

CMD ["npm" , "run" , "dev"]
