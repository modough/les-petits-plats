import createElementDOM from '../utils/genericDom';

/**
 * It takes an array of objects, and returns an array of strings
 * @param data - an array of objects.
 * @param type - the type of list you want to create.
 * @returns An object with two methods.
 */
export const listFactory = (data, type) => {
	// factory for default lists
	/**
	 * It creates a span element, then loops through the data array and creates a list element for each
	 * item in the array, then appends the list element to the span element, and finally returns the span
	 * element.
	 * @returns the spanList.
	 */
	const getListDOM = () => {
		const spanList = createElementDOM(
			'span',
			'',
			`span${type.charAt(0).toUpperCase() + type.slice(1)}List`
		);
		data.forEach((elmt) => {
			const list = createElementDOM('li', elmt, type);
			spanList.appendChild(list);
		});
		return spanList;
	};
	// transfroming database arrays into characters without duplicate
	/**
	 * It takes an array of objects, and returns an array of strings.
	 * @returns An array of strings.
	 */
	const createFlatList = () => {
		const flatArray = data
			.map((recipe) => {
				if (type === 'ingredients') {
					return recipe[type].map((i) => i.ingredient.toLowerCase());
				}
				if (type === 'ustensils') {
					return recipe[type].map((i) => i.toLowerCase());
				}
				return recipe[type].toLowerCase();
			})
			.flat();
		const sortFlatArray = flatArray.sort((a, b) => a.localeCompare(b));
		data = [...new Set(sortFlatArray)];
		console.log(data);
		return data;
	};
	return { getListDOM, createFlatList };
};
export default listFactory;
