
//CREANDO UN ARRAY DE CLASES ANTERIORES CON OBJETO
class pilas{
  constructor(tipo,precio){
    this.tipo=tipo;
    this.precio=parseFloat(precio);
  }
}
let arrayBaterias=[];

arrayBaterias.push(new pilas("aaa","200"));
arrayBaterias.push(new pilas("aa","200"));
arrayBaterias.push(new pilas(prompt("tipo"),prompt("precio")));



//lista de baterias con DOM
let tituloBaterias = document.createElement("ul");
tituloBaterias.innerHTML="<ul>baterias</ul>";
document.body.appendChild(tituloBaterias);

//agregar baterias con DOM
let listaBaterias = document.getElementById("arrayBaterias");

for (const pila of arrayBaterias){
  let li=document.createElement("li");
  li.innerHTML=arrayBaterias
  tituloBaterias.appendChild(li);
}

