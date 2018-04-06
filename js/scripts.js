// user interface logic
	$(document).ready(function() {
$("form#pizzaOrder").submit(function(event) {
event.preventDefault();
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
