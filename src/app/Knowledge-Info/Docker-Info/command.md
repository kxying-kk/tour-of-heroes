# 1. pull images from docker hub
https://hub.docker.com/_/mongo
https://medium.com/faun/managing-mongodb-on-docker-with-docker-compose-26bf8a0bbae3

```
docker pull mongo:latest
```
# 2. check docker containers
```
docker container ls
```
# 3. checking image
```
docker image
```
# 4. Login to your container by using container names
```
docker exec -it my-mongo-container bash
``` 
# 5. Login to MongoDB with created User & Database
mongo -u admin -p secret --authenticationDatabase mymongodb
mongo -u admin --authenticationDatabase mymongodb

mongodb://admin:admin@127.0.0.1:27017/mymongodb


# 6. remove mongo container
```
docker-compose rm mongo
```