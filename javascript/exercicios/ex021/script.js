function contar(){
    let res = document.querySelector("div#res")
    res.innerHTML += `<h2>Contando de 1 até 10</h2>`
    for (let i = 1; i <= 10; i++){
        res.innerHTML += `${i} 👉 `
    }
    res.innerHTML += `🏁`
}

