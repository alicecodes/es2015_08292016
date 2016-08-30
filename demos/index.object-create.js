'use strict';

var p = { amt: 20000, address: {
	city: 'San Diego',
	state: 'CA'
} };

var o = Object.create(p);

p.amt = 20100;
o.amt = 20;
delete o.amt;
o.address.city = 'Boston';

console.log(o.amt);
console.log(p.address.city);
console.log(Object.getPrototypeOf(o) === p);
