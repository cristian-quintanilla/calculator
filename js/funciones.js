import { sectionForm } from './selectors';

export function show(div) {
	limpiarHTML();

	sectionForm.innerHTML = div;
}

function limpiarHTML() {
	while (sectionForm.firstChild) {
		sectionForm.removeChild(sectionForm.firstChild);
	}
}

