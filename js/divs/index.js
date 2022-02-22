export const DATA_DIV = `
	<h3 class='mb-4'>Conversor de Datos</h3>

	<div class='row'>
		<div class='col-6 col-md-3 p-1'>
			<input type='number' class='form-control' value='1' min='1' />
		</div>

		<div class='col-6 col-md-3 p-1'>
			<select class='form-select'>
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
			<select class='form-select'>
				<option value='B'>Byte</option>
				<option value='KB'>Kilobyte</option>
				<option value='MB'>Megabyte</option>
				<option value='GB'>Gigabyte</option>
				<option value='TB'>Terabyte</option>
				<option value='PB'>Petabyte</option>
			</select>
		</div>

		<div class='col d-grid p-1'>
			<button class='btn btn-primary'>Calcular</button>
		</div>
	</div>

	<div class='results bg-light py-2 px-4 mt-3 w-75 card'>
		<div class='fw-bold fs-4 text-primary'>1 Byte</div>
		<span class='text-success fs-6'>es igual a</span>
		<div class='fw-bold fs-4 text-primary'>0.0000976 Kilobyte</div>
	</div>
`;

export const IMC_DIV = `
	<h3 class='mb-4'>IMC</h3>

	<div class='row'>
		<div class='d-flex align-items-center col-12 col-md-6 p-1'>
			<label for='imcWeight' class='flex-fill w-50'>Peso (KG):</label>
			<input type='number' class='form-control w-75' id='imcWeight' placeholder='Peso...' />
		</div>

		<div class='d-flex align-items-center col-12 col-md-6 p-1'>
			<label for='imcHeight' class='flex-fill w-50'>Altura (CM):</label>
			<input type='number' class='form-control w-75' id='imcHeight' placeholder='Altura...' />
		</div>

		<div class='col d-grid p-2'>
			<button class='btn btn-block btn-primary'>Calcular</button>
		</div>
	</div>

	<div class='d-flex justify-content-center py-2 px-4 mt-3 w-75'>
		<div class='d-flex justify-content-evenly border-2 border-bottom border-primary w-50'>
			<div class='fs-1 fw-bold text-primary'>20.8</div>
			<div>
				<h5>IMC</h5>
				<h6 class='fw-light'>Normal</h6>
			</div>
		</div>
	</div>

	<span class='my-2'>Información</span>

	<div class='progress w-75' style='height: 22px'>
		<div
			class='progress-bar'
			role='progressbar'
			style='width: 33%'
			aria-valuenow='33' aria-valuemin='0' aria-valuemax='100'>
			Peso Bajo
		</div>

		<div
			class='progress-bar bg-success'
			role='progressbar'
			style='width: 33%'
			aria-valuenow='33' aria-valuemin='0' aria-valuemax='100'>
			Peso Normal
		</div>

		<div
			class='progress-bar bg-danger'
			role='progressbar'
			style='width: 33%'
			aria-valuenow='33' aria-valuemin='0' aria-valuemax='100'>
			Sobrepeso
		</div>
	</div>

	<div class='d-flex justify-content-between w-50'>
		<div class='fw-light'>16</div>
		<div class='fw-light'>18.5</div>
		<div class='fw-light'>25.0</div>
		<div class='fw-light'>40.0</div>
	</div>
`;

export const DATE_DIV = `
	<h3 class='mb-4'>Fecha</h3>

	<div class='row d-flex align-items-center'>
		<div class='col-6 col-md-2 p-1'>
			<label for='fromDate'>Desde:</label>
		</div>

		<div class='col-6 col-md-4 p-1'>
			<input type='date' class='form-control' id='fromDate'>
		</div>

		<div class='col-6 col-md-2 p-1'>
			<label for='toDate'>Hasta:</label>
		</div>

		<div class='col-6 col-md-4 p-1'>
			<input type='date' class='form-control' id='toDate'>
		</div>

		<div class='col d-grid p-1'>
			<button class='btn btn-primary'>Calcular</button>
		</div>
	</div>

	<div class='d-flex flex-column align-items-center gap-2 pt-2 pb-4 mt-3 w-75 card'>
		<div class='fw-bold fs-2 text-primary'>Diferencia</div>
		<div class='d-flex justify-content-evenly py-2 border-2 border-bottom border-top border-primary w-100'>
			<div class='d-flex flex-column align-items-center'>
				<span>Años</span>
				<h3>0</h3>
			</div>
			<div class='d-flex flex-column align-items-center'>
				<span>Meses</span>
				<h3>0</h3>
			</div>
			<div class='d-flex flex-column align-items-center'>
				<span>Días</span>
				<h3>0</h3>
			</div>
		</div>
	</div>
`;

export const VOLUME_DIV = `
	<h3 class='mb-4'>Convertidor de volumen</h3>

	<div class='row'>
		<div class='col-6 col-md-3 p-1'>
			<input type='number' class='form-control' value='1' min='1' />
		</div>

		<div class='col-6 col-md-3 p-1'>
			<select class='form-select'>
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
			<select class='form-select'>
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
			<button class='btn btn-primary'>Calcular</button>
		</div>
	</div>

	<div class='results bg-light py-2 px-4 mt-3 w-75 card'>
		<div class='fw-bold fs-4 text-primary'>1 m3</div>
		<span class='text-success fs-6'>es igual a</span>
		<div class='fw-bold fs-4 text-primary'>1,000,000 cm3</div>
	</div>
`;

export const MASS_DIV = `
	<h3 class='mb-4'>Convertidor de masa</h3>

	<div class='row'>
		<div class='col-6 col-md-3 p-1'>
			<input type='number' class='form-control' value='1' min='1' />
		</div>

		<div class='col-6 col-md-3 p-1'>
			<select class='form-select'>
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
			<select class='form-select'>
				<option value='t'>Tonelada (t)</option>
				<option value='kg'>Kilogramo (kg)</option>
				<option value='g'>Gramo (g)</option>
				<option value='mg'>Miligramo (mg)</option>
				<option value='lb'>Libra (lb)</option>
				<option value='oz'>Onza (oz)</option>
			</select>
		</div>

		<div class='col d-grid p-1'>
			<button class='btn btn-primary'>Calcular</button>
		</div>
	</div>

	<div class='results bg-light py-2 px-4 mt-3 w-75 card'>
		<div class='fw-bold fs-4 text-primary'>1 kg</div>
		<span class='text-success fs-6'>es igual a</span>
		<div class='fw-bold fs-4 text-primary'>1,000 g</div>
	</div>
`;

export const AREA_DIV = `
	<h3 class='mb-4'>Convertidor de área</h3>

	<div class='row'>
		<div class='col-6 col-md-3 p-1'>
			<input type='number' class='form-control' value='1' min='1' />
		</div>

		<div class='col-6 col-md-3 p-1'>
			<select class='form-select'>
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
			<select class='form-select'>
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
			<button class='btn btn-primary'>Calcular</button>
		</div>
	</div>

	<div class='results bg-light py-2 px-4 mt-3 w-75 card'>
		<div class='fw-bold fs-4 text-primary'>1 m2</div>
		<span class='text-success fs-6'>es igual a</span>
		<div class='fw-bold fs-4 text-primary'>10,000 cm2</div>
	</div>
`;

export const LENGTH_DIV = `
	<h3 class='mb-4'>Convertidor de longitud</h3>

	<div class='row'>
		<div class='col-6 col-md-3 p-1'>
			<input type='number' class='form-control' value='1' min='1' />
		</div>

		<div class='col-6 col-md-3 p-1'>
			<select class='form-select'>
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
			<select class='form-select'>
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
			<button class='btn btn-primary'>Calcular</button>
		</div>
	</div>

	<div class='results bg-light py-2 px-4 mt-3 w-75 card'>
		<div class='fw-bold fs-4 text-primary'>1 km</div>
		<span class='text-success fs-6'>es igual a</span>
		<div class='fw-bold fs-4 text-primary'>100,000 cm</div>
	</div>
`;

export const TEMPERATURE_DIV = `
	<h3 class='mb-4'>Convertidor de temperatura</h3>

	<div class='row'>
		<div class='col-6 col-md-3 p-1'>
			<input type='number' class='form-control' value='1' min='1' />
		</div>

		<div class='col-6 col-md-3 p-1'>
			<select class='form-select'>
				<option value='c'>Celsius (c)</option>
				<option value='f'>Fahrenheit (f)</option>
				<option value='k'>Kelvin (k)</option>
			</select>
		</div>

		<div class='col-12 col-md-1 d-flex align-items-center justify-content-center p-1'>
			<i class='bi bi-arrow-right fs-4 fw-bold'></i>
		</div>

		<div class='col-12 col-md-3 p-1'>
			<select class='form-select'>
				<option value='c'>Celsius (c)</option>
				<option value='f'>Fahrenheit (f)</option>
				<option value='k'>Kelvin (k)</option>
			</select>
		</div>

		<div class='col d-grid p-1'>
			<button class='btn btn-primary'>Calcular</button>
		</div>
	</div>

	<div class='results bg-light py-2 px-4 mt-3 w-75 card'>
		<div class='fw-bold fs-4 text-primary'>1 °C</div>
		<span class='text-success fs-6'>es igual a</span>
		<div class='fw-bold fs-4 text-primary'>33.8 °F</div>
	</div>
`;
