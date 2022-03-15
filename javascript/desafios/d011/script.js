function verificar(){
    let res = document.querySelector(`div#res`)
    let ano_prompt = window.prompt("Qual é o ano que você quer verificar?")
    let ano = Number(ano_prompt)
    let bissexto = 0
    if ((ano % 4 == 0) && (ano % 100 != 0) || (ano % 400 == 0)) {
        bissexto = 1
    } else{
        bissexto = 0
    }
    res.innerHTML = `<h1>Analisando o ano de ${ano}...</h1>`
    if (bissexto == 0) {
        res.innerHTML = `<p>O ano de ${ano} <span id="red">NÃO É BISSEXTO</span>\u{274C}</p>`
        document.getElementById('red').style.backgroundColor = "rgba(255, 0, 0, 0.315)"
    } else {
        res.innerHTML = `<p>O ano de ${ano} <span id="green">É BISSEXTO</span>\u{2705}</p>`
        document.getElementById('green').style.backgroundColor = "rgba(0, 255, 0, 0.315"
    }
}
