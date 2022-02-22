import * as DIVS from '../divs';
import * as $ from '../selectors';
import { show } from '../funciones';

class App {
	constructor() {
		this.initApp();
	}

	initApp() {
		$.data.addEventListener('click', () => show(DIVS.DATA_DIV));
		$.imc.addEventListener('click', () => show(DIVS.IMC_DIV));
		$.date.addEventListener('click', () => show(DIVS.DATE_DIV));
		$.volume.addEventListener('click', () => show(DIVS.VOLUME_DIV));
		$.mass.addEventListener('click', () => show(DIVS.MASS_DIV));
		$.area.addEventListener('click', () => show(DIVS.AREA_DIV));
		$.length.addEventListener('click', () => show(DIVS.LENGTH_DIV));
		$.temperature.addEventListener('click', () => show(DIVS.TEMPERATURE_DIV));
	}
}

export default App;
