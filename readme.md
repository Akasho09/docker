## docker 
Docker is an open-source platform that enables developers to build, ship, and run applications in lightweight, portable containers. 
Containers package an application and its dependencies together, ensuring consistency across different environments.

## Container
A container is a standardized unit of software that packages code and its dependencies so the application runs reliably from one computing environment to another. 
Containers are lightweight and isolated but share the same host OS kernel.

## Install
- install application
- sudo hdiutil attach Docker.dmg
sudo /Volumes/Docker/Docker.app/Contents/MacOS/install
sudo hdiutil detach /Volumes/Docker

## map mac ports to docker container 
 docker run -d -p 27017:27017 mongo
 docker run -d -p 27015:27017 mongo

The second string on runnign command (ec06a7277c2d37c7bf4f411d07e4c7679d2fea06c9d782b9b35baa4038a9d176) is the container ID.

## 
- docker ps === currently runnig  containers
- docker ps -a === includeing stopped 
- docker kill pID === stop conatiner 


## POSTRGESQL
command to connect : docker run --name aakash -e POSTGRES_PASSWORD=aakash@01234  -d -p 5432:5432 postgres
connection string  :  postgresql://aakash:aakash@01234@localhost:5432/postgres

## Dockerfile

![alt text](<../Screenshot 2025-02-03 at 11.53.21 PM.png>)

FROM node:20 

WORKDIR  ./app


COPY . .

RUN npm install
RUN npx prisma generate
RUN npm run build

EXPOSE 3000

CMD ["node" , "dist/index.js"]

##  
docker build -t backend .

docker run -p  3000:3000 akashbckend15

<!-- docker run -it akashbckend15 /bin/bash

docker exec -it 3c6892624ccd bash 

docker run -d -p 3000:3000 akashbckend15
-->

docker exec -it 5ba406fe46b6 bash

## make sure package.json has all dependicies


## pass env variables at runtimee 
docker run -p 3000:3000 p5 DATABASE_URL=""


## Layers in docker 
onion
sequentially 
layers can be cached between images 

## docker volumes 
dbs dont persist after containner is closed.

-  docker exec -it unruffled_keldysh bash
- cd /data/db
- ls gives all collections created.

## docker networks
to connect conatiners 
docker network create network1
docker network ls 


## connecting containers
docker run -d -v newvol1:/data/db --name mongonodbcontainer1  --network network1  -p 27017:27017 mongo
use mongonodbcontainer1  in db_url.
- port mappppping can be skippped. 

## start original app/conatiner
docker run  -p 3000:3000 --name whateverrr --network network1 mongopapp1

## docker logs cid 

## tagname ~=  version


## DOCKER push

## docker compose  
Docker Compose is a tool for defining and running multi-container applications. It is the key to unlocking a streamlined and efficient development and deployment experience.

- docker compose u

##  docker bind mount  

-v ./app:/nextapp/app

 ## dopcker smapples 
 https://github.com/dockersamples