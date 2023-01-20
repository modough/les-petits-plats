import listFactory from '../factories/listFactory';
import { buildListDOM, displayRecipes } from '../index';
import showTags from './showTags';

export const filter = (data, type) => {
	const linkList = document.querySelectorAll(`li.${type}`);
	const searchInput = document.querySelector(`#${type}-search`);
	const mainSearch = document.querySelector('#mainSearch');

	// recipes filter function
	const createFilterList = (element) => {

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

	};

	// filter while clicking on the elements
	//const filterOnclickLink = (e) => {

	//};

	// filter while typing elements on input with tags
	//const filterWithInput = (e) => {
	//default lists of all elements for filter recipes

	//};

	// filter while typing on main search bar
	//const filterOnMainSearchBar = (e) => {

	//};

	//eventListeners
	linkList.forEach((elmt) => {
		elmt.addEventListener('click', (e) => {
			const inputValue = e.target.innerText.toLowerCase();
			createFilterList(inputValue);
		});
	});

	searchInput.addEventListener('keyup', (e) => {
		const inputValue = e.target.value.toLowerCase();
		createFilterList(inputValue);

		// creating new lists of filtered elements 
		const model = listFactory(data, type);
		const newFlatArray = model.createFlatList();
		const filteredList = newFlatArray.filter(
			(entry) => (type && entry.toLowerCase().includes(inputValue))
		);
		const newListModel = listFactory(filteredList, type);
		const linkDOM = newListModel.getListDOM();
		buildListDOM(linkDOM, type);
		showTags(type);
	});

	mainSearch.addEventListener('keyup', (e) => {
		const inputValue = e.target.value;
		createFilterList(inputValue);
	});

	showTags(type);

};
export default filter;
