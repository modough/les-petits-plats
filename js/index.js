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

export const displayFilter = (
	data,
	type,
	isNested = true,
	attribute = null
) => {
	const parentDiv = document.querySelector(`.${type}-results-list`);

	parentDiv.innerHTML = '';
	const flatArray = data
		.map((recipe) => {
			if (isNested) {
				return recipe[type].map((i) => (attribute ? i[attribute] : i));
			}
			return recipe[type];
		})
		.flat();

	const arrayWithoutDuplicate = [...new Set(flatArray)];

	const model = listFactory(arrayWithoutDuplicate, type);
	const cardDOM = model.getListDOM();
	parentDiv.appendChild(cardDOM);
};

const init = () => {
	displayRecipes(recipes);
	displayFilter(recipes, 'ingredients', true, 'ingredient');
	displayFilter(recipes, 'appliance', false);
	displayFilter(recipes, 'ustensils');
	toggleLists();
	filter(recipes, 'ingredients');
	filter(recipes, 'appliance');
	filter(recipes, 'ustensils');
};
init();
