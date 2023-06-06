const key = "ad6700132703ce7572ca15ca34a07b19"

function colocarDadosNaTela(dados){
    document.querySelector(".cidade").innerHTML = dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".text-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".previsao").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
}

async function buscarCidade(cidade) {

    const dados = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric
    `).then(resposta => resposta.json())

    colocarDadosNaTela(dados)
}

function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}