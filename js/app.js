
function obtenerFecha(){
    let fecha = new Date();

    //console.log(fecha);
    //console.log(fecha.getMonth());  //numer0 de mes 0 a 11
    //console.log(fecha.getDay());    //numero de dia 1  a 31
    //console.log(fecha.getDate());   //dia de semana ej: miercoles domingo 0 lunes 1 
    
    let semanas = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes","Sabado"];
    
    let meses = ["Ene", "Feb", "Mar", "Abr", "May","Jun","Jul","Ago","Sep","oct","Nov","Dic"];
    
    let fechaReloj = document.getElementById("fecha");
    fechaReloj.innerHTML = `${semanas[fecha.getDate()]} ${fecha.getDay()} de 
    ${meses[fecha.getMonth()]} del ${fecha.getUTCFullYear()}`
    
    //creo las variables para trabajar la hora
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();
    
    if(hora <10){
        hora = "0" + hora;
    }
    
   if(minutos <10){
       minutos = "0" + minutos;
   }

   if(segundos <10 ){
       segundos = "0" + segundos;
   }

    let horaReloj = document.getElementById("hora");
    horaReloj.innerHTML = `${hora}:${minutos}:${segundos}`
     
}

//invocar al reloj cada segundo

setInterval(obtenerFecha,1000);
