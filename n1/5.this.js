var number = 2;
var obj;
obj = {
    number: 4,
    fn1: (function () {
        this.number *= 2;
        number = number * 2;
        var number = 3;
        return function () {
            this.number *= 2;
            number *= 3;
            console.log(number);
        }
    })
};
var fn1= obj.fn1;
console.log(number);
fn1();
obj.fn1();
console.log(number);
console.log(obj.number);