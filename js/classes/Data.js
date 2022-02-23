import Forms from './Forms';
import { $ } from '../selectors';

class Data extends Forms {
	constructor() {
		super();
		this.init();
	}

	init() {
		const dataValue = $('#dataValue').value;
		const fromValue = $('#fromData').value;
		const toValue = $('#toData').value;
		const calculateData = $('#calculateData');

		calculateData.addEventListener('click',
			() => this.calculate(dataValue, fromValue, toValue)
		);
	}

	calculate(dataValue, fromValue, toValue) {
		

		// this.showResult(1, 2);
	}

	showResult(value_1, value_2) {
		const divResult = document.createElement('div');
		const firstRusult = document.createElement('div');
		const spanMessage = document.createElement('span');
		const secondRusult = document.createElement('div');

		divResult.classList.add('result', 'results', 'bg-light', 'py-2', 'px-4', 'mt-3', 'w-75', 'card');
		firstRusult.classList.add('fw-bold', 'fs-4', 'text-primary');
		firstRusult.innerHTML = value_1;

		spanMessage.classList.add('text-success', 'fs-6');
		spanMessage.innerHTML = 'es igual a';

		secondRusult.classList.add('fw-bold', 'fs-4', 'text-primary');
		secondRusult.innerHTML = value_2;

		divResult.appendChild(firstRusult);
		divResult.appendChild(spanMessage);
		divResult.appendChild(secondRusult);
		this.sectionForm.appendChild(divResult);
	}
}

export default Data;
