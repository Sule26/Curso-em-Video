function calcular(){
    let res = document.querySelector("div#res")
    let n1 = Number(window.prompt("Primeiro valor:"))
    let n2 = Number(window.prompt("Segundo valor:"))
    let opcao = Number(window.prompt(`Valores informados: ${n1} e ${n2}\nO que vamos fazer?\n[1]Somar\n[2]Subtrair\n[3]Multiplicar\n[4]Dividir`))
    res.innerHTML = `<h2>Calculando...</h2>`
    let result
    switch (opcao) {
        case 1:
            result = n1 + n2
            res.innerHTML += `<p>${n1} + ${n2} = <strong>${result}</strong></p>`
            break;
        case 2:
            result = n1 - n2
            res.innerHTML += `<p>${n1} - ${n2} = <strong>${result}</strong></p>`
            break;
        case 3:
            result = n1 * n2
            res.innerHTML += `<p>${n1} x ${n2} = <strong>${result}</strong></p>`
            break;
        case 4:
            result = n1 / n2
            res.innerHTML += `<p>${n1} / ${n2} = <strong>${result.toLocaleString("pt-BR")}</strong></p>`
            break;
        default:
            break;
    }

}

