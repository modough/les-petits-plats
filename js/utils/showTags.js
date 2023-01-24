/* eslint-disable indent */
import createElementDOM from './genericDom';
import { displayRecipes } from '../index';


export const showTags = (data, type) => {
	const linkList = document.querySelectorAll(`li.${type}`);
	const popup = document.querySelector('#popup');

	const openAndCloseTags = (elmt, e) => {
		const tag = createElementDOM('li', '', `tag-${type}`);
		const paragraph = createElementDOM('p', `${e.target.innerText}`, `paragraph-${type}`);
		const closeFont = createElementDOM('i', '', 'far fa-circle-xmark');
		tag.appendChild(paragraph);
		tag.appendChild(closeFont);
		popup.appendChild(tag);
		popup.classList.add('active');
		elmt.style.display = 'none';


		//close tags
		closeTags(closeFont, elmt);
	};

	const closeTags = (closeFont, elmt) => {
		closeFont.addEventListener('click', (e) => {
			e.target.parentElement.style.display = 'none';
			elmt.style.display = 'block';
		});
	};
	const combinedFilter = (element, type) => {
		const combinedList = data.filter(
			(recipe) =>
				type && recipe.appliance.toLowerCase().includes(element) ||
				type && recipe.ustensils
					.map((ustensil) => ustensil.toLowerCase())
					.includes(element) ||
				type && recipe.ingredients
					.map((ingredient) => ingredient.ingredient.toLowerCase())
					.includes(element)
		);
		displayRecipes(combinedList);
	};

	// show tags on click
	linkList.forEach((elmt) => {
		elmt.addEventListener('click', (e) => {
			const inputValue = e.target.innerText.toLowerCase();
			openAndCloseTags(elmt, e);
			combinedFilter(inputValue, type);

		});
	});
};
export default showTags;
