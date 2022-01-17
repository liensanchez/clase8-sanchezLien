
//CREANDO UN OBJETO DE CLASES ANTERIORES CON OBJETO
class pilas{
  constructor(tipo,precio){
    this.tipo=tipo;
    this.precio=parseFloat(precio);
  }
}

//ARRAY DE BATERIAS
let arrayBaterias=[];

arrayBaterias.push(new pilas("aaa","200"));
arrayBaterias.push(new pilas("aa","200"));
//PIDIENDO DATOS CON PROMPT
arrayBaterias.push(new pilas(prompt("tipo"),prompt("precio")));



//LISTA DE BATERIAS CON DOM
let tituloBaterias = document.createElement("ul");
tituloBaterias.innerHTML="<ul>baterias</ul>";
document.body.appendChild(tituloBaterias);

//AGREGAR CON DOM A LA LISTA
let listaBaterias = document.getElementById("arrayBaterias");

for (const pila of arrayBaterias){
  let li=document.createElement("li");
  //AGREGUE JSON.STRNGIFY PARA QUE DEJE DE MOSTRAR [OBJEWCT,OBJECT] entonces no puedes mostrar todo el objeto
/*
tiene que mostrar la propiedad que quieres mostrar en todo caso
por ejemplo: pila.name;
me explico?*/
  //con "arrayBaterias" en cada "li" me muestra el array completo, con "pila" me muestra en cada "li" el un objeto del array
  li.innerHTML=pila.tipo;
  tituloBaterias.appendChild(li);
}

