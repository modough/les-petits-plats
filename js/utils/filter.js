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
};
//  filter function for advanced search lists
export const refreshSearchList = (inputValue, data, type) => {
	const model = listFactory(data, type);
	const newFlatArray = model.createFlatList();
	const filteredList = newFlatArray.filter(
		(entry) => (type && entry.toLowerCase().includes(inputValue))
	);
	const newListModel = listFactory(filteredList, type);
	const linkDOM = newListModel.getListDOM();
	buildListDOM(linkDOM, type);
	showTags(data, 'ingredients');
	showTags(data, 'appliance');
	showTags(data, 'ustensils');

};
export const filter = (data, type) => {
	const linkList = document.querySelectorAll(`li.${type}`);
	const searchInput = document.querySelector(`#${type}-search`);
	const mainSearch = document.querySelector('#mainSearch');

	//eventListeners
	linkList.forEach((elmt) => {
		elmt.addEventListener('click', (e) => {
			const inputValue = e.target.innerText.toLowerCase();
			createFilteredList(inputValue, data, type);
			refreshSearchList(inputValue, data, type);
		});
	});

	searchInput.addEventListener('keyup', (e) => {
		const inputValue = e.target.value.toLowerCase();
		createFilteredList(inputValue, data, type);
		// creating new lists of filtered elements 
		refreshSearchList(inputValue, data, type);
	});

	// -------------------------second algorithm--------------------------------

	mainSearch.addEventListener('keyup', (e) => {
		const inputValue = e.target.value.toLowerCase();
		let mainSearchArray = [];
		const mainSearchFunction = () => {
			for (let recipe of data) {
				if (recipe.name.toLowerCase().includes(inputValue) ||
					recipe.description.toLowerCase().includes(inputValue)) {
					mainSearchArray.push(recipe);
					mainSearchArray = [...new Set(mainSearchArray)];
				}
				for (let element of recipe.ingredients) {
					const ingredientsData = element
						.ingredient.toLowerCase();
					if (ingredientsData
						.includes(inputValue)) {
						mainSearchArray.push(recipe);
						mainSearchArray = [...new Set(mainSearchArray)];
					};
				};
			};
			return mainSearchArray;
		};

		const mainSearchFunctionList = mainSearchFunction();
		if (inputValue.length > 2 || inputValue.length === 0) {
			displayRecipes(mainSearchFunctionList);
		}

	});

	showTags(data, type);

};
export default filter;

