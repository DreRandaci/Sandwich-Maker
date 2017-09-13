
## Sandwich Maker

### Create a sandwich order form that allows the user to select all the ingredients for a custom deli sandwich. Create a Sandwich module, then create the following as individual modules, using IIFE syntax, to augment Sandwich:

- [x] bread
- [x] meat
- [x] cheese
- [x] condiments
- [x] veggies

Your project should have one HTML file that has:

### A section of options for each sandwich part

- [x] The ability to select multiple, or zero, choices for each section (such as turkey and bacon, or "no meat")
- [x] An empty DOM element into which the final sandwich order and its cost will be inserted
- [x] The ingredient choices should be stored as JS objects that contain the ingredients as keys and their cost as the value. {"turkey": 0.90, "bacon": 1.50}

- [x] Make sure the ingredient objects cannot be accessed by the other modules except through an accessor (getter) method.

- [x] Each IIFE should expose, in its public interface, a method named add{ingredient} (e.g. addMeat or addVeggies) that accepts a single argument. That argument's value should be the ingredient selected by the user.

- [x] You should also create an additional JavaScript file that handles interacting with the form elements and determining which method should be called.

- [x] Print to the DOM

Don't worry about exposing the prices to the user until you display the final cost. This is just an exercise, not a business model.

#### Looking back
Could have combined objects into a single object array to loop through. Use switch statements instead of if else statements from now on.
