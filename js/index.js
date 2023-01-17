import recipeFactory from './factories/recipeFactory';
import { listFactory } from './factories/listFactory';
import toggleLists from './utils/toggleLists';
import recipes from './data/recipes';
import filter from './utils/filter';

//display all recipes
export const displayRecipes = (data) => {
	const recipeModel = recipeFactory(data);
	const recipeCardDOM = recipeModel.getRecipeCardDOM();
	buildRecipeCardDOM(recipeCardDOM);
};
const buildRecipeCardDOM = (element) => {
	const section = document.querySelector('.recipesCards');
	section.innerHTML = '';
	section.appendChild(element);
};


//display all lists
export const displayLists = (data, type) => {
	const listModel = listFactory(data, type);
	listModel.createFlatList();
	const linkDOM = listModel.getListDOM();
	buildListDOM(linkDOM, type);
};
export const buildListDOM = (element, type) => {
	const parentDiv = document.querySelector(`.${type}-results-list`);
	parentDiv.innerHTML = '';
	parentDiv.appendChild(element);
};

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
