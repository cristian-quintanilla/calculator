import { sectionForm } from '../selectors';

class Forms {
	constructor() {
		this.sectionForm = sectionForm;
	}

	limpiarHTML(tag) {
		while (tag.firstChild) {
			tag.removeChild(tag.firstChild);
		}
	}

	showResult(value_1, value_2) {
		const divResult = document.createElement('div');
		const firstRusult = document.createElement('div');
		const spanMessage = document.createElement('span');
		const secondRusult = document.createElement('div');

		divResult.setAttribute('class', 'results bg-light py-2 px-4 mt-3 w-75 card');
		firstRusult.setAttribute('class', 'fw-bold fs-4 text-primary');
		firstRusult.innerText = value_1;

		spanMessage.setAttribute('class', 'text-success fs-6');
		spanMessage.innerText = 'es igual a';

		secondRusult.setAttribute('class', 'fw-bold fs-4 text-primary');
		secondRusult.innerText = value_2;

		divResult.appendChild(firstRusult);
		divResult.appendChild(spanMessage);
		divResult.appendChild(secondRusult);
		this.sectionForm.appendChild(divResult);
	}
}

export default Forms;
