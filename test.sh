#!/bin/bash

docker pull siggame/colisee-db
docker rm --force api-db
docker run --name api-db --publish 5432:5432 --detach siggame/colisee-db

npm run test

docker stop api-db