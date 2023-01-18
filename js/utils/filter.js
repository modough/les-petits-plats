import listFactory from '../factories/listFactory';
import { buildListDOM, displayRecipes } from '../index';
import showPopups from './showPopups';

export const filter = (data, type) => {
	const linkList = document.querySelectorAll(`.${type}`);
	const searchInput = document.querySelector(`#${type}-search`);
	const mainSearch = document.querySelector('#mainSearch');

	// recipes filter function
	const createFilterList = (element) => {
		const filterList = data.filter(
			(recipe) =>
				recipe.description.toLowerCase().includes(element) ||
				recipe.name.toLowerCase().includes(element) ||
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
	const filterOnclickLink = (e) => {
		const elementValue = e.target.innerText.toLowerCase();
		createFilterList(elementValue);
	};

	// filter while typing elements on input with tags
	const filterWithInput = (e) => {
		//default lists of all elements for filter recipes
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
		showPopups(type);
	};

	// filter while typing on main search bar
	const filterOnMainSearchBar = (e) => {
		const inputValue = e.target.value;
		createFilterList(inputValue);
	};

	//eventListeners
	linkList.forEach((elmt) => {
		elmt.addEventListener('click', (e) => {
			filterOnclickLink(e);
		});
	});
	searchInput.addEventListener('keyup', (e) => {
		filterWithInput(e);
	});
	mainSearch.addEventListener('keyup', (e) => {
		filterOnMainSearchBar(e);
	});
	showPopups(type);


};
export default filter;
