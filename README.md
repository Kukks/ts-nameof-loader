# ts-nameof-loader
a webpack loader that allows you to use the ts-nameof lib (https://github.com/dsherret/ts-nameof)


### Example Usage
```
    { 
		test: /\.ts$/i,
		use: ['awesome-typescript-loader', 'ts-nameof-loader']
	}
```