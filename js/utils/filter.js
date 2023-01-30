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
	console.log(filterList);
	displayRecipes(filterList);
};

export const filter = (data, type) => {
	const linkList = document.querySelectorAll(`li.${type}`);
	const searchInput = document.querySelector(`#${type}-search`);
	const mainSearch = document.querySelector('#mainSearch');



	// recipes filter function
	const refreshSearchList = (inputValue) => {
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
		});
	});

	searchInput.addEventListener('keyup', (e) => {
		const inputValue = e.target.value.toLowerCase();
		createFilteredList(inputValue, data);
		// creating new lists of filtered elements 
		refreshSearchList(inputValue);

	});

	// second algorithm

	mainSearch.addEventListener('keyup', (e) => {
		const inputValue = e.target.value.toLowerCase();
		//createFilteredList(inputValue, data);
		let mainSearchArray = [];
		const mainSearchFunction = () => {

			for (let i = 0; i < data.length; i++) {

				if (data[i].name.toLowerCase().includes(inputValue) ||
					data[i].description.toLowerCase().includes(inputValue)) {
					mainSearchArray.push(data[i]);
				}
				for (let j in data[i].ingredients) {
					const ingredientsData = data[i].ingredients[j]
						.ingredient.toLowerCase();
					if (ingredientsData
						.includes(inputValue)) {
						mainSearchArray.push(data[i]);
					};
				};

			};

			return mainSearchArray;

		};

		const mainSearchFunctionList = mainSearchFunction();
		displayRecipes(mainSearchFunctionList);


		// creating new lists of filtered elements 
		refreshSearchList(inputValue);

	});

	showTags(data, type);

};
export default filter;

