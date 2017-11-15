const opn = require('opn');

function OpnWebpackPlugin(options) {
    options || (options = {});
    this.target = options.target || 'http://localhost:8000';
    this.opnOptios = options.options || {};
}

OpnWebpackPlugin.prototype.apply = function(compiler) {
    var target = this.target;
    var opnOptios = this.opnOptios;
    var hasOpen = false;

    compiler.plugin('done', function(stats) {
        if(!hasOpen) {
            console.log('The compiler is done...');
            opn(target, opnOptios);
            hasOpen = true
        }
    });
};

module.exports = OpnWebpackPlugin;