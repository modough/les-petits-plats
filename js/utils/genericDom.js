/**
 * It creates a DOM element with the given type, text, className, and attributes.
 * @param type - the type of element you want to create.
 * @param [txt] - the text to be displayed in the element
 * @param [className] - string
 * @param [attributes] - [{key: 'href', value: 'https://www.google.com'}]</code>
 * @returns A function that takes in 3 parameters and returns a DOM element.
 */
export default function createElementDOM(
	type,
	txt = '',
	className = '',
	attributes = []
) {
	const elt = document.createElement(type);
	elt.innerText = txt;
	elt.className = className;
	if (attributes.length) {
		attributes.map((attribute) =>
			elt.setAttribute(attribute.key, attribute.value)
		);
	}
	return elt;
}
