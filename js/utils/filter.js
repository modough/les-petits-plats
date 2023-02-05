import listFactory from '../factories/listFactory';
import { buildListDOM, displayLists, displayRecipes } from '../index';
import showTags from './showTags';


/**
 * It takes an element and a data array as arguments, then filters the data array based on the element
 * and returns a new array.
 * @param element - the value of the input field
 * @param data - the array of objects that I'm filtering through
 */

export const createFilteredList = (element, data) => {
	const filterList = data.filter(
		(recipe) =>
			recipe.appliance.toLowerCase().includes(element) ||
			recipe.ustensils
				.map((ustensil) => ustensil.toLowerCase())
				.includes(element) ||
			recipe.ingredients
				.map((ingredient) => ingredient.ingredient.toLowerCase())
				.includes(element)
	);
	displayRecipes(filterList);
	displayLists(filterList, 'ingredients');
	displayLists(filterList, 'appliance');
	displayLists(filterList, 'ustensils');
	console.log(filterList);
};
/**
 * It takes an input value, a data array, and a type, and then it creates a new list model, filters the
 * list, creates a new list model, and then builds the DOM.
 * @param inputValue - the value of the input field
 * @param data - the original data array
 * @param type - 'search' or 'tags'
 */
export const refreshSearchList = (inputValue, data, type) => {
	const model = listFactory(data, type);
	const newFlatArray = model.createFlatList();
	const filteredList = newFlatArray.filter(
		(entry) => (type && entry.toLowerCase().includes(inputValue))
	);
	const newListModel = listFactory(filteredList, type);
	const linkDOM = newListModel.getListDOM();
	buildListDOM(linkDOM, type);
	showTags(data, type);
};

/**
 * It filters the data based on the type of search (ingredients, appliance, ustensils) and displays the
 * results
 * @param data - the array of objects
 * @param type - the type of filter (ingredients, appliance, ustensils)
 */
export const filter = (data, type) => {
	const linkList = document.querySelectorAll(`li.${type}`);
	const searchInput = document.querySelector(`#${type}-search`);
	const mainSearch = document.querySelector('#mainSearch');

	//eventListeners
	linkList.forEach((elmt) => {
		elmt.addEventListener('click', (e) => {
			const inputValue = e.target.innerText.toLowerCase();
			createFilteredList(inputValue, data);
			// creating new clickable lists of filtered elements 
			showTags(data, 'ingredients');
			showTags(data, 'appliance');
			showTags(data, 'ustensils');
		});
	});

	searchInput.addEventListener('keyup', (e) => {
		const inputValue = e.target.value.toLowerCase();
		createFilteredList(inputValue, data);
		// creating new clickable lists of filtered elements 
		showTags(data, 'ingredients');
		showTags(data, 'appliance');
		showTags(data, 'ustensils');

	});

	// ----------------------first algorithm------------------------------

	mainSearch.addEventListener('keyup', (e) => {
		const inputValue = e.target.value.toLowerCase();
		const filterMainSearchList = data.filter(
			(recipe) =>
				recipe.name.toLowerCase().includes(inputValue) ||
				recipe.description.toLowerCase().includes(inputValue) ||
				recipe.ingredients
					.map((ingredient) => ingredient.ingredient.toLowerCase())
					.includes(inputValue)
		);
		displayRecipes(filterMainSearchList);
		// creating new clickable lists of filtered elements on advanced search
		displayLists(filterMainSearchList, 'ingredients');
		displayLists(filterMainSearchList, 'appliance');
		displayLists(filterMainSearchList, 'ustensils');
		showTags(data, 'ingredients');
		showTags(data, 'appliance');
		showTags(data, 'ustensils');
		// creating new lists of filtered elements 
		refreshSearchList(inputValue, data, type);
	});
	showTags(data, type);

};
export default filter;

