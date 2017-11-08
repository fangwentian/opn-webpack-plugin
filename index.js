const opn = require('opn');
const _ = require('lodash');

// opnOptions：传给opn的配置
function OpnWebpackPlugin(opnOptions) {
    this.options = _.extend({
        url: 'http://127.0.0.1',
        port: '8000',
    }, opnOptions)
}

OpnWebpackPlugin.prototype.apply = function(compiler) {
    compiler.plugin('compile', function(params) {
        console.log('The compiler is starting to compile...', params)
    });
}

module.exports = OpnWebpackPlugin;