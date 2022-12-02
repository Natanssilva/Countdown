

const textoDias = document.querySelector('#dias')
const textoHoras = document.querySelector('#horas')
const textoMinutos = document.querySelector('#minutos')
const textoSegundos = document.querySelector('#segundos')

const AnoNovo = new Date('1 Jan 2023')

setInterval(() =>{      //método que chama função em intervalos especificados

    const diasAtuais = new Date()
    const totalSegundos = (AnoNovo - diasAtuais) / 1000 // pega o total de seg
    //math.flor tem o objetivo de arredondar pra baixo os results
    let dias = Math.floor((totalSegundos / 3600) / 24) //3600 1hora /24 que vai dar o dia 
    let horas = Math.floor((totalSegundos / 3600) % 24)
    let minutos = Math.floor((totalSegundos / 60) % 60) //60segundos = 1min
    let segundos = Math.floor(totalSegundos % 60 ) 


    textoDias.innerHTML = dias
    textoHoras.innerHTML = digitalTimer(horas)
    textoMinutos.innerHTML = digitalTimer(minutos)
    textoSegundos.innerHTML = digitalTimer(segundos)
}, 1000) //1 segundo = 1000 milissegundos

function digitalTimer(time){
    return time < 10 ? `0${time}` : time;
    /* retorna time quando for menor que 10, ?(operador condicional), se a condição for verdadeira, o operador terá o valor da template string, caso não seja, terá o valor do "time" */
}
