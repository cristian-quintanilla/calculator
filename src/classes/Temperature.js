import Forms from './Forms';
import { $ } from '../selectors';

class Temperature extends Forms {
	constructor() {
		super();
		this.init();
	}

	init() {
		const calculateTemperature = $('#calculateTemperature');
		calculateTemperature.addEventListener('click', () => this.calculate());
	}

	calculate() {
		const fromTemperature = $('#fromTemperature').value;
		const toTemperature = $('#toTemperature').value;
		const temperatureValue = $('#temperatureValue').value;

		// Validations
		if (temperatureValue === '' || temperatureValue <= 0) {
			$('#temperatureValue').classList.toggle('is-invalid');
			return;
		}

		$('#temperatureValue').classList.toggle('is-invalid', false);

		this.results = $('.results');
		this.value_1 = `${ temperatureValue } ${ '°'.concat(fromTemperature.toUpperCase()) }`;
		this.value_2 = `${ temperatureValue } ${ '°'.concat(toTemperature.toUpperCase()) }`;

		// Conversions
		if (fromTemperature === 'c') {
			this.CelsiusConversions(+temperatureValue, toTemperature);
		} else if (fromTemperature === 'f') {
      this.FahrenheitConversions(+temperatureValue, toTemperature);
    } else if (fromTemperature === 'k') {
      this.KelvinConversions(+temperatureValue, toTemperature);
    }

		// Show results
		this.showResult(this.value_1, this.value_2);

		// Clean the results and show the new results
		if (this.results) {
			this.limpiarHTML(this.results);
			this.results.remove();
		}
	}

  CelsiusConversions(temperatureValue, toTemperature) {
    if (toTemperature === 'f') {
      this.value_2 = `${ (temperatureValue * 9 / 5) + 32 } °F`;
    } else if (toTemperature === 'k') {
      this.value_2 = `${ temperatureValue + 273.15 } °K`;
    }
  }

  FahrenheitConversions(temperatureValue, toTemperature) {
    if (toTemperature === 'c') {
      this.value_2 = `${ (temperatureValue - 32) * 5 / 9 } °C`;
    } else if (toTemperature === 'k') {
      this.value_2 = `${ (temperatureValue - 32) * 5 / 9 + 273.15 } °K`;
    }
  }

  KelvinConversions(temperatureValue, toTemperature) {
    if (toTemperature === 'c') {
      this.value_2 = `${ temperatureValue - 273.15 } °C`;
    } else if (toTemperature === 'f') {
      this.value_2 = `${ (temperatureValue - 273.15) * 9 / 5 + 32 } °F`;
    }
  }
}

export default Temperature;
