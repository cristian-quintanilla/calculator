import Forms from './Forms';
import { $ } from '../selectors';

class Volume extends Forms {
	constructor() {
		super();
		this.init();
	}

	init() {
		const calculateVolume = $('#calculateVolume');
		calculateVolume.addEventListener('click', () => this.calculate());
	}

	calculate() {
		const fromVolume = $('#fromVolume').value;
		const toVolume = $('#toVolume').value;
		const volumeValue = $('#volumeValue').value;

		// Validations
		if (volumeValue === '' || volumeValue <= 0) {
			$('#volumeValue').classList.toggle('is-invalid');
			return;
		}

		$('#volumeValue').classList.toggle('is-invalid', false);

		this.results = $('.results');
		this.value_1 = `${ volumeValue } ${ fromVolume }`;
		this.value_2 = `${ volumeValue } ${ toVolume }`;

		// Convertions
		/* m3, cm3, mm3, l, ml, cl, dl, hl, ft3, in3, yd3 */
		if (fromVolume === 'm3') {
			this.M3Convertions(volumeValue, toVolume);
		}
		// else if (fromValue === 'KB') {
		// 	this.KBConvertions(dataValue, toValue, this.K);
		// } else if (fromValue === 'MB') {
		// 	this.MBConvertions(dataValue, toValue, this.K);
		// } else if (fromValue === 'GB') {
		// 	this.GBConvertions(dataValue, toValue, this.K);
		// } else if (fromValue === 'TB') {
		// 	this.TBConvertions(dataValue, toValue, this.K);
		// } else if (fromValue === 'PB') {
		// 	this.PBConvertions(dataValue, toValue, this.K);
		// }

		// Show results
		this.showResult(this.value_1, this.value_2);

		// Clean the results and show the new results
		if (this.results) {
			this.limpiarHTML(this.results);
			this.results.remove();
		}
	}

	M3Convertions(volumeValue, toValue) {
		if (toValue === 'cm3' || toValue === 'ml') {
			this.value_2 = `${ volumeValue * 1000000 } ${ toValue }`;
		} else if (toValue === 'mm3') {
			this.value_2 = `${ volumeValue * 1000000000 } mm3`;
		} else if (toValue === 'l') {
			this.value_2 = `${ volumeValue * 1000 } l`;
		} else if (toValue === 'cl') {
			this.value_2 = `${ volumeValue * 100000 } cl`;
		} else if (toValue === 'dl') {
			this.value_2 = `${ volumeValue * 10000 } dl`;
		} else if (toValue === 'hl') {
			this.value_2 = `${ volumeValue * 10 } hl`;
		} else if (toValue === 'ft3') {
			this.value_2 = `${ volumeValue * 35.315 } ft3`;
		} else if (toValue === 'in3') {
			this.value_2 = `${ volumeValue * 61024 } in3`;
		} else if (toValue === 'yd3') {
			this.value_2 = `${ volumeValue * 1.308 } yd3`;
		}
	}

	showResult(value_1, value_2) {
		const divResult = document.createElement('div');
		const firstRusult = document.createElement('div');
		const spanMessage = document.createElement('span');
		const secondRusult = document.createElement('div');

		divResult.setAttribute('class', 'results bg-light py-2 px-4 mt-3 w-75 card');
		firstRusult.setAttribute('class', 'fw-bold fs-4 text-primary');
		firstRusult.innerHTML = value_1;

		spanMessage.setAttribute('class', 'text-success fs-6');
		spanMessage.innerHTML = 'es igual a';

		secondRusult.setAttribute('class', 'fw-bold fs-4 text-primary');
		secondRusult.innerHTML = value_2;

		divResult.appendChild(firstRusult);
		divResult.appendChild(spanMessage);
		divResult.appendChild(secondRusult);
		this.sectionForm.appendChild(divResult);
	}
}

export default Volume;
