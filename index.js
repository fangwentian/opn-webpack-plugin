const opn = require('opn');
const _ = require('loadash');

// opnOptions：传给opn的配置
function OpnPlugin(opnOptions) {
    this.options = _.extend({
        url: 'http://127.0.0.1',
        port: '8000',
    }, opnOptions)
}

OpnPlugin.prototype.apply = function(compiler) {
    compiler.plugin('compile', function(params) {
        console.log('The compiler is starting to compile...', params)
    });
    
}