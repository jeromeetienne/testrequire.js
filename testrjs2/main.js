requirejs.config({
	paths	: {
		"tquery"	: "vendor/tquery/tquery",
		"plugins"	: "vendor/tquery"
	},
	shim	: {
		'plugins/tquery.superplugin1'	: ['tquery'],
		'plugins/tquery.superplugin2'	: ['tquery', 'plugins/tquery.superplugin1']
	}
});

console.log('main.js loaded2')

require(['plugins/tquery.superplugin2'], function(){
	console.log('inside main.js', tQuery);
});
