class Pilas{
  constructor(tipo,precio){
  this.tipo=tipo,
  this.precio=precio;
  this.cantidad=10;
  this.stock=false;
  this.fallados=0;
  }

  //SUMAR IVA
  Iva (){
  this.precio=this.precio*1.21;
    }

  //CAMBIAR EL STOCK DE TRUE A FALSE
  Venta(){
    this.stock=true;
  }

  //QUITAR PRODUCTOS POR VENTAS
  Vender(cantidad){
    this.cantidad=this.cantidad - cantidad;
    if(this.cantidad==0){
      this.stock=false;
    }
  }

  //PRODUCTOS FALLADOS QUE DEVOLVIERON, EN CASO DE SER MAYOR AL 30% 
  Devolucion(fallados){
    this.fallados=this.fallados+fallados;
    if(this.fallados<this.cantidad*0,30){
      alert('NO COMPRAR PRODUCTO')
    }
  }
}

//INGRESO MANUAL DE PILAS
let pilas1 =new Pilas ('aaa', 200)
//COMPROBACION DE LAS VARIABLES
console.log(pilas1)
pilas1.Iva();
pilas1.Vender(3);
pilas1.Devolucion(7);


//INGRESO POR PROMPT DE PILAS

for(let index =0; index<3;index++){
  let pilas=new Pilas(
    prompt('tipo de pila'),
    prompt('precio de pila'),
    );  
}