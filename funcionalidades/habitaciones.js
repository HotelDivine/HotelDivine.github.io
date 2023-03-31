let json = [
    {
        "id": 1,
        "ambientes": 2,
        "precio": 1500,
        "reservada": true
    },
    {
        "id": 2,
        "ambientes": 6,
        "precio": 3000,
        "reservada": false
    },
    {
        "id": 3,
        "ambientes": 9,
        "precio": 7000,
        "reservada": false
    },
    {
        "id": 4,
        "ambientes": 1,
        "precio": 250,
        "reservada": true
    },
    {
        "id": 5,
        "ambientes": 8,
        "precio": 170,
        "reservada": false
    },
    {
        "id": 6,
        "ambientes": 5,
        "precio": 220,
        "reservada": false
    },
    {
        "id": 7,
        "ambientes": 7,
        "precio": 190,
        "reservada": false
    },
    {
        "id": 8,
        "ambientes": 4,
        "precio": 160,
        "reservada": false
    }
];
for (var response in json) {
    let datos = json[response];
    let id = datos["id"];
    let ambientes = datos["ambientes"];
    let precio = datos["precio"];
    let reservada = datos["reservada"];
    // Crear el DOM

    function mostrarHabitaciones() {
        /*
                console.log(`Numero de la habitación: ${id}`);
                console.log(`Ambientes: ${ambientes}`);
                console.log(`Precio por noche: ${precio}`);
                console.log(`Disponibilidad: ${reservada ? "Sí" : "No"}`);
                console.log("--------------------");
        */
        const id = document.createElement("div");
        div.innerHTML(id);
        document.rooms.appendChild(id);
        const amb = document.createElement("div");
        div.innerHTML(ambientes);
        document.rooms.appendChild(amb);
        const pre = document.createElement("div");
        div.innerHTML(precio);
        document.rooms.appendChild(pre);
        const res = document.createElement("div");
        div.innerHTML(reservada);
        document.rooms.appendChild(res);
    }
    //mostrarHabitaciones();
}

/*
function reservarHabitacion(idBuscar) {
    let encontro = buscarHabitacion(idBuscar);
    if (encontro.id == idBuscar) {
        encontro.reservada = !encontro.reservada;
        return encontro;
    } else {
        return "habitacioncleta no encontrada";
    }
}
function habitacionParaLaReserva() {
    return habitaciones.filter((habitacion) => habitacion.reservada === false);
}
function totalDeReservas() {
    let total = habitaciones.filter((habitacion) => habitacion.reservada === true);
    let depo = total.reduce((acum, num) => {
        acum.push(num.precio);
        return acum
    }, []);
    return depo.reduce((acum, num) => acum + num);
}
*/
