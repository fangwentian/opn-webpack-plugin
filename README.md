# opn-webpack-plugin
A plugin for webpack to open resource when complie is done. It's useful for developers, open your website when it's ready.
> As this plugin is based on opn, so you can open any resources that opn support.

#### Installation
```bash
npm i opn-webpack-plugin -D
```


#### Usage
Require the plugin and add it to the plugins in webpack config.

```javascript
const OpnWebpackPlugin = require('opn-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'lib/entry.js'),
    output: {
        path: __dirname + "/bundle/",
        filename: "bundle.js"
    },
    plugins: [
        new OpnWebpackPlugin({
            target: 'http://localhost:8000',
            options: {}
        })
    ]
};
```

#### Options
##### target  
Type: String  
Default: http://localhost:8000  

#### options
Type: Object  
Default: {}  
Same with options in opn. The plugin will open website with: ***opn(target, options)***, so you can pass any valid options in opn to the plugin.  


