function contar(){
    let res = document.querySelector("div#res")
    res.innerHTML += `<h2>Número pares de 1 a 10</h2>`
    for(let i = 2; i <= 10; i += 2){
        res.innerHTML += ` ${i} 👉`
    }
    res.innerHTML += `🏁`
}
