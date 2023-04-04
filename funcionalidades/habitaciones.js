let d = document;

let json = [
    {
        "id":1,
        "titulo": "VISTA AL MAR",
        "descripcion":"Habitación doble con vista al mar y balcón privado. Esta habitación es perfecta para parejas que buscan una escapada romántica. Disfruta de las impresionantes vistas al mar desde tu balcón privado mientras tomas una copa de vino",
        "ambientes": 2,
        "precio": 1500,
        "vacante": true,
        "top": "Pareja",
        "calificacion": 4.2
    },
    {
        "id":2,
        "titulo": "INDIVIDUAL",
        "descripcion":"Habitación individual con cama king size y baño privado. Esta habitación es ideal para viajeros solitarios que buscan comodidad y privacidad. Descansa en la cama king size después de un largo día de turismo y relájate en tu baño privado.",
        "ambientes": 6,
        "precio": 3000,
        "vacante": false,
        "top": "Pareja",
        "calificacion": 4.2
    },
    {
        "id":3,
        "titulo": "SUITE",
        "descripcion":"Suite junior con sala de estar y vistas panorámicas a la ciudad. Esta suite es perfecta para aquellos que buscan un poco más de espacio y comodidad. Disfruta de las vistas panorámicas a la ciudad desde tu sala de estar mientras te relajas en el sofá.",
        "ambientes": 9,
        "precio": 7000,
        "vacante": false,
        "top": "Pareja",
        "calificacion": 4.2
    },
    {
        "id":4,
        "titulo": "FAMILIAR",
        "descripcion":"Habitación familiar con dos camas dobles y cocina americana. Esta habitación es ideal para familias que buscan comodidad y espacio. Prepara tus propias comidas en la cocina americana y descansa en las cómodas camas dobles después de un día lleno de diversión.",
        "ambientes": 1,
        "precio": 250,
        "vacante": true,
        "top": "Pareja",
        "calificacion": 4.2
    },
    {
        "id":5,
        "titulo": "EJECUTIVA",
        "descripcion":"Habitación ejecutiva con escritorio y vistas a la montaña. Esta habitación es perfecta para viajeros de negocios que necesitan trabajar durante su estancia. Disfruta de las impresionantes vistas a la montaña mientras trabajas en tu escritorio.",
        "ambientes": 8,
        "precio": 170,
        "vacante": false,
        "top": "Pareja",
        "calificacion": 4.2
    },
    {
        "id":6,
        "titulo": "LUJOSA",
        "descripcion":"Habitación superior con cama queen size y bañera de hidromasaje. Esta habitación es perfecta para aquellos que buscan un poco más de lujo durante su estancia. Relájate en la bañera de hidromasaje después de un largo día y descansa en la cómoda cama queen size.",
        "ambientes": 5,
        "precio": 220,
        "vacante": false,
        "top": "Pareja",
        "calificacion": 4.2
    },
    {
        "id":7,
        "titulo": "ESTANDAR",
        "descripcion":"Habitación estándar con dos camas individuales y vistas al jardín. Esta habitación es ideal para aquellos que buscan una estancia cómoda y sencilla. Disfruta de las vistas al jardín mientras descansas en las cómodas camas individuales.",
        "ambientes": 7,
        "precio": 190,
        "vacante": false,
        "top": "Pareja",
        "calificacion": 4.2
    },
    {
        "id":8,
        "titulo": "SUITE PRESIDENCIAL",
        "descripcion":"Suite presidencial con sala de estar, comedor y terraza privada. Esta suite es perfecta para aquellos que buscan lo mejor durante su estancia. Disfruta de la amplia sala de estar, el comedor y la terraza privada mientras te relajas en el lujo.",
        "ambientes": 4,
        "precio": 160,
        "vacante": false,
        "top": "Pareja",
        "calificacion": 4.2
    }
];
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
    room.classList.add('room','col-md-12','pad-0');
    room.innerHTML = `<div class="room inside d-flex justify-content-between p-4 container-xl">
                            <div class="room-media col-md-5">
                                <div class="room-media-img object-fit-cover justify-content-start">
                                    <img src="images/rooms/gallery-1-1.jpg" class="w-100 h-100 object-fit-cover" id="room-image">
                                    <div class="calification">
                                        <p>
                                            <span id="calification">${calificacion}</span>
                                            <i class="fas fa-star"></i></p>
                                    </div>

                                </div>
                            </div>
                            <div class="room-content col-md-6 justify-content-between d-flex flex-column">
                                <h3 class="title" id="title">${title}</h3>
                                <p class="description" id="description">${description}</p>
                                <div class="room-features justify-content-between d-flex" id="room-reatures">

                                    <div class="justify-content-between d-flex align-items-center prices mb-16">
                                        <i class="fa-solid fa-bookmark"></i>&nbsp;
                                        <span id="top">Top ${top}</span>
                                    </div>

                                    <div class="justify-content-between d-flex align-items-center prices mb-16">
                                        <p>Desde* </p>&nbsp;
                                        <p id="currency" class="price">$</p>
                                        <span id="price" class="price">${price}</span>
                                    </div>
                                </div>
                                <button class="btn btn-success btn-reservation">Iniciar Reserva</button>
                            </div>
                        </div>`;
    contenedor.appendChild(room);

    // function mostrarHabitaciones(habitacion) {
    //     let div = document.createElement("div");
    //     div.className = "room-content col-md-6 justify-content-between d-flex flex-column";
    //     let h3 = document.createElement("h3");
    //     h3.innerHTML = Numero;
    //     div.appendChild(h3);

    //     let p = document.createElement("p");
    //     p.id = "description";
    //     p.innerHTML = Description;
    //     div.appendChild(p);

    //     let roomFeaturesDiv = document.createElement("div");
    //     roomFeaturesDiv.className = "room-features justify-content-between";
    //     roomFeaturesDiv.id = "room-reatures";

    //     let p2 = document.createElement("p");
    //     let i = document.createElement("i");
    //     i.className = "fas fa-star";
    //     p2.appendChild(i);

    //     let span1 = document.createElement("span");
    //     span1.id = "top";
    //     span1.innerHTML = "Top Parejas";
    //     p2.appendChild(span1);

    //     roomFeaturesDiv.appendChild(p2);

    //     let h4 = document.createElement("h4");
    //     h4.innerHTML = "Desde* $" + precio;

    //     roomFeaturesDiv.appendChild(h4);

    //     div.appendChild(roomFeaturesDiv);

    //     let boton = document.createElement("button");
    //     boton.className = "btn -btnsuccess btn-reservation";
    //     boton.innerHTML = "Iniciar Reserva";

    //     div.appendChild(boton);

    //     document.getElementById("room").appendChild(div);
    // }

    // mostrarHabitaciones(datos);
}

/*
console.log(`Numero de la habitación: ${id}`);
console.log(`Ambientes: ${ambientes}`);
console.log(`Precio por noche: ${precio}`);
console.log(`Disponibilidad: ${Vacante ? "Sí" : "No"}`);
console.log("--------------------");
const amb = document.createElement("p");
p.innerHTML(ambientes);
document.rooms.appendChild(amb);
const pre = document.createElement("div");
div.innerHTML(precio);
document.rooms.appendChild(pre);
const res = document.createElement("div");
div.innerHTML(Vacante);
document.rooms.appendChild(res);
}
*/
    //mostrarHabitaciones();

/*
function reservarHabitacion(idBuscar) {
    let encontro = buscarHabitacion(idBuscar);
    if (encontro.id == idBuscar) {
        encontro.Vacante = !encontro.Vacante;
        return encontro;
    } else {
        return "habitacioncleta no encontrada";
    }
}
function habitacionParaLaReserva() {
    return habitaciones.filter((habitacion) => habitacion.Vacante === false);
}
function totalDeReservas() {
    let total = habitaciones.filter((habitacion) => habitacion.Vacante === true);
    let depo = total.reduce((acum, num) => {
        acum.push(num.precio);
        return acum
    }, []);
    return depo.reduce((acum, num) => acum + num);
}
*/
