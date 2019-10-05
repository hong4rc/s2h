# S2H
[![Build Status](https://travis-ci.com/Hongarc/s2h.svg?branch=master)](https://travis-ci.com/Hongarc/s2h)
[![codecov](https://codecov.io/gh/Hongarc/s2h/branch/master/graph/badge.svg)](https://codecov.io/gh/Hongarc/s2h)
[![npm](https://img.shields.io/npm/v/s2h)](https://www.npmjs.com/package/s2h)

Convert SSH url to HTTPS url

## Usage

```js
const s2h = require('s2h');
console.log(s2h('git@company.com:owner/repo.git'));
//=> 'https://company.com/owner/repo.git'
```
