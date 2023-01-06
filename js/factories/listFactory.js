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
	return { getListDOM };
};
export default listFactory;
