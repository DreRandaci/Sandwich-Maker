let finalSandwichPrice = 0;
let breadPrice = 0;
let sammieAndBreadCombinedPrice = 0;
let checkedMeat;
let checkedConds;
let checkedCheese;
let checkedBread;
let checkedVeggie;
let selectedTopping;
let allCheckedItems = [];

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
  		finalSandwichPrice += meatOptions[key];
      checkedMeat = e.target.value;
      allCheckedItems.push(checkedMeat);
  	} else if (selectedTopping === key && e.target.checked === false) {
  		finalSandwichPrice -= meatOptions[key];
  	} 
  };
  sammieAndBreadCombinedPrice = finalSandwichPrice + breadPrice;
  return sammieAndBreadCombinedPrice;
  return checkedMeat;
};

const condimentBuilder = (e) => {
	// Get the value chosen from the DOM
  	selectedTopping = e.target.value;
  	// Add the topping to the SandwichMaker to increase the total price
  	for (let key in condOptions) {      
  	// Determine the price of the topping chosen
  	 if (selectedTopping === key && e.target.checked) {
  		finalSandwichPrice += condOptions[key];
      checkedConds = e.target.value; 
      allCheckedItems.push(checkedConds);     
  	} else if (selectedTopping === key && e.target.checked === false) {
  		finalSandwichPrice -= condOptions[key];
  	};
  };
  sammieAndBreadCombinedPrice = finalSandwichPrice + breadPrice;
  return sammieAndBreadCombinedPrice;
  return checkedConds;
};

const cheeseBuilder = (e) => {
	// Get the value chosen from the DOM
  // debugger;
  	selectedTopping = e.target.value;
  	// Add the topping to the SandwichMaker to increase the total price
  	for (let key in cheeseOptions) {
  	// Determine the price of the topping chosen
  	 if (selectedTopping === key && e.target.checked) {
  		finalSandwichPrice += cheeseOptions[key];
      checkedCheese = e.target.value;  
      allCheckedItems.push(checkedCheese);   
  	} else if (selectedTopping === key && e.target.checked === false) {
  		finalSandwichPrice -= cheeseOptions[key];
    };
  };
  sammieAndBreadCombinedPrice = finalSandwichPrice + breadPrice;
  return sammieAndBreadCombinedPrice;
  return checkedCheese; 
};
// different logic because of radio buttons
const breadBuilder = (e) => {
	// Get the value chosen from the DOM
  	selectedTopping = e.target.value;
  	// Add the topping to the SandwichMaker to increase the total price
  	for (let key in breadOptions) {
  	// Determine the price of the topping chosen
  	 if (selectedTopping === key && e.target.checked) { 
  		breadPrice = breadOptions[key];
      checkedBread = e.target.value;    
      allCheckedItems.push(`On ${checkedBread} bread`);
  	}; 
  };
  sammieAndBreadCombinedPrice = finalSandwichPrice + breadPrice;
  return sammieAndBreadCombinedPrice;
  return checkedBread;
}; 

const veggieBuilder = (e) => {
	// Get the value chosen from the DOM
  	selectedTopping = e.target.value;
  	// Add the topping to the SandwichMaker to increase the total price
  	for (let key in veggieOptions) {
  	// Determine the price of the topping chosen
  	 if (selectedTopping === key && e.target.checked) {
  		finalSandwichPrice += veggieOptions[key];
      checkedVeggie = e.target.value;     
      allCheckedItems.push(checkedVeggie);
  	} else if (selectedTopping === key && e.target.checked === false) {
  		finalSandwichPrice -= veggieOptions[key];
  	};
  };
  sammieAndBreadCombinedPrice = finalSandwichPrice + breadPrice;
  return sammieAndBreadCombinedPrice;
  return checkedVeggie;
}; 
