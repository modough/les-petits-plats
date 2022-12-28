export const toggleLists = () => {
	const openLists = () => {
		const searchIngredients = document.querySelector('#ingredients-search');
		searchIngredients.addEventListener('click', () => {
			const list = document.querySelector('.ingredients-results-list');
			list.classList.add('active');
			const iconUp = document.querySelector(
				'.ingredients-results .fas.fa-angle-up'
			);
			iconUp.classList.add('active');
			const iconDown = document.querySelector(
				'.ingredients-results .fas.fa-angle-down'
			);
			iconDown.classList.remove('active');
		});

		const searchAppliance = document.querySelector('#appareils-search');
		searchAppliance.addEventListener('click', () => {
			const list = document.querySelector('.appareils-results-list');
			list.classList.add('active');
			const iconUp = document.querySelector(
				'.appareils-results .fas.fa-angle-up'
			);
			iconUp.classList.add('active');
			const iconDown = document.querySelector(
				'.appareils-results .fas.fa-angle-down'
			);
			iconDown.classList.remove('active');
		});
		const searchUstensils = document.querySelector('#ustensiles-search');
		searchUstensils.addEventListener('click', () => {
			const list = document.querySelector('.ustensiles-results-list');
			list.classList.add('active');
			const iconUp = document.querySelector(
				'.ustensiles-results .fas.fa-angle-up'
			);
			iconUp.classList.add('active');
			const iconDown = document.querySelector(
				'.ustensiles-results .fas.fa-angle-down'
			);
			iconDown.classList.remove('active');
		});
	};
	const closeList = () => {
		const iconIngredientsList = document.querySelector(
			'.ingredients-results .fas.fa-angle-up'
		);
		iconIngredientsList.addEventListener('click', () => {
			const list = document.querySelector('.ingredients-results-list');
			list.classList.remove('active');
			iconIngredientsList.classList.remove('active');
			const iconDown = document.querySelector(
				'.ingredients-results .fas.fa-angle-down'
			);
			iconDown.classList.add('active');
		});

		const iconAppareilsList = document.querySelector(
			'.appareils-results .fas.fa-angle-up'
		);
		iconAppareilsList.addEventListener('click', () => {
			const list = document.querySelector('.appareils-results-list');
			list.classList.remove('active');
			iconAppareilsList.classList.remove('active');
			const iconDown = document.querySelector(
				'.appareils-results .fas.fa-angle-down'
			);
			iconDown.classList.add('active');
		});

		const iconUstensilsList = document.querySelector(
			'.ustensiles-results .fas.fa-angle-up'
		);
		iconUstensilsList.addEventListener('click', () => {
			const list = document.querySelector('.ustensiles-results-list');
			list.classList.remove('active');
			iconUstensilsList.classList.remove('active');
			const iconDown = document.querySelector(
				'.ustensiles-results .fas.fa-angle-down'
			);
			iconDown.classList.add('active');
		});
	};
	openLists();
	closeList();
};
export default toggleLists;
