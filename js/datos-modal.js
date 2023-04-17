document.addEventListener('DOMContentLoaded', function() {

      let buttons = document.getElementsByClassName('btn-reservation');
      for (let i = 0; i < buttons.length; i++) {
          console.log("i");
        buttons[i].addEventListener('click', function() {
          // let btnId = buttons[i];

          // fetch('json/habitaciones.json')
          //   .then((response) => response.json())
          //   .then((json) => {
                
          //       let precio = json[btnId]["precio"];
          //       let total = document.getElementById("precio");
          //       total.innerHTML = precio;


          //   })
            
        });
      }
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




});



