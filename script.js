/** @format */

// const cocktails = document.querySelector('ul');
// console.log(cocktails)

window.onload = function () {
  createBeverageButtons();
};

 const drinks = [
  {
    name: "hugo",
    color: "#ffc759",
    price: 5,
    type: 'cocktail',
    recipe: '',
    image: '',
  },
  {
    name: "Martini",
    color: "#ff7b9c",
    price: 7,
    type: 'cocktail',
    recipe: '',
    image: '',
  },
  {
    name: "Margarita",
    color: "#607196",
    price: 7,
    type: 'cocktail',
    recipe: '',
    image: '',
  },
  {
    name: "Manhattan",
    color:  "#ef476f",
    price: 9,
    type: 'cocktail',
    recipe: '',
    image: '',
  },
  {
    name: "Earl Grey",
    color: "#26547c",
    price: 2,
    type: 'tea',
    recipe: 'Put the kettle on , get a teaspoon of tea in your cup, then pour the water, wait for a couple of minutes and enjoy the perfect tea!',
    image: '',
  },
  {
    name: "Herbal",
    color: "#06d6a0",
    price: 2,
    type: 'tea',
    recipe: 'Put the kettle on , get a teaspoon of tea in your cup, then pour the water, wait for a couple of minutes and enjoy the perfect tea!',
    image: '',
  },
  {
    name: "Ginger ale",
    color: "#ffa62b",
    price: 3,
    type: 'soft drink',
    recipe: 'Ginger ale is a carbonated soft drink flavored with ginger. It is consumed on its own or used as a mixer, often with spirit-based drinks. There are two main types of ginger ale. The golden style is credited to the Irish doctor Thomas Joseph Cantrell.',
    image: '',
  },
  {
    name: "Lemonade",
    color: "#aef78e",
    price: 3,
    type: 'soft drink',
    recipe: 'Just pour the drink, and you\'re ready to go!',
    image: '',
  },
];

const createBeverageButtons = () => {
 

  for (let i = 0; i < drinks.length; i++) {
    const cocktaillist = document.getElementById("cocktaillist");
    const button = document.createElement("button");
    button.setAttribute("id", "button");
    button.innerHTML = drinks[i].name;
    button.style.backgroundColor = drinks[i].color;
    cocktaillist.appendChild(button);
    button.addEventListener("click", getBeverage);
  }
};

const getBeverage = (e) => {

  const card = document.getElementById("cardDescription");

  if (card) { card.parentNode.removeChild(card);
    
  }


  const drinkSelected = drinks.find(
    (element) => element.name == e.target.innerHTML
  );
  console.log(drinkSelected.name + " this selected drink");

  //----- the two || means this or that -----

  if (drinkSelected.type == "tea" || drinkSelected.type == "soft drink" ) {
    console.log("not cocktail");

    const card = document.getElementById("beverageDescription");
    const cardDescription = document.createElement("div");
    cardDescription.setAttribute("id", "cardDescription");
    cardDescription.innerText = drinkSelected.recipe;
    cardDescription.style.background = "beige";
    card.appendChild(cardDescription);

  } else if (drinkSelected.type == "cocktail") {
    console.log("a cocktail");

    fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkSelected.name)
      .then((response) => response.json())
      .then((data) => {
        const { drinks } = data;
       
          const card = document.getElementById("beverageDescription");
          const cardDescription = document.createElement("div");
          cardDescription.setAttribute("id", "cardDescription");
          cardDescription.innerHTML =
            drinks[0].strDrink +
            "<br>" +
            drinks[0].strInstructions +
            "<br>" +
            drinks[0].strIngredient1 +
            "<br>" +
            drinks[0].strIngredient2 +
            "<br>" +
            drinks[0].strIngredient3;
          cardDescription.style.background = "beige";
          
          card.appendChild(cardDescription);
        
      })

      .catch((err) => console.error(err));
  }

  
};



