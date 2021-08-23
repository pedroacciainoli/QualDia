let dayLista = ['Domingo','Segunda', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
let mesLista = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
const data = document.querySelector("section");

setInterval(()=> {
    let mainDate = new Date();
    let day = dayLista[mainDate.getDay()];
    let mes = mesLista[mainDate.getMonth()];
    let date = mainDate.getDate();
    let year = mainDate.getFullYear();
    let hour = mainDate.getHours();
    let minute = mainDate.getMinutes();
    let seconds = mainDate.getSeconds();

    if(minute.toString().length == 1) {
        minute = `0${minute}`;
    }

    if(seconds.toString().length == 1) {
        seconds = `0${seconds}`;
    }

    

    return (
        data.innerHTML = `<h1>Que dia é hoje?</h1><h3>${day}, dia ${date} do mês ${mes} do ano de ${year}. </h3><br>
        <h1>Horário Atual</h1>
        <h3>Horário ${hour}:${minute}:${seconds}</h3>` 
    )
}, 1000);