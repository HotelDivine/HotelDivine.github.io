$.ajax({
    url: 'funcionalidades/habitaciones.json',
    type: "GET",
    contentType: false,
    processData: false,
    success: function (json) {

        let contenedor = document.getElementById('all-rooms');

        for (var response in json) {
            let data = json[response];
            let title = data["titulo"];
            let description = data["descripcion"];
            let ambientes = data["ambientes"];
            let price = data["precio"];
            let vacante = data["vacante"];

            let calificacion = data["calificacion"];
            let top = data["top"];

            // Crear el DOM
            let room = document.createElement('div');
            room.classList.add('room', 'col-md-12', 'pad-0');
            room.innerHTML = `
            <div class="room inside d-flex justify-content-between p-4 container-xl">
                <div class="room-media col-md-5">
                    <div class="room-media-img object-fit-cover justify-content-start">
                        <img src="images/rooms/gallery-1-1.jpg" class="w-100 h-100 object-fit-cover" id="room-image">
                        <div class="calification">
                            <p>
                                <span id="calification">${calificacion}</span>
                                <i class="bi bi-star-fill"></i>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="room-content col-md-6 justify-content-between d-flex flex-column">
                    <h3 class="title" id="title">${title}</h3>
                    <p class="description" id="description">${description}</p>
                    <div class="room-features justify-content-between d-flex" id="room-reatures">
                        <div class="justify-content-between d-flex align-items-center prices mb-3">
                            <i class="bi bi-bookmark-star-fill"></i>&nbsp;
                            <span id="top">Top ${top}</span>
                        </div>
                        <div class="justify-content-between d-flex align-items-center prices mb-3">
                            <p>Desde* </p>&nbsp;
                            <p id="currency" class="price">$</p>
                            <span id="price" class="price">${price}</span>
                        </div>
                    </div>
                    <!-- Button Modal -->
                    <button type="button" class="btn btn-gold" data-bs-toggle="modal" data-bs-target="#exampleModalToggle">
                        Comenzar reserva
                    </button>
                </div>
            </div>`;

            contenedor.appendChild(room);
        }

        let botones = document.querySelectorAll(".btn-reservation");

        botones.forEach(function (boton) {
            boton.addEventListener("click", mostrarAlerta);
        });
        
        // function mostrarAlerta() {
        //     alert("¡Reserva iniciada!");
        // }
    }
})


