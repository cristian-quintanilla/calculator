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
		const dataValue = $('#dataValue').value;

		// Validations
		if (dataValue === '' || dataValue <= 0) {
			$('#dataValue').classList.toggle('is-invalid');
			return;
		}

		$('#dataValue').classList.toggle('is-invalid', false);

		this.results = $('.results');
		this.value_1 = `${ dataValue } ${ fromValue }`;
		this.value_2 = `${ dataValue } ${ toValue }`;

		// Convertions
		if (fromValue === 'B') {
			this.ByteConvertions(dataValue, toValue, this.K);
		} else if (fromValue === 'KB') {
			this.KBConvertions(dataValue, toValue, this.K);
		} else if (fromValue === 'MB') {
			this.MBConvertions(dataValue, toValue, this.K);
		} else if (fromValue === 'GB') {
			this.GBConvertions(dataValue, toValue, this.K);
		} else if (fromValue === 'TB') {
			this.TBConvertions(dataValue, toValue, this.K);
		} else if (fromValue === 'PB') {
			this.PBConvertions(dataValue, toValue, this.K);
		}

		// Show results
		this.showResult(this.value_1, this.value_2);

		// Clean the results and show the new results
		if (this.results) {
			this.limpiarHTML(this.results);
			this.results.remove();
		}
	}

	ByteConvertions(dataValue, toValue, K) {
		if (toValue === 'KB') {
			this.value_2 = `${ dataValue / K } KB`;
		} else if (toValue === 'MB') {
			this.value_2 = `${ dataValue / (K * K) } MB`;
		} else if (toValue === 'GB') {
			this.value_2 = `${ dataValue / (K * K * K) } GB`;
		} else if (toValue === 'TB') {
			this.value_2 = `${ dataValue / (K * K * K * K) } TB`;
		} else if (toValue === 'PB') {
			this.value_2 = `${ dataValue / (K * K * K * K * K) } PB`;
		}
	}

	KBConvertions(dataValue, toValue, K) {
		if (toValue === 'B') {
			this.value_2 = `${ dataValue * K } B`;
		} else if (toValue === 'MB') {
			this.value_2 = `${ dataValue * K / (K * K) } MB`;
		} else if (toValue === 'GB') {
			this.value_2 = `${ dataValue * K / (K * K * K) } GB`;
		} else if (toValue === 'TB') {
			this.value_2 = `${ dataValue * K / (K * K * K * K) } TB`;
		} else if (toValue === 'PB') {
			this.value_2 = `${ dataValue * K / (K * K * K * K * K) } PB`;
		}
	}

	MBConvertions(dataValue, toValue, K) {
		if (toValue === 'B') {
			this.value_2 = `${ dataValue * K * K } B`;
		} else if (toValue === 'KB') {
			this.value_2 = `${ dataValue * K } KB`;
		} else if (toValue === 'GB') {
			this.value_2 = `${ dataValue * K / (K * K) } GB`;
		} else if (toValue === 'TB') {
			this.value_2 = `${ dataValue * K / (K * K * K) } TB`;
		} else if (toValue === 'PB') {
			this.value_2 = `${ dataValue * K / (K * K * K * K) } PB`;
		}
	}

	GBConvertions(dataValue, toValue, K) {
		if (toValue === 'B') {
			this.value_2 = `${ dataValue * K * K * K } B`;
		} else if (toValue === 'KB') {
			this.value_2 = `${ dataValue * K * K } KB`;
		} else if (toValue === 'MB') {
			this.value_2 = `${ dataValue * K } MB`;
		} else if (toValue === 'TB') {
			this.value_2 = `${ dataValue * K * K / (K * K * K) } TB`;
		} else if (toValue === 'PB') {
			this.value_2 = `${ dataValue * K * K / (K * K * K * K) } PB`;
		}
	}

	TBConvertions(dataValue, toValue, K) {
		if (toValue === 'B') {
			this.value_2 = `${ dataValue * K * K * K * K } B`;
		} else if (toValue === 'KB') {
			this.value_2 = `${ dataValue * K * K * K } KB`;
		} else if (toValue === 'MB') {
			this.value_2 = `${ dataValue * K * K } MB`;
		} else if (toValue === 'GB') {
			this.value_2 = `${ dataValue * K } GB`;
		} else if (toValue === 'PB') {
			this.value_2 = `${ dataValue * K * K / (K * K * K) } PB`;
		}
	}

	PBConvertions(dataValue, toValue, K) {
		if (toValue === 'B') {
			this.value_2 = `${ dataValue * K * K * K * K * K } B`;
		} else if (toValue === 'KB') {
			this.value_2 = `${ dataValue * K * K * K * K } KB`;
		} else if (toValue === 'MB') {
			this.value_2 = `${ dataValue * K * K * K } MB`;
		} else if (toValue === 'GB') {
			this.value_2 = `${ dataValue * K * K } GB`;
		} else if (toValue === 'TB') {
			this.value_2 = `${ dataValue * K } TB`;
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
