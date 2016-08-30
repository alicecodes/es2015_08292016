'use strict';

var x=0,y=0,funcs=[];

for (;x<5;x++) {
	// edit the code between here
	// you cannot use y
	// you cannot invoke console.log in the first loop

	//const h = x;
	function grant(h) {
		funcs.push(function() {
			console.log(h);
		});

	}

	grant(x);

	// and here
}

for (;y<5;y++) {
	funcs[y]();
}
