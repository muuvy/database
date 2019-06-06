# muuvy db

## Table of Contents

- Introduction
- Architecture
- Setup

install docker https://hub.docker.com/ (docker for desktop / create account)

shell: docker container run -p 28000:27017 --name mongoDbExample --detach mongo:latest

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

- About
