import recipeFactory from './factories/recipeFactory';
import { listFactory } from './factories/listFactory';
import toggleLists from './utils/toggleLists';
import recipes from './data/recipes';
import filter from './utils/filter';
import createElementDOM from './utils/genericDom';




//display all recipes
/**
 * It takes in a recipe object, creates a recipe model, gets the recipe card DOM from the model, and
 * then builds the recipe card DOM.
 * @param data - the data object that is returned from the API call.
 */
export const displayRecipes = (data) => {

	const recipeModel = recipeFactory(data);
	const recipeCardDOM = recipeModel.getRecipeCardDOM();
	buildRecipeCardDOM(recipeCardDOM, data);
};

/**
 * The buildRecipeCardDOM function takes in a recipe object and returns a recipe card element.
 * @param element - the HTML element that you want to append to the DOM
 */
const buildRecipeCardDOM = (element, data) => {
	const section = document.querySelector('.recipesCards');
	const noList = createElementDOM('p', ` Aucune recette ne correspond à votre critère… vous pouvez
	chercher « tarte aux pommes », « poisson », etc.
	`, 'noListDiv');
	section.innerHTML = '';
	section.appendChild(element);
	section.appendChild(noList);
	if (data.length === 0) {
		noList.classList.add('active');
	}

};


//display all lists
/**
 * This function takes in a data object and a type string, creates a list model object, creates a flat
 * list, gets the list DOM, and builds the list DOM.
 * @param data - an array of objects
 * @param type - the type of list to be created (ul or ol)
 */
export const displayLists = (data, type) => {
	const listModel = listFactory(data, type);
	listModel.createFlatList();
	const linkDOM = listModel.getListDOM();
	buildListDOM(linkDOM, type);
};

/**
 * This function takes in a DOM element and a string, and then it finds the parent div of the element,
 * clears the parent div, and then appends the element to the parent div.
 * @param element - The element that you want to append to the DOM.
 * @param type - the type of the element you want to build.
 */
export const buildListDOM = (element, type) => {
	const parentDiv = document.querySelector(`.${type}-results-list`);
	parentDiv.innerHTML = '';
	parentDiv.appendChild(element);
};

/**
 * It displays the recipes, displays the lists, toggles the lists, and filters the recipes.
 */
const init = () => {
	displayRecipes(recipes);
	displayLists(recipes, 'ingredients');
	displayLists(recipes, 'appliance');
	displayLists(recipes, 'ustensils');
	toggleLists();
	filter(recipes, 'ingredients');
	filter(recipes, 'appliance');
	filter(recipes, 'ustensils');
};
init();
