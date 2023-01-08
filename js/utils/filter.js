import { displayRecipes, displayFilter } from '../index';

export const filter = (data, type) => {
	const list = document.querySelectorAll(`.${type}`);
	const searchInput = document.querySelector(`#${type}-search`);

	// functions for filtering
	const filterList = (elementValue) => {
		console.log(elementValue);
		const filteredArray = data.filter((recipe) => {
			if (type === 'ingredients') {
				return (
					recipe.ingredients.forEach((elmt) =>
						elmt.ingredient.toLowerCase().includes(elementValue)
					) ||
					recipe.description.toLowerCase().includes(elementValue) ||
					recipe.name.toLowerCase().includes(elementValue)
				);
			} else if (type === 'ustensils') {
				return (
					recipe.ustensils.includes(elementValue) ||
					recipe.description.toLowerCase().includes(elementValue) ||
					recipe.name.toLowerCase().includes(elementValue)
				);
			}
			return (
				recipe.appliance.toLowerCase().includes(elementValue) ||
				recipe.description.toLowerCase().includes(elementValue) ||
				recipe.name.toLowerCase().includes(elementValue)
			);
		});
		displayRecipes(filteredArray);
	};

	const filterInput = (elementValue) => {
		const filterAppliance = data.filter((recipe) => {
			if (type === 'appliance') {
				return recipe.appliance.toLowerCase().includes(elementValue);
			}
		});
		displayFilter(filterAppliance, 'appliance', false);

		const filterIngredients = data.filter((recipe) => {
			if (type === 'ingredients') {
				return recipe.ingredients.forEach((elmt) => {
					elmt.ingredient.toLowerCase().includes(elementValue);
				});
			}
		});
		displayFilter(filterIngredients, 'ingredients', true, 'ingredient');

		const filterUstensils = data.filter((recipe) => {
			if (type === 'ustensils') {
				return recipe.ustensils.forEach((elmt) => {
					elmt.toLowerCase().includes(elementValue);
				});
			}
		});
		displayFilter(filterUstensils, 'ustensils');
	};

	//eventListeners
	list.forEach((elmt) => {
		elmt.addEventListener('click', (e) => {
			const elementValue = e.target.innerHTML.toLowerCase();
			filterList(elementValue);
		});
	});
	searchInput.addEventListener('keyup', (e) => {
		const elementValue = e.target.value.toLowerCase();
		filterInput(elementValue);
	});
};
export default filter;
