/**
 * 观察者模式
 */

function Event(name) {
    this.name = name;
    this._event = {};
}

// 监听事件
Event.prototype.on = function(eventName, listener) {
    if (this._event[eventName]) {
        this._event[eventName].push(listener);
    } else {
        this._event[eventName] = [listener];
    }
}

Event.prototype.off = function(eventName, listener) {
    if (this._event[eventName]) {
        this._event[eventName].pop(listener);
    }
}

// 发射事件
Event.prototype.emit = function(eventName) {
    var handlers = this._event[eventName];
    var args = Array.prototype.slice.call(arguments, 1);
    for (var i = 0; i < handlers.length; i++) {
        handlers[i].apply(this, args);
    }
}

var teacher = new Event('teacher');

var me = function(me) {
    console.log('me,' + me);
}

var she = function(she) {
    console.log('she, ' + she);
}

var you = function(you) {
    console.log('you, ' + you);
}

teacher.on('go', me);
teacher.on('go', you);
teacher.on('go', she);
teacher.emit('go', 'come');

teacher.off('go', she);
teacher.emit('go', 'come');
