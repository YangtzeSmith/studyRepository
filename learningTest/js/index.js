'use strict';

let cal = {
    a,
    b,
    read() {
        this.a = +prompt('first','');
        this.b = +prompt('second','');
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
};

cal.read();
alert(cal.sum());
alert(cal.mul());