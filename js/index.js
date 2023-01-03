import recipeFactory from './factories/recipeFactory';
import { listFactory } from './factories/listFactory';
import toggleLists from './utils/toggleLists';
import {
	noDuplicateIngredients,
	noDuplicateAppliance,
	noDuplicateUstensils,
} from './data/noDuplicateList';
import recipes from './data/recipes';
import filter from './utils/filter';
const newIngredientsList = await noDuplicateIngredients();
const newApplianceList = await noDuplicateAppliance();
const newUstensilsList = await noDuplicateUstensils();

const displayRecipes = async (data) => {
	const section = document.querySelector('.recipesCards');
	const recipeModel = recipeFactory(data);
	const recipeCardDOM = recipeModel.getRecipeCardDOM();
	section.appendChild(recipeCardDOM);
};

const displayFilterIngredients = async (data) => {
	const parentDiv = document.querySelector('.ingredients-results-list');
	const ingredientModel = listFactory(data);
	const ingredientCardDOM = ingredientModel.getIngredientsDOM();
	parentDiv.appendChild(ingredientCardDOM);
};

const displayFilterAppliance = async (data) => {
	const parentDiv = document.querySelector('.appareils-results-list');
	const applianceModel = listFactory(data);
	const applianceCardDOM = applianceModel.getApplianceDOM();
	parentDiv.appendChild(applianceCardDOM);
};
const displayFilterUstensils = async (data) => {
	const parentDiv = document.querySelector('.ustensiles-results-list');
	const ustensilsModel = listFactory(data);
	const ustensilsCardDOM = ustensilsModel.getUstensilDOM();
	parentDiv.appendChild(ustensilsCardDOM);
};

const init = async () => {
	toggleLists();
	displayFilterIngredients(newIngredientsList);
	displayFilterUstensils(newUstensilsList);
	newApplianceList.forEach((list) => {
		displayFilterAppliance(list);
	});
	recipes.forEach((recipe) => {
		displayRecipes(recipe);
	});
	filter();
};
init();
