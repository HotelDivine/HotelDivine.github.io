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
        let habitacionHTML = "<ul>";
        for (let propiedad in habitacion) {
            habitacionHTML += "<li>" + propiedad + ": " + habitacion[propiedad] + "</li>";
        }
        habitacionHTML += "</ul>";
        document.getElementById("habitaciones").innerHTML += habitacionHTML;
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
