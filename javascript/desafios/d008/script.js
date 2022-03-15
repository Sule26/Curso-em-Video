function desconto(){
    let res = document.querySelector('div#res')
    let nome = window.prompt("Qual é o produto que você está comprando?")
    let preco = window.prompt(`Qual é o preço de ${nome}?`)
    let p = Number(preco)
    let p_currency = p.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    let desc = ((p * 10) / 100)
    let desc_currency = desc.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    let np = p - desc
    let np_currency = np.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    res.innerHTML = `<h1>Calculando desconto de 10% para ${nome}</h1>`
    res.innerHTML += `<p>O preço original era ${p_currency}</p>`
    res.innerHTML += `<p>Você acaba de ganhar ${desc_currency} (-10%)</p>`
    res.innerHTML += `<p>No fim, você vai pagar ${np_currency} no produto ${nome}</p>`

}
