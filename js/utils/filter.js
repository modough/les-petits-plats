export const filter = () => {
	const span = document.querySelectorAll('li.ingredient');

	const name = document.querySelectorAll('.ingredientName');
	const description = document.querySelectorAll('.ingredientDescription');

	span.forEach((elmt) => {
		elmt.addEventListener('click', (e) => {
			const value = e.target.innerHTML;
			if (name.innerHTML === value || description.innerHTML === value) {
				const section = document.querySelector('.recipesCards');
				section.innerHTML = '';
			}
		});
	});
};
export default filter;
