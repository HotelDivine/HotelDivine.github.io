$.ajax({
    url: 'json/habitaciones.json',
    type: "GET",
    contentType: false,
    processData: false,
    success: function (json) {

        let contenedor = document.getElementById('all-rooms');

        for (var response in json) {
            let data = json[response];
            let title = data["titulo"];
            let imagen = data["imagen"];
            let description = data["descripcion"];
            let price = data["precio"];
            let id = data["id"];
            let calificacion = data["calificacion"];
            let top = data["top"];

            // Crear el DOM
            let room = document.createElement('div');
            room.classList.add('room-bg', 'd-flex', 'justify-content-center');

            room.innerHTML = `
            <div class="room-section d-md-flex gx-3 align-content-center justify-content-between">
    
                <div class="room-section__media d-inline">
                    <img src= ${imagen} alt="imagen multimedia" id="ROOM-IMAGE">
                    <div class="room-section__media--calificacion">
                        <p class="d-inline">
                            <span id="calification">${calificacion}</span>
                            <i class="bi bi-star-fill"></i>
                        </p>
                    </div>
                </div>

                <div class="room-section__info d-md-flex d-inline flex-md-column justify-content-between">
                    <h3 id="title" class="room-title">${title}</h3>
                    <p id="description">${description}</p>
                    <div class="room-section__info--valor d-flex justify-content-between">
                        <p>
                            <i class="bi bi-bookmark-star-fill"></i>
                            <span id="top">Top ${top}</span>
                        </p>
                        <p>
                            <small>Desde</small>
                            <span class="room-price">
                                $
                                <span id="price">${price}</span>
                            </span>
                            </p>
                            </div>
                            <button type="button" value="${id}" class="btn btn-gold btn-reservation" id="btn-reservation"" data-bs-toggle="modal" data-bs-target="#exampleModalToggle">
                            Comenzar reserva
                            </button>
                            </div>`;


                            
                            contenedor.appendChild(room);
                            
                        }
    }

});