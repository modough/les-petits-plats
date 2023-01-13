import listFactory from '../factories/listFactory';
import { displayRecipes, buildListDOM } from '../index';
import showPopups from './showPopups';

export const filter = (data, type) => {
	const linkList = document.querySelectorAll(`.${type}`);

	const searchInput = document.querySelector(`#${type}-search`);

	//eventListeners
	linkList.forEach((elmt) => {
		elmt.addEventListener('click', (e) => {
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
		});
	});

	searchInput.addEventListener('keyup', (e) => {
		const inputValue = e.target.value.toLowerCase();
		const model = listFactory(data, type);
		const arrayWithoutDuplicate = model.createFlatList();
		const filteredList = arrayWithoutDuplicate.filter(
			(entry) => (type && entry.toLowerCase().includes(inputValue))
		);
		const newListModel = listFactory(filteredList, type);
		const linkDom = newListModel.getListDOM();
		buildListDOM(linkDom, type);

	});

	showPopups(type);
};
export default filter;
