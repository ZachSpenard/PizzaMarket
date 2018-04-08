// user interface logic
$(document).ready(function() {
	var pizzaArray = new Array();
	$("#addPizza").click(function() {
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
		var order = new Pizza (size, cheese, veggies, meat);
		pizzaArray.push(order);
	});
	$("form#pizzaOrder").submit(function(event) {
		event.preventDefault();
		var totalCost = 0;
		for (var i = 0; i < pizzaArray.length; i++) {
			totalCost += pizzaArray[i].cost();
		}
		$("#orderTotal").text("Thank you! Your order total is: $ " + totalCost);
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
