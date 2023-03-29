let datosH = require('./datosH');

let hotel = {
    habitaciones: datosH,
    buscarHabitacion: function (idBuscar) {
        const nro = this.habitaciones.filter((habitacion) => habitacion.id === idBuscar);
        return nro.length > 0 ? nro[0] : null;
    },
    reservarHabitacion: function (idBuscar) {
        let encontro = this.buscarHabitacion(idBuscar);
        if (encontro.id == idBuscar) {
            encontro.reservada = !encontro.reservada;
            return encontro;
        } else {
            return "habitacioncleta no encontrada";
        }
    },
    habitacionParaLaReserva: function () {
        return this.habitaciones.filter((habitacion) => habitacion.reservada === false);
    },
    totalDeReservas: function () {
        let total = this.habitaciones.filter((habitacion) => habitacion.reservada === true);
        let depo = total.reduce((acum, num) => {
            acum.push(num.precio);
            return acum
        }, []);
        return depo.reduce((acum, num) =>  acum + num);
    }
}

console.log("la habitacioncleta que coincide con el id que buscas: ");
console.log(hotel.buscarHabitacion(1));
/*
console.log("la habitacioncleta reservada: ");
console.log(hotel.reservarHabitacion(1));
console.log("las habitaciones que tenemos disponibles son: ");
console.log(hotel.habitacionParaLaReserva());
console.log("el total de Reservas de las habitaciones es: ");
console.log(hotel.totalDeReservas());


let array = [];
function aumentohabitacion(porcentaje){
    datosH.forEach((habitacion) => {
        array.push(habitacion.precio)
    });
        return array.map((aumento)=>{
            return aumento + (aumento * (porcentaje/100));
        })
}
// hacer que muestre todas las habitacions con el cambio hecho
//console.log(aumentohabitacion(10));

function habitacionPorAmbiente(nroAmbiente){
    return datosH.filter((habitacion) => habitacion.ambiente === nroAmbiente);
}
//console.log(habitacionPorAmbiente(29));

function listarTodasLashabitacions(){
    return datosH.forEach((habitacion) => {
            console.log(habitacion);
        });
}
listarTodasLashabitacions()*/