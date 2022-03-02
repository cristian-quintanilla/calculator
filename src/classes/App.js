import * as DIVS from '../divs';
import * as $ from '../selectors';
import { show } from '../funciones';

class App {
	constructor() {
		this.initApp();
	}

	initApp() {
		$.data.addEventListener('click', () => show(DIVS.DATA_DIV, 'dataDiv'));
		$.imc.addEventListener('click', () => show(DIVS.IMC_DIV, 'imcDiv'));
		$.date.addEventListener('click', () => show(DIVS.DATE_DIV, 'dateDiv'));
		$.volume.addEventListener('click', () => show(DIVS.VOLUME_DIV, 'volumeDiv'));
		$.mass.addEventListener('click', () => show(DIVS.MASS_DIV, 'massDiv'));
		$.area.addEventListener('click', () => show(DIVS.AREA_DIV, 'areaDiv'));
		$.length.addEventListener('click', () => show(DIVS.LENGTH_DIV, 'lengthDiv'));
		$.temperature.addEventListener('click', () => show(DIVS.TEMPERATURE_DIV, 'temperatureDiv'));
	}
}

export default App;
