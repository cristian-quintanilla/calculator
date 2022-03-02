import Forms from './Forms';
import { $ } from '../selectors';

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
		if (fromArea === 'km2') {
			this.KM2Conversions(areaValue, toArea);
		} else if (fromArea === 'ha') {
			this.HAConversions(areaValue, toArea);
		} else if (fromArea === 'm2') {
			this.M2Conversions(areaValue, toArea);
		} else if (fromArea === 'cm2') {
			this.CM2Conversions(areaValue, toArea);
		} else if (fromArea === 'mm2') {
			this.MM2Conversions(areaValue, toArea);
		} else if (fromArea === 'in2') {
			this.IN2Conversions(areaValue, toArea);
		} else if (fromArea === 'yd2') {
			this.YD2Conversions(areaValue, toArea);
		} else if (fromArea === 'ft2') {
			this.FT2Conversions(areaValue, toArea);
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

	HAConversions(areaValue, toArea) {
		if (toArea === 'km2') {
			this.value_2 = `${ areaValue / 100 } km2`;
		} else if (toArea === 'm2') {
			this.value_2 = `${ areaValue * 10000 } m2`;
		} else if (toArea === 'cm2') {
			this.value_2 = `${ areaValue * 100000000 } cm2`;
		} else if (toArea === 'mm2') {
			this.value_2 = `${ areaValue * 10000000000 } mm2`;
		} else if (toArea === 'in2') {
			this.value_2 = `${ areaValue * 15500031 } in2`;
		} else if (toArea === 'yd2') {
			this.value_2 = `${ areaValue * 11959.9005 } yd2`;
		} else if (toArea === 'ft2') {
			this.value_2 = `${ areaValue * 107639.104 } ft2`;
		}
	}

	M2Conversions(areaValue, toArea) {
		if (toArea === 'km2') {
			this.value_2 = `${ areaValue * 1000000 } km2`;
		} else if (toArea === 'ha') {
			this.value_2 = `${ areaValue / 10000 } ha`;
		} else if (toArea === 'cm2') {
			this.value_2 = `${ areaValue * 10000 } cm2`;
		} else if (toArea === 'mm2') {
			this.value_2 = `${ areaValue * 1000000 } mm2`;
		} else if (toArea === 'in2') {
			this.value_2 = `${ areaValue * 1550.0031 } in2`;
		} else if (toArea === 'yd2') {
			this.value_2 = `${ areaValue * 1.19599 } yd2`;
		} else if (toArea === 'ft2') {
			this.value_2 = `${ areaValue * 10.7639104 } ft2`;
		}
	}

	CM2Conversions(areaValue, toArea) {
		if (toArea === 'km2') {
			this.value_2 = `${ areaValue / 10000000000 } km2`;
		} else if (toArea === 'ha') {
			this.value_2 = `${ areaValue / 100000000 } ha`;
		} else if (toArea === 'm2') {
			this.value_2 = `${ areaValue / 10000 } m2`;
		} else if (toArea === 'mm2') {
			this.value_2 = `${ areaValue * 100 } mm2`;
		} else if (toArea === 'in2') {
			this.value_2 = `${ areaValue / 6.452 } in2`;
		} else if (toArea === 'yd2') {
			this.value_2 = `${ areaValue / 8361 } yd2`;
		} else if (toArea === 'ft2') {
			this.value_2 = `${ areaValue / 929 } ft2`;
		}
	}

	MM2Conversions(areaValue, toArea) {
		if (toArea === 'km2') {
			this.value_2 = `${ areaValue / 1000000000000 } km2`;
		} else if (toArea === 'ha') {
			this.value_2 = `${ areaValue / 10000000000 } ha`;
		} else if (toArea === 'm2') {
			this.value_2 = `${ areaValue / 1000000 } m2`;
		} else if (toArea === 'cm2') {
			this.value_2 = `${ areaValue / 100 } cm2`;
		} else if (toArea === 'in2') {
			this.value_2 = `${ areaValue / 645 } in2`;
		} else if (toArea === 'yd2') {
			this.value_2 = `${ areaValue / 836127 } yd2`;
		} else if (toArea === 'ft2') {
			this.value_2 = `${ areaValue / 92903 } ft2`;
		}
	}

	IN2Conversions(areaValue, toArea) {
		if (toArea === 'km2') {
			this.value_2 = `${ areaValue / 1550000000 } km2`;
		} else if (toArea === 'ha') {
			this.value_2 = `${ areaValue / 15500000 } ha`;
		} else if (toArea === 'm2') {
			this.value_2 = `${ areaValue / 1550 } m2`;
		} else if (toArea === 'cm2') {
			this.value_2 = `${ areaValue * 6.4516 } cm2`;
		} else if (toArea === 'mm2') {
			this.value_2 = `${ areaValue * 645.16 } mm2`;
		} else if (toArea === 'yd2') {
			this.value_2 = `${ areaValue / 1296 } yd2`;
		} else if (toArea === 'ft2') {
			this.value_2 = `${ areaValue / 144 } ft2`;
		}
	}

	YD2Conversions(areaValue, toArea) {
		if (toArea === 'km2') {
			this.value_2 = `${ areaValue / 1196000 } km2`;
		} else if (toArea === 'ha') {
			this.value_2 = `${ areaValue / 11960 } ha`;
		} else if (toArea === 'm2') {
			this.value_2 = `${ areaValue / 1.196 } m2`;
		} else if (toArea === 'cm2') {
			this.value_2 = `${ areaValue * 8361 } cm2`;
		} else if (toArea === 'mm2') {
			this.value_2 = `${ areaValue * 836127 } mm2`;
		} else if (toArea === 'in2') {
			this.value_2 = `${ areaValue * 1296 } in2`;
		} else if (toArea === 'ft2') {
			this.value_2 = `${ areaValue * 9 } ft2`;
		}
	}

	FT2Conversions(areaValue, toArea) {
		if (toArea === 'km2') {
			this.value_2 = `${ areaValue / 10760000 } km2`;
		} else if (toArea === 'ha') {
			this.value_2 = `${ areaValue / 107639 } ha`;
		} else if (toArea === 'm2') {
			this.value_2 = `${ areaValue / 10.764 } m2`;
		} else if (toArea === 'cm2') {
			this.value_2 = `${ areaValue * 929.0304 } cm2`;
		} else if (toArea === 'mm2') {
			this.value_2 = `${ areaValue * 92903.04 } mm2`;
		} else if (toArea === 'in2') {
			this.value_2 = `${ areaValue * 144 } in2`;
		} else if (toArea === 'yd2') {
			this.value_2 = `${ areaValue / 9 } yd2`;
		}
	}
}

export default Area;
