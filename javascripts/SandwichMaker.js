let finalSandwichPrice = 0;
let breadPrice = 0;
let sammieAndBreadCombinedPrice = 0;
let checkedMeat;
let checkedConds;
let checkedCheese;
let checkedBread;
let checkedVeggie;
let selectedTopping;

let meatOptions = SandwichMaker.getMeat();
let condOptions = SandwichMaker.getCondiments();
let cheeseOptions = SandwichMaker.getCheese();
let breadOptions = SandwichMaker.getBread();
let veggieOptions = SandwichMaker.getVeggie();

const meatBuilder = (e) => {
  // Get the value chosen from the DOM
  selectedTopping = e.target.value;
  // Add the topping to the SandwichMaker to increase the total price
  for (let key in meatOptions) {
  	// Determine the price of the topping chosen
  	 if (selectedTopping === key && e.target.checked) {
      checkedMeat = e.target.value;  		
  		finalSandwichPrice += meatOptions[key];
  	} else if (selectedTopping === key && e.target.checked === false) {
  		finalSandwichPrice -= meatOptions[key];
  	}; 
  };
  sammieAndBreadCombinedPrice = finalSandwichPrice + breadPrice;
  return sammieAndBreadCombinedPrice;
  // return checkedMeat;
};

const condimentBuilder = (e) => {
	// Get the value chosen from the DOM
  	selectedTopping = e.target.value;
  	// Add the topping to the SandwichMaker to increase the total price
  	for (let key in condOptions) {
  	// Determine the price of the topping chosen
  	 if (selectedTopping === key && e.target.checked) {
      checkedConds = e.target.value;  		
  		finalSandwichPrice += condOptions[key];
  	} else if (selectedTopping === key && e.target.checked === false) {
  		finalSandwichPrice -= condOptions[key];
  	};
  };
  sammieAndBreadCombinedPrice = finalSandwichPrice + breadPrice;
  return sammieAndBreadCombinedPrice;
  // return checkedConds;
};

const cheeseBuilder = (e) => {
	// Get the value chosen from the DOM
  	selectedTopping = e.target.value;
  	// Add the topping to the SandwichMaker to increase the total price
  	for (let key in cheeseOptions) {
  	// Determine the price of the topping chosen
  	 if (selectedTopping === key && e.target.checked) {
      checkedCheese = e.target.value;  		
  		finalSandwichPrice += cheeseOptions[key];
  	} else if (selectedTopping === key && e.target.checked === false) {
  		finalSandwichPrice -= cheeseOptions[key];
  };
    sammieAndBreadCombinedPrice = finalSandwichPrice + breadPrice;
    return sammieAndBreadCombinedPrice;
    // return checkedCheese;
  }; 
};
// different logic because of radio buttons
const breadBuilder = (e) => {
	// Get the value chosen from the DOM
  	selectedTopping = e.target.value;
  	// Add the topping to the SandwichMaker to increase the total price
  	for (let key in breadOptions) {
  	// Determine the price of the topping chosen
  	 if (selectedTopping === key && e.target.checked) { 
      checkedBread = e.target.value; 		
  		breadPrice = breadOptions[key];
  	}; 
  };
  sammieAndBreadCombinedPrice = finalSandwichPrice + breadPrice;
  return sammieAndBreadCombinedPrice;
  // return checkedBread;
}; 

const veggieBuilder = (e) => {
	// Get the value chosen from the DOM
  	selectedTopping = e.target.value;
  	// Add the topping to the SandwichMaker to increase the total price
  	for (let key in veggieOptions) {
  	// Determine the price of the topping chosen
  	 if (selectedTopping === key && e.target.checked) {
      checkedVeggie = e.target.value;  		
  		finalSandwichPrice += veggieOptions[key];
  	} else if (selectedTopping === key && e.target.checked === false) {
  		finalSandwichPrice -= veggieOptions[key];
  	};
  };
  sammieAndBreadCombinedPrice = finalSandwichPrice + breadPrice;
  return sammieAndBreadCombinedPrice;
  // return checkedVeggie;
}; 
