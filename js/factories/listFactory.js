import createElementDOM from '../utils/genericDom';

export const listFactory = (data) => {
	const { ingredients, ustensils, appliance } = data;

	const getIngredientsDOM = () => {
		let ingredientList = [];
		ingredients.forEach((elmt) => {
			ingredientList = createElementDOM(
				'li',
				`${elmt.ingredient}`,
				'ingredient'
			);
		});
		return ingredientList;
	};

	const getApplianceDOM = () => {
		const applianceList = createElementDOM('li', `${appliance}`, 'appliance');
		return applianceList;
	};

	const getUstensilDOM = () => {
		const ustensilList = createElementDOM('li', `${ustensils}`, 'ustensil');
		return ustensilList;
	};

	return { getIngredientsDOM, getApplianceDOM, getUstensilDOM };
};
export default listFactory;
