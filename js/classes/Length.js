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
		} else if (fromLength === 'm') {
			this.MConversions(lengthValue, toLength);
		} else if (fromLength === 'cm') {
			this.CMConversions(lengthValue, toLength);
		} else if (fromLength === 'mm') {
			this.MMConversions(lengthValue, toLength);
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

	MConversions(lengthValue, toLength) {
		if (toLength === 'km') {
			this.value_2 = `${ lengthValue / 1000 } km`;
		} else if (toLength === 'cm') {
			this.value_2 = `${ lengthValue * 100 } cm`;
		} else if (toLength === 'mm') {
			this.value_2 = `${ lengthValue * 1000 } mm`;
		} else if (toLength === 'in') {
			this.value_2 = `${ lengthValue * 39.3701 } in`;
		} else if (toLength === 'ft') {
			this.value_2 = `${ lengthValue * 3.28084 } ft`;
		} else if (toLength === 'yd') {
			this.value_2 = `${ lengthValue * 1.093616 } yd`;
		} else if (toLength === 'mi') {
			this.value_2 = `${ lengthValue / 1609.344 } mi`;
		}
	}

	CMConversions(lengthValue, toLength) {
		if (toLength === 'km') {
			this.value_2 = `${ lengthValue / 100000 } km`;
		} else if (toLength === 'm') {
			this.value_2 = `${ lengthValue / 100 } m`;
		} else if (toLength === 'mm') {
			this.value_2 = `${ lengthValue * 10 } mm`;
		} else if (toLength === 'in') {
			this.value_2 = `${ lengthValue / 2.54 } in`;
		} else if (toLength === 'ft') {
			this.value_2 = `${ lengthValue / 30.48 } ft`;
		} else if (toLength === 'yd') {
			this.value_2 = `${ lengthValue / 91.44 } yd`;
		} else if (toLength === 'mi') {
			this.value_2 = `${ lengthValue / 160934.4 } mi`;
		}
	}

	MMConversions(lengthValue, toLength) {
		if (toLength === 'km') {
			this.value_2 = `${ lengthValue / 1000000 } km`;
		} else if (toLength === 'm') {
			this.value_2 = `${ lengthValue / 1000 } m`;
		} else if (toLength === 'cm') {
			this.value_2 = `${ lengthValue / 10 } cm`;
		} else if (toLength === 'in') {
			this.value_2 = `${ lengthValue / 25.4 } in`;
		} else if (toLength === 'ft') {
			this.value_2 = `${ lengthValue / 304.8 } ft`;
		} else if (toLength === 'yd') {
			this.value_2 = `${ lengthValue / 914.4 } yd`;
		} else if (toLength === 'mi') {
			this.value_2 = `${ lengthValue / 1609344 } mi`;
		}
	}
}

export default Length;
