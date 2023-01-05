export const filter = () => {
	const input = document.querySelector('#ingredients-search');

	const name = document.querySelectorAll('.ingredientName');

	input.addEventListener('input', () => {
		const inputValue = input.value.toLowerCase();
		console.log(inputValue);
		for (let i = 0; i < name.length; i++) {
			const nameValue = name[i].innerHTML.toLowerCase().split(':').join(' ');
			console.log(nameValue);
			if (nameValue === inputValue) {
				const section = document.querySelector('.recipesCards');
				section.innerHTML = '';
			}
		}
	});
};
export default filter;
