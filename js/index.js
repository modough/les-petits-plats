import recipeFactory from './factories/recipeFactory';
import { listFactory } from './factories/listFactory';
import toggleLists from './utils/toggleLists';
import recipes from './data/recipes';
import filter from './utils/filter';

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


//reinject new list
export const buildListDOM = (element, type) => {
	const parentDiv = document.querySelector(`.${type}-results-list`);
	parentDiv.innerHTML = '';
	parentDiv.appendChild(element);
};

export const displayFilter = (data,
	type,
) => {
	const model = listFactory(data, type);
	model.createFlatList();
	const linkDOM = model.getListDOM();
	buildListDOM(linkDOM, type);
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
