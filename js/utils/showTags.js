import createElementDOM from './genericDom';
import { displayRecipes } from '../index';



/* The above code is a function that takes in two arguments, the first being the data and the second
being the type.
The function is then used to create tags that are displayed on the page. */
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

	/**
	 * It takes two arguments, the first being the close button and the second being the element that
	 * contains the text. 
	 * The combinedTagsFunction is also called when the user clicks the "Add" button,
	 * @param closeFont - the font awesome icon that is used to close the tag
	 * @param elmt - the element that is being passed in.
	 */
	const closeTags = (closeFont, elmt) => {
		closeFont.addEventListener('click', (e) => {
			e.target.parentElement.style.display = 'none';
			elmt.style.display = 'block';
			const indexToRemove = inputValuesArray.indexOf(elmt.innerText.toLowerCase());
			inputValuesArray.splice(indexToRemove, 1);
			combinedTagsFunction(inputValuesArray, type);
		});
	};

	/**
	 * It takes an array of strings, and checks if each string is included in the ingredients, appliance
	 * or ustensils of each recipe. If it is, it adds the recipe to the filteredValues array.
	 * @param inputValuesArray - an array of strings that are the values of the input field
	 */
	const combinedTagsFunction = (inputValuesArray) => {
		let filteredValues = [];
		data.forEach(element => {
			const hasAllElements = inputValuesArray
				.every(elem => element.ingredients
					.map((ingredient) => ingredient.ingredient.toLowerCase())
					.includes(elem) ||
					element.appliance.toLowerCase()
						.includes(elem) ||
					element.ustensils
						.map((ustensil) => ustensil.toLowerCase())
						.includes(elem));

			if (hasAllElements) {
				filteredValues = [...new Set([...filteredValues, element])];
				console.log(filteredValues);
			}
		});
		displayRecipes(filteredValues?.length ? filteredValues : []);
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
