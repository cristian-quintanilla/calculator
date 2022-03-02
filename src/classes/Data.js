import Forms from './Forms';
import { $ } from '../selectors';

class Data extends Forms {
	constructor() {
		super();
		this.K = 1024;
		this.init();
	}

	init() {
		const calculateData = $('#calculateData');
		calculateData.addEventListener('click', () => this.calculate());
	}

	calculate() {
		const fromValue = $('#fromData').value;
		const toValue = $('#toData').value;
		const dataValue = $('#dataValue').value;

		// Validations
		if (dataValue === '' || dataValue <= 0) {
			$('#dataValue').classList.toggle('is-invalid');
			return;
		}

		$('#dataValue').classList.toggle('is-invalid', false);

		this.results = $('.results');
		this.value_1 = `${ dataValue } ${ fromValue }`;
		this.value_2 = `${ dataValue } ${ toValue }`;

		// Conversions
		if (fromValue === 'B') {
			this.ByteConversions(dataValue, toValue, this.K);
		} else if (fromValue === 'KB') {
			this.KBConversions(dataValue, toValue, this.K);
		} else if (fromValue === 'MB') {
			this.MBConversions(dataValue, toValue, this.K);
		} else if (fromValue === 'GB') {
			this.GBConversions(dataValue, toValue, this.K);
		} else if (fromValue === 'TB') {
			this.TBConversions(dataValue, toValue, this.K);
		} else if (fromValue === 'PB') {
			this.PBConversions(dataValue, toValue, this.K);
		}

		// Show results
		this.showResult(this.value_1, this.value_2);

		// Clean the results and show the new results
		if (this.results) {
			this.limpiarHTML(this.results);
			this.results.remove();
		}
	}

	ByteConversions(dataValue, toValue, K) {
		if (toValue === 'KB') {
			this.value_2 = `${ dataValue / K } KB`;
		} else if (toValue === 'MB') {
			this.value_2 = `${ dataValue / (K * K) } MB`;
		} else if (toValue === 'GB') {
			this.value_2 = `${ dataValue / (K * K * K) } GB`;
		} else if (toValue === 'TB') {
			this.value_2 = `${ dataValue / (K * K * K * K) } TB`;
		} else if (toValue === 'PB') {
			this.value_2 = `${ dataValue / (K * K * K * K * K) } PB`;
		}
	}

	KBConversions(dataValue, toValue, K) {
		if (toValue === 'B') {
			this.value_2 = `${ dataValue * K } B`;
		} else if (toValue === 'MB') {
			this.value_2 = `${ dataValue * K / (K * K) } MB`;
		} else if (toValue === 'GB') {
			this.value_2 = `${ dataValue * K / (K * K * K) } GB`;
		} else if (toValue === 'TB') {
			this.value_2 = `${ dataValue * K / (K * K * K * K) } TB`;
		} else if (toValue === 'PB') {
			this.value_2 = `${ dataValue * K / (K * K * K * K * K) } PB`;
		}
	}

	MBConversions(dataValue, toValue, K) {
		if (toValue === 'B') {
			this.value_2 = `${ dataValue * K * K } B`;
		} else if (toValue === 'KB') {
			this.value_2 = `${ dataValue * K } KB`;
		} else if (toValue === 'GB') {
			this.value_2 = `${ dataValue * K / (K * K) } GB`;
		} else if (toValue === 'TB') {
			this.value_2 = `${ dataValue * K / (K * K * K) } TB`;
		} else if (toValue === 'PB') {
			this.value_2 = `${ dataValue * K / (K * K * K * K) } PB`;
		}
	}

	GBConversions(dataValue, toValue, K) {
		if (toValue === 'B') {
			this.value_2 = `${ dataValue * K * K * K } B`;
		} else if (toValue === 'KB') {
			this.value_2 = `${ dataValue * K * K } KB`;
		} else if (toValue === 'MB') {
			this.value_2 = `${ dataValue * K } MB`;
		} else if (toValue === 'TB') {
			this.value_2 = `${ dataValue * K * K / (K * K * K) } TB`;
		} else if (toValue === 'PB') {
			this.value_2 = `${ dataValue * K * K / (K * K * K * K) } PB`;
		}
	}

	TBConversions(dataValue, toValue, K) {
		if (toValue === 'B') {
			this.value_2 = `${ dataValue * K * K * K * K } B`;
		} else if (toValue === 'KB') {
			this.value_2 = `${ dataValue * K * K * K } KB`;
		} else if (toValue === 'MB') {
			this.value_2 = `${ dataValue * K * K } MB`;
		} else if (toValue === 'GB') {
			this.value_2 = `${ dataValue * K } GB`;
		} else if (toValue === 'PB') {
			this.value_2 = `${ dataValue * K * K / (K * K * K) } PB`;
		}
	}

	PBConversions(dataValue, toValue, K) {
		if (toValue === 'B') {
			this.value_2 = `${ dataValue * K * K * K * K * K } B`;
		} else if (toValue === 'KB') {
			this.value_2 = `${ dataValue * K * K * K * K } KB`;
		} else if (toValue === 'MB') {
			this.value_2 = `${ dataValue * K * K * K } MB`;
		} else if (toValue === 'GB') {
			this.value_2 = `${ dataValue * K * K } GB`;
		} else if (toValue === 'TB') {
			this.value_2 = `${ dataValue * K } TB`;
		}
	}
}

export default Data;
