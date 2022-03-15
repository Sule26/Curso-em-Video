function tabuada(){
    let res = document.querySelector("div#res")
    let n = Number(document.getElementById("txtn").value)
    res.innerHTML = `<h2>Tabuada de ${n}</h2>`
    for (let i = 0; i <= 10; i++) {
        res.innerHTML += `${n} x ${i} = <strong>${n*i}</strong><br>`
    }
}
