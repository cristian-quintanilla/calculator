import Forms from './Forms';
import { $ } from '../selectors';

class Mass extends Forms {
	constructor() {
		super();
		this.init();
	}

	init() {
		const calculateMass = $('#calculateMass');
		calculateMass.addEventListener('click', () => this.calculate());
	}

	calculate() {
		const fromValue = $('#fromMass').value;
		const toMass = $('#toMass').value;
		const massValue = $('#massValue').value;

		// Validations
		if (massValue === '' || massValue <= 0) {
			$('#massValue').classList.toggle('is-invalid');
			return;
		}

		$('#massValue').classList.toggle('is-invalid', false);

		this.results = $('.results');
		this.value_1 = `${ massValue } ${ fromValue }`;
		this.value_2 = `${ massValue } ${ toMass }`;

    // t, kg, g, mg, lb, oz
		// Convertions
		if (fromValue === 't') {
			this.TConvertions(massValue, toMass);
		}

		// Show results
		this.showResult(this.value_1, this.value_2);

		// Clean the results and show the new results
		if (this.results) {
			this.limpiarHTML(this.results);
			this.results.remove();
		}
	}

  TConvertions(massValue, toMass) {
    if (toMass === 'kg') {
      this.value_2 = `${ massValue * 1000 } kg`;
    } else if (toMass === 'g') {
      this.value_2 = `${ massValue * 1000000 } g`;
    } else if (toMass === 'mg') {
      this.value_2 = `${ massValue * 1000000000 } mg`;
    } else if (toMass === 'lb') {
      this.value_2 = `${ massValue * 2204.62 } lb`;
    } else if (toMass === 'oz') {
      this.value_2 = `${ massValue * 35273.962 } oz`;
    }
  }

	showResult(value_1, value_2) {
		const divResult = document.createElement('div');
		const firstRusult = document.createElement('div');
		const spanMessage = document.createElement('span');
		const secondRusult = document.createElement('div');

		divResult.setAttribute('class', 'results bg-light py-2 px-4 mt-3 w-75 card');
		firstRusult.setAttribute('class', 'fw-bold fs-4 text-primary');
		firstRusult.innerText = value_1;

		spanMessage.setAttribute('class', 'text-success fs-6');
		spanMessage.innerText = 'es igual a';

		secondRusult.setAttribute('class', 'fw-bold fs-4 text-primary');
		secondRusult.innerText = value_2;

		divResult.appendChild(firstRusult);
		divResult.appendChild(spanMessage);
		divResult.appendChild(secondRusult);
		this.sectionForm.appendChild(divResult);
	}
}

export default Mass;
