'use strict';

function doIt(a,b,c) {
	console.log(a,b,c);
}

var params = [1,2,3];

doIt.apply(null, params);
doIt(...params);

params = [...params, 4, 5, 6];
console.log(params);

const [a,...b] = [1,2,3,4,5];
console.log(b[3]);

//const { fn, ...props } = { fn: 1, v:2, b:3 };

//console.log(fn);

function tesla(a,b,...c) {
	console.log(a,b,c);
}

tesla(...[1,2,3,4,5,6]);




// function doIt(a,b,...c) {
// 	console.log(a,b,c);
// 	//console.log(arguments);
// }


// doIt(1,2,3,4);
