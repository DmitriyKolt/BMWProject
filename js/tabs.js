const tabsHandlers = document.querySelectorAll('[data-tabs-handler]');
const tabsFields = document.querySelectorAll('[data-tabs-field]')

for(let tab of tabsHandlers) {
	tab.addEventListener('click', () => {
		for(let item of tabsHandlers) {
			if(item === tab) {
				item.classList.add('design-list__item_active')
			} else {
				item.classList.remove('design-list__item_active')
			}
		}
		
		for(let field of tabsFields) {
			if(field.dataset.tabsField === tab.dataset.tabsHandler) {
				field.classList.remove('hidden');
			} else {
				field.classList.add('hidden');
			}
		}
	})
}

console.log(tabsHandlers[0].dataset.tabsHandler)



