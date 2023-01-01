import recipes from '../data/recipes';

// function to avoid duplicate elements in list
let newApplianceList = [];
let uniqueAppliance = {};
let element = [];
let newUstensilsList = {};

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
			element.push(unique[i].toLowerCase());
			newUstensilsList = [...new Set(element)];
		}
	}
	console.log(newUstensilsList);
	return newUstensilsList;
};
