import Forms from './Forms';
import { $ } from '../selectors';

class IMC extends Forms {
	constructor() {
		super();
		this.init();
	}

	init() {
		const calculateIMC = $('#calculateIMC');
		calculateIMC.addEventListener('click', () => this.calculate());
	}

	calculate() {
		const imcWeight = $('#imcWeight').value;
		const imcHeight = $('#imcHeight').value;

		// Validations
		if (imcWeight === '' || imcWeight <= 0) {
			$('#imcWeight').classList.toggle('is-invalid');
			return;
		} else if (imcHeight === '' || imcHeight <= 0) {
			$('#imcHeight').classList.toggle('is-invalid');
			return;
		}

		$('#imcWeight').classList.toggle('is-invalid', false);
		$('#imcHeight').classList.toggle('is-invalid', false);

		this.results = $('#results');
		const height = imcHeight / 100;
		this.imc = (imcWeight / (height * height)).toFixed(2);

		// Show results
		this.showResult(this.imc);

		// Clean the results and show the new results
		if (this.results) {
			this.limpiarHTML(this.results);
			this.results.remove();
		}
	}

	showResult(imc) {
		const results = document.createElement('div');
		const imcDiv = document.createElement('div');
		const imcResult = document.createElement('div');
		const imcResultText = document.createElement('div');
		const divContainer = document.createElement('div');
		const span = document.createElement('span');
		const imcInformation = document.createElement('div');
		const imcInformation2 = document.createElement('div');

		let imcText = '';
		let imcClass = '';

		if (imc < 18.5) {
			imcText = 'Peso bajo';
			imcClass = 'text-primary';
		} else if (imc >= 18.5 && imc < 25) {
			imcText = 'Normal';
			imcClass = 'text-success';
		} else if (imc >= 25 && imc < 30) {
			imcText = 'Sobrepeso';
			imcClass = 'text-danger';
		} else if (imc >= 30) {
			imcText = 'Obesidad';
			imcClass = 'text-danger';
		}

		results.setAttribute('id', 'results');
		results.setAttribute('class', 'd-flex flex-column align-items-center py-2 px-4 mt-3 w-75');
		imcDiv.setAttribute('class', 'd-flex justify-content-evenly border-2 border-bottom border-primary w-75');
		imcResult.classList.add('fs-1', 'fw-bold', imcClass);
		imcResult.innerText = imc;
		imcResultText.innerHTML = `<h5>IMC</h5><h6 class='fw-light'>${ imcText }</h6>`;
		divContainer.setAttribute('class', 'w-100');

		imcDiv.appendChild(imcResult);
		imcDiv.appendChild(imcResultText);
		results.appendChild(imcDiv);

		span.setAttribute('class', 'my-2 text-center');
		span.innerText = 'Información';
		imcInformation.setAttribute('class', 'progress');
		imcInformation.setAttribute('style', 'height: 22px');
		imcInformation2.setAttribute('class', 'd-flex justify-content-between');

		imcInformation.innerHTML = `
			<div
				class='progress-bar'
				role='progressbar'
				style='width: 33.333%'
				aria-valuenow='33.333' aria-valuemin='0' aria-valuemax='100'>
				Peso Bajo
			</div>

			<div
				class='progress-bar bg-success'
				role='progressbar'
				style='width: 33.333%'
				aria-valuenow='33.333' aria-valuemin='0' aria-valuemax='100'>
				Peso Normal
			</div>

			<div
				class='progress-bar bg-danger'
				role='progressbar'
				style='width: 33.333%'
				aria-valuenow='33.333' aria-valuemin='0' aria-valuemax='100'>
				Sobrepeso
			</div>
		`;

		imcInformation2.innerHTML = `
			<div class='fw-light'>16.0</div>
			<div class='fw-light'>18.5</div>
			<div class='fw-light'>25.0</div>
			<div class='fw-light'>40.0</div>
		`;

		divContainer.appendChild(imcInformation);
		divContainer.appendChild(imcInformation2);
		results.appendChild(span);
		results.appendChild(divContainer);

		this.sectionForm.appendChild(results);
	}
}

export default IMC;
