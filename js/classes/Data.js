import Forms from './Forms';
import { $ } from '../selectors';

class Data extends Forms {
	constructor() {
		super();
		this.K = 1024;
		this.init();
	}

	init() {
		const calculateData = $('#calculateData');
		calculateData.addEventListener('click', () => this.calculate());
	}

	calculate() {
		const fromValue = $('#fromData').value;
		const toValue = $('#toData').value;

		this.results = $('.results');
		this.dataValue = $('#dataValue').value;
		this.value_1 = `${ this.dataValue } ${ fromValue }`;
		this.value_2 = `${ this.dataValue } ${ toValue }`;

		// Convertions
		if (fromValue === 'B') {
			this.ByteConvertions(toValue, this.K);
		} else if (fromValue === 'KB') {
			this.KBConvertions(toValue, this.K);
		} else if (fromValue === 'MB') {
			this.MBConvertions(toValue, this.K);
		} else if (fromValue === 'GB') {
			this.GBConvertions(toValue, this.K);
		} else if (fromValue === 'TB') {
			this.TBConvertions(toValue, this.K);
		} else if (fromValue === 'PB') {
			this.PBConvertions(toValue, this.K);
		}

		// Show results
		this.showResult(this.value_1, this.value_2);

		// Clean the results and show the new results
		if (this.results) {
			this.limpiarHTML(this.results);
			this.results.remove();
		}
	}

	ByteConvertions(toValue, K) {
		if (toValue === 'KB') {
			this.value_2 = `${ this.dataValue / K } ${ toValue }`;
		} else if (toValue === 'MB') {
			this.value_2 = `${ this.dataValue / (K * K) } ${ toValue }`;
		} else if (toValue === 'GB') {
			this.value_2 = `${ this.dataValue / (K * K * K) } ${ toValue }`;
		} else if (toValue === 'TB') {
			this.value_2 = `${ this.dataValue / (K * K * K * K) } ${ toValue }`;
		} else if (toValue === 'PB') {
			this.value_2 = `${ this.dataValue / (K * K * K * K * K) } ${ toValue }`;
		}
	}

	KBConvertions(toValue, K) {
		if (toValue === 'B') {
			this.value_2 = `${ this.dataValue * K } ${ toValue }`;
		} else if (toValue === 'MB') {
			this.value_2 = `${ this.dataValue * K / (K * K) } ${ toValue }`;
		} else if (toValue === 'GB') {
			this.value_2 = `${ this.dataValue * K / (K * K * K) } ${ toValue }`;
		} else if (toValue === 'TB') {
			this.value_2 = `${ this.dataValue * K / (K * K * K * K) } ${ toValue }`;
		} else if (toValue === 'PB') {
			this.value_2 = `${ this.dataValue * K / (K * K * K * K * K) } ${ toValue }`;
		}
	}

	MBConvertions(toValue, K) {
		if (toValue === 'B') {
			this.value_2 = `${ this.dataValue * K * K } ${ toValue }`;
		} else if (toValue === 'KB') {
			this.value_2 = `${ this.dataValue * K } ${ toValue }`;
		} else if (toValue === 'GB') {
			this.value_2 = `${ this.dataValue * K / (K * K) } ${ toValue }`;
		} else if (toValue === 'TB') {
			this.value_2 = `${ this.dataValue * K / (K * K * K) } ${ toValue }`;
		} else if (toValue === 'PB') {
			this.value_2 = `${ this.dataValue * K / (K * K * K * K) } ${ toValue }`;
		}
	}

	GBConvertions(toValue, K) {
		if (toValue === 'B') {
			this.value_2 = `${ this.dataValue * K * K * K } ${ toValue }`;
		} else if (toValue === 'KB') {
			this.value_2 = `${ this.dataValue * K * K } ${ toValue }`;
		} else if (toValue === 'MB') {
			this.value_2 = `${ this.dataValue * K } ${ toValue }`;
		} else if (toValue === 'TB') {
			this.value_2 = `${ this.dataValue * K * K / (K * K * K) } ${ toValue }`;
		} else if (toValue === 'PB') {
			this.value_2 = `${ this.dataValue * K * K / (K * K * K * K) } ${ toValue }`;
		}
	}

	TBConvertions(toValue, K) {
		if (toValue === 'B') {
			this.value_2 = `${ this.dataValue * K * K * K * K } ${ toValue }`;
		} else if (toValue === 'KB') {
			this.value_2 = `${ this.dataValue * K * K * K } ${ toValue }`;
		} else if (toValue === 'MB') {
			this.value_2 = `${ this.dataValue * K * K } ${ toValue }`;
		} else if (toValue === 'GB') {
			this.value_2 = `${ this.dataValue * K } ${ toValue }`;
		} else if (toValue === 'PB') {
			this.value_2 = `${ this.dataValue * K * K / (K * K * K) } ${ toValue }`;
		}
	}

	PBConvertions(toValue, K) {
		if (toValue === 'B') {
			this.value_2 = `${ this.dataValue * K * K * K * K * K } ${ toValue }`;
		} else if (toValue === 'KB') {
			this.value_2 = `${ this.dataValue * K * K * K * K } ${ toValue }`;
		} else if (toValue === 'MB') {
			this.value_2 = `${ this.dataValue * K * K * K } ${ toValue }`;
		} else if (toValue === 'GB') {
			this.value_2 = `${ this.dataValue * K * K } ${ toValue }`;
		} else if (toValue === 'TB') {
			this.value_2 = `${ this.dataValue * K } ${ toValue }`;
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
