let cotacao = window.prompt("Antes de mais nada. Quanto está a cotação do dólar agora?")

function converter(){
    let res = document.getElementById('res')
    let reais = window.prompt("Quantos R$ você tem na carteira?")
    let dolar = Number(cotacao) * Number(reais)
    let c = Number(cotacao)
    let r = Number(reais)
    let d = c * r
    r_currency = r.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    d_currency = d.toLocaleString('en-US', {style:'currency', currency: 'USD'})
    res.innerHTML = `<p>Com ${r_currency}, você consegue comprar ${d_currency}</p>`
}
