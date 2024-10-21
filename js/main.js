function numeroperfecto() {
    var numero = prompt("Ingrese un numero que desee verfificar: "); //Se solicita al usuario un numero para revisar su perfeccion  //promt () abre una ventana para recibir informacion  
    var acumulador = 0//Ponemos una variable de acumulador para sumar las numeros que den de rsultado 0



    for (i = 1; i < numero; i++) { /*ponemos los limites de i*/
        if (numero % i == 0) {  //hacemos que calcules lo restos que den 0
            acumulador = acumulador + i  //hacemos que sume los los valores y los guardamos en el acumulador   
        }

    }
    if (numero == acumulador) {//tiene que dar el mismo resultado el numero y el acumulador
        document.write("El numero ", numero, " es perfecto")//si son iguales sale que si es un numero perfecto
    } else {
        document.write("El numero ", numero, " no es perfecto")//sino sale lo contrario
    }
}

numeroperfecto(); 