const moreButton = document.querySelectorAll('.more');
const modal = document.querySelector('.modal');



function openModal() {
	modal.classList.remove('hidden')
}

function closeModal() {
	modal.classList.add('hidden')
}

for(let i of moreButton) {
	i.addEventListener('click', openModal)
}


modal.addEventListener('click', (ev) => {
	let target = ev.target;
	if(target.classList.contains('overlay') || target.classList.
	contains('modal__close')) {
		closeModal()
	} 
})