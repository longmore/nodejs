var count = 0;
var fun1 = function () {
    setTimeout(function () {
        console.log('1');
        if (++count == 2) {
            done();
        }
    }, 1000);
}
var fun2 = function () {
    setTimeout(function () {
        console.log('2');
        if (++count == 2) {
            done();
        }
    }, 2000);
}
var done = function () {
    console.log('end');
}
fun1();
fun2();
console.log(global);
