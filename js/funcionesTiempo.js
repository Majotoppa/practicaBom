//ejecutar una accion luego de un cierto tiempo
let contador = 1;

function saludar(){
    document.write("<br> hola mundo");
    if(contador ==5){
        //cuando cumpla la condicion quiero detener el intervalo
        window-clearInterval(intervalo)
    }
    contador++;
}
//1 nombre de la funcion que quiero ejecutar
//2 despues de cuanto quiero que se ejecute la funcion 
window.setTimeout(saludar,3000);

setTimeout(saludar, 3500)
//esta solo sirve si no voy a volver a invocar la funcion
 /*setTimeout(() => {
    document.write("<br> hola mundo");
},3000);
*/

//una funcion que quiero que se ejecute cada cierto tiempo en milisegundos

let intervalo = window.setInterval(saludar, 2500);

