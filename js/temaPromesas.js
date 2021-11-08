/* Promesas en JS */
/* Es una clase que ya trae JS por defecto. */

/* Primero instanciamos o llamamos la clase "promise" de JS */
/* Recibe dos parametros, uno que va a resolver si se cumple la promesa y otro que la rechazara o envia un 
error si la promesa no se cumple. */
/* Dentro de los parentesis de la promesa encerramos una funcion de tipo 'ArrowFunction', y colocamos dos 
parametros dentro de la funcion que son - 'resolve' este se ejecuta si la promesa se cumple y 'reject' si 
esta no se cumple y la rechaza. */
/* let promesa = new Promise((resolve, reject) => {
    
}) */

/* Planteamos un pequeño ejercicio. */
function mensajePromesaResuelta(){
    console.log("La promesa se cumplio...hurra!!");
}

let dinero = 50000;

let promesaEjemplo = new Promise((resolve, reject) => {
    if(dinero == 50000){
        resolve(mensajePromesaResuelta())
    }else{
        reject('La promesa no se cumplio.')
    }
})