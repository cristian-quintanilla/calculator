import { sectionForm } from './selectors';

import Data from './classes/Data';
import DateClass from './classes/Date';
import IMC from './classes/IMC';
import Mass from './classes/Mass';
import Volume from './classes/Volume';

export function show(div, id) {
	limpiarHTML();
	sectionForm.innerHTML = div;

	showForm(id);
}

function showForm(id) {
	switch (id) {
		case 'dataDiv':
			new Data();
			break;
		case 'imcDiv':
			new IMC();
			break;
		case 'dateDiv':
			new DateClass();
			break;
		case 'volumeDiv':
			new Volume();
			break;
		case 'massDiv':
			new Mass();
			break;
	}
}

function limpiarHTML() {
	while (sectionForm.firstChild) {
		sectionForm.removeChild(sectionForm.firstChild);
	}
}

