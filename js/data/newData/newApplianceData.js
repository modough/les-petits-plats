import recipes from '../recipes';

let applianceData = [];

export const getNewAppliances = () => {
	if (applianceData.length === 0) {
		recipes.map((recipe) => {
			if (!applianceData.includes(recipe.appliance)) {
				applianceData = [...applianceData, recipe.appliance];
			}
		});
	}

	return applianceData;
};
export default getNewAppliances;
