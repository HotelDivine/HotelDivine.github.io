let json = [
    {
        "Numero": "VISTA AL MAR",
        "Description":"Habitación doble con vista al mar y balcón privado. Esta habitación es perfecta para parejas que buscan una escapada romántica. Disfruta de las impresionantes vistas al mar desde tu balcón privado mientras tomas una copa de vino",
        "ambientes": 2,
        "precio": 1500,
        "Vacante": true
    },
    {
        "Numero": "INDIVIDUAL",
        "Description":"Habitación individual con cama king size y baño privado. Esta habitación es ideal para viajeros solitarios que buscan comodidad y privacidad. Descansa en la cama king size después de un largo día de turismo y relájate en tu baño privado.",
        "ambientes": 6,
        "precio": 3000,
        "Vacante": false
    },
    {
        "Numero": "SUITE",
        "Description":"Suite junior con sala de estar y vistas panorámicas a la ciudad. Esta suite es perfecta para aquellos que buscan un poco más de espacio y comodidad. Disfruta de las vistas panorámicas a la ciudad desde tu sala de estar mientras te relajas en el sofá.",
        "ambientes": 9,
        "precio": 7000,
        "Vacante": false
    },
    {
        "Numero": "FAMILIAR",
        "Description":"Habitación familiar con dos camas dobles y cocina americana. Esta habitación es ideal para familias que buscan comodidad y espacio. Prepara tus propias comidas en la cocina americana y descansa en las cómodas camas dobles después de un día lleno de diversión.",
        "ambientes": 1,
        "precio": 250,
        "Vacante": true
    },
    {
        "Numero": "EJECUTIVA",
        "Description":"Habitación ejecutiva con escritorio y vistas a la montaña. Esta habitación es perfecta para viajeros de negocios que necesitan trabajar durante su estancia. Disfruta de las impresionantes vistas a la montaña mientras trabajas en tu escritorio.",
        "ambientes": 8,
        "precio": 170,
        "Vacante": false
    },
    {
        "Numero": "LUJOSA",
        "Description":"Habitación superior con cama queen size y bañera de hidromasaje. Esta habitación es perfecta para aquellos que buscan un poco más de lujo durante su estancia. Relájate en la bañera de hidromasaje después de un largo día y descansa en la cómoda cama queen size.",
        "ambientes": 5,
        "precio": 220,
        "Vacante": false
    },
    {
        "Numero": "ESTANDAR",
        "Description":"Habitación estándar con dos camas individuales y vistas al jardín. Esta habitación es ideal para aquellos que buscan una estancia cómoda y sencilla. Disfruta de las vistas al jardín mientras descansas en las cómodas camas individuales.",
        "ambientes": 7,
        "precio": 190,
        "Vacante": false
    },
    {
        "Numero": "SUITE PRESIDENCIAL",
        "Description":"Suite presidencial con sala de estar, comedor y terraza privada. Esta suite es perfecta para aquellos que buscan lo mejor durante su estancia. Disfruta de la amplia sala de estar, el comedor y la terraza privada mientras te relajas en el lujo.",
        "ambientes": 4,
        "precio": 160,
        "Vacante": false
    }
];
for (var response in json) {
    let datos = json[response];
    let Numero = datos["Numero"];
    let Description = datos["Description"];
    let ambientes = datos["ambientes"];
    let precio = datos["precio"];
    let Vacante = datos["Vacante"];
    // Crear el DOM

    function mostrarHabitaciones(habitacion) {
        let div = document.createElement("div");
        div.className = "room-content col-md-6 justify-content-between d-flex flex-column";
        let h3 = document.createElement("h3");
        h3.innerHTML = Numero;
        div.appendChild(h3);

        let p = document.createElement("p");
        p.id = "description";
        p.innerHTML = Description;
        div.appendChild(p);

        let roomFeaturesDiv = document.createElement("div");
        roomFeaturesDiv.className = "room-features justify-content-between";
        roomFeaturesDiv.id = "room-reatures";

        let p2 = document.createElement("p");
        let i = document.createElement("i");
        i.className = "fas fa-star";
        p2.appendChild(i);

        let span1 = document.createElement("span");
        span1.id = "top";
        span1.innerHTML = "Top Parejas";
        p2.appendChild(span1);

        roomFeaturesDiv.appendChild(p2);

        let h4 = document.createElement("h4");
        h4.innerHTML = "Desde* $" + precio;

        roomFeaturesDiv.appendChild(h4);

        div.appendChild(roomFeaturesDiv);

        let boton = document.createElement("button");
        boton.className = "btn -btnsuccess btn-reservation";
        boton.innerHTML = "Iniciar Reserva";

        div.appendChild(boton);

        document.getElementById("room").appendChild(div);
    }

    mostrarHabitaciones(datos);
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
