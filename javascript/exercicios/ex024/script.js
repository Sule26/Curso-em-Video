function contar(){
    let res = document.querySelector("div#res")
    res.innerHTML += `<h2>Contagem Regressiva de 10 a 1</h2>`
    for(let i = 10; i >= 1; i--){
        res.innerHTML += ` ${i} 👉`
    }
    res.innerHTML += `🏁`
}
