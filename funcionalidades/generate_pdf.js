let d = document;
d.addEventListener("DOMContentLoaded",()=>{
	d.addEventListener("submit",(e)=>{
		e.preventDefault();
		generatePdf();

	})
})


function generatePdf() {

	let dateIn = d.getElementById('date_in');
	let dateOut = d.getElementById('date_out');quantity_people
	let quantityPeople = d.getElementById('quantity_people');

 	var doc = new jsPDF('p','mm',[80,2000]);


	let pageWidth = doc.internal.pageSize.width;

	function textCenterX(text){
		let textCenter = doc.getTextWidth(text);
		let textCentered = (doc.internal.pageSize.width - textCenter) / 2;
		return textCentered;
	}

  // Título
  doc.setFontSize(15);
  let title = "Hotel Divine";
  
  let posY = 20;
  doc.text(title, textCenterX(title), posY);

  // Fecha
  doc.setFontSize(10);
  dateIn = `Desde : ${dateIn.value}`;
  dateOut = `hasta : ${dateOut.value}`;

  doc.text(dateIn, 10, 40);
  doc.text(dateOut, 10, 50);


  // Productos
  var productos = [
    {nombre: "Cantidad de personas", precio: 2.50},
    {nombre: "Pan", precio: 1.00},
    {nombre: "Queso", precio: 4.25},
    {nombre: "Jugo", precio: 2.75},
  ];

  var total = 0;
  var y = 60;

  doc.setFontSize(10);
  doc.setFontStyle("bold");
  doc.text("Producto", 20, y);
  doc.text("Precio", 100, y);
  y += 10;

  doc.setFontSize(12);
  doc.setFontStyle("normal");

  productos.forEach(function(producto) {
    doc.text(producto.nombre, 20, y);
    doc.text("$ " + producto.precio.toFixed(2), 100, y, "right");
    total += producto.precio;
    y += 10;
  });

  // Total
  y += 10;
  doc.setFontSize(14);
  doc.setFontStyle("bold");
  doc.text("Total:", 20, y);
  doc.text("$ " + total.toFixed(2), 100, y, "right");

  // Guardar archivo
  doc.save("recibo.pdf");
}
