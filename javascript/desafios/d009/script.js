function reajuste(){
    let res = document.querySelector('div#res')
    let nome = window.prompt("Qual é o nome do funcionário?")
    let salario = window.prompt(`Qual é o salário de ${nome}`)
    let porcentagem = window.prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`)
    let salario_atual = Number(salario)
    let porc = Number(porcentagem)
    let aumento = ((salario_atual * porc) / 100)  
    let novo_salario = salario_atual + aumento
    res.innerHTML = `<h1>${nome} recebeu um aumento salarial!</h1>`
    res.innerHTML += `<p>O salário atual era ${salario_atual.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>`
    res.innerHTML += `<p>Com um aumento de ${porc}%, o salário vai aumentar ${aumento.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} no próximo mês</p>`
    res.innerHTML += `<p>E a partir daí, ${nome} vai passar a ganhar ${novo_salario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.</p>`
}
