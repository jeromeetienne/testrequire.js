requirejs.config({
	shim	: {
		'tquery'	: {
			exports	: 'tQuery'
		},
		'tquery.superplugin1'	: ['tquery'],
		'tquery.superplugin2'	: ['tquery']
	}
});
