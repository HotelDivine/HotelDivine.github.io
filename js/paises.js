document.addEventListener('DOMContentLoaded', ()=>{
	// Hacer una solicitud a la API
	fetch('https://restcountries.com/v3.1/all')
	  .then(response => response.json())
	  .then(json => {
	    // Obtener el elemento SELECT del DOM
	    const select = document.getElementById('inputState');
	    let fragmento = document.createDocumentFragment();
	    // Iterar a través de los datos de los países
	    json.forEach(pais => {
	      // Crear una opción para el país
	      const option = document.createElement('option');
	      option.text = pais.name.common;
	      option.value = pais.name.common;

	      fragmento.appendChild(option);
	    });
	    select.appendChild(fragmento);
	  });
})