const btnSiguiente = document.querySelector('#exampleModalToggle2 .btn.btn-gold');
btnSiguiente.addEventListener('click', function (event) {
    event.preventDefault();
    const inputNombre = document.getElementById('nombre');
    const inputApellido = document.getElementById('apellido');
    const inputEmail = document.getElementById('inputEmail3');
    const inputPais = document.getElementById('inputState');
    const nombre = inputNombre.value.trim();
    const apellido = inputApellido.value.trim();
    const pais = inputPais.value.trim();
    const email = inputEmail.value.trim();

    if (nombre == "" || apellido == "" || pais == "Seleccionar..." || email == "") {
        alert('Por favor, complete todos los campos.');
        return;
    }
    // agregar código para enviar el formulario si todos los campos son válidos
});