// user interface logic
	$(document).ready(function() {
$("form#pizzaOrder").submit(function(event) {
event.preventDefault();



// Back end logic
// Constructor:
function Pizza (size, cheese, veggie, meat) {
	this.size = size;
	this.cheese = cheese;
	this.meat = veggie;
	this.veggie = meat;
}
