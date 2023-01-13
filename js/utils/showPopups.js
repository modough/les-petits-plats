import createElementDOM from './genericDom';

export const showPopups = (type) => {
	const linkList = document.querySelectorAll(`li.${type}`);

	const popup = document.querySelector(`.popup-${type}`);
	const filteredInputList = document.querySelectorAll('.ingredient');
	const closeFont = createElementDOM('i', '', 'fas fa-close');

	//close popup
	closeFont.addEventListener('click', () => {
		popup.classList.remove('active');
	});

	linkList.forEach((elmt) => {
		elmt.addEventListener('click', (e) => {
			popup.classList.add('active');
			popup.textContent = e.target.innerText;
			popup.appendChild(closeFont);
		});
	});

	filteredInputList.forEach((input) =>
		input.addEventListener('click', (e) => {
			popup.classList.add('active');
			popup.textContent = e.target.innerText;
			popup.appendChild(closeFont);
		})
	);
};
export default showPopups;
