import createElementDOM from '../genericDom';

export const ingredientsFactory = (data) => {
	const { ingredients } = data;

	const getIngredientsDOM = () => {
		ingredients.forEach((elmt) => {
			const ingredientsList = createElementDOM(
				'li',
				`${elmt.ingredient}`,
				'ingredient'
			);
			console.log(ingredientsList);
			return ingredientsList;
		});
	};
	return { getIngredientsDOM };
};
export default ingredientsFactory;
