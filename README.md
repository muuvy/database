# muuvy db

## Table of Contents

- Introduction
- Architecture
- Setup
- About

## Setup

shell:  
docker container run -p 28000:27017 --name mongoDbExample --detach mongo:latest

connect to MongoDB running on docker 127.0.0.1:28000 (MongoDB Compass)  
create collection 'moviedb'  
collection -> import 'moviedb_testimport.json'  

shell: docker stop mongoDBExample  
shell: docker restart mongoDBExample  

install/try kitemagic  

IntelliJ:  
install docker deamon + docker plugin (File/Settings/Plugins)  
connect to 127.0.0.1:28001 (File/Settings/Build,Execution,Deployment --> Docker)  
Browse Db with Mongo Explorer  

Filter movie: {title:'Avengers: Endgame'}  

### Prerequisites
__Docker Setup on OSX__  
```bash
brew cask install docker docker-compose
```

__Docker Setup on Windows__  

[Install Docker](https://docs.docker.com/v17.09/docker-for-windows/install/#download-docker-for-windows) 

_Docker for windows contains Docker, Docker CLI client and Docker Compose_

## Run
```bash
docker-compose up
```
