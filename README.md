# colisee-api

Micro-service responsible for trusted external service communiction.

[![Travis](https://img.shields.io/travis/siggame/colisee-api.svg?style=flat-square)](https://travis-ci.org/siggame/colisee-api)
[![Docker Pulls](https://img.shields.io/docker/pulls/siggame/colisee-api.svg?style=flat-square)](https://hub.docker.com/r/siggame/colisee-api/)
[![GitHub Tag](https://img.shields.io/github/tag/siggame/colisee-api.svg?style=flat-square)](https://github.com/siggame/colisee-api/tags)
[![dependencies Status](https://david-dm.org/siggame/colisee-api/status.svg)](https://david-dm.org/siggame/colisee-api)
[![devDependencies Status](https://david-dm.org/siggame/colisee-api/dev-status.svg)](https://david-dm.org/siggame/colisee-api?type=dev)

## Description

`colisee-api` is the entrypoint for accessing resources within `colisee`. The responsibilities of `colisee-api` also
include providing access to resources written to disk.

## API

### GET `/storage/:filename`

Get a file from disk with given `filename`.

### GET `/vis/random`

Get a random gamelog from disk.

## Contributors

- [user404d](https://github.com/user404d)

## Change Log

View our [CHANGELOG.md](https://github.com/siggame/colisee-api/blob/master/CHANGELOG.md)

## License

View our [LICENSE](https://github.com/siggame/colisee/blob/master/LICENSE)

## Contributing

View our [CONTRIBUTING.md](https://github.com/siggame/colisee/blob/master/CONTRIBUTING.md)
