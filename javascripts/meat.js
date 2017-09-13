var SandwichMaker = (function(oldSandwichMaker) {

  // Private variable to store the different meat prices
  let meatPrices = { 
  	"Panda": 65000,
  	"Droggon": 400000,
  	"Turkey": 1,
  	"None": 0
  };

  // Augment the original object with another method
  oldSandwichMaker.getMeat = () => {
    return meatPrices;
  };

  // Return the new, augmented object with the new method on it
  return oldSandwichMaker;
})(SandwichMaker || {});
