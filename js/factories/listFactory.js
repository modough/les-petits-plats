import createElementDOM from '../utils/genericDom';

export const listFactory = (data) => {
	const { ingredients, appliance } = data;

	const getIngredientsDOM = () => {
		const spanIngredientsList = document.createElement('span');
		ingredients.forEach((elmt) => {
			const ingredientsList = createElementDOM(
				'li',
				`${elmt.ingredient}`,
				'ingredient'
			);
			spanIngredientsList.appendChild(ingredientsList);
		});
		return spanIngredientsList;
	};

	const getApplianceDOM = () => {
		const applianceList = createElementDOM('li', `${appliance}`, 'appliance');
		return applianceList;
	};

	const getUstensilDOM = () => {
		const spanUstensilList = document.createElement('span');
		data.forEach((elmt) => {
			const ustensilList = createElementDOM('li', `${elmt}`, 'ustensil');
			spanUstensilList.appendChild(ustensilList);
		});
		return spanUstensilList;
	};

	return { getIngredientsDOM, getApplianceDOM, getUstensilDOM };
};
export default listFactory;
