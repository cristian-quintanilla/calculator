import { sectionForm } from './selectors';

import Data from './classes/Data';

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
		// case 'imcDiv':
		// 	new IMC();
		// 	break;
		default:
			new Data();
	}
}

function limpiarHTML() {
	while (sectionForm.firstChild) {
		sectionForm.removeChild(sectionForm.firstChild);
	}
}

