//Juan Luis Silva - Desafío nro 6 y Complementario- Arrays y Sort.

//Mi OBJETO DECLARADO.................................................................................................................

const silicona = {
    marca: "Topex",
    color: "Negro",
    textura: "Rígido",
    precio: 15,
}
console.log(silicona);



//MI MOLDE DE ADHESIVOS...............................................................................................................

 function Adhesivo (marca, color, textura, precio){
     this.marca = marca;
     this.color = color;
     this.textura = textura;
     this.precio = precio;
 }

 const adhesivo1 = new Adhesivo ("Sikaflex", "Blanco", "Elástico", 30);
 const adhesivo2 = new Adhesivo ("Soudal", "Gris", "Plástica", 45);

 console.log(adhesivo1);
 console.log(adhesivo2);




 //ARRAYS DE MIS PRODUCTOS MÁS VENDIDOS...............................................................................................

 const adhesivosMasVendidos = ["Sikaflex 11 FC", "Sanisil AC ", "Sikaboon 227", "Soudal Fix All", "FixAll Crystal Clean", "Soudal Foam 300"];
 
 for (let i = 0; i < adhesivosMasVendidos.length; i++) {
     console.log(adhesivosMasVendidos[i]);
 }
 
 let listadeAdhesivos = adhesivosMasVendidos.toString();
 console.log(listadeAdhesivos);
 



//PUSH PARA AGREGAR MÁS PRODUCTOS A MI ARRAYS DE SILICONAS............................................................................

adhesivosMasVendidos.push("Taco químico Topex 2000");
adhesivosMasVendidos.push("Topex Clavos Clear");
adhesivosMasVendidos.push("topex Poliuretano 420");

console.log(adhesivosMasVendidos);




//SLICE PARA CLASIFICAR MI LISTA DE ARRAYS POR MARCAS DE SILICONAS.................................................................

const listaSoudal = adhesivosMasVendidos.slice(3, 6);
const listaSika = adhesivosMasVendidos.slice(0, 3);
const listaTopex = adhesivosMasVendidos.slice(6, 9);

console.log(listaSoudal);
console.log(listaSika);
console.log(listaTopex);




//MÉTODO PARA DEVOLVER EL SALUDO INICIAL EN MAYÚSCULAS................................................................................

let saludoInicial=prompt("Bienvenido a tu tienda Online de Adhesivos, como te llamas?")

let textoenMayuscula= saludoInicial.toUpperCase();
   alert("Un gusto saludarte" +" "+ textoenMayuscula);




//PROPIEDADED DE MI OBJETO............................................................................................................

 let laMarca=prompt("Bienvenido, por favor ingresa la Marca del Adhesivo que deseas comprar:");
 let elColor=prompt("Ahora, ingresa el Color que deseas en el Ahdesivo:");
 let laTextura=prompt("También, ingresa la textura que buscas en el Adhesivo:");
 
 let miAdhesivoIdeal = new Adhesivo(laMarca, elColor, laTextura);
 alert("El Adhesivo que estás buscando es: "+ miAdhesivoIdeal.marca+" "+ miAdhesivoIdeal.color+" "+ miAdhesivoIdeal.textura);




//FOR...OF PARA SELECCIONAR MIS PRODUCTOS TOP 10...................................................................

const adhesivosTop10 = [ { nombre: "Sikaflex 11 fc", precio: 300 },
{ nombre: "Soudal Topex Clear", precio: 28 },
{ nombre: "Topex Poliuretano", precio: 441 }
];

for (const pegamento of adhesivosTop10) {
console.log("Nombre del Producto: "+ pegamento.nombre+" , "+ "Precio: "+ pegamento.precio +" "+ "Soles.");

}

//MÉTODO SORT PARA OREDENAR MI ARRAYS DE SILICONAS TOP 10 POR PRECIO................................................ 
//(DE MENOR PRECIO A MAYOR)......................................................................................... 


adhesivosTop10.sort(function (a, b) {

if (a.precio > b.precio) {
return 1;
}
if (a.precio < b.precio) {
return -1;
}
return 0;
});

console.log(adhesivosTop10);

alert("Mis adhesivos top 10 por Rango de precios son los siguientes: \nSoudal Topex Clear. \nSikaflex 11 fc. \nTopex Poliuretano ");





 //EL HORARIO DE ATENCIÓN  DE MI TIENDA ONLINE.........................................................................................
//EL HORARIO DE MI TIENDA DE ADHESIVOS ES: 7:00 AM A 11:00 AM Y DE 2:00 PM A 8:00 PM...................................................


class miNegocio {
    constructor(nombre, direccion, propietario, rubro) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }

    estaAbierto(hora) {
        
        if (((hora >= 7) && (hora <= 11)) || ((hora >= 14) && (hora <= 20))) {
            return true;
        } else {
            return false;
        }
    }
}

const local1 = new miNegocio("Tienda de Adhesivos Juancito", "Lima Perú", "Juan Silva", "Ferretería");
console.log(local1);


for (i = 1; i <= 2; i++) {
    let horarioDeAtencion = parseInt(prompt("Ingrese un horario para saber si estamos atendiendo: (horario militar)"));
    let abierto = local1.estaAbierto(horarioDeAtencion); 
    if (abierto) {
        alert("Claro que estamos abierto, estamos a la orden. te Esperamos..!!!");
    } else {
        alert("En estos momentos estamos cerrados, te esperamos en nuestro horario de: 7:00 am a 11:00 am y de las 14:00 a las 20:00");
    }
}

alert(" DIOS TE BENDIGA =) Gracias por visitarnos.");
