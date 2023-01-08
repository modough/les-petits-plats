export const toggleLists = () => {
	//open the lists function
	const openLists = () => {
		const searchIngredients = document.querySelector('#ingredients-search');
		const searchAppliance = document.querySelector('#appliance-search');
		const searchUstensils = document.querySelector('#ustensils-search');
		const ingredientsList = document.querySelector('.ingredients-results-list');
		const applianceList = document.querySelector('.appliance-results-list');
		const ustensilsList = document.querySelector('.ustensils-results-list');
		const iconUpIngredients = document.querySelector(
			'.ingredients-results .fas.fa-angle-up'
		);
		const iconUpAppliance = document.querySelector(
			'.appliance-results .fas.fa-angle-up'
		);
		const iconUpUstensils = document.querySelector(
			'.ustensils-results .fas.fa-angle-up'
		);
		const iconDownIngredients = document.querySelector(
			'.ingredients-results .fas.fa-angle-down'
		);
		const iconDownAppliance = document.querySelector(
			'.appliance-results .fas.fa-angle-down'
		);
		const iconDownUstensils = document.querySelector(
			'.ustensils-results .fas.fa-angle-down'
		);
		//generic function
		const handleOpen = (
			list,
			otherList,
			anotherList,
			upIcon,
			downIcon,
			otherListUpIcon,
			otherListDownIcon,
			anotherListUpIcon,
			anotherListDowIcon
		) => {
			list.classList.add('active');
			if (list.classList.contains('active')) {
				otherList.classList.remove('active');
				anotherList.classList.remove('active');
				upIcon.classList.add('active');
				downIcon.classList.remove('active');
				otherListUpIcon.classList.remove('active');
				otherListDownIcon.classList.add('active');
				anotherListUpIcon.classList.remove('active');
				anotherListDowIcon.classList.add('active');
			}
		};
		// on click events
		searchIngredients.addEventListener('click', () => {
			handleOpen(
				ingredientsList,
				applianceList,
				ustensilsList,
				iconUpIngredients,
				iconDownIngredients,
				iconUpAppliance,
				iconDownAppliance,
				iconUpUstensils,
				iconDownUstensils
			);
		});

		searchAppliance.addEventListener('click', () => {
			handleOpen(
				applianceList,
				ingredientsList,
				ustensilsList,
				iconUpAppliance,
				iconDownAppliance,
				iconUpIngredients,
				iconDownIngredients,
				iconUpUstensils,
				iconDownUstensils
			);
		});

		searchUstensils.addEventListener('click', () => {
			handleOpen(
				ustensilsList,
				applianceList,
				ingredientsList,
				iconUpUstensils,
				iconDownUstensils,
				iconUpAppliance,
				iconDownAppliance,
				iconUpIngredients,
				iconDownIngredients
			);
		});
	};
	// close lists function
	const closeLists = () => {
		const iconIngredientsList = document.querySelector(
			'.ingredients-results .fas.fa-angle-up'
		);
		const iconAppareilsList = document.querySelector(
			'.appliance-results .fas.fa-angle-up'
		);
		const iconUstensilsList = document.querySelector(
			'.ustensils-results .fas.fa-angle-up'
		);
		const ingredientsList = document.querySelector('.ingredients-results-list');
		const applianceList = document.querySelector('.appliance-results-list');
		const ustensilsList = document.querySelector('.ustensils-results-list');
		const iconDownIngredients = document.querySelector(
			'.ingredients-results .fas.fa-angle-down'
		);
		const iconDownAppliance = document.querySelector(
			'.appliance-results .fas.fa-angle-down'
		);
		const iconDownUstensils = document.querySelector(
			'.ustensils-results .fas.fa-angle-down'
		);
		const searchIngredients = document.querySelector('#ingredients-search');
		const searchAppliance = document.querySelector('#appliance-search');
		const searchUstensils = document.querySelector('#ustensils-search');

		// generic function
		const handleClose = (
			list,
			searchInList,
			searchInSecondList,
			searchInThirdList,
			iconUp,
			iconDown
		) => {
			list.classList.remove('active');
			searchInList.classList.add('active');
			searchInSecondList.classList.add('active');
			searchInThirdList.classList.add('active');
			iconUp.classList.remove('active');
			iconDown.classList.add('active');
		};
		// onclick events
		iconIngredientsList.addEventListener('click', () => {
			handleClose(
				ingredientsList,
				searchIngredients,
				searchAppliance,
				searchUstensils,
				iconIngredientsList,
				iconDownIngredients
			);
		});

		iconAppareilsList.addEventListener('click', () => {
			handleClose(
				applianceList,
				searchAppliance,
				searchIngredients,
				searchUstensils,
				iconAppareilsList,
				iconDownAppliance
			);
		});

		iconUstensilsList.addEventListener('click', () => {
			handleClose(
				ustensilsList,
				searchUstensils,
				searchAppliance,
				searchIngredients,
				iconUstensilsList,
				iconDownUstensils
			);
		});
	};
	openLists();
	closeLists();
};
export default toggleLists;
