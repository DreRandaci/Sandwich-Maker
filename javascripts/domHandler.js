let sammieContainer = document.getElementById('sammieContainer');
let meat = document.getElementById("meat");
let condiments = document.getElementById("condiments");
let cheese = document.getElementById("cheese");
let bread = document.getElementById("bread");
let veggies = document.getElementById("veggies");
let btn = document.getElementById("btn");

meat.addEventListener('change', (e) => {
	let index = allCheckedItems.indexOf(checkedMeat)
    if (index > -1){
      allCheckedItems.splice(index, 1);
    }
	meatBuilder(e)
});
condiments.addEventListener('change', (e) => {
	let index = allCheckedItems.indexOf(checkedConds)
    if (index > -1){
      allCheckedItems.splice(index, 1);
    }
	condimentBuilder(e)
});
cheese.addEventListener('change', (e) => {
	let index = allCheckedItems.indexOf(checkedCheese)
    if (index > -1){
      allCheckedItems.splice(index, 1);
    }
	cheeseBuilder(e)
});
bread.addEventListener('change', (e) => {
	let index = allCheckedItems.indexOf(checkedBread)
    if (index > -1){
      allCheckedItems.splice(index, 1);
    }
    breadBuilder(e);
});
veggies.addEventListener('change', (e) => {
	let index = allCheckedItems.indexOf(checkedVeggie)
    if (index > -1){
      allCheckedItems.splice(index, 1);
    }
    veggieBuilder(e);
});
btn.addEventListener('click', (e) => {
	clearDom();
	writeToDom(sammieAndBreadCombinedPrice);
});

const writePrice = (price) => {
	sammieContainer.innerHTML = `Total: $${price}`;
};
const clearDom = () => {
	sammieContainer.innerHTML = '';
};
const writeToDom = (sammieAndBreadCombinedPrice) => {
	allCheckedItems.forEach(function(topping) {
		sammieContainer.innerHTML += `<li>${topping}</li>`
	});
	sammieContainer.innerHTML += `Total: $${sammieAndBreadCombinedPrice}`;
};