/*1.Numero par*/

function prueba() {
    var nota = document.getElementById('numero1').value;
    if (nota % 2 == 0) {
        p = document.getElementById("p");
        var newContentName = document.createTextNode(" Es un numero par");
        p.appendChild(newContentName);
    }
    else {
        p = document.getElementById("p");
        var newContentName = document.createTextNode(" Es un numero impar");
        p.appendChild(newContentName);
    }
}
/*2.Tabla de multiplicar*/
function multiplicar() {
    var tablam = document.getElementById("tabla").value;
    document.write('<body class=cuerpotabla>')
    document.write("<link href=estilo.css rel=stylesheet>");
    document.write('<table class=tablaestilo>');
    document.write('<th colspan="5" style=font-size:40px;color:#57B4B4;>Tabla del número ' + tablam + '</th>');
    for (var i = 1; i <= 10; i++) {
        document.write('<tr>');
        document.write('<td class=trestilo>' + tablam);
        document.write('<td class=trestilo>x');
        document.write('<td class=trestilo>' + i);
        document.write('<td class=trestilo>=');
        var igual = tablam * i;
        document.write('<td class=trestilo>' + igual);
        document.write('</tr>');
    }
    document.write('</table>');

}
/*3.Tabla de multiplicar 2 a 9*/
function dosanueve() {
    document.write('<body class=cuerpotabla>')
    document.write("<link href=estilo.css rel=stylesheet>");
    for (var k = 2; k <= 9; k++) {
        /*document.write("<tr><td>"+tabla+" X "+k+"</td><td>"+tabla*k+"</td></tr>");*/
        document.write('<table class=tablaestilo2>');
        document.write('<th colspan="5" style=font-size:40px;color:#57B4B4;>Tabla del número ' + k + '</th>');
        for (var i = 1; i <= 10; i++) {
            document.write('<tr>');
            document.write('<td class=trestilo2>' + k);
            document.write('<td class=trestilo2>x');
            document.write('<td class=trestilo2>' + i);
            document.write('<td class=trestilo2>=');
            var igua = k * i;
            document.write('<td class=trestilo2>' + igua);
            document.write('</tr>');
        }

    }
    document.write("</table>");

}
/*4.Numero primo*/
function numeroprimo() {
    var nume=prompt("Ingrese numero");
    if (Number(nume) % 2 == 0 && Number(nume) != 2) {
        p = document.getElementById("pprimo");
        var newContentName = document.createTextNode(" Tu numero no es primo");
        p.appendChild(newContentName);
    }
    else if (Number(nume) % 3 == 0 && Number(nume) != 3) {
        p = document.getElementById("pprimo");
        var newContentName = document.createTextNode(" Tu numero no es primo");
        p.appendChild(newContentName);
    }
    else if (Number(nume) % 5 == 0 && Number(nume) != 5) {
        p = document.getElementById("pprimo");
        var newContentName = document.createTextNode(" Tu numero no es primo");
        p.appendChild(newContentName);
    }
    else if (Number(nume) % 7 == 0 && nume != 7) {
        p = document.getElementById("pprimo");
        var newContentName = document.createTextNode(" Tu numero no es primo");
        p.appendChild(newContentName);
    }
    else {
        p = document.getElementById("pprimo");
        var newContentName = document.createTextNode(" Tu numero es primo");
        p.appendChild(newContentName);
    }

}
/*5.Ascendete*/
function ordenar() {
    let ordenar1 = ["12", "50", "23", "11", "18", "35", "41", "85", "16", "45"]
    ordenar1.sort();
    console.log(ordenar1);
}
/*6.Vectores*/
let nombres = [];
let edades = [];

function entrar() {
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;

    nombres.push(nombre);
    edades.push(edad);

}

function ver() {
    console.log("Vector Nombres");
    for (let i = 0; i < nombres.length; i++) {
        console.log("[" + nombres[i] + "]");
        console.log("[" + edades[i] + "]");
    }
}
    function buscar() {
        let nomBus = document.getElementById("nomBus").value;
        let posicion;
        let existe = false;

        for (let i = 0; i < nombres.length; i++) {
            if (nombres[i] == nomBus) {
                posicion = i;
                existe = true;
            }
        }
        if (existe) {
            console.log("El usuario " + nombres[posicion] + " ya existe y tiene la edad de " + edades[posicion]);
        }
        else {
            console.log("No existe el usuario");
        }

    }

/*7.Menor y mayor*/
let nam = [];
let age = [];
valor = 0;
function agregar() {
    let names = document.getElementById("name").value;
    let ages = document.getElementById("age").value;

    nam.push(names);
    age.push(ages);

}

function averiguar() {
    console.log("Vectores");
    console.log("Vector Nombres");
    for (let i = 0; i < nam.length; i++) {
        console.log("[" + nam[i] + "]");
    }
    console.log("Vector edad");
    for (let i = 0; i < age.length; i++) {
        console.log("[" + age[i] + "]");
    }

    console.log("Datos consulta");
    for (let i = 0; i < age.length; i++) {
        if (age[i] > valor) {
            posicion = i;
            valor = age[i];
        }
    }
    for (let i = 0; i < age.length; i++) {
        if (age[i] < valor) {
            posicion1 = i;
            valor = age[i];
        }
    }

    console.log("Mayor");
    var max = Math.max(...age)
    console.log("Su nombre es " + nam[posicion] + " su edad es: " + max);
    console.log("Menor");
    var min = Math.min(...age)
    console.log("Su nombre es " + nam[posicion1] + " su edad es: " + min);
}
/*8 palindromo*/
function btnIn() {
    console.log("Polindrome");
    const textoIn = document.getElementById("textoIn");
    let palabra = textoIn.value;

    let palabrArray = palabra.split("");//convierte en un arreglo
    let tamano = palabrArray.length;

    let contador = 0;
    let postFinal = tamano - 1;
    console.log("PALABRA INGRESADA");
    console.log("Palabra: " + palabra);
    console.log("Tamano: " + tamano);

    for (let i = 0; i < tamano; i++) {
        if (palabrArray[i] == palabrArray[postFinal]) {
            contador++;
        }
        postFinal--;
    }
    if (contador == tamano) {
        console.log("La palabra es palindrome");
        //p = document.getElementById("8");
        //var newContentName = document.createTextNode("La palabra es palindrome");
        //p.appendChild(newContentName);
    }
    else {
        console.log("La palabra no es palindrome");
        //p = document.getElementById("8");
        //var newContentName = document.createTextNode("La palabra no es palindrome");
        //p.appendChild(newContentName);
    }

}
/*9 fibonacci*/
function fibonacci1(){
fi=document.getElementById("numerofi").value;
console.log("FIBONACCI");
var fibo = [0,Number(fi)];
	for(i=2; i <= 14; i++){
		fibo.push(fibo[i-1] + fibo[i-2]);
		console.log(fibo[i]);	
	}
}
/*10 Empleado*/
function parafiscal() {
    var devengo=document.getElementById("sal").value;
    var salud = devengo*3/100;
    var pension = devengo*3/100;
    var s=devengo-salud;
    var l=s-pension;
    var salario=l;
    //salario mayor a 10 salarios minimos
    var icbf=devengo*3/100;
    var sena=devengo*2/100;
    var m=l-icbf;
    var j=l-sena;
    var valor=j;

    if(devengo>=9085260){
        p = document.getElementById("10");
        var newContentName = document.createTextNode("Su devengo es: "+devengo);
        p.appendChild(newContentName);
        
        p = document.getElementById("11");
        var newContentName = document.createTextNode("Su aporte a la salud es: "+salud);
        p.appendChild(newContentName);
    
        p = document.getElementById("12");
        var newContentName = document.createTextNode("Su aporte a la pension es: "+pension);
        p.appendChild(newContentName);
        
        p = document.getElementById("13");
        var newContentName = document.createTextNode("Su aporte a ICBF es: "+icbf);
        p.appendChild(newContentName);
        
        p = document.getElementById("14");
        var newContentName = document.createTextNode("Su aporte a el sena es: "+sena);
        p.appendChild(newContentName);

        p = document.getElementById("15");
        var newContentName = document.createTextNode("Su aporte a la pension es: "+valor);
        p.appendChild(newContentName);
    }else{
        p = document.getElementById("10");
        var newContentName = document.createTextNode("Su devengo es: "+devengo);
        p.appendChild(newContentName);
        
        p = document.getElementById("11");
        var newContentName = document.createTextNode("Su aporte a la salud es: "+salud);
        p.appendChild(newContentName);
    
        p = document.getElementById("12");
        var newContentName = document.createTextNode("Su aporte a la pension es: "+pension);
        p.appendChild(newContentName);
        
        p = document.getElementById("13");
        var newContentName = document.createTextNode("Su salario es: "+salario);
        p.appendChild(newContentName);
    }

}
