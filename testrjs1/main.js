requirejs.config({
	shim	: {
		'tquery'	: {
			exports	: 'tQuery'
		},
		'tquery.superplugin1'	: ['tquery'],
		'tquery.superplugin2'	: ['tquery']
	}
});

console.log('main.js loaded')


require(['tquery.superplugin2'], function(){
	console.log('inside main.js', tQuery);
});
