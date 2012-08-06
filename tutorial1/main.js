define(["customer", "order"], function(Customer, Order) {
	console.log('inside main.js');
	
	var customers	= Customer.getCustomers();
	// do something with customers ...

	var orders	= Order.getOrders();
	// do something with orders ...
});