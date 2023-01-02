import recipes from './recipes';

// function to avoid duplicate elements in list
let newApplianceList = [];
let newUstensilsList = [];
let newIngredientsList = [];
let uniqueAppliance = [];
let IngredientElement = [];
let ustensilElement = [];

export const noDuplicateIngredients = async () => {
	for (let i in recipes) {
		const unique = recipes[i].ingredients;
		for (let i in unique) {
			IngredientElement.push(unique[i].ingredient.toLowerCase());
			newIngredientsList = [...new Set(IngredientElement)];
		}
	}
	return newIngredientsList;
};

export const noDuplicateAppliance = async () => {
	for (let i in recipes) {
		const objet = recipes[i].appliance;
		uniqueAppliance[objet] = recipes[i];
	}
	for (let i in uniqueAppliance) {
		newApplianceList.push(uniqueAppliance[i]);
	}
	return newApplianceList;
};

export const noDuplicateUstensils = async () => {
	for (let i in recipes) {
		const unique = recipes[i].ustensils;
		for (let i in unique) {
			ustensilElement.push(unique[i].toLowerCase());
			newUstensilsList = [...new Set(ustensilElement)];
		}
	}

	return newUstensilsList;
};
