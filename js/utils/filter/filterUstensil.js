import createElementDOM from '../genericDom';

export const ustensilFactory = (data) => {
	const { ustensils } = data;

	const getUstensilDOM = () => {
		const ustensilList = createElementDOM('li', `${ustensils}`, 'ustensil');
		console.log(ustensilList);
		return ustensilList;
	};
	return { getUstensilDOM };
};
export default ustensilFactory;
