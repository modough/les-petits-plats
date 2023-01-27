import listFactory from '../factories/listFactory';
import { buildListDOM, displayRecipes } from '../index';
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
			recipe.name.toLowerCase().includes(element) ||
			recipe.description.toLowerCase().includes(element) ||
			(recipe.appliance.toLowerCase().includes(element) ||
				recipe.ustensils
					.map((ustensil) => ustensil.toLowerCase())
					.includes(element) ||
				recipe.ingredients
					.map((ingredient) => ingredient.ingredient.toLowerCase())
					.includes(element))
	);
	displayRecipes(filterList);
};

/**
 * It takes a list of data, and a type of data, and creates a list of tags that can be used to filter
 * the data. 
 * 
 * The function is called in the main.js file, and the data is passed in from the data.js file. 
 * 
 * The function is called like this: 
 * 
 * filter(data, 'recipes');
 * 
 * The data is an array of objects, and the type is a string. 
 * 
 * The function creates a list of tags, and then adds event listeners to the tags. 
 * 
 * When a tag is clicked, the function creates a new list of data that matches the tag. 
 * 
 * The function also creates a search box, and when the user types in the search box, the function
 * creates a new list of data that matches the search. 
 * 
 * The function also creates a list of
 * @param data - an array of objects
 * @param type - the type of data you want to filter (recipes, ingredients, etc.)
 */
export const filter = (data, type) => {
	const linkList = document.querySelectorAll(`li.${type}`);
	const searchInput = document.querySelector(`#${type}-search`);
	//const mainSearch = document.querySelector('#mainSearch');

	// recipes filter function
	const refreshList = (inputValue) => {
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

	//eventListeners
	linkList.forEach((elmt) => {
		elmt.addEventListener('click', (e) => {
			const inputValue = e.target.innerText.toLowerCase();
			createFilteredList(inputValue, data);
			refreshList(inputValue);
		});
	});

	searchInput.addEventListener('keyup', (e) => {
		const inputValue = e.target.value.toLowerCase();
		createFilteredList(inputValue, data);
		// creating new lists of filtered elements 
		refreshList(inputValue);

	});

	// first algorithm
	//mainSearch.addEventListener('keyup', (e) => {
	//const inputValue = e.target.value.toLowerCase();
	//createFilterList(inputValue, data);
	// creating new lists of filtered elements 
	//refreshList(inputValue);
	//});

	showTags(data, type);

};
export default filter;

