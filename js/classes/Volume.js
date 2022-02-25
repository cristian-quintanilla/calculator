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

		// Conversions
		if (fromVolume === 'm3') {
			this.M3Conversions(volumeValue, toVolume);
		} else if (fromVolume === 'cm3') {
			this.CM3Conversions(volumeValue, toVolume);
		} else if (fromVolume === 'mm3') {
			this.MM3Conversions(volumeValue, toVolume);
		} else if (fromVolume === 'l') {
			this.LConversions(volumeValue, toVolume);
		} else if (fromVolume === 'ml') {
			this.MLConversions(volumeValue, toVolume);
		} else if (fromVolume === 'cl') {
			this.CLConversions(volumeValue, toVolume);
		} else if (fromVolume === 'dl') {
			this.DLConversions(volumeValue, toVolume);
		} else if (fromVolume === 'hl') {
			this.HLConversions(volumeValue, toVolume);
		} else if (fromVolume === 'ft3') {
			this.FT3Conversions(volumeValue, toVolume);
		} else if (fromVolume === 'in3') {
			this.IN3Conversions(volumeValue, toVolume);
		} else if (fromVolume === 'yd3') {
			this.YD3Conversions(volumeValue, toVolume);
		}

		// Show results
		this.showResult(this.value_1, this.value_2);

		// Clean the results and show the new results
		if (this.results) {
			this.limpiarHTML(this.results);
			this.results.remove();
		}
	}

	M3Conversions(volumeValue, toValue) {
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

	CM3Conversions(volumeValue, toValue) {
		if (toValue === 'm3') {
			this.value_2 = `${ volumeValue / 1000000 } m3`;
		} else if (toValue === 'mm3') {
			this.value_2 = `${ volumeValue * 1000 } mm3`;
		} else if (toValue === 'l') {
			this.value_2 = `${ volumeValue / 1000 } l`;
		} else if (toValue === 'cl') {
			this.value_2 = `${ volumeValue / 10 } cl`;
		} else if (toValue === 'dl') {
			this.value_2 = `${ volumeValue / 100 } dl`;
		} else if (toValue === 'hl') {
			this.value_2 = `${ volumeValue / 100000 } hl`;
		} else if (toValue === 'ft3') {
			this.value_2 = `${ volumeValue / 28317 } ft3`;
		} else if (toValue === 'in3') {
			this.value_2 = `${ volumeValue / 16.387 } in3`;
		}	else if (toValue === 'yd3') {
			this.value_2 = `${ volumeValue / 764555 } yd3`;
		}
	}

	MM3Conversions(volumeValue, toValue) {
		if (toValue === 'm3') {
			this.value_2 = `${ volumeValue / 1000000000 } m3`;
		} else if (toValue === 'cm3' || toValue === 'ml') {
			this.value_2 = `${ volumeValue / 1000 } ${ toValue }`;
		} else if (toValue === 'l') {
			this.value_2 = `${ volumeValue / 1000000 } l`;
		} else if (toValue === 'cl') {
			this.value_2 = `${ volumeValue / 10000 } cl`;
		} else if (toValue === 'dl') {
			this.value_2 = `${ volumeValue / 100000 } dl`;
		} else if (toValue === 'hl') {
			this.value_2 = `${ volumeValue / 100000000 } hl`;
		} else if (toValue === 'ft3') {
			this.value_2 = `${ volumeValue / 28320000 } ft3`;
		} else if (toValue === 'in3') {
			this.value_2 = `${ volumeValue / 16387 } in3`;
		} else if (toValue === 'yd3') {
			this.value_2 = `${ volumeValue / 764600000 } yd3`;
		}
	}

	LConversions(volumeValue, toValue) {
		if (toValue === 'm3') {
			this.value_2 = `${ volumeValue / 1000 } m3`;
		} else if (toValue === 'cm3' || toValue === 'ml') {
			this.value_2 = `${ volumeValue * 1000 } ${ toValue }`;
		} else if (toValue === 'mm3') {
			this.value_2 = `${ volumeValue * 1000000 } mm3`;
		} else if (toValue === 'cl') {
			this.value_2 = `${ volumeValue * 100 } cl`;
		} else if (toValue === 'dl') {
			this.value_2 = `${ volumeValue * 10 } dl`;
		} else if (toValue === 'hl') {
			this.value_2 = `${ volumeValue / 100 } hl`;
		} else if (toValue === 'ft3') {
			this.value_2 = `${ volumeValue / 28.317 } ft3`;
		} else if (toValue === 'in3') {
			this.value_2 = `${ volumeValue * 61.024 } in3`;
		} else if (toValue === 'yd3') {
			this.value_2 = `${ volumeValue / 765 } yd3`;
		}
	}

	MLConversions(volumeValue, toValue) {
		if (toValue === 'm3') {
			this.value_2 = `${ volumeValue / 1000000 } m3`;
		} else if (toValue === 'mm3') {
			this.value_2 = `${ volumeValue * 1000 } mm3`;
		} else if (toValue === 'l') {
			this.value_2 = `${ volumeValue / 1000 } l`;
		} else if (toValue === 'cl') {
			this.value_2 = `${ volumeValue / 10 } cl`;
		} else if (toValue === 'dl') {
			this.value_2 = `${ volumeValue / 100 } dl`;
		} else if (toValue === 'hl') {
			this.value_2 = `${ volumeValue / 100000 } hl`;
		} else if (toValue === 'ft3') {
			this.value_2 = `${ volumeValue / 28317 } ft3`;
		} else if (toValue === 'in3') {
			this.value_2 = `${ volumeValue / 16.387 } in3`;
		} else if (toValue === 'yd3') {
			this.value_2 = `${ volumeValue / 764555 } yd3`;
		}
	}

	CLConversions(volumeValue, toValue) {
		if (toValue === 'm3') {
			this.value_2 = `${ volumeValue / 100000 } m3`;
		} else if (toValue === 'cm3' || toValue === 'ml') {
			this.value_2 = `${ volumeValue * 10 } ${ toValue }`;
		} else if (toValue === 'mm3') {
			this.value_2 = `${ volumeValue * 10000 } mm3`;
		} else if (toValue === 'l') {
			this.value_2 = `${ volumeValue / 100 } l`;
		} else if (toValue === 'dl') {
			this.value_2 = `${ volumeValue / 10 } dl`;
		} else if (toValue === 'hl') {
			this.value_2 = `${ volumeValue / 10000 } hl`;
		} else if (toValue === 'ft3') {
			this.value_2 = `${ volumeValue / 2832 } ft3`;
		} else if (toValue === 'in3') {
			this.value_2 = `${ volumeValue * 1.639 } in3`;
		} else if (toValue === 'yd3') {
			this.value_2 = `${ volumeValue / 76455 } yd3`;
		}
	}

	DLConversions(volumeValue, toValue) {
		if (toValue === 'm3') {
			this.value_2 = `${ volumeValue / 10000 } m3`;
		} else if (toValue === 'cm3' || toValue === 'ml') {
			this.value_2 = `${ volumeValue * 100 } ${ toValue }`;
		} else if (toValue === 'mm3') {
			this.value_2 = `${ volumeValue * 100000 } mm3`;
		} else if (toValue === 'l') {
			this.value_2 = `${ volumeValue / 10 } l`;
		} else if (toValue === 'cl') {
			this.value_2 = `${ volumeValue * 10 } cl`;
		} else if (toValue === 'hl') {
			this.value_2 = `${ volumeValue / 1000 } hl`;
		} else if (toValue === 'ft3') {
			this.value_2 = `${ volumeValue / 283 } ft3`;
		} else if (toValue === 'in3') {
			this.value_2 = `${ volumeValue * 6.102 } in3`;
		} else if (toValue === 'yd3') {
			this.value_2 = `${ volumeValue / 7646 } yd3`;
		}
	}

	HLConversions(volumeValue, toValue) {
		if (toValue === 'm3') {
			this.value_2 = `${ volumeValue / 10 } m3`;
		} else if (toValue === 'cm3' || toValue === 'ml') {
			this.value_2 = `${ volumeValue * 100000 } ${ toValue }`;
		} else if (toValue === 'mm3') {
			this.value_2 = `${ volumeValue * 100000000 } mm3`;
		} else if (toValue === 'l') {
			this.value_2 = `${ volumeValue * 100 } l`;
		} else if (toValue === 'cl') {
			this.value_2 = `${ volumeValue * 10000 } cl`;
		} else if (toValue === 'dl') {
			this.value_2 = `${ volumeValue * 1000 } dl`;
		} else if (toValue === 'ft3') {
			this.value_2 = `${ volumeValue * 3.531 } ft3`;
		} else if (toValue === 'in3') {
			this.value_2 = `${ volumeValue * 6102 } in3`;
		} else if (toValue === 'yd3') {
			this.value_2 = `${ volumeValue / 7.646 } yd3`;
		}
	}

	FT3Conversions(volumeValue, toValue) {
		if (toValue === 'm3') {
			this.value_2 = `${ volumeValue / 35.315 } m3`;
		} else if (toValue === 'cm3' || toValue === 'ml') {
			this.value_2 = `${ volumeValue * 28316.8 } ${ toValue }`;
		} else if (toValue === 'mm3') {
			this.value_2 = `${ volumeValue * 28316800 } mm3`;
		} else if (toValue === 'l') {
			this.value_2 = `${ volumeValue * 28.316 } l`;
		} else if (toValue === 'cl') {
			this.value_2 = `${ volumeValue * 2831.8 } cl`;
		} else if (toValue === 'dl') {
			this.value_2 = `${ volumeValue * 282.68 } dl`;
		} else if (toValue === 'hl') {
			this.value_2 = `${ volumeValue / 3.531 } hl`;
		} else if (toValue === 'in3') {
			this.value_2 = `${ volumeValue * 1728 } in3`;
		} else if (toValue === 'yd3') {
			this.value_2 = `${ volumeValue / 27 } yd3`;
		}
	}

	IN3Conversions(volumeValue, toValue) {
		if (toValue === 'm3') {
			this.value_2 = `${ volumeValue / 61024 } m3`;
		} else if (toValue === 'cm3' || toValue === 'ml') {
			this.value_2 = `${ volumeValue * 16.387 } ${ toValue }`;
		} else if (toValue === 'mm3') {
			this.value_2 = `${ volumeValue * 16387 } mm3`;
		} else if (toValue === 'l') {
			this.value_2 = `${ volumeValue / 61.024 } l`;
		} else if (toValue === 'cl') {
			this.value_2 = `${ volumeValue * 1.639 } cl`;
		} else if (toValue === 'dl') {
			this.value_2 = `${ volumeValue / 6.102 } dl`;
		} else if (toValue === 'hl') {
			this.value_2 = `${ volumeValue / 6102 } hl`;
		} else if (toValue === 'ft3') {
			this.value_2 = `${ volumeValue / 1728 } ft3`;
		} else if (toValue === 'yd3') {
			this.value_2 = `${ volumeValue / 46656 } yd3`;
		}
	}

	YD3Conversions(volumeValue, toValue) {
		if (toValue === 'm3') {
			this.value_2 = `${ volumeValue / 1.308 } m3`;
		} else if (toValue === 'cm3' || toValue === 'ml') {
			this.value_2 = `${ volumeValue * 764555 } ${ toValue }`;
		} else if (toValue === 'mm3') {
			this.value_2 = `${ volumeValue * 764600000 } mm3`;
		} else if (toValue === 'l') {
			this.value_2 = `${ volumeValue * 765 } l`;
		} else if (toValue === 'cl') {
			this.value_2 = `${ volumeValue * 76455 } cl`;
		} else if (toValue === 'dl') {
			this.value_2 = `${ volumeValue * 7646 } dl`;
		} else if (toValue === 'hl') {
			this.value_2 = `${ volumeValue * 7.646 } hl`;
		} else if (toValue === 'ft3') {
			this.value_2 = `${ volumeValue * 27 } ft3`;
		} else if (toValue === 'in3') {
			this.value_2 = `${ volumeValue * 46656 } in3`;
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
