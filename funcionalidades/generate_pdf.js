let d = document;
d.addEventListener("DOMContentLoaded",()=>{
	d.addEventListener("submit",(e)=>{
		e.preventDefault();
		generatePdf();

	})
})


function generatePdf() {

	let dateIn = d.getElementById('date_in').value;
	let dateOut = d.getElementById('date_out').value;
  let rucH = 'RUC : 0000000000';
  let addressH = 'Direccion : Buenos Aires, Argentina';
  let phoneH = 'Telefono : +54 9 3522 65-0395';
  let emailH = 'Email : nicnando123@gmail';
  let today = new Date;
  let dateA = `${today.toLocaleString()} - ${today.toLocaleTimeString()}`;
  let rooms = `Habitaciones : ${d.getElementById('rooms').value}`;
  let smallers = `Cant. de menores : ${d.getElementById('smallers').value}`;
  let biggers = `Cant. de adultos : ${d.getElementById('biggers').value}`;
  let parking = `Estacionamiento : ${(d.getElementById('parking').checked)?"SI":"NO"}`;
  let spa = `Spa : ${(d.getElementById('spa').checked)?"SI":"NO"}`;
  let gym = `Gimnasio : ${(d.getElementById('gym').checked)?"SI":"NO"}`;
  let code = `CODIGO DE RESERVA : 000123194`;
  let name = d.getElementById('name').value;
  let surname = d.getElementById('surname').value;
	let cliente = `Cliente : ${name} ${surname}`;
  let email = `Email : ${d.getElementById('email').value}`;
  let country = `Pais : ${d.getElementById('country').value}`;
 	var doc = new jsPDF('p','mm',[80,290]);


	let pageWidth = doc.internal.pageSize.width;
  let separator = "------------------------------------------------------";
	function textCenterX(text){
		let textCenter = doc.getTextWidth(text);
		let textCentered = (doc.internal.pageSize.width - textCenter) / 2;
		return textCentered;
	}

  // Título
  doc.setFontSize(15);
  doc.setFontStyle("bold");
  let title = "HOTEL DIVINE";
  let posY = 20;
  doc.text(title, textCenterX(title), posY);

  ////////////////////////////////////
  doc.text(separator, textCenterX(separator));
  ////////////////////////////////////

  // SECCION HOTEL

  doc.setFontStyle("normal");
  doc.setFontSize(12)
  doc.text('Datos del hotel', textCenterX('Datos del hotel'), 30);
  doc.setFontSize(10);
  // RUC
  doc.text(rucH, textCenterX(rucH), 40);
  // DIRECCION
  doc.text(addressH, textCenterX(addressH), 45);
  // TELEFONO
  doc.text(phoneH, textCenterX(phoneH),50);
  // EMAIL
  doc.text(emailH, textCenterX(emailH),55);

  ////////////////////////////////////
  doc.text(separator, textCenterX(separator),65);
  ////////////////////////////////////

doc.setFontSize(12);
doc.text('Datos de la Reserva', textCenterX('Datos de la Reserva'), 75);
  doc.setFontSize(10);
  // FECHA
    doc.text(dateA, textCenterX(dateA), 85);
  // Cantidad de personas
    doc.text(rooms, textCenterX(rooms), 90);
    doc.text(smallers, textCenterX(smallers),95);
    doc.text(biggers, textCenterX(biggers),100);
  // SERVICIOS

    doc.text(parking, textCenterX(parking),110);
    doc.text(spa, textCenterX(spa),115);
    doc.text(gym, textCenterX(gym),120);

    doc.setFontSize(12);
    doc.setFontStyle("bold");
    doc.text(code, textCenterX(code),130);
    doc.setFontStyle("normal");
    
    ////////////////////////////////////
    doc.text(separator, textCenterX(separator),135);
    ////////////////////////////////////
  
doc.setFontSize(12);
doc.text('Datos del cliente', textCenterX('Datos del cliente'), 145);
  doc.setFontSize(10);
  // FECHA
    doc.text(cliente, textCenterX(cliente), 155);
  // Cantidad de personas
    doc.text(country, textCenterX(country), 160);
    doc.text(email, textCenterX(email),165);

    ////////////////////////////////////
    doc.text(separator, textCenterX(separator),175);
    ////////////////////////////////////

    doc.text("Fecha entrada", 2, 185);
    doc.text(dateIn, 60, 185);
    doc.text("Fecha salida", 2, 190);
    doc.text(dateOut, 60, 190);
    doc.text("Noches", 2, 195);
    doc.text("3", 60, 195);

    doc.text("Precio por noche", 2, 200);
    doc.text("$140 USD", 60, 200);

    ////////////////////////////////////
    doc.text(separator, textCenterX(separator),210);
    ////////////////////////////////////

    doc.text("Total a pagar", 2, 220);
    doc.text("$2000 USD", 60, 220);
    
    doc.text("Usted ahorra", 2, 225);
    doc.text("$20 USD", 60, 225);

    doc.setFontSize(8);
    let adv = `*** Precios de productos incluyen impuestos.
  Para poder realizar un reclamo o devolución
              debe de presentar este ticket ***`
    doc.text(adv,13,250);
    

   // doc.addImage(imgData, 'JPEG', 10, 10, 100, 100);
  // Fecha
  // doc.setFontSize(10);
  // dateIn = `Desde : ${dateIn.value}`;
  // dateOut = `Hasta : ${dateOut.value}`;

  // doc.text(dateIn, 10, 70);
  // doc.text(dateOut, 10, 80);

  




















 
  // doc.setFontSize(14);
  doc.setFontStyle("bold");

  // Guardar archivo
  doc.save(`reserva_${name}_${surname}_hotel_divine.pdf`);

}
