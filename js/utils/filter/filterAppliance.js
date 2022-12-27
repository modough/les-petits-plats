import createElementDOM from '../genericDom';

export const applianceFactory = (data) => {
	const { appliance } = data;

	const getApplianceDOM = () => {
		const applianceList = createElementDOM('li', `${appliance}`, 'appliance');
		console.log(applianceList);
		return applianceList;
	};
	return { getApplianceDOM };
};
export default applianceFactory;
