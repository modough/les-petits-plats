/**
 * It opens and closes the lists when the user clicks on the buttons
 */
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
		/**
		 * This function adds the class 'active' to the list that is passed in, removes the class 'active'
		 * from the first and second removed lists, adds the class 'hide' to the button that is passed in,
		 * removes the class 'hide' from the first and second removed buttons, and returns nothing.
		 * @param list - the list that you want to open
		 * @param firstRemovedList - The list that is currently active and needs to be removed.
		 * @param secondRemovedList - the list that is not active and needs to be removed
		 * @param button - the button that was clicked
		 * @param firstRemovedButton - The button that is to be removed when the first list is opened.
		 * @param secondRemovedButton - the button that is to be removed when the list is opened
		 */
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
		/**
		 * When the user clicks the close button, remove the active class from the list and remove the hide
		 * class from the button.
		 * @param list - The list element that contains the list items.
		 * @param button - The button that was clicked to open the list.
		 */
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
