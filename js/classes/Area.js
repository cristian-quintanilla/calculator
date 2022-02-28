import Forms from './Forms';
import { $, area } from '../selectors';

class Area extends Forms {
	constructor() {
		super();
		this.init();
	}

	init() {
		const calculateArea = $('#calculateArea');
		calculateArea.addEventListener('click', () => this.calculate());
	}

	calculate() {
		const fromArea = $('#fromArea').value;
		const toArea = $('#toArea').value;
		const areaValue = $('#areaValue').value;

		// Validations
		if (areaValue === '' || areaValue <= 0) {
			$('#areaValue').classList.toggle('is-invalid');
			return;
		}

		$('#areaValue').classList.toggle('is-invalid', false);

		this.results = $('.results');
		this.value_1 = `${ areaValue } ${ fromArea }`;
		this.value_2 = `${ areaValue } ${ toArea }`;

		// Conversions
		// km2, ha, m2, cm2, mm2, in2, yd2, ft2
		if (fromArea === 'km2') {
			this.KM2Conversions(areaValue, toArea);
		}

		// Show results
		this.showResult(this.value_1, this.value_2);

		// Clean the results and show the new results
		if (this.results) {
			this.limpiarHTML(this.results);
			this.results.remove();
		}
	}

	KM2Conversions(areaValue, toArea) {
		if (toArea === 'ha') {
			this.value_2 = `${ areaValue * 100 } ha`;
		} else if (toArea === 'm2') {
			this.value_2 = `${ areaValue * 1000000 } m2`;
		} else if (toArea === 'cm2') {
			this.value_2 = `${ areaValue * 10000000000 } cm2`;
		} else if (toArea === 'mm2') {
			this.value_2 = `${ areaValue * 1000000000000 } mm2`;
		} else if (toArea === 'in2') {
			this.value_2 = `${ areaValue * 1550008000 } in2`;
		} else if (toArea === 'yd2') {
			this.value_2 = `${ areaValue * 1195990.05 } yd2`;
		} else if (toArea === 'ft2') {
			this.value_2 = `${ areaValue * 10763910.4 } ft2`;
		}
	}
}

export default Area;
