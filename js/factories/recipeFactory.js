import createElementDOM from '../utils/genericDom';
export const recipeFactory = (data) => {
	const { name, time, description, ingredients } = data;
	const getRecipeCardDOM = () => {
		const article = createElementDOM('article', '', 'card');
		const imgDiv = createElementDOM('div', '', 'cardImg');
		const cardDescription = createElementDOM('div', '', 'cardDescription');

		const cardDescriptionTop = createElementDOM(
			'div',
			'',
			'cardDescriptionTop'
		);
		const cardTitle = createElementDOM('h3', `${name}`, 'cardTitle');
		const cardTiming = createElementDOM('span', '', 'cardTiming');
		const clockFont = createElementDOM('i', '', 'far fa-clock');
		const timingParagraph = createElementDOM('p', `${time} min`, '');

		const cardDescriptionBottom = createElementDOM(
			'div',
			'',
			'cardDescriptionBottom'
		);
		const ingredientsList = createElementDOM('ul', '', 'cardIngredients');

		const recipeDescription = createElementDOM(
			'p',
			`${description}`,
			'cardRecipe'
		);

		ingredients.forEach((elmt) => {
			const ingredientsLi = createElementDOM('li', '', '');
			const ingredientName = createElementDOM(
				'p',
				`${elmt.ingredient}` + ':',
				'ingredientName'
			);
			const ingredientQty = createElementDOM(
				'p',
				elmt.quantity ? `${elmt.quantity}` : null,
				'ingredientQuantity'
			);
			const ingredientUnit = createElementDOM(
				'p',
				elmt.unit ? `${elmt.unit}` : null,
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
		return article;
	};
	return { getRecipeCardDOM };
};
export default recipeFactory;
