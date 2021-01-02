//This program compares user input to the recipes array to determine which elements of the array, if any, match the user input.

const recipes = [
  {
   name: 'Spaghetti and Meat Sauce',
   protein: 'Ground Beef',
   base: 'Gluten Free Pasta',
   necessaryIngredients: ['Crushed Tomatoes'],
   optionalIngredients: ['Bell Peppers', 'Onion', 'El Pato Sauce', 'Parmesean Cheese'],
   cookTime: '40 minutes'
  },
  {
   name: 'Chic Pea Curry',
   protein: 'Chic Peas',
   base: 'Rice',
   necessaryIngredients: ['Coconut Milk'],
   optionalIngredients: ['Bell Peppers', 'Onion'],
   cookTime: '45 minutes'
  }
]
  
let onHand = prompt ('What do you have to cook with today?')  
let ingredientsTotal = '';
let ingredientsTotalArray = [];

for (let i = 0; i < recipes.length; i++){
    let recipe = recipes[i];
    ingredientsTotal = `${recipe.protein}, ${recipe.base}, ${recipe.necessaryIngredients.join(', ')}`;
    ingredientsTotalArray.push(ingredientsTotal);
    if (onHand.includes(ingredientsTotalArray)){
    console.log (`You have all the ingredients to make ${recipe.name}! You can also use ${recipe.optionalIngredients.join(', ')} in this recipe.`);
      } else {
    ingredientsTotalArray = [];
      } 
}
