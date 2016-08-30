'use strict';

function doIt() {
	console.log(this);
}

doIt();

var o = {
	id: 2,
	doIt: doIt
};

var p = {
	firstName: 'Bob',
	lastName: 'Martin',
	getFullName: function() {
		return this.firstName + ' ' + this.lastName;
	}
};

o.doIt();
console.log(doIt === o.doIt);



