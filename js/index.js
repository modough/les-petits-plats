import recipes from './data/recipes';
import recipeFactory from './factories/recipeFactory';
import { listFactory } from './factories/listFactory';
import toggleLists from './utils/toggleLists';

// function to avoid duplicate elements in list
let newApplianceList = [];

let uniqueAppliance = {};

const noDuplicateAppliance = async () => {
	for (let i in recipes) {
		const objet = recipes[i]['appliance'];

		uniqueAppliance[objet] = recipes[i];
	}
	for (let i in uniqueAppliance) {
		newApplianceList.push(uniqueAppliance[i]);
	}
	return newApplianceList;
};

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
	const newApplianceList = await noDuplicateAppliance();
	recipes.forEach((recipe) => {
		displayRecipes(recipe);
		displayFilterIngredients(recipe);
		displayFilterUstensils(recipe);
	});
	newApplianceList.forEach((list) => {
		displayFilterAppliance(list);
	});
};
init();
