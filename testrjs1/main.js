requirejs.config({
	shim	: {
		'tquery'	: {
			exports	: 'tQuery'
		},
		'tquery.superplugin1'	: ['tquery'],
		'tquery.superplugin2'	: ['tquery', 'tquery.superplugin1']
	}
});

console.log('main.js loaded2')

require(['tquery.superplugin2'], function(){
	console.log('inside main.js', tQuery);
});
