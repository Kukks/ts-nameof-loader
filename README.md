# ts-nameof-loader
a webpack loader that allows you to use the ts-nameof lib (https://github.com/dsherret/ts-nameof)

[![npm](https://img.shields.io/npm/v/ts-nameof-loader.svg)](https://www.npmjs.com/package/ts-nameof-loader)
[![npm](https://img.shields.io/npm/dw/ts-nameof-loader.svg?colorB=ff0033)](https://www.npmjs.com/package/ts-nameof-loader)

`npm i ts-nameof-loader --save-dev`

### Example Usage
```javascript
{ 
  test: /\.ts$/i,
  use: ['awesome-typescript-loader', 'ts-nameof-loader']
}
```
