// script.js

const temperatura = document.getElementById("temp");
const humedad = document.getElementById("humedad");
const suelo = document.getElementById("suelo");
const bomba = document.getElementById("bomba");

function activarRiego(){

  bomba.innerHTML = "ENCENDIDA 🚿";

  setTimeout(()=>{
    bomba.innerHTML = "APAGADA";
  },3000);

}

function modoAutomatico(){

  alert("Modo Automático Activado 🌱");

}

function actualizarDatos(){

  let temp = Math.floor(Math.random()*10)+25;

  let hum = Math.floor(Math.random()*30)+50;

  let humedadSuelo = Math.random();

  temperatura.innerHTML = temp + "°C";

  humedad.innerHTML = hum + "%";

  if(humedadSuelo > 0.5){

    suelo.innerHTML = "SECO";

    bomba.innerHTML = "ENCENDIDA 🚿";

  }else{

    suelo.innerHTML = "HÚMEDO";

    bomba.innerHTML = "APAGADA";

  }

}

setInterval(actualizarDatos,3000);

const ctx = document.getElementById('grafica');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5','6'],
    datasets: [{
      label: 'Temperatura °C',
      data: [25,26,27,28,29,28],
      borderWidth: 3
    }]
  },
  options: {
    responsive:true
  }
});

