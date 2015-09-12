// process.nextTick(fun)将事件放在本次事件环的尾部处理

function say1() {
    var sum = 1;
    for (var i = 1; i <= 100; i++) {
        sum = sum * i;
    }
    console.log(sum);
}
function say2() {
    var sum = 1;
    for (var i = 1; i <= 50; i++) {
        sum = sum * i;
    }
    console.log(sum);
}

// 如果setImmediate和process.nextTick同时存在，如果setImmediate和process最后执行
setImmediate(say2)
process.nextTick(say1);

console.log('welcome1');
console.log('welcome2');
