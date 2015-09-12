var EventEmitter = require('events').EventEmitter;
var util = require('util');

function Person(name) {
    this.name = name;
}

function Girl(name) {
    this.name = name;
}

util.inherits(Girl, EventEmitter);

var me = function(thing) {
    console.log('me looking, ' + thing);
};
var you = function(thing) {
    console.log('you looking, ' + thing);
};

var girl = new Girl();
girl.on('look', me);
girl.on('look', you);

girl.emit('look', 'Iphone6S');
console.log(girl.listeners('look'))