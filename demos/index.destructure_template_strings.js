'use strict';

const person = {
	firstName: 'Bob',
	lastName: 'Martin'
};

//function doIt({firstName, lastName})

const getFullName = ({ firstName, lastName }) => `

${firstName.toUpperCase()}

${lastName}`;

const { firstName: fn, lastName } = person;

console.log(getFullName(person));

console.log(fn);