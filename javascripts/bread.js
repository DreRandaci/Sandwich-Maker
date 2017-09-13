var SandwichMaker = (function(oldSandwichMaker) {

  // Private variable to store the different meat prices
  let breadPrices = { 
  	"Kaiser": 2,
  	"Wonder Bread": 0,
  	"Spelt": 1,
  	"None": 1
  };

  // Augment the original object with another method
  oldSandwichMaker.getBread = () => {
    return breadPrices;
  };

  // Return the new, augmented object with the new method on it
  return oldSandwichMaker;
})(SandwichMaker || {});
