import { displayRecipes } from '../index';
import recipes from '../data/recipes';

export const filter = () => {
	const listIngredients = document.querySelectorAll('.ingredients');
	const listAppliances = document.querySelectorAll('.appliance');
	const listUstensils = document.querySelectorAll('.ustensils');
	listIngredients.forEach((elmt) => {
		elmt.addEventListener('click', (e) => {
			const elementValue = e.target.innerHTML.toLowerCase();

			const filteredArray = recipes.filter((recipe) => {
				return (
					recipe.ingredients.forEach((elmt) =>
						elmt.ingredient.toLowerCase().includes(elementValue)
					) ||
					recipe.description.toLowerCase().includes(elementValue) ||
					recipe.name.toLowerCase().includes(elementValue)
				);
			});
			displayRecipes(filteredArray);
		});
	});
	listAppliances.forEach((elmt) => {
		elmt.addEventListener('click', (e) => {
			const elementValue = e.target.innerHTML.toLowerCase();
			const filteredArray = recipes.filter((recipe) => {
				return (
					recipe.appliance.toLowerCase().includes(elementValue) ||
					recipe.description.toLowerCase().includes(elementValue) ||
					recipe.name.toLowerCase().includes(elementValue)
				);
			});
			displayRecipes(filteredArray);
		});
	});
	listUstensils.forEach((elmt) => {
		elmt.addEventListener('click', (e) => {
			const elementValue = e.target.innerHTML.toLowerCase();
			console.log(elementValue);
			const filteredArray = recipes.filter((recipe) => {
				return (
					recipe.ustensils.includes(elementValue) ||
					recipe.description.toLowerCase().includes(elementValue) ||
					recipe.name.toLowerCase().includes(elementValue)
				);
			});
			console.log(filteredArray);
			displayRecipes(filteredArray);
		});
	});
};
export default filter;
