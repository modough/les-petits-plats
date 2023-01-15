import recipeFactory from './factories/recipeFactory';
import { listFactory } from './factories/listFactory';
import toggleLists from './utils/toggleLists';
import recipes from './data/recipes';
import filter from './utils/filter';

//display all recipes
export const displayRecipes = (data) => {
	const section = document.querySelector('.recipesCards');
	section.innerHTML = '';
	const dataRecipes = data.map((elmt) => {
		return elmt;
	});
	const recipeModel = recipeFactory(dataRecipes);
	const recipeCardDOM = recipeModel.getRecipeCardDOM();
	section.appendChild(recipeCardDOM);
};


//display all lists
export const displayFilter = (data,
	type,
) => {
	const parentDiv = document.querySelector(`.${type}-results-list`);
	const model = listFactory(data, type);
	model.createFlatList();
	const linkDOM = model.getListDOM();
	parentDiv.innerHTML = '';
	parentDiv.appendChild(linkDOM);
};

const init = () => {
	displayRecipes(recipes);
	displayFilter(recipes, 'ingredients');
	displayFilter(recipes, 'appliance');
	displayFilter(recipes, 'ustensils');
	toggleLists();
	filter(recipes, 'ingredients');
	filter(recipes, 'appliance');
	filter(recipes, 'ustensils');
};
init();
