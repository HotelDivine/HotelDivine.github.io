let json = [
    {
        "Numero": 1,
        "ambientes": 2,
        "precio": 1500,
        "Vacante": true
    },
    {
        "Numero": 2,
        "ambientes": 6,
        "precio": 3000,
        "Vacante": false
    },
    {
        "Numero": 3,
        "ambientes": 9,
        "precio": 7000,
        "Vacante": false
    },
    {
        "Numero": 4,
        "ambientes": 1,
        "precio": 250,
        "Vacante": true
    },
    {
        "Numero": 5,
        "ambientes": 8,
        "precio": 170,
        "Vacante": false
    },
    {
        "Numero": 6,
        "ambientes": 5,
        "precio": 220,
        "Vacante": false
    },
    {
        "Numero": 7,
        "ambientes": 7,
        "precio": 190,
        "Vacante": false
    },
    {
        "Numero": 8,
        "ambientes": 4,
        "precio": 160,
        "Vacante": false
    }
];
for (var response in json) {
    let datos = json[response];
    let Numero = datos["Numero"];
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
        p.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing, elit. Iusto aperiam assumenda facilis placeat dicta dolor explicabo repudiandae. A, consequuntur quos expedita ab praesentium sapiente perferendis, vel, esse eveniet ipsum, temporibus.";
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
