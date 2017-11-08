const opn = require('opn');

function OpnWebpackPlugin(options) {
    options || (options = {});
    this.target = options.target || 'http://localhost:8000';
    this.opnOptios = options.options || {};
}

OpnWebpackPlugin.prototype.apply = function(compiler) {
    var target = this.target;
    var opnOptios = this.opnOptios;

    compiler.plugin('done', function(stats) {
        console.log('The compiler is done...');
        opn(target, opnOptios);
    });
};

module.exports = OpnWebpackPlugin;