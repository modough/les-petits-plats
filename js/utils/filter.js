import { displayRecipes, displayFilter } from '../index';

export const filter = (data, type) => {
	const list = document.querySelectorAll(`.${type}`);
	const searchInput = document.querySelector(`#${type}-search`);

	// functions for filtering
	const filterList = (elementValue) => {
		displayRecipes(
			data.filter(
				(recipe) =>
					recipe.description.toLowerCase().includes(elementValue) ||
					recipe.name.toLowerCase().includes(elementValue) ||
					recipe.appliance.toLowerCase().includes(elementValue) ||
					recipe.ustensils.includes(elementValue) ||
					recipe.ingredients.map((ingredient) => {
						ingredient.ingredient.toLowerCase().includes(elementValue);
						console.log(ingredient.ingredient);
						console.log(elementValue);
					})
			)
		);
		console.log(displayRecipes);
		/*
		const filteredArray = data.filter((recipe) => {
			if (type === 'ingredients') {
				recipe.ingredients.includes((elmt) => {
					console.log(elmt.ingredient);
					console.log(elementValue);
					return elmt.ingredient.toLowerCase().includes(elementValue);
				});
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
		console.log(filteredArray);*/
	};

	const filterInput = (inputValue) => {
		const filterAppliance = data.filter((recipe) => {
			if (type === 'appliance') {
				return recipe.appliance.toLowerCase().includes(inputValue);
			}
		});
		displayFilter(filterAppliance, 'appliance', false);

		const filterIngredients = data.filter((recipe) => {
			if (type === 'ingredients') {
				let ingredientToLowerCase;
				recipe.ingredients.forEach((elmt) => {
					ingredientToLowerCase = elmt.ingredient.toLowerCase();
				});
				return ingredientToLowerCase.includes(inputValue);
			}
		});
		displayFilter(filterIngredients, 'ingredients', true, 'ingredient');

		const filterUstensils = data.filter((recipe) => {
			if (type === 'ustensils') {
				let ustensilsToLowerCase;
				recipe.ustensils.forEach((elmt) => {
					ustensilsToLowerCase = elmt.toLowerCase();
				});
				return ustensilsToLowerCase.includes(inputValue);
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
		const inputValue = e.target.value.toLowerCase();
		filterInput(inputValue);
	});
};
export default filter;
