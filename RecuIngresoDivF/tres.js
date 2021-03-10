function mostrar()
{
	let nombreCliente;
	let cantidadLamparas;
	let marca;
	let precioUnidad;
	let seguir;
	let DescuentoFelipe = 0;
	let acumuladorPrecioDescuentoF = 0;
	let acumuladorFelipeLamparas = 0;
	let contadorFelipeLamparas = 0;
	let AcumuladorArgentinaLuz = 0;
	let contadorArgentinaLuz = 0;
	let descuentoArgentina;
	let acumuladorPrecioDescuentoArgLuz = 0;
	let perdidaArg = 0;
	let perdidaFelipe = 0;
	let acumuladorIluminatis = 0;
	let contadorIluminatis = 0;
	let acumuladorPrecioIluminatis = 0;
	let AcumTotal = 0;
	let acumuladorPrecioFelipe = 0;
	let acumuladorPrecioArgentina = 0;
	let perdidaEmpresa = 0;
	let promedioFelipeLamparas = 0;
	let promeedioArgentinaLuz = 0;
	let MarcaMASV = 0;

	//preciototal de esa compra(dato que se calcula)

	do
	{
		nombreCliente = prompt("Ingrese el nombre");
		while(isNaN(nombreCliente) == false)
		{
		 nombreCliente = prompt("Error.Reingrese el nombre");
		}

		cantidadLamparas = parseInt(prompt("Ingrese la cantidad de lamparas"));
		while(isNaN(cantidadLamparas) == true)
		{
		 cantidadLamparas = parseInt(prompt("Error dato invalido.Reingrese la cantidad de lamparas"));
		}

		marca = prompt("Ingrese la marca(FelipeLamparas,ArgentinaLuz,Illuminatis");
		while(marca!='FelipeLamparas' && marca != 'ArgentinaLuz' && marca != 'Illuminatis' ||isNaN(marca) == false)
		{
			marca = prompt("Error,Porfavor Reingrese la marca(FelipeLamparas,ArgentinaLuz,Illuminatis");
		}

		precioUnidad = parseFloat(prompt("Ingrese el precio por unidad"));
		while(isNaN(precioUnidad) == true)
		{
			precioUnidad = parseFloat(prompt("Error.Reingrese el precio por unidad"));
		}

		switch(marca)
		{
			case'FelipeLamparas':
			acumuladorFelipeLamparas = acumuladorFelipeLamparas + cantidadLamparas;
			contadorFelipeLamparas++;
			
			if(cantidadLamparas >5)
			{
			DescuentoFelipe = (precioUnidad * 0.90) * cantidadLamparas;
			acumuladorPrecioDescuentoF = acumuladorPrecioDescuentoF + DescuentoFelipe * cantidadLamparas;
			perdidaFelipe =(precioUnidad - (precioUnidad * 0.90)) * cantidadLamparas;
			}
			else
			{
				acumuladorPrecioFelipe = acumuladorPrecioFelipe + precioUnidad * cantidadLamparas;
			}
			break;

			case'ArgentinaLuz':
			AcumuladorArgentinaLuz = AcumuladorArgentinaLuz + cantidadLamparas;
			contadorArgentinaLuz++
			if(cantidadLamparas >2)
			{
				descuentoArgentina =(precioUnidad * 0.95) * cantidadLamparas;
				acumuladorPrecioDescuentoArgLuz = acumuladorPrecioDescuentoArgLuz + descuentoArgentina * cantidadLamparas;
				perdidaArg = (precioUnidad -(precioUnidad * 0.95)) * cantidadLamparas;
			}
			else
			{
				acumuladorPrecioArgentina = acumuladorPrecioArgentina + precioUnidad * cantidadLamparas;
			}
			break;

			case 'Illuminatis':
			acumuladorIluminatis = acumuladorIluminatis + cantidadLamparas;
			contadorIluminatis++;
			acumuladorPrecioIluminatis = acumuladorPrecioIluminatis + precioUnidad * cantidadLamparas;
			break;

		}

		//a) Cuanto recauda la empresa en concepto de todas las ventas realizadas.

		AcumTotal = AcumTotal + acumuladorPrecioDescuentoF + acumuladorFelipeLamparas + acumuladorPrecioDescuentoArgLuz + acumuladorPrecioArgentina + acumuladorPrecioIluminatis;


		seguir = prompt("Desea continuar ingresando datos?");
	}while(seguir == 'si');


	//a) Cuanto recauda la empresa en concepto de todas las ventas realizadas.
	document.write("El total recaudado por la empresa es " + AcumTotal + "<br>");

	//b) Cuanto "perdio" la empresa en concepto de descuentos.

	if(perdidaArg != 0 || perdidaFelipe != 0)
	{
		perdidaEmpresa = perdidaFelipe + perdidaArg;
		document.write("La cantidad de dinero que perdio la empresa en concepto de descuento es : " + perdidaEmpresa + "<br>");
	}
	else
	{
		document.write("No hubo ningun descuento");
	}

	//c) El promedio de la cantidad de lamparas vendidas de cada marca.

	if(contadorFelipeLamparas != 0)
	{
		promedioFelipeLamparas = acumuladorFelipeLamparas / contadorFelipeLamparas;
		document.write("El promedio de cantidad de FelipeLamparas es " + promedioFelipeLamparas + "<br>");
	}
	else
	{
		document.write("No se ingresaron felipe Lamparas <br>");
	}

	if(contadorArgentinaLuz != 0)
	{
		promeedioArgentinaLuz = AcumuladorArgentinaLuz / contadorArgentinaLuz;
		document.write("El promedio de canttidad de ArgentinaLuz es " + promeedioArgentinaLuz + "<br>");
	}
	else
	{
		document.write("No se ingresaron Argentina Luz <br>");
	}

	if(contadorIluminatis != 0)
	{
		promedioIluminatis = acumuladorIluminatis / contadorIluminatis;
		document.write("El promedio de cantidad de Iluminatis es " + promedioIluminatis + "<br>");
	
	}
	else
	{
		document.write("No se ingresaron Iluminatis <br>");
	}

	if (contadorArgentinaLuz > contadorFelipeLamparas && contadorArgentinaLuz > contadorIluminatis) 
	{
        MarcaMASV = "ArgentinaLuz";
    } 
	else if (contadorFelipeLamparas > contadorArgentinaLuz && contadorFelipeLamparas > contadorIluminatis) 
	{
        MarcaMASV = "FelipeLamparas";
    } else {
        MarcaMASV = "Illuminatis";
    }

    document.write("La marca con mas ventas es :  " + MarcaMASV +"<br>");



}







/*
Enunciado:
Ferrete lamparas 2.0 El empleado del negocio ingresa los siguientes datos de cada venta, teniendo en cuenta que tenemos varias ventas:
nombre del cliente,
cantidad de lamparas ,
marca (FelipeLamparas - ArgentinaLuz -Illuminatis),
precio por unidad,
precio total de esa compra: dato que se calcula.
Se sabe que si la marca es FelipeLamparas y la cantidad de lamparas supera las 5 unidades
se aplica un descuento del 10% sobre la compra 
Si la marca es ArgentinaLuz y compra 3 o mas unidades, el descuento es del 5%. 
Ningun otro caso aplica descuento. 
al terminar la carga de todas las ventas,la empresa desea saber:
a) Cuanto recauda la empresa en concepto de todas las ventas realizadas.
b) Cuanto "perdio" la empresa en concepto de descuentos.
c) El promedio de la cantidad de lamparas vendidas de cada marca.
d) La marca que mas ventas realizo (sin importar la cantidad de lamparas vendidas)

*/