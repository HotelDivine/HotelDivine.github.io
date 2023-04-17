document.addEventListener('DOMContentLoaded', () => {
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

            let nombre = document.getElementById("nombre");
            let apellido = document.getElementById("apellido");
            let inputEmail3 = document.getElementById("inputEmail3");
            

            let fecha1input = document.getElementById('cantDini');
            let fecha2input = document.getElementById('cantDfin');

            var boton1 = document.getElementById("boton1");
            var boton2 = document.getElementById("boton2");

            // Ajustar las fechas
            // obtengo la fecha actual
            let fechaActual = new Date();
            
            // corto la fecha en dias, mes, y anio
            let dia = fechaActual.getDate().toString().padStart(2, '0');
            let mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0');
            let anio = fechaActual.getFullYear().toString();

            // le doy valor 0 para que no me salte un error y me cancele la ejecucion del codigo
            let diasEntreFechas = 0;
            // obtengo lafecha en un formato valido
            let fechaFinal1 = `${anio}-${mes}-${dia}`;
            // al input date solo podras poner una fecha del presente o del futuro
            fecha1input.setAttribute('min', fechaFinal1);
            // cuando la fecha de ingreso se cambie...
            fecha1input.addEventListener("change", () => {
                // activo el input de la fecha de regreso
                fecha2input.disabled = false;
                // a la fecha de regreso solo podras elegir un dia que no sea antes de la fecha de ingreso
                fecha2input.setAttribute('min', fecha1input.value);
                // cuando la fecha de regreso cambie
                fecha2input.addEventListener("change", () => {
                    // creo una variable de formato fecha con el valor de los input
                    let fecha1 = new Date(fecha1input.value);
                    let fecha2 = new Date(fecha2input.value);
                    // con math.abs retorno el valor absoluto deun numero
                    // con getTime() obtengo el valor en milisegundos de la fechaingresada
                    // resto fecha2 - fecha1
                    let diferenciaEnMilisegundos = Math.abs(fecha2.getTime() - fecha1.getTime());
                    // math.ceil te devuelvue un entero
                    // si a los milisegundo lo dividis por 1000 obtenes segundos
                    // si a los segundos los dividis por 60 obtenes minutus
                    // si a los minutos lo dividis por 60 obtienes horas
                    // si a las horas las dividis por 24 obtienes dias 
                    diasEntreFechas = Math.ceil(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24));
                    // activo el boton siguiente del modal1
                    boton1.disabled = false;
                });
            });



            // todos los botones con la clase btn-reservation
            let buttons = document.getElementsByClassName('btn-reservation');
            // recorro los botones
            for (let i = 0; i < buttons.length; i++) {
                // si uno de esos botones es tocado, identifica cual es el i en el que esta (por ejemplo 4)
                buttons[i].addEventListener('click', function () {
                    // en el index.html busca el value del boton tocado(te dara 4)
                    let btnId = buttons[i].value;
                    // buscame en json/habitaciones.json
                    fetch('json/habitaciones.json')
                        .then((response) => response.json())
                        .then((json) => {
                            // busca en el json, en la posicion 4, el valor del precio
                            let precio = json[btnId]["precio"];

                            let total = document.getElementById("precio");
                            var cantHa = document.getElementById("cantH");
                            // les doy ese valor para que el precio total tenga algo de que sumar
                            var habita = 0;
                            var may = 0;
                            var men = 0;
                            const mayores = document.getElementById("cantMay");
                            const menores = document.getElementById("cantMen");
                            // cuando el boton siguiente del modal 1 sea clickeado
                            boton1.addEventListener("click", function (e) {
                                e.preventDefault();
                                // tomo los valores de estos inputs
                                var habita = cantHa.value;
                                var may = mayores.value;
                                var men = menores.value;
                                // calculo el precio total con esta formulota
                                precioTotal = ((precio * habita) + (may * 1000) + (men * 500))*diasEntreFechas;

                                let precio1 = document.getElementById("fechaEnt");
                                let precio2 = document.getElementById("fechaSal");

                                // modifico el valor de la fecha del ultimo modal 
                                precio1.innerHTML = document.getElementById('cantDini').value;
                                precio2.innerHTML = document.getElementById('cantDfin').value;

                                // formateo el precio total para que me ponga puntos en el precio
                                precioTotal = new Intl.NumberFormat('de-US', { style: 'currency', currency:'USD'}).format(precioTotal);
                                console.log(total);                              
                                total.innerHTML = `(${precioTotal}USD)`;
                                
                            });
                            let modal1 = document.getElementById("modal1"); 
                            let cotizacion = document.getElementById("cot");
                            // cuando el modal 1 sufra algun cambio
                            modal1.onchange = function(){
                                // tomo los valores de estos inputs
                                habita = cantHa.value;
                                may = mayores.value;
                                men = menores.value;
                                // calculo el precio total con esta formulota
                                precioTotal = ((precio * habita)+(may*1000) + (men*500))*diasEntreFechas;
                                // formateo el precio total para que me ponga puntos en el precio
                                precioTotal = new Intl.NumberFormat('de-US', { style: 'currency', currency:'USD'}).format(precioTotal);
                                cotizacion.innerHTML = `(${precioTotal}USD)`;
                            }
                            let modal2 = document.getElementById("modal2");
                            // cuando el modal 2 sufra algun cambio
                            modal2.onchange = function(){
                                if (nombre !== "") {
                                    // habilito el boton de siguiente
                                    boton2.disabled = false;
                                }
                            }
                           
                            boton2.onclick = function(e){
                                // no mando el formulario
                                e.preventDefault();
                            }
                            let enviarForm = document.getElementById('btn-submit');
                            // cuando trate de mandar el formulario
                            
                            enviarForm.onclick = function(e){
                                e.preventDefault();
                                let descargarTicket = document.getElementById('downloadTicket');
                                alert("Se reservo con exito, por favor descarga el ticket en el boton que te acabamos de habilitar");
                                // habilitame el boton para descargar el comprobante
                                descargarTicket.disabled = false;
                            }
                            
                            let botonClose1 = document.getElementById("close1");
                            let botonClose2 = document.getElementById("close2");
                            let botonClose3 = document.getElementById("close3");

                            // evito que el boton de volver te recargue la pagina
                            botonClose1.onclick = function(e){
                                e.preventDefault();
                            }
                            botonClose2.onclick = function(e){
                                e.preventDefault();
                            }
                            botonClose3.onclick = function(e){
                                e.preventDefault();
                                
                            }


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

           // const diasInput = document.getElementById("cantD");
            //const outputDias = document.getElementById("cantDm");

        }

    });
});