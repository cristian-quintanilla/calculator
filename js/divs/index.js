export const DATA_DIV = `
	<h3 class='mb-4'>Conversor de Datos</h3>

	<div class='row'>
		<div class='col-6 col-md-3 p-1'>
			<input id='dataValue' type='number' class='form-control' value='1' min='1' />
		</div>

		<div class='col-6 col-md-3 p-1'>
			<select id='fromData' class='form-select'>
				<option value='B'>Byte</option>
				<option value='KB'>Kilobyte</option>
				<option value='MB'>Megabyte</option>
				<option value='GB'>Gigabyte</option>
				<option value='TB'>Terabyte</option>
				<option value='PB'>Petabyte</option>
			</select>
		</div>

		<div class='col-12 col-md-1 d-flex align-items-center justify-content-center p-1'>
			<i class='bi bi-arrow-right fs-4 fw-bold'></i>
		</div>

		<div class='col-12 col-md-3 p-1'>
			<select id='toData' class='form-select'>
				<option value='B'>Byte</option>
				<option value='KB'>Kilobyte</option>
				<option value='MB'>Megabyte</option>
				<option value='GB'>Gigabyte</option>
				<option value='TB'>Terabyte</option>
				<option value='PB'>Petabyte</option>
			</select>
		</div>

		<div class='col d-grid p-1'>
			<button id='calculateData' class='btn btn-primary'>Calcular</button>
		</div>
	</div>
`;

export const IMC_DIV = `
	<h3 class='mb-4'>IMC</h3>

	<div class='row'>
		<div class='d-flex align-items-center col-12 col-md-6 p-1'>
			<label for='imcWeight' class='flex-fill w-50'>Peso (KG):</label>
			<input id='imcWeight' type='number' min='1' class='form-control w-75' placeholder='Peso...' />
		</div>

		<div class='d-flex align-items-center col-12 col-md-6 p-1'>
			<label for='imcHeight' class='flex-fill w-50'>Altura (CM):</label>
			<input id='imcHeight' type='number' min='1' class='form-control w-75'placeholder='Altura...' />
		</div>

		<div class='col d-grid p-2'>
			<button id='calculateIMC' class='btn btn-block btn-primary'>Calcular</button>
		</div>
	</div>
`;

export const DATE_DIV = `
	<h3 class='mb-4'>Fecha</h3>

	<div class='row d-flex align-items-center'>
		<div class='col-6 col-md-2 p-1'>
			<label for='fromDate'>Desde:</label>
		</div>

		<div class='col-6 col-md-4 p-1'>
			<input type='date' class='form-control' id='fromDate' />
		</div>

		<div class='col-6 col-md-2 p-1'>
			<label for='toDate'>Hasta:</label>
		</div>

		<div class='col-6 col-md-4 p-1'>
			<input type='date' class='form-control' id='toDate' />
		</div>

		<div class='col d-grid p-1'>
			<button id='calculateDate' class='btn btn-primary'>Calcular</button>
		</div>
	</div>
`;

export const VOLUME_DIV = `
	<h3 class='mb-4'>Convertidor de volumen</h3>

	<div class='row'>
		<div class='col-6 col-md-3 p-1'>
			<input id='volumeValue' type='number' class='form-control' value='1' min='1' />
		</div>

		<div class='col-6 col-md-3 p-1'>
			<select id='fromVolume' class='form-select'>
				<option value='m3'>Metro cúbico (m3)</option>
				<option value='cm3'>Centímetro cúbico (cm3)</option>
				<option value='mm3'>Milímetro cúbico (mm3)</option>
				<option value='l'>Litro (l)</option>
				<option value='ml'>Mililitro (ml)</option>
				<option value='cl'>Centilitro (cl)</option>
				<option value='dl'>Decilitro (dl)</option>
				<option value='hl'>Hectolitro (hl)</option>
				<option value='ft3'>Pie cúbico (ft3)</option>
				<option value='in3'>Pulgada cúbica (in3)</option>
				<option value='yd3'>Yarda cúbica (yd3)</option>
			</select>
		</div>

		<div class='col-12 col-md-1 d-flex align-items-center justify-content-center p-1'>
			<i class='bi bi-arrow-right fs-4 fw-bold'></i>
		</div>

		<div class='col-12 col-md-3 p-1'>
			<select id='toVolume' class='form-select'>
				<option value='m3'>Metro cúbico (m3)</option>
				<option value='cm3'>Centímetro cúbico (cm3)</option>
				<option value='mm3'>Milímetro cúbico (mm3)</option>
				<option value='l'>Litro (l)</option>
				<option value='ml'>Mililitro (ml)</option>
				<option value='cl'>Centilitro (cl)</option>
				<option value='dl'>Decilitro (dl)</option>
				<option value='hl'>Hectolitro (hl)</option>
				<option value='ft3'>Pie cúbico (ft3)</option>
				<option value='in3'>Pulgada cúbica (in3)</option>
				<option value='yd3'>Yarda cúbica (yd3)</option>
			</select>
		</div>

		<div class='col d-grid p-1'>
			<button id='calculateVolume' class='btn btn-primary'>Calcular</button>
		</div>
	</div>
`;

export const MASS_DIV = `
	<h3 class='mb-4'>Convertidor de masa</h3>

	<div class='row'>
		<div class='col-6 col-md-3 p-1'>
			<input id='massValue' type='number' class='form-control' value='1' min='1' />
		</div>

		<div class='col-6 col-md-3 p-1'>
			<select id='fromMass' class='form-select'>
				<option value='t'>Tonelada (t)</option>
				<option value='kg'>Kilogramo (kg)</option>
				<option value='g'>Gramo (g)</option>
				<option value='mg'>Miligramo (mg)</option>
				<option value='lb'>Libra (lb)</option>
				<option value='oz'>Onza (oz)</option>
			</select>
		</div>

		<div class='col-12 col-md-1 d-flex align-items-center justify-content-center p-1'>
			<i class='bi bi-arrow-right fs-4 fw-bold'></i>
		</div>

		<div class='col-12 col-md-3 p-1'>
			<select id='toMass' class='form-select'>
				<option value='t'>Tonelada (t)</option>
				<option value='kg'>Kilogramo (kg)</option>
				<option value='g'>Gramo (g)</option>
				<option value='mg'>Miligramo (mg)</option>
				<option value='lb'>Libra (lb)</option>
				<option value='oz'>Onza (oz)</option>
			</select>
		</div>

		<div class='col d-grid p-1'>
			<button id='calculateMass' class='btn btn-primary'>Calcular</button>
		</div>
	</div>
`;

export const AREA_DIV = `
	<h3 class='mb-4'>Convertidor de área</h3>

	<div class='row'>
		<div class='col-6 col-md-3 p-1'>
			<input id='areaValue' type='number' class='form-control' value='1' min='1' />
		</div>

		<div class='col-6 col-md-3 p-1'>
			<select id='fromArea' class='form-select'>
				<option value='km2'>Kilómetro cuadrado (km2)</option>
				<option value='ha'>Hectárea (ha)</option>
				<option value='m2'>Metro cuadrado (m2)</option>
				<option value='cm2'>Centímetro cuadrado (cm2)</option>
				<option value='mm2'>Milímetro cuadrado (mm2)</option>
				<option value='in2'>Pulgada cuadrada (in2)</option>
				<option value='yd2'>Yarda cuadrada (yd2)</option>
				<option value='ft2'>Pie cuadrado (ft2)</option>
			</select>
		</div>

		<div class='col-12 col-md-1 d-flex align-items-center justify-content-center p-1'>
			<i class='bi bi-arrow-right fs-4 fw-bold'></i>
		</div>

		<div class='col-12 col-md-3 p-1'>
			<select id='toArea' class='form-select'>
				<option value='km2'>Kilómetro cuadrado (km2)</option>
				<option value='ha'>Hectárea (ha)</option>
				<option value='m2'>Metro cuadrado (m2)</option>
				<option value='cm2'>Centímetro cuadrado (cm2)</option>
				<option value='mm2'>Milímetro cuadrado (mm2)</option>
				<option value='in2'>Pulgada cuadrada (in2)</option>
				<option value='yd2'>Yarda cuadrada (yd2)</option>
				<option value='ft2'>Pie cuadrado (ft2)</option>
			</select>
		</div>

		<div class='col d-grid p-1'>
			<button id='calculateArea' class='btn btn-primary'>Calcular</button>
		</div>
	</div>
`;

export const LENGTH_DIV = `
	<h3 class='mb-4'>Convertidor de longitud</h3>

	<div class='row'>
		<div class='col-6 col-md-3 p-1'>
			<input id='lengthValue' type='number' class='form-control' value='1' min='1' />
		</div>

		<div class='col-6 col-md-3 p-1'>
			<select id='fromLength' class='form-select'>
				<option value='km'>Kilómetro (km)</option>
				<option value='m'>Metro (m)</option>
				<option value='cm'>Centímetro (cm)</option>
				<option value='mm'>Milímetro (mm)</option>
				<option value='in'>Pulgada (in)</option>
				<option value='ft'>Pie (ft)</option>
				<option value='yd'>Yarda (yd)</option>
				<option value='mi'>Milla (mi)</option>
			</select>
		</div>

		<div class='col-12 col-md-1 d-flex align-items-center justify-content-center p-1'>
			<i class='bi bi-arrow-right fs-4 fw-bold'></i>
		</div>

		<div class='col-12 col-md-3 p-1'>
			<select id='toLength' class='form-select'>
				<option value='km'>Kilómetro (km)</option>
				<option value='m'>Metro (m)</option>
				<option value='cm'>Centímetro (cm)</option>
				<option value='mm'>Milímetro (mm)</option>
				<option value='in'>Pulgada (in)</option>
				<option value='ft'>Pie (ft)</option>
				<option value='yd'>Yarda (yd)</option>
				<option value='mi'>Milla (mi)</option>
			</select>
		</div>

		<div class='col d-grid p-1'>
			<button id='calculateLength' class='btn btn-primary'>Calcular</button>
		</div>
	</div>
`;

export const TEMPERATURE_DIV = `
	<h3 class='mb-4'>Convertidor de temperatura</h3>

	<div class='row'>
		<div class='col-6 col-md-3 p-1'>
			<input id='temperatureValue' type='number' class='form-control' value='1' min='1' />
		</div>

		<div class='col-6 col-md-3 p-1'>
			<select id='fromTemperature' class='form-select'>
				<option value='c'>Celsius (c)</option>
				<option value='f'>Fahrenheit (f)</option>
				<option value='k'>Kelvin (k)</option>
			</select>
		</div>

		<div class='col-12 col-md-1 d-flex align-items-center justify-content-center p-1'>
			<i class='bi bi-arrow-right fs-4 fw-bold'></i>
		</div>

		<div class='col-12 col-md-3 p-1'>
			<select id='toTemperature' class='form-select'>
				<option value='c'>Celsius (c)</option>
				<option value='f'>Fahrenheit (f)</option>
				<option value='k'>Kelvin (k)</option>
			</select>
		</div>

		<div class='col d-grid p-1'>
			<button id='calculateTemperature' class='btn btn-primary'>Calcular</button>
		</div>
	</div>
`;
