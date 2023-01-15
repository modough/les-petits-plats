import createElementDOM from './genericDom';

export const showPopups = (type) => {
	const linkList = document.querySelectorAll(`li.${type}`);

	const popup = document.querySelector(`.popup-${type}`);
	const closeFont = createElementDOM('i', '', 'far fa-circle-xmark');

	//close popups
	closeFont.addEventListener('click', () => {
		popup.classList.remove('active');
	});
	// show popups
	linkList.forEach((elmt) => {
		elmt.addEventListener('click', (e) => {
			popup.classList.add('active');
			popup.textContent = e.target.innerText;
			popup.appendChild(closeFont);
		});
	});


};
export default showPopups;
