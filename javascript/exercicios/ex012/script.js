function parimpar() {
    let res = document.querySelector("div#res")
    let n = Number(window.prompt("Digite um número:"))
    let msg
    if (n % 2 == 0) 
        msg = 'Par!'
    else
        msg = 'Ímpar!'
    res.innerHTML = `<p>O número ${n} que foi digitado é <strong>${msg}</strong></p>`
    
}

