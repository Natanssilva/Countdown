

const textoDias = document.querySelector('#dias')
const textoHoras = document.querySelector('#horas')
const textoMinutos = document.querySelector('#minutos')
const textoSegundos = document.querySelector('#segundos')

const AnoNovo = new Date('31 Dec 2022')

setInterval(() =>{      //função que seta intervalo a cada segundo

    const diasAtuais = new Date()
    const totalSegundos = (AnoNovo - diasAtuais) / 1000 // pega o total de seg
    //math.flor tem o objetivo de arredondar pra baixo os results
    let dias = Math.floor((totalSegundos / 3600)/ 24) //3600 1hora /24 que vai dar o dia 
    let horas = Math.floor((totalSegundos / 3600)% 24)
    let minutos = Math.floor((totalSegundos / 60)/ 24) //60segundos = 1min
    let segundos = Math.floor((totalSegundos % 60 )/ 24)

    if(horas < 10){
        horas = `0${horas}`
    } else if(minutos < 10){
        minutos = `0${minutos}`
    } else if(segundos < 10){
        segundos = `0${segundos}`
    }
  
    textoDias.innerHTML = dias
    textoHoras.innerHTML = horas
    textoMinutos.innerHTML = minutos
    textoSegundos.innerHTML = segundos



}, 1)