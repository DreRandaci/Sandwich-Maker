var SandwichMaker = (function(oldSandwichMaker) {

  // Private variable to store the different meat prices
  let cheesePrices = { 
  	"Goat": .5,
  	"Chevre": 5,
  	"Gruyere": 3,
  	"None": 0
  };

  // Augment the original object with another method
  	oldSandwichMaker.getCheese = () => {
    	return cheesePrices;
  	};

  // Return the new, augmented object with the new method on it
  return oldSandwichMaker;
})(SandwichMaker || {});

