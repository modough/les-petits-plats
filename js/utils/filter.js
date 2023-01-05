import { displayRecipes } from '../index';
import recipes from '../data/recipes';

export const filter = () => {
	const listElement = document.querySelectorAll('.ingredients');

	/*const name = document.querySelectorAll('.ingredientName');*/
	listElement.forEach((elmt) => {
		elmt.addEventListener('click', (e) => {
			const elementValue = e.target.innerHTML.toLowerCase();

			const filteredArray = recipes.filter((recipe) => {
				return (
					recipe.ingredients.forEach((elmt) =>
						elmt.ingredient.includes(elementValue)
					) ||
					recipe.description.includes(elementValue) ||
					recipe.name.includes(elementValue)
				);
			});
			console.log(filteredArray);
			displayRecipes(filteredArray);

			/*for (let i = 0; i < name.length; i++) {
				const nameValue = name[i].innerHTML.toLowerCase().split(':').join(' ');

				if (nameValue.includes(elementValue)) {
					const section = document.querySelector('.recipesCards');

					const newDiv =
						name[i].parentElement.parentElement.parentElement.parentElement
							.parentElement.innerHTML;

					section.innerHTML = `<article class='card'>${newDiv}</article>`;
				}
			}*/
		});
	});
};
export default filter;
