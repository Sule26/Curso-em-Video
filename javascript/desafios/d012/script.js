function verificar() {
    let res = document.querySelector('div#res')
    let preco_prompt = window.prompt("Qual era o preço anterior do produto?")
    let npreco_prompt = window.prompt("Qual é o preço atual do produto?")
    let preco = Number(preco_prompt)
    let npreco = Number(npreco_prompt)
    let diferenca
    let variacao
    res.innerHTML = `<h1>Analisando os valores informados</h1>`
    res.innerHTML += `<p>O produto custava ${preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} e agora custa ${npreco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.</p>`
    if (npreco > preco) {
        diferenca = npreco - preco
        variacao = ((npreco * 100) / preco) - 100
        res.innerHTML += `<p>Hoje o produto está mais caro.</p>`
        res.innerHTML += `<p>O preço subiu ${diferenca.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} em relação ao preço anterior.</p>`
        res.innerHTML += `<p>Uma variação de ${variacao.toFixed(2)}% para cima.</p>`
    }else {
        diferenca = preco - npreco
        variacao = 100 - ((npreco * 100) / preco)
        res.innerHTML += `<p>Hoje o produto está mais barato.</p>`
        res.innerHTML += `<p>O preço caiu R${diferenca.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} em relação ao preço anterior.</p>`
        res.innerHTML += `<p>Uma variação de ${variacao.toFixed(2)}% para baixo.</p>`
    }
}
