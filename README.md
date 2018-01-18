[![Build Status](https://travis-ci.org/bitrinjani/logger.svg?branch=master)](https://travis-ci.org/bitrinjani/logger) [![Coverage Status](https://coveralls.io/repos/github/bitrinjani/logger/badge.svg?branch=master&i=2)](https://coveralls.io/github/bitrinjani/logger?branch=master) [![npm version](https://badge.fury.io/js/%40bitr%2Flogger.svg)](https://badge.fury.io/js/%40bitr%2Flogger)

# pino.js wrapper
A simple wrapper of pino logger with `labal` support, mainly for [R2 Bitcoin Arbitrager](https://github.com/bitrinjani/r2).

# Install

```bash
npm install @bitr/logger
```

# Usage

```JavaScript
  const log = logger.getLogger('label');
  log.warn('warn log');
  log.info('info log');
  log.error('error log');
  log.debug('debug log');
```
