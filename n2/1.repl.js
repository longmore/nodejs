var repl = require('repl');
var server = repl.start({});
var context = server.context;
context.name = 'longmore';
context.age = 6;
context.grow = function () {
    console.log(context.name + ' grow ' + context.num);

};
