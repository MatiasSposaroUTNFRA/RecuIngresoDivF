function mostrar()
{let nombre;
  let carrera;
  let sexo;
  let cantidadMaterias;
  let nota;
  let edad;
  let contadorFisica=0;
  let nombreMejorPromedio;
  let FlagEdad = 0;
  let nombreAlumnaJoven;
  let contadorQuimica=0;
  let contadorSistemas=0;
  let contadorTotalAlumnos=0;
  let porcentajeQuimica;
  let PorcentajeSistemas;
  let porcentajeFisica;
  let mejorNota;
  let cantidadMasMaterias;
  let banderaMaterias=0;
  let nombreMasMaterias;
  let edadMasMaterias;
  let acumuladorQuimica = 0;
  let acumuladorSistemas = 0;
  let acumuladorFisica = 0;
  let edadJoven;




  for(i=0;i<500;i++)
  { 
    nombre = prompt("ingrese su nombre");

    carrera = prompt("ingrese su carrera");
    while(carrera != "Quimica" && carrera != "Fisica" && carrera != "Sistemas")
    {
      carrera = prompt("ingrese una carrera valida");
    }

    sexo = prompt("Ingrese su sexo");
    while(sexo != "masculino" && sexo != "femenino" && sexo != "no binario")
    {
      sexo=prompt("ingrese un sexo valido");
    }

    cantidadMaterias = prompt("ingrese una cantidad de materias entre 1 y 5");
    cantidadMaterias = parseInt(cantidadMaterias);
    while(cantidadMaterias < 1 || cantidadMaterias > 5)
    {
      cantidadMaterias=prompt("reingrese una cantidad de materias valida");
      cantidadMaterias = parseInt(cantidadMaterias);
    }
      
    nota = prompt("ingrese una nota entre 0 y 10");
    nota = parseInt(nota);
    while(nota < 0 || nota > 10)
    {
      nota = prompt("reingrese una nota valida");
      nota = parseInt(nota);
    }

    edad= prompt("ingrese su edad");
    edad = parseInt(edad);
    while(edad < 17)
    {
      edad = prompt("reingrese una edad valida");
      edad = parseInt(edad);
    }


    switch(carrera)
    {
      case "Quimica":
        acumuladorQuimica = acumuladorQuimica + nota;
        contadorQuimica++;
      break;

      case "Fisica": //a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
        acumuladorFisica = acumuladorFisica + nota;
        if(contadorFisica == 0 || nota > mejorNota)
        {
          mejorNota = nota;
          nombreMejorPromedio = nombre;
        }
        contadorFisica++;
      break;

       case "Sistemas":
         acumuladorSistemas + acumuladorSistemas + nota;
         contadorSistemas++;
      break; 
    }


    if (FlagEdad == 0||sexo == "femenino" && edad>edadJoven) //b) El nombre de la alumna mas joven.
    {
        nombreAlumnaJoven = nombre;
        edadJoven = edad;
        FlagEdad = 1;
      
    }

    if(carrera != "Quimica") // d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.
    {
      if(banderaMaterias==0 || cantidadMaterias > cantidadMasMaterias)
      {
        edadMasMaterias = edad;
        nombreMasMaterias = nombre;
        banderaMaterias = 1;
      }
    }

    contadorTotalAlumnos = contadorFisica + contadorQuimica + contadorSistemas;
  }


  if (contadorFisica !=0)
  {
     
    document.write(" el nombre del mejor promedio de fisica es " + nombreMejorPromedio + "<br>"); 
  }
  else
  {
    document.write(" no se ingresaron alumnos de fisica. <br>");
  }


  if(FlagEdad !=0)
  {
    document.write(" El nombre de la alumna mas joven es " + nombreAlumnaJoven + " con " + edadJoven + " años <br>"); 
  }
  else
  {
    document.write(" no se han registrado alumnas <br>");
  }


  if (contadorQuimica !=0)
  {
    porcentajeQuimica = (contadorQuimica * 100 / contadorTotalAlumnos);
    document.write(" El porcentaje de estudiantes que estudia quimica es  " + porcentajeQuimica + " % <br>");
  }
  else
  {
    document.write(" no se ingresaron alumnos de quimica para hacer un porcentaje.<br>");
  }

  if (contadorFisica !=0)
  {
    porcentajeFisica = (contadorFisica * 100 / contadorTotalAlumnos);
    document.write(" el porcentaje de estudiantes que estudia fisica es  " + porcentajeFisica + " % <br>");
  }
  else
  {
    document.write("no se ingresaron alumnos de fisica para hacer un porcentaje <br> ");
  }

  if (contadorSistemas !=0)
  {
    PorcentajeSistemas = (contadorSistemas * 100 / contadorTotalAlumnos);
    document.write(" el porcentaje de estudiantes que estudia sistemas es  " + PorcentajeSistemas + " % <br>");
  }
  else
  {
    document.write(" no se ingresaron alumnos de sistemas para hacer un porcentaje.<br>"); 
  }

  if(banderaMaterias!=0)
  {
    document.write(" el nombre del que cursa mas materias exceptuando quimica es " + nombreMasMaterias + " y su edad es " + edadMasMaterias + "<br>");
  }
  else
  {
    document.write(" no se ingresaron alumnos <br>");
  }


}


/*
Enunciado:
Realizar el algoritmo que permita ingresar los datos de los 500 alumnos de la UTN FRA, los datos solicitados son:
nombre,
carrera("Quimica";"Fisica";"Sistemas"),
sexo (masculino - femenino -no binario),
cantidad de materias(entre 1 y 5),
Nota promedio del alumno(entre 0 y 10),
edad (validar).
Se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
b) El nombre de la alumna mas joven.
c) Porcentaje de estudiantes que estudia cada carrera.
d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.

*/