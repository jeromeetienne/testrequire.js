define(['module'], function(module){
	var baseUrl	= module.uri.replace(/[^/]*$/, '');
	
	
	console.log('tQuery.SuperPlugin1 Definition', module.uri, baseUrl)
	tQuery.SuperPlugin1	= function(){
		console.log("inside superplugin1 constructor")
	}

	tQuery.SuperPlugin1.prototype.aMethod	= function(){
		console.log("inside superplugin1 aMethod")	
	}
}); 

console.log('tQuery.sdSuperPlugin1 loaded');
