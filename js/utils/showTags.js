import createElementDOM from './genericDom';
import { displayRecipes } from '../index';

let inputValuesArray = [];

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

		/* Adding an event listener to the closeFont element. */
		closeTags(closeFont, elmt);
	};

	const closeTags = (closeFont, elmt) => {
		closeFont.addEventListener('click', (e) => {
			e.target.parentElement.style.display = 'none';
			elmt.style.display = 'block';
			const indexToRemove = inputValuesArray.indexOf(elmt.innerText.toLowerCase());
			inputValuesArray.splice(indexToRemove, 1);
			combinedTagsFunction(inputValuesArray);

		});
	};

	const combinedTagsFunction = (inputValuesArray) => {
		let filteredValues = [];
		for (let i = inputValuesArray.length; i--;) {
			const combinedList = data.filter(
				(recipe) =>
					recipe.appliance.toLowerCase().includes(inputValuesArray[i]) ||
					recipe.ustensils
						.map((ustensil) => ustensil.toLowerCase())
						.includes(inputValuesArray[i]) ||
					recipe.ingredients
						.map((ingredient) => ingredient.ingredient.toLowerCase())
						.includes(inputValuesArray[i])

			);
			filteredValues = [...new Set([...filteredValues, ...combinedList])];
			console.log(filteredValues);
			return filteredValues;

		};
		displayRecipes(filteredValues?.length ? filteredValues : data);
	};

	// show tags on click
	linkList.forEach((elmt) => {
		elmt.addEventListener('click', (e) => {
			const inputValue = e.target.innerText.toLowerCase();
			inputValuesArray.push(inputValue);
			openAndCloseTags(elmt, e);
			combinedTagsFunction(inputValuesArray);
		});
	});
};
export default showTags;
