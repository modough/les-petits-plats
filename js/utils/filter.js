import listFactory from '../factories/listFactory';
import { buildListDOM, displayRecipes } from '../index';
import showTags from './showTags';

export const createFilterList = (element, data) => {
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

export const filter = (data, type) => {
	const linkList = document.querySelectorAll(`li.${type}`);
	const searchInput = document.querySelector(`#${type}-search`);
	/*const mainSearch = document.querySelector('#mainSearch');*/

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
			createFilterList(inputValue, data);
		});
	});

	searchInput.addEventListener('keyup', (e) => {
		const inputValue = e.target.value.toLowerCase();
		createFilterList(inputValue, data);
		// creating new lists of filtered elements 
		refreshList(inputValue);
	});

	// first algorithm
	/*mainSearch.addEventListener('keyup', (e) => {
		const inputValue = e.target.value.toLowerCase();
		createFilterList(inputValue, data);
		// creating new lists of filtered elements 
		refreshList(inputValue);
	});*/

	showTags(data, type);

};
export default filter;

