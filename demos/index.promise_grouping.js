'use strict';

const p1 = new Promise(resolve => setTimeout(() => resolve('a'), 2000));
const p2 = new Promise(resolve => setTimeout(() => resolve('b'), 4000));
const p3 = new Promise((...fns) => setTimeout(() => fns[0]('c'), 6000));
const p4 = new Promise(resolve => setTimeout(() => resolve('d'), 8000));

p1.then(results => console.log('resolved 1: ' + results));
p2.then(results => console.log('resolved 2: ' + results));
p3.then(results => console.log('resolved 3: ' + results)).catch(function() { console.log('p3 rejected '); });
p4.then(results => console.log('resolved 4: ' + results));

Promise.all([p1,p2,p3,p4]).then(function(results) {
	console.log('all done');
	console.log(results);
}).catch(function(results) {
	console.log('one rejected');
	console.log(results);
});
