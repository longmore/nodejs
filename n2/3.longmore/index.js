function Person () {
    var person = {
        name: 'longmore',
        age: '25',
        skill: 'js/html/css/nodejs',
        hobby: 'computer/sleep',
    };
    for (var key in person) {
        var value = person[key];
        console.log(key + ':' +value);
    }
}
module.export = new Person();
