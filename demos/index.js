'use strict';

// var taxReturns = {
// 	unprocessed: 10,
// 	processed: 20,
// };

// taxReturns[Symbol.iterator] = function*() {

// 	console.log('yielding return');
// 	yield { id: 1, name: 'VA Return' };
// 	console.log('yielding return');
// 	yield { id: 2, name: 'CA Return' };
// 	console.log('yielding return');
// 	yield { id: 3, name: 'TN Return' };

// };

// for (const taxReturn of taxReturns) {
// 	console.log('next return - in loop');
// 	console.log(taxReturn.name);
// }

var map = new Map();
map.set('first', { id: 1});
console.log(map.get('first'));


var nums = [];
nums[0] = "test";
nums[1] = 2;
nums[10000] = "r";
console.dir(nums);

var numbers = new Uint32Array(10);
numbers[0] = "test";
numbers[1] = 2;
console.dir(numbers);



