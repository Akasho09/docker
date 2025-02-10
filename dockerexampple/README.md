-   npm create next-app@latest
- npm install 
-  npm run dev
> dockerfile
FROM node:22

WORKDIR /nextapp

COPY package* .

RUN npm install

COPY . .

CMD ["npm" , "run" , "dev"]

- docker build -t docex1 .
- docker run -p 3000:3000 docex1


## is we want hot reload 

### Manually 
- docker exec -it name bash 
- apt-get update && apt-get install nano
- nano page.tsx  

### or
docker run -p 3000:3000  -v ./app:/nextapp/app docex1

mopunt folder from vscode to docker container such that an cjange in vsFolder apppers in dpocker conatiner also.

`
