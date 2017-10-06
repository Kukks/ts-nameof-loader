# ts-nameof-loader
a webpack loader that allows you to use the ts-nameof lib (https://github.com/dsherret/ts-nameof)

`npm i ts-nameof-loader --save-dev`

### Example Usage
```javascript
{ 
  test: /\.ts$/i,
  use: ['awesome-typescript-loader', 'ts-nameof-loader']
}
```
