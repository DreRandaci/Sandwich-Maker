var SandwichMaker = (function(oldSandwichMaker) {

  // Private variable to store the different meat prices
  let meatPrices = { 
  	"Panda": 6,
  	"Droggon": 4,
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
