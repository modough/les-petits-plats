import { displayRecipes, displayFilter } from '../index';
import createElementDOM from './genericDom';

export const filter = (data, type) => {
	const list = document.querySelectorAll(`.${type}`);
	const searchInput = document.querySelector(`#${type}-search`);
	const popup = document.querySelector(`.popup-${type}`);
	const closeFont = createElementDOM('i', '', 'fas fa-close');

	//close popup
	closeFont.addEventListener('click', () => {
		popup.classList.remove('active');
	});

	//eventListeners
	list.forEach((elmt) => {
		elmt.addEventListener('click', (e) => {
			popup.classList.add('active');
			popup.textContent = e.target.innerText;
			popup.appendChild(closeFont);
			const elementValue = e.target.innerText.toLowerCase();
			const filterList = data.filter(
				(recipe) =>
					recipe.description.toLowerCase().includes(elementValue) ||
					recipe.name.toLowerCase().includes(elementValue) ||
					recipe.appliance.toLowerCase().includes(elementValue) ||
					recipe.ustensils.includes(elementValue) ||
					recipe.ingredients
						.map((ingredient) => ingredient.ingredient.toLowerCase())
						.includes(elementValue)
			);
			displayRecipes(filterList);
		});
	});

	searchInput.addEventListener('keyup', (e) => {
		const inputValue = e.target.value.toLowerCase();
		console.log(inputValue);
		const filterInput = data.filter(
			(recipe) =>
				recipe.ustensils
					.map((elmt) => elmt.toLowerCase())
					.includes(inputValue) ||
				recipe.appliance.toLowerCase().includes(inputValue) ||
				recipe.ingredients
					.map((elmt) => elmt.ingredient.toLowerCase())
					.includes(inputValue)
		);
		console.log(filterInput);
		displayFilter(filterInput, 'appliance', false);
		displayFilter(filterInput, 'ustensils');
		displayFilter(filterInput, 'ingredients', true, 'ingredient');
	});
};
export default filter;
