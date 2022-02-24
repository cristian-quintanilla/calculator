import Forms from './Forms';
import { $ } from '../selectors';

class Date extends Forms {
	constructor() {
		super();
		this.init();
		this.convertions = {
			years: 31536000000,
			months: 2628000000,
			days: 86400000,
		}
	}

	init() {
		const calculateDate = $('#calculateDate');
		calculateDate.addEventListener('click', () => this.calculate());
	}

	calculate() {
		const fromDate = $('#fromDate').valueAsDate;
		const toDate = $('#toDate').valueAsDate;

		// Validations
		if (fromDate === '') {
			$('#fromDate').classList.toggle('is-invalid');
			return;
		} else if (toDate === '') {
			$('#toDate').classList.toggle('is-invalid');
			return;
		}

		$('#fromDate').classList.toggle('is-invalid', false);
		$('#toDate').classList.toggle('is-invalid', false);

		this.results = $('#results');

		// Calculate the difference
		let diff = Math.abs(toDate - fromDate);
		const years = Math.floor(diff / this.convertions.years);

		diff = diff - (years * this.convertions.years);
		const months = Math.floor(diff / this.convertions.months)

		diff = diff - (months * this.convertions.months);
		const days = Math.floor(diff / this.convertions.days)

		// Show results
		this.showResult(years, months, days);

		// Clean the results and show the new results
		if (this.results) {
			this.limpiarHTML(this.results);
			this.results.remove();
		}
	}

	showResult(years, months, days) {
		const resultDiv = document.createElement('div');
		const diferenciaDiv = document.createElement('div');
		const datosDiv = document.createElement('div');
		const yearsDiv = document.createElement('div');
		const monthsDiv = document.createElement('div');
		const daysDiv = document.createElement('div');

		resultDiv.id = 'results';
		resultDiv.setAttribute('class', 'd-flex flex-column align-items-center gap-2 pt-2 pb-4 mt-3 w-75 card');

		diferenciaDiv.setAttribute('class', 'fw-bold fs-2 text-primary');
		diferenciaDiv.innerHTML = 'Diferencia';

		datosDiv.setAttribute('class', 'd-flex justify-content-evenly py-2 border-2 border-bottom border-top border-primary w-100');
		yearsDiv.setAttribute('class', 'd-flex flex-column align-items-center');
		yearsDiv.innerHTML = `<span>Años</span><h2 class='text-success fw-bold'>${ years }</h2>`;
		monthsDiv.setAttribute('class', 'd-flex flex-column align-items-center');
		monthsDiv.innerHTML = `<span>Meses</span><h2 class='text-success fw-bold'>${ months }</h2>`;
		daysDiv.setAttribute('class', 'd-flex flex-column align-items-center');
		daysDiv.innerHTML = `<span>Días</span><h2 class='text-success fw-bold'>${ days }</h2>`;

		datosDiv.appendChild(yearsDiv);
		datosDiv.appendChild(monthsDiv);
		datosDiv.appendChild(daysDiv);
		resultDiv.appendChild(diferenciaDiv);
		resultDiv.appendChild(datosDiv);

		this.sectionForm.appendChild(resultDiv);
	}
}

export default Date;
