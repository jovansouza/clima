const key = `74d6639659202812135c38f848c10865`



function screen(dados){

    document.querySelector('.city').innerHTML =dados.name
    document.querySelector('.graus').innerHTML =Math.floor(dados.main.temp ) + ' °C';
    document.querySelector('.weather').innerHTML = dados.weather[0].description
    document.querySelector('.umidade').innerHTML ='Umidade: ' + dados.main.humidity + '%'
    document.querySelector('.icon').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    
    console.log(dados)
}



async function seachcity(city){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`)
    .then(response => {
       return  response.json() })
    
        screen(dados)
}



 function btn(){
    const city = document.querySelector('.seach').value

    seachcity(city)
 }