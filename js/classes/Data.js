import Forms from './Forms';
import { $ } from '../selectors';

class Data extends Forms {
	constructor() {
		super();
		this.init();
	}

	init() {
		const calculateData = $('#calculateData');
		calculateData.addEventListener('click', () => this.calculate());
	}

	calculate() {
		const K = 1024;
		const fromValue = $('#fromData').value;
		const toValue = $('#toData').value;

		this.results = $('.results');
		this.dataValue = $('#dataValue').value;

		// Convertions
		if (fromValue === 'B') {
			this.ByteConvertions(fromValue, toValue, K);
		}

		// Clean the results and show the new results
		if (this.results) {
			this.limpiarHTML(this.results);
			this.results.remove();
		}
	}

	ByteConvertions(fromValue, toValue, K) {
		const value_1 = `${ this.dataValue } ${ fromValue }`;
		let value_2 = `${ this.dataValue } ${ toValue }`;

		if (toValue === 'B') {
			this.showResult(value_1, value_2);
		} else if (toValue === 'KB') {
			value_2 = `${ this.dataValue / K } ${ toValue }`;
			this.showResult(value_1, value_2);
		} else if (toValue === 'MB') {
			value_2 = `${ this.dataValue / (K * K) } ${ toValue }`;
			this.showResult(value_1, value_2);
		} else if (toValue === 'GB') {
			value_2 = `${ this.dataValue / (K * K * K) } ${ toValue }`;
			this.showResult(value_1, value_2);
		} else if (toValue === 'TB') {
			value_2 = `${ this.dataValue / (K * K * K * K) } ${ toValue }`;
			this.showResult(value_1, value_2);
		} else if (toValue === 'PB') {
			value_2 = `${ this.dataValue / (K * K * K * K * K) } ${ toValue }`;
			this.showResult(value_1, value_2);
		}
	}

	showResult(value_1, value_2) {
		const divResult = document.createElement('div');
		const firstRusult = document.createElement('div');
		const spanMessage = document.createElement('span');
		const secondRusult = document.createElement('div');

		divResult.classList.add('results', 'bg-light', 'py-2', 'px-4', 'mt-3', 'w-75', 'card');
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
