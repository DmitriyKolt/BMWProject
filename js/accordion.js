const featureLinkElems = document.querySelectorAll('.feature__link');
const featureSubElems = document.querySelectorAll('.feature-sub');

for(let i=0; i<featureLinkElems.length; i++) {
	featureLinkElems[i].addEventListener('click', () => {
		//отключаем класс, который показывает, что панель открыта
		for(let j=0; j<featureLinkElems.length; j++) {
			featureLinkElems[j].classList.remove('feature__link_active');
			
		}
		//скрываем содержимое всех панелей
		for(let j=0; j<featureSubElems.length; j++) {
			featureSubElems[j].classList.add('hidden');
		}
		
		featureSubElems[i].classList.toggle('hidden');
		featureLinkElems[i].classList.toggle('feature__link_active');
	}
	);
	
}



console.log(featureSubElems);