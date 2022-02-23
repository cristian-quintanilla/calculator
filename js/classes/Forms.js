import { sectionForm } from '../selectors';

class Forms {
	constructor() {
		this.sectionForm = sectionForm;
	}

	limpiarHTML(tag) {
		while (tag.firstChild) {
			tag.removeChild(tag.firstChild);
		}
	}
}

export default Forms;
