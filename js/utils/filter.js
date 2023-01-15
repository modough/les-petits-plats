import listFactory from '../factories/listFactory';
import { displayRecipes } from '../index';
import showPopups from './showPopups';

export const filter = (data, type) => {
	const linkList = document.querySelectorAll(`.${type}`);
	const searchInput = document.querySelector(`#${type}-search`);

	// filter function while typing elements on input
	const filterWithInput = (e) => {
		//default lists of all elements without filter
		const inputValue = e.target.value.toLowerCase();
		const parentDiv = document.querySelector(`.${type}-results-list`);
		parentDiv.innerHTML = '';
		const model = listFactory(data, type);

		// creating new lists of filtered elements 
		const arrayWithoutDuplicate = model.createFlatList();
		const filteredList = arrayWithoutDuplicate.filter(
			(entry) => (type && entry.toLowerCase().includes(inputValue))
		);
		const newListModel = listFactory(filteredList, type);
		const linkDOM = newListModel.getListDOM();
		parentDiv.appendChild(linkDOM);
	};

	// filter function while clicking on the elements
	const filterOnclickLink = (e) => {
		const elementValue = e.target.innerText.toLowerCase();
		const filterList = data.filter(
			(recipe) =>
				recipe.description.toLowerCase().includes(elementValue) ||
				recipe.name.toLowerCase().includes(elementValue) ||
				recipe.appliance.toLowerCase().includes(elementValue) ||
				recipe.ustensils.includes(elementValue) ||
				recipe.ingredients
					.map((ingredient) => ingredient.ingredient.toLowerCase())
					.includes(elementValue)
		);
		displayRecipes(filterList);
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

	showPopups(type);
};
export default filter;
