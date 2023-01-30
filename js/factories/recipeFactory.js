import createElementDOM from '../utils/genericDom';
// factory for default recipes
/**
 * It takes an array of objects and returns a DOM element with the data from the array of objects
 * @param data - an array of objects
 * @returns An object with a function getRecipeCardDOM
 */
export const recipeFactory = (data) => {
	const getRecipeCardDOM = () => {
		const recipesParentDiv = createElementDOM('div', '', 'recipesParentDiv');
		const noListDiv = createElementDOM('div', `Aucune recette ne correspond à votre critère… vous pouvez
			chercher « tarte aux pommes », « poisson », etc.`, 'noListDiv');
		data.forEach((item) => {
			const article = createElementDOM('article', '', 'card');

			const imgDiv = createElementDOM('div', '', 'cardImg');
			const cardDescription = createElementDOM('div', '', 'cardDescription');
			const cardDescriptionTop = createElementDOM(
				'div',
				'',
				'cardDescriptionTop'
			);
			const cardTitle = createElementDOM('h3', `${item.name}`, 'cardTitle');
			const cardTiming = createElementDOM('span', '', 'cardTiming');
			const clockFont = createElementDOM('i', '', 'far fa-clock');
			const timingParagraph = createElementDOM('p', `${item.time} min`, '');

			const cardDescriptionBottom = createElementDOM(
				'div',
				'',
				'cardDescriptionBottom'
			);
			const ingredientsList = createElementDOM('ul', '', 'cardIngredients');

			const recipeDescription = createElementDOM(
				'p',
				`${item.description}`,
				'cardRecipe'
			);
			item.ingredients.forEach((elmt) => {
				const ingredientsLi = createElementDOM('li', '', '');
				const ingredientName = createElementDOM(
					'p',
					`${elmt.ingredient}:`,
					'ingredientName'
				);
				const ingredientQty = createElementDOM(
					'p',
					elmt.quantity ? `${elmt.quantity}` : null,
					'ingredientQuantity'
				);
				const ingredientUnit = createElementDOM(
					'p',
					elmt.unit ? `${elmt.unit.slice(0, 4)}` : null,
					'ingredientUnit'
				);
				ingredientsLi.appendChild(ingredientName);
				ingredientsLi.appendChild(ingredientQty);
				ingredientsLi.appendChild(ingredientUnit);
				ingredientsList.appendChild(ingredientsLi);
			});
			article.appendChild(imgDiv);
			article.appendChild(cardDescription);
			cardDescription.appendChild(cardDescriptionTop);
			cardDescription.appendChild(cardDescriptionBottom);
			cardDescriptionTop.appendChild(cardTitle);
			cardDescriptionTop.appendChild(cardTiming);
			cardTiming.appendChild(clockFont);
			cardTiming.appendChild(timingParagraph);
			cardDescriptionBottom.appendChild(ingredientsList);
			cardDescriptionBottom.appendChild(recipeDescription);
			recipesParentDiv.appendChild(article);
			recipesParentDiv.appendChild(noListDiv);
		});
		return recipesParentDiv;
	};
	return { getRecipeCardDOM };
};
export default recipeFactory;
