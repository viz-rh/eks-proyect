function reload(){
	$('select').formSelect();
		/* comprobacion para test */

	console.log("hello");
/* -------------codigo para cambio de color texto botones --------------*/

a=$('input');
if(a.css('color','white')){
console.log("logrado");
}	else{console.log("fallo");}	

		/* comprobacion para test */
}

function rell_form(){
$("option").remove();
console.clear()
/* lectura de valores predeterminados */
var producto;
var codigo;
var cantidad;
var batidas;
async function loaddata(){
	const select1 = document.querySelector('#select-1');
	const select2 = document.querySelector('#select-2');
	const select3 = document.querySelector('#select-3');
	const select4 = document.querySelector('#select-4');
	const letras = "codigo";
	respuesta = await fetch("db/form.init.json")
	datos = await respuesta.json()
	 
			datos.forEach(datos => {
			console.log(`${datos.producto}`);
			producto	= 	datos.producto;
			pid=datos.id;
			 codigo 	=	datos.codigo;
			 cantidad 	=	datos.cantidad;
			 batidas	=	datos.batidas;	
				
			})

			const opcion1 = document.createElement('option');

			opcion1.innerHTML = producto;
			opcion1.value = pid;
			select1.appendChild(opcion1);

			const opcion2 = document.createElement('option');
			opcion2.innerHTML = codigo;
			opcion2.value = 1;
			select2.appendChild(opcion2);

			const opcion3 = document.createElement('option');
			opcion3.innerHTML = cantidad;
			opcion3.value = 1;
			select3.appendChild(opcion3);

			const opcion4 = document.createElement('option');
			opcion4.innerHTML = batidas;
			opcion4.value = 1;
			select4.appendChild(opcion4);

	respuesta = await fetch("db/producto.json")
	datos =await respuesta.json()
	datos.forEach(datos => {
			console.log(`${datos.producto1}`);
			producto_item	= 	datos.producto1;
			if(producto != producto_item){
				console.log(producto +" es diferente de " +producto_item)
			const opcion = document.createElement('option');
			opcion.innerHTML = producto_item;
			opcion.value = datos.id;
			select1.appendChild(opcion);	
				}
			})

	respuesta = await fetch("db/codigo.json")
	datos =await respuesta.json()
	datos.forEach(datos => {
			console.log(`${datos.producto1}`);
			codigo_item	= 	datos.codigo;
			if(codigo != codigo_item){
				console.log(codigo +" es diferente de " +codigo_item)

			const opcion = document.createElement('option');
			opcion.innerHTML = codigo_item;
			opcion.value = datos.valor;
			opcion.id=datos.color;
			select2.appendChild(opcion);	
				}
			})
		
			
reload();
		
}
loaddata();
/* lectura de valores predeterminados */
}

// codigo para drop don de opciones
$('ul li:has(ul)').hover(function(e) {},
function(e) {
	$(this).find('ul').css({display: "none"});
});
$('ul li:has(ul)').click(function(e){
   console.log("dd")
   $(this).find('ul').css({display: "block"});
})

//se tuvo problemas de dos dias con la ultima implementacion. de esta funcion. al final se tuvo respuesta
$('#Ddown-list a').click((e)=>{
	value=$(e.target)[0].innerHTML;
	$('.down-leyend')[0].textContent = value;
})



