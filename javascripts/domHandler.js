let sammieContainer = document.getElementById('sammieContainer');
let meat = document.getElementById("meat");
let condiments = document.getElementById("condiments");
let cheese = document.getElementById("cheese");
let bread = document.getElementById("bread");
let veggies = document.getElementById("veggies");
let btn = document.getElementById("btn");

meat.addEventListener('change', meatBuilder)
condiments.addEventListener('change', condimentBuilder)
cheese.addEventListener('change', cheeseBuilder)
bread.addEventListener('change', breadBuilder)
veggies.addEventListener('change', veggieBuilder)
btn.addEventListener('click', (e) => {
	writeToDom(sammieAndBreadCombinedPrice);
});

const writeToDom = (sammieAndBreadCombinedPrice) => {
	sammieContainer.innerHTML = `Your sammie has ${checkedMeat}, ${checkedConds}, ${checkedCheese}, ${checkedBread} and ${checkedVeggie}. Your total is $${sammieAndBreadCombinedPrice}`;
}