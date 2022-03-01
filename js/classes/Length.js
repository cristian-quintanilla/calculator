import Forms from './Forms';
import { $ } from '../selectors';

class Length extends Forms {
	constructor() {
		super();
		this.init();
	}

	init() {
		const calculateLength = $('#calculateLength');
		calculateLength.addEventListener('click', () => this.calculate());
	}

	calculate() {
		const fromLength = $('#fromLength').value;
		const toLength = $('#toLength').value;
		const lengthValue = $('#lengthValue').value;

		// Validations
		if (lengthValue === '' || lengthValue <= 0) {
			$('#lengthValue').classList.toggle('is-invalid');
			return;
		}

		$('#lengthValue').classList.toggle('is-invalid', false);

		this.results = $('.results');
		this.value_1 = `${ lengthValue } ${ fromLength }`;
		this.value_2 = `${ lengthValue } ${ toLength }`;

		// Conversions
		// km m cm mm in ft yd mi
		if (fromLength === 'km') {
			this.KMConversions(lengthValue, toLength);
		}

		// Show results
		this.showResult(this.value_1, this.value_2);

		// Clean the results and show the new results
		if (this.results) {
			this.limpiarHTML(this.results);
			this.results.remove();
		}
	}

	KMConversions(lengthValue, toLength) {
		if (toLength === 'm') {
			this.value_2 = `${ lengthValue * 1000 } m`;
		} else if (toLength === 'cm') {
			this.value_2 = `${ lengthValue * 100000 } cm`;
		} else if (toLength === 'mm') {
			this.value_2 = `${ lengthValue * 1000000 } mm`;
		} else if (toLength === 'in') {
			this.value_2 = `${ lengthValue * 39370.079 } in`;
		} else if (toLength === 'ft') {
			this.value_2 = `${ lengthValue * 3280.84 } ft`;
		} else if (toLength === 'yd') {
			this.value_2 = `${ lengthValue * 1093.613 } yd`;
		} else if (toLength === 'mi') {
			this.value_2 = `${ lengthValue / 1.60934 } mi`;
		}
	}
}

export default Length;
