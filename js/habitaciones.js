document.addEventListener('DOMContentLoaded',()=>{
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
                        // let total = document.getElementById("precioso");
                        // total.innerHTML = price;

            let fecha1input = document.getElementById('cantDini');
            let fecha2input = document.getElementById('cantDfin');

            let fechaActual = new Date();
            let dia = fechaActual.getDate().toString().padStart(2, '0');
            let mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0');
            let anio = fechaActual.getFullYear().toString();
            
            let fechaFinal1 = `${anio}-${mes}-${dia}`;
            fecha1input.setAttribute('min', fechaFinal1);
            fecha1input.addEventListener("change",()=>{
                fecha2input.removeAttribute("disabled");
                fecha2input.setAttribute('min', fecha1input.value);
                fecha2input.addEventListener("change",()=>{
                    let fecha1 = new Date(fecha1input.value);
                    let fecha2 = new Date(fecha2input.value);
                    let diferenciaEnMilisegundos = Math.abs(fecha2.getTime() - fecha1.getTime());
                    let diasEntreFechas = Math.ceil(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24));

                    console.log(diasEntreFechas);
                    
                    
                });
            });




          let buttons = document.getElementsByClassName('btn-reservation');
          for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', function() {
              console.log(buttons[i].value);

              let btnId = buttons[i].value;
              fetch('json/habitaciones.json')
                .then((response) => response.json())
                .then((json) => {
                    
                    let precio = json[btnId]["precio"];
                    let total = document.getElementById("precio");
                    total.innerHTML = precio;


                })
                
            });
          }
        const habitacionesInput = document.getElementById("cantH");
        const outputHabitaciones = document.getElementById("cantHm");
        habitacionesInput.addEventListener("input", function () {
            outputHabitaciones.textContent = habitacionesInput.value;
        });

        const mayoresInput = document.getElementById("cantMay");
        const outputMayores = document.getElementById("cantMaym");
        mayoresInput.addEventListener("input", function () {
            outputMayores.textContent = mayoresInput.value;
        });

        const menoresInput = document.getElementById("cantMen");
        const outputMenores = document.getElementById("cantMenm");
        menoresInput.addEventListener("input", function () {
            outputMenores.textContent = menoresInput.value;
        });

        const diasInput = document.getElementById("cantD");
        const outputDias = document.getElementById("cantDm");

    }

});
});