import createElementDOM from './genericDom';
import { displayRecipes } from '../index';


/* The above code is a function that takes two arguments, the first is an array of objects, the second
is a string. The function loops through the array of objects and filters the array based on the
string. The function then returns the filtered array. */
let inputValuesArray = [];

export const showTags = (data, type) => {
	const linkList = document.querySelectorAll(`li.${type}`);
	const popup = document.querySelector('#popup');

	/**
	 * It creates a new element, appends it to the popup element, and adds an event listener to the
	 * closeFont element.
	 * @param elmt - The element that is being clicked on.
	 * @param e - The event object.
	 */
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
	 * It takes two arguments, the first is a close button, the second is the element that the close
	 * button is attached to. When the close button is clicked, the element that the close button is
	 * attached to is hidden, and the close button is hidden. The function also removes the value of the
	 * element that the close button is attached to from an array, and then runs a function that filters
	 * the results based on the values in the array.
	 * @param closeFont - the font awesome icon that is used to close the tag
	 * @param elmt - the element that was clicked on
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
	 * It filters the data array based on the input values and displays the filtered data
	 * @param inputValuesArray - an array of strings that are the values of the input fields
	 * @param type - the type of filter (appliance, ustensils, ingredients)
	 */
	const combinedTagsFunction = (inputValuesArray, type) => {
		let filteredValues = [];
		for (let i in inputValuesArray) {
			filteredValues = data.filter(
				(recipe) =>
					type && recipe.appliance.toLowerCase().includes(inputValuesArray[i]) ||
					type && recipe.ustensils
						.map((ustensil) => ustensil.toLowerCase())
						.includes(inputValuesArray[i]) ||
					type && recipe.ingredients
						.map((ingredient) => ingredient.ingredient.toLowerCase())
						.includes(inputValuesArray[i])
			);

		};
		displayRecipes(filteredValues);
	};

	// show tags on click
	linkList.forEach((elmt) => {
		elmt.addEventListener('click', (e) => {
			const inputValue = e.target.innerText.toLowerCase();
			inputValuesArray.push(inputValue);
			console.log(inputValuesArray);
			openAndCloseTags(elmt, e);
			combinedTagsFunction(inputValuesArray, type);
		});
	});
};
export default showTags;
