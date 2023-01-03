export const filter = () => {
	const span = document.querySelectorAll('li.ingredient');

	const card = document.querySelectorAll('.cardIngredients');

	span.forEach((elmt) => {
		elmt.addEventListener('click', (e) => {
			console.log(e.target);

			card.forEach((elmt) => {
				for (let i in elmt.children) {
					const firstChild = elmt.children[i].firstChild.innerHTML;
					console.log(firstChild.split(':').join(' '));
					if (firstChild.split(':').join(' ') == e.target.innerHTML) {
						const section = document.querySelector('.recipesCards');
						section.innerHTML = '';
						const parentCard = document.querySelector('.card');
						parentCard.appendChild(elmt);
						section.appendChild(parentCard);
					}
				}
			});
		});
	});
};
export default filter;
