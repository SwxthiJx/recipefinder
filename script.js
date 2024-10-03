const recipes = [
    {
        name: "Omelette",
        ingredients: ["egg", "cheese", "spinach"],
        procedure: [
            "Crack eggs into a bowl and whisk.",
            "Heat a pan with a bit of butter.",
            "Pour eggs into the pan and cook over medium heat.",
            "Add cheese and spinach, fold the omelette.",
            "Cook until done and serve hot."
        ]
    },
    {
        name: "Egg Sandwich",
        ingredients: ["egg", "bread", "butter"],
        procedure: [
            "Boil the eggs until hard-boiled.",
            "Peel and slice the eggs.",
            "Butter the bread slices.",
            "Place the egg slices on the bread, add salt and pepper.",
            "Close the sandwich and serve."
        ]
    },
    {
        name: "Pasta",
        ingredients: ["pasta", "tomato", "cheese"],
        procedure: [
            "Boil pasta in salted water until al dente.",
            "Prepare a tomato sauce with garlic and onion.",
            "Mix the pasta with the sauce.",
            "Top with cheese and serve."
        ]
    },
    // Add more recipes here (total 20)
    {
        name: "Grilled Cheese",
        ingredients: ["bread", "cheese", "butter"],
        procedure: [
            "Butter both sides of bread slices.",
            "Place cheese between two slices of bread.",
            "Grill on a pan until golden brown."
        ]
    },
    {
        name: "Caesar Salad",
        ingredients: ["lettuce", "croutons", "parmesan"],
        procedure: [
            "Chop lettuce and place in a bowl.",
            "Add croutons and grated parmesan cheese.",
            "Toss with Caesar dressing and serve."
        ]
    },
    {
        name: "Chicken Curry",
        ingredients: ["chicken", "onion", "spices"],
        procedure: [
            "Sauté onions and spices in oil.",
            "Add chicken and cook until browned.",
            "Add water or coconut milk and simmer.",
            "Cook until the chicken is tender."
        ]
    },
    {
        name: "Stir Fry Vegetables",
        ingredients: ["carrot", "broccoli", "soy sauce"],
        procedure: [
            "Chop vegetables into bite-sized pieces.",
            "Heat oil in a pan, add vegetables.",
            "Stir-fry with soy sauce until cooked."
        ]
    },
    {
        name: "Pancakes",
        ingredients: ["flour", "milk", "egg"],
        procedure: [
            "Mix flour, milk, and egg in a bowl.",
            "Pour batter into a heated pan.",
            "Flip pancakes when bubbles appear on the surface.",
            "Cook until golden brown and serve with syrup."
        ]
    },
    {
        name: "Banana Smoothie",
        ingredients: ["banana", "milk", "honey"],
        procedure: [
            "Peel and chop the banana.",
            "Blend the banana with milk and honey.",
            "Pour into a glass and serve cold."
        ]
    },
    {
        name: "French Toast",
        ingredients: ["bread", "egg", "milk"],
        procedure: [
            "Whisk egg and milk in a bowl.",
            "Dip bread slices in the mixture.",
            "Cook the bread in a hot pan until golden."
        ]
    }
];

function findRecipes() {
    const ingredientInput = document.getElementById("ingredient").value.toLowerCase();
    const recipeListDiv = document.getElementById("recipe-list");
    const recipeDetailsDiv = document.getElementById("recipe-details");
    recipeListDiv.innerHTML = ""; // Clear previous results
    recipeDetailsDiv.innerHTML = ""; // Clear recipe details

    const matchedRecipes = recipes.filter(recipe =>
        recipe.ingredients.some(ingredient => ingredient.includes(ingredientInput))
    );

    if (matchedRecipes.length === 0) {
        recipeListDiv.innerHTML = "<p>No recipes found.</p>";
    } else {
        matchedRecipes.forEach(recipe => {
            const recipeDiv = document.createElement("div");
            recipeDiv.classList.add("recipe");
            recipeDiv.innerText = recipe.name;
            recipeDiv.onclick = function() { showRecipeDetails(recipe); }; // Show details on click
            recipeListDiv.appendChild(recipeDiv);
        });
    }
}

function showRecipeDetails(recipe) {
    const recipeDetailsDiv = document.getElementById("recipe-details");
    recipeDetailsDiv.innerHTML = `
        <h2>${recipe.name}</h2>
        <h3>Ingredients:</h3>
        <ul>${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}</ul>
        <h3>Procedure:</h3>
        <ol>${recipe.procedure.map(step => `<li>${step}</li>`).join('')}</ol>
    `;
}

