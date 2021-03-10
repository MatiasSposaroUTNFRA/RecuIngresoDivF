
function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let puesto;
	let sueldo;
	let seguir;
	let acumuladorProgramador = 0;
	let contadorProgramador = 0;
	let acumuladorAnalista = 0;
	let contadorAnalista = 0;
	let acumuladorQa = 0;
	let contadorQa = 0;
	let acumuladorFemenino = 0;
	let acumuladormasculino = 0;
	let acumuladornobinario = 0;
	let flagSueldo = 0;
	let mayorSueldo;
	let sexoMejorSueldo;
	let FlagFemenino = 0;
	let sueldoMayor;
	let nombreMayor;
	let contadorProgNB = 0;


	do
	{
		nombre = prompt("Ingrese su nombre");

		edad = parseInt(prompt("Ingrese la edad"));
		while(isNaN(edad)==true && edad <10)
		{
			edad = parseInt(prompt("Error.Reingrese la edad"));
		}

		sexo = prompt("Ingrese el sexo(masculino/femenino/no binario");
		while(sexo != 'masculino' && sexo != 'femenino' && sexo != 'no binario')
		{
			sexo = prompt("Error.Reingrese el sexo(masculino/femenino/no binario");
		}

		puesto = prompt("Ingrese el puesto de trabajo(programador/analista/Qa)");
		while(puesto !='programador' && puesto != 'analista' && puesto != 'Qa')
		{
			puesto = prompt("Reingrese el puesto de trabajo(programador/analista/Qa)"); 
		}

		sueldo = parseInt(prompt("Ingrese el sueldo (entre 15000 y 70000)"));
		while(sueldo < 15000 || sueldo > 70000)
		{
			sueldo = parseInt(prompt("Error.Reingrese el sueldo (entre 15000 y 70000)"));
		}

		///a) promedio de sueldos para cada puesto

		switch(puesto)
		{
			case 'programador':
			acumuladorProgramador = acumuladorProgramador + sueldo;
			contadorProgramador++;
			break;

			case 'analista':
			acumuladorAnalista = acumuladorAnalista + sueldo;
			contadorAnalista++;
			break;

			case 'Qa':
			acumuladorQa = acumuladorQa + sueldo;
			contadorQa++;
			break;

		}
		
	
		switch(sexo)
		{
			case 'femenino':
			acumuladorFemenino = acumuladorFemenino + sueldo;
			break;

			case 'masculino':
			acumuladormasculino = acumuladormasculino + sueldo;
			break;

			case 'no binario':
			acumuladornobinario = acumuladornobinario + sueldo;
			break;
		}

		//b) el sexo del que percibe el mayor sueldo
	
		if(flagSueldo|| sueldo > mayorSueldo)
		{
  	 	    mayorSueldo = sueldo;
   		    sexoMejorSueldo = sexo;
			flagSueldo++;
		}

		//c) el nombre del empleado femenino con mas sueldo
		if(FlagFemenino == 0||sueldo>sueldoMayor && sexo =='femenino') 
		{
		 nombreMayor = nombre;
		 sueldoMayor = sueldo;
		 FlagFemenino == 1;
		}

		if(sexo == 'no binario' && puesto == 'programador' && (sueldo <= 55000 && sueldo >= 20000)){
			contadorProgNB++;
		}

	 seguir = prompt("Desea continuar?");
	}while(seguir == "si")


	///informando el a) promedio de sueldos para cada puesto

	if(acumuladorProgramador !=0)
	{
		promedioProgramador = acumuladorProgramador / contadorProgramador;
		document.write("El promedio de sueldo para programador es: " + promedioProgramador + "<br>");
	}

	else
	{
		document.write("No hay promedio de sueldo pára programador ");
	}

	if(acumuladorAnalista !=0)
	{
		promedioAnalista = acumuladorAnalista / contadorAnalista;
		document.write("El promedio de sueldo para analista es : " + promedioAnalista + "<br>");
	}

	else
	{
		document.write("No hay promedio de sueldo para analista <br> ");
	}

	if(acumuladorQa != 0)
	{
		promedioQa = acumuladorQa / contadorQa;
		document.write("El promedio de Qa es : " + promedioQa + "<br>");
	}

	else
	{
		document.write("No hay promedio de sueldo para Qa <br> ");
		
	}


	//b) el sexo del que percibe el mayor sueldo
	if(flagSueldo !=0)
	{
		document.write("el sexo con mas sueldo es " + sexoMejorSueldo + "con un sueldo de $ " + mayorSueldo + "<br>");
	}
	
  //c) el nombre del empleado femenino con mas sueldo INFORMANDO

  if(FlagFemenino !=0)
  {
	document.write("El nombre del empleado femenino con mas sueldo es : " + nombreMayor + " con un sueldo de : " + sueldoMayor +"<br>");

  }
  else
  {
	document.write("No hay empleado femenino con mas sueldo <br> ");
  }

  //d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000

  if(contadorProgNB != 0)
  {
	  document.write("La cantidad de programadores no binarios son: " + contadorProgNB);
  }

  else
  {
	  document.write("No hay programadores con sexo no binarios")
  }







}


/*

Una software factory registra la siguiente informacion de sus empleados:
Nombre,
edad (validar),
sexo (masculino - femenino - no binario),
puesto (programador - analista - Qa),
sueldo (entre 15000 y 70000).
La empresa desea saber: se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) promedio de sueldos para cada puesto
b) el sexo del que percibe el mayor sueldo
c) el nombre del empleado femenino con mas sueldo
d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000


*/