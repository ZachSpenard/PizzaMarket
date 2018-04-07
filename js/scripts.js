// user interface logic
	$(document).ready(function() {
$("form#pizzaOrder").submit(function(event) {
event.preventDefault();
var size = $('input[name=size]:checked').val();
var cheese = new Array();
	 $('input[name=cheese]:checked').each(function() {
		 cheese.push($(this).val());
	 });
 	var veggies = new Array();
	 $('input[name=veggies]:checked').each(function() {
		 veggies.push($(this).val());
	 });
	 var meat = new Array();
	 $('input[name=meat]:checked').each(function() {
		 meat.push($(this).val());
	 });
	 //call the pizza constructor:
	 var order = new Pizza (size, cheese, veggies, meat);
	 //get price for this order by calling the prototype cost function
	 var orderCost = order.cost();
	 $("#orderTotal").text("Thank you! Your order total is: $ " + orderCost);
	 Customer.prototype.newPizza = function () {
		 this.size = 0;
		 this.cheese = 0;
		 this.veggies = 0;
		 this.meat ="";
	 });
 });

// Back end logic
// Constructor:
function Pizza (size,cheese,veggies,meat) {
	this.size = size;
	this.cheese = cheese;
	this.veggies = veggies;
	this.meat = meat;
}
// Prototype:
Pizza.prototype.cost = function() {
	  var pizzaSizes = {"sm" : 15, "md" : 17.50, "lg" : 19.00, "xl" : 22.5};
	  var pizzaCost = pizzaSizes [this["size"]];
	  var cheeseCost = 1 * this["cheese"].length;
		var veggiesCost = 1.50 * this["veggies"].length;
	  var meatCost = 2 * this["meat"].length;
	  return pizzaCost + cheeseCost + meatCost + veggiesCost;
	}
