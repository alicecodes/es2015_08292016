'use strict';

const youngMan = new Promise(function(resolve, reject) {

	setTimeout(function() {
		// young lady answer
		resolve('you are the love of my life!');
	}, 2000);

});

youngMan.then(function(results) {

	console.log('she said yes!');
	console.log(results);
	console.log('planning the bachelor party...');

	return new Promise(function(resolve) {
		setTimeout(function() {
			resolve('party is all set!');
		},2000)
	});

}).then(function(results) {

	console.log(results);

	// return new Promise(function(resolve, reject) {
	// 	setTimeout(function() {
	// 		//resolve('found a tux');
	// 		reject('could not find a tux, need to lose weight');
	// 	},2000);
	// });

	throw Error('young is scared of getting married');

}).then(function(results) {

	console.log(results);

	return new Promise(function(resolve) {
		setTimeout(function() {
			resolve('show up on time');
		},2000);
	});

}).then(function(results) {

	console.log(results);

}).catch(function(results) {
	console.log('she said no... :( time to join eHarmony...');
	console.log(results);
});

console.log('young man waiting...');
