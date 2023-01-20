import createElementDOM from './genericDom';

export const showTags = (type) => {
	const linkList = document.querySelectorAll(`li.${type}`);

	const popup = document.querySelector(`.popup-${type}`);

	// show popups
	linkList.forEach((elmt) => {
		elmt.addEventListener('click', (e) => {
			const tag = createElementDOM('li', '', `tag-${type}`);
			const paragraph = createElementDOM('p', '', `paragraph-${type}`);
			const closeFont = createElementDOM('i', '', 'far fa-circle-xmark');
			//close popups
			closeFont.addEventListener('click', (e) => {
				e.target.parentElement.style.display = 'none';
				elmt.style.display = 'block';
			});
			tag.appendChild(paragraph);
			tag.appendChild(closeFont);
			popup.appendChild(tag);
			popup.classList.add('active');
			paragraph.textContent = e.target.innerText;
			e.target.style.display = 'none';
		});
	});



};
export default showTags;
