function troco(){
    nome = window.prompt("Que produto você está comprando?")
    preco = window.prompt(`Quanto custa ${nome} que você está comprando?`)
    pagou = window.prompt(`Qual foi o valor que você deu para pagar ${nome}?`)
    p = Number(preco)
    preco_currency = p.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    pag = Number(pagou)
    pag_currency = pag.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    t = pag - p
    t_currency = t.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    window.alert(`Você comprou ${nome} que custou ${preco_currency}.
Deu ${pag_currency} em dinheiro e vai receber ${t_currency} de troco.
Volte sempre!`)
}
