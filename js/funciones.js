import { sectionForm } from './selectors';

import Data from './classes/Data';
import IMC from './classes/IMC';
import DateClass from './classes/Date';

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
	}
}

function limpiarHTML() {
	while (sectionForm.firstChild) {
		sectionForm.removeChild(sectionForm.firstChild);
	}
}

