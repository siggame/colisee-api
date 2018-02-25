# colisee-api

[![Travis](https://img.shields.io/travis/siggame/colisee-api.svg?style=flat-square)](https://travis-ci.org/siggame/colisee-api)
[![David](https://img.shields.io/david/siggame/colisee-api.svg?style=flat-square)](\ )
[![Docker Pulls](https://img.shields.io/docker/pulls/siggame/colisee-api.svg?style=flat-square)](https://hub.docker.com/r/siggame/colisee-api/)
[![GitHub release](https://img.shields.io/github/release/siggame/colisee-api.svg?style=flat-square)](https://github.com/siggame/colisee-api/releases)

Micro-service responsible for trusted external service communiction.

## API

### GET `/storage/:filename`

Get a file from disk with given `filename`.

### GET `/vis/random`

Get a random gamelog from disk.
