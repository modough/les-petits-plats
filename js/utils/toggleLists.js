export const toggleLists = () => {
	//open the lists function
	const openLists = () => {
		const searchIngredients = document.querySelector('#ingredients-search');
		const searchAppliance = document.querySelector('#appareils-search');
		const searchUstensils = document.querySelector('#ustensiles-search');
		const ingredientsList = document.querySelector('.ingredients-results-list');
		const applianceList = document.querySelector('.appareils-results-list');
		const ustensilsList = document.querySelector('.ustensiles-results-list');
		const iconUpIngredients = document.querySelector(
			'.ingredients-results .fas.fa-angle-up'
		);
		const iconUpAppliance = document.querySelector(
			'.appareils-results .fas.fa-angle-up'
		);
		const iconUpUstensils = document.querySelector(
			'.ustensiles-results .fas.fa-angle-up'
		);
		const iconDownIngredients = document.querySelector(
			'.ingredients-results .fas.fa-angle-down'
		);
		const iconDownAppliance = document.querySelector(
			'.appareils-results .fas.fa-angle-down'
		);
		const iconDownUstensils = document.querySelector(
			'.ustensiles-results .fas.fa-angle-down'
		);

		searchIngredients.addEventListener('click', () => {
			ingredientsList.classList.add('active');
			if (ingredientsList.classList.contains('active')) {
				applianceList.classList.remove('active');
				ustensilsList.classList.remove('active');
				iconUpIngredients.classList.add('active');
				iconDownIngredients.classList.remove('active');
				iconUpAppliance.classList.remove('active');
				iconDownAppliance.classList.add('active');
				iconUpUstensils.classList.remove('active');
				iconDownUstensils.classList.add('active');
			}
		});

		searchAppliance.addEventListener('click', () => {
			applianceList.classList.add('active');
			if (applianceList.classList.contains('active')) {
				ingredientsList.classList.remove('active');
				ustensilsList.classList.remove('active');
				iconUpAppliance.classList.add('active');
				iconDownAppliance.classList.remove('active');
				iconUpIngredients.classList.remove('active');
				iconDownIngredients.classList.add('active');
				iconUpUstensils.classList.remove('active');
				iconDownUstensils.classList.add('active');
			}
		});

		searchUstensils.addEventListener('click', () => {
			ustensilsList.classList.add('active');
			if (ustensilsList.classList.contains('active')) {
				applianceList.classList.remove('active');
				ingredientsList.classList.remove('active');
				iconUpUstensils.classList.add('active');
				iconDownUstensils.classList.remove('active');
				iconUpAppliance.classList.remove('active');
				iconDownAppliance.classList.add('active');
				iconUpIngredients.classList.remove('active');
				iconDownIngredients.classList.add('active');
			}
		});
	};
	// close lists function
	const closeList = () => {
		const iconIngredientsList = document.querySelector(
			'.ingredients-results .fas.fa-angle-up'
		);
		const iconAppareilsList = document.querySelector(
			'.appareils-results .fas.fa-angle-up'
		);
		const iconUstensilsList = document.querySelector(
			'.ustensiles-results .fas.fa-angle-up'
		);
		const ingredientsList = document.querySelector('.ingredients-results-list');
		const applianceList = document.querySelector('.appareils-results-list');
		const ustensilsList = document.querySelector('.ustensiles-results-list');
		const iconDownIngredients = document.querySelector(
			'.ingredients-results .fas.fa-angle-down'
		);
		const iconDownAppliance = document.querySelector(
			'.appareils-results .fas.fa-angle-down'
		);
		const iconDownUstensils = document.querySelector(
			'.ustensiles-results .fas.fa-angle-down'
		);
		const searchIngredients = document.querySelector('#ingredients-search');
		const searchAppliance = document.querySelector('#appareils-search');
		const searchUstensils = document.querySelector('#ustensiles-search');

		// onclick events
		iconIngredientsList.addEventListener('click', () => {
			ingredientsList.classList.remove('active');
			searchIngredients.classList.add('active');
			searchAppliance.classList.add('active');
			searchUstensils.classList.add('active');
			iconIngredientsList.classList.remove('active');
			iconDownIngredients.classList.add('active');
		});

		iconAppareilsList.addEventListener('click', () => {
			applianceList.classList.remove('active');
			searchAppliance.classList.add('active');
			searchIngredients.classList.add('active');
			searchUstensils.classList.add('active');
			iconAppareilsList.classList.remove('active');
			iconDownAppliance.classList.add('active');
		});

		iconUstensilsList.addEventListener('click', () => {
			ustensilsList.classList.remove('active');
			searchUstensils.classList.add('active');
			searchAppliance.classList.add('active');
			searchIngredients.classList.add('active');
			iconUstensilsList.classList.remove('active');
			iconDownUstensils.classList.add('active');
		});
	};
	openLists();
	closeList();
};
export default toggleLists;
