/* Definicion: Son funciones que llamamos dentro de otras funciones. */
/* Ejemplo para evidenciar el funcionamiento de los callbacks */

/* Aqui recibimos como parametros los dos numeros y dentro retornamos la operacion hecha con estos dos numeros. */
function suma(num1, num2){
    return parseInt(num1) + parseInt(num2)  
}

function division(num1, num2){
    return num1 / num2
}

/* Dentro de los parametros de esta funcion enviamos los 2 numeros para la operacion y un tercer parametro llamado
"callback" que va a ejecutar la funcion que escojamos ya sea suma o division. */
function calcular(num1, num2, callbackDinamico){
    return callbackDinamico(num1, num2)
}

/* Aqui el parametro callbackDinamico le estariamos asignando la funcion suma y tambien podemos colocar
division y asi el cambio entre funciones es dinamico. */
console.log(calcular(2 , 5, suma))