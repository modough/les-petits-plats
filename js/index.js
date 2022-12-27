import recipes from './data/recipes';
import recipeFactory from './factory';
import applianceFactory from './utils/filter/filterAppliance';
import { ingredientsFactory } from './utils/filter/filterIngredient';
import ustensilFactory from './utils/filter/filterUstensil';

const displayIngredients = async (data) => {
	const section = document.querySelector('.recipesCards');
	const recipeModel = recipeFactory(data);
	const recipeCardDOM = recipeModel.getRecipeCardDOM();
	section.appendChild(recipeCardDOM);
};
const displayFilterIngredients = async (data) => {
	const parentDiv = document.querySelector('.ingredients-results-list');
	const ingredientModel = ingredientsFactory(data);
	const ingredientCardDOM = ingredientModel.getIngredientsDOM();
	parentDiv.appendChild(ingredientCardDOM);
};
const displayFilterAppliance = async (data) => {
	const parentDiv = document.querySelector('.appareils-results-list');
	const applianceModel = applianceFactory(data);
	const applianceCardDOM = applianceModel.getApplianceDOM();
	parentDiv.appendChild(applianceCardDOM);
};
const displayFilterUstensils = async (data) => {
	const parentDiv = document.querySelector('.ustensiles-results-list');
	const ustensilsModel = ustensilFactory(data);
	const ustensilsCardDOM = ustensilsModel.getUstensilDOM();
	parentDiv.appendChild(ustensilsCardDOM);
};
const init = async () => {
	recipes.forEach((recipe) => {
		displayIngredients(recipe);
		displayFilterIngredients(recipe);
		displayFilterAppliance(recipe);
		displayFilterUstensils(recipe);
	});
};
init();
