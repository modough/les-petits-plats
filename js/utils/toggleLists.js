export const toggleLists = () => {
	const inputIngredients = document.querySelector('.ingredients-input');
	const inputAppliance = document.querySelector('.appliance-input');
	const inputUstensils = document.querySelector('.ustensils-input');
	const buttonIngredients = document.querySelector('.ingredients-btn');
	const buttonAppliance = document.querySelector('.appliance-btn');
	const buttonUstensils = document.querySelector('.ustensils-btn');
	const iconIngredientsList = document.querySelector(
		'.ingredients-input .fas.fa-angle-up'
	);
	const iconApplianceList = document.querySelector(
		'.appliance-input .fas.fa-angle-up'
	);
	const iconUstensilsList = document.querySelector(
		'.ustensils-input .fas.fa-angle-up'
	);
	//open the lists function
	const openLists = () => {
		const handleOpen = (
			list,
			firstRemovedList,
			secondRemovedList,
			button,
			firstRemovedButton,
			secondRemovedButton
		) => {
			list.classList.add('active');
			firstRemovedList.classList.remove('active');
			secondRemovedList.classList.remove('active');
			button.classList.add('hide');
			firstRemovedButton.classList.remove('hide');
			secondRemovedButton.classList.remove('hide');
		};
		buttonIngredients.addEventListener('click', () => {
			handleOpen(
				inputIngredients,
				inputAppliance,
				inputUstensils,
				buttonIngredients,
				buttonAppliance,
				buttonUstensils
			);
		});
		buttonAppliance.addEventListener('click', () => {
			handleOpen(
				inputAppliance,
				inputUstensils,
				inputIngredients,
				buttonAppliance,
				buttonIngredients,
				buttonUstensils
			);
		});
		buttonUstensils.addEventListener('click', () => {
			handleOpen(
				inputUstensils,
				inputIngredients,
				inputAppliance,
				buttonUstensils,
				buttonIngredients,
				buttonAppliance
			);
		});
	};

	// close lists function
	const closeLists = () => {
		const handleClose = (
			list,
			button
		) => {
			list.classList.remove('active');
			button.classList.remove('hide');
		};
		iconIngredientsList.addEventListener('click', () => {
			handleClose(inputIngredients, buttonIngredients);
		});
		iconApplianceList.addEventListener('click', () => {
			handleClose(inputAppliance, buttonAppliance);
		});
		iconUstensilsList.addEventListener('click', () => {
			handleClose(inputUstensils, buttonUstensils);
		});
	};
	openLists();
	closeLists();
};
export default toggleLists;
