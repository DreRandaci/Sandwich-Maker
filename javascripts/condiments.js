var SandwichMaker = (function(oldSandwichMaker) {

  // Private variable to store the different meat prices
  let condimentPrices = { 
  	"Oil": 1,
  	"Mayo": 1,
  	"Mustard": 1,
  	"None": 0
  };

  // Augment the original object with another method
  	oldSandwichMaker.getCondiments = () => {
    	return condimentPrices;
 	 };

  // Return the new, augmented object with the new method on it
  return oldSandwichMaker;
})(SandwichMaker || {});

