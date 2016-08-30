'use strict';

class Person {

	constructor(firstName, lastName) {
		this._firstName = firstName;
		this._lastName = lastName;
	}

	static create(name) {

		return new Person(...name.split(' '));
	}

	getFullName() {
		return this.firstName + ' ' + this._lastName;
	}

	get firstName() {
		return this._firstName;
	}

	set firstName(value) {
		this._firstName = value;
	}

}

var p = Person.create('A S');
console.log(p.getFullName());

console.log(Object.getOwnPropertyDescriptor(Person.prototype, 'firstName').configurable);






// Object.defineProperty(p, 'age', {
// 	configurable: true,
// 	enumerable: true,
// 	get: function() {
// 		console.log('getting');
// 		return this._age;
// 	},
// 	set: function(value) {
// 		console.log('setting');
// 		this._age = value;
// 	}
// });

// p.age = 145;
// console.log(p.age);