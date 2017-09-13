var SandwichMaker = (function(oldSandwichMaker) {

  // Private variable to store the different meat prices
  let veggiePrices = { 
  	"Peppers": 1,
  	"Arugula": 1,
  	"Tomato": 1,
  	"None": 0
  };

  // Augment the original object with another method
  oldSandwichMaker.getVeggie = () => {
    return veggiePrices;
  };

  // Return the new, augmented object with the new method on it
  return oldSandwichMaker;
})(SandwichMaker || {});
