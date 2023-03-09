const hamBtn = document.querySelector('.humburger-menu');
const menu = document.querySelector('.menu');

function toggleMenu() {
	menu.classList.toggle('menu-active');
	hamBtn.classList.toggle('humburger-menu-active');
}

function closeMenu() {
	menu.classList.remove('menu-active');
	hamBtn.classList.remove('humburger-menu-active');
}

hamBtn.addEventListener('click', toggleMenu);
document.body.addEventListener('click', (ev) => {
	let target = ev.target;
	if(target != hamBtn) closeMenu();
})
