import createElementDOM from '../utils/genericDom';

export const listFactory = (data, type) => {
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

		data = [...new Set(flatArray)];
		return data;

	};

	return { getListDOM, createFlatList };
};
export default listFactory;
