function fatorial(){
    let res = document.querySelector("div#res")
    let n = Number(document.getElementById("txtn").value)
    let fat = 1
    res.innerHTML += `<h2>Calculando ${n}!</h2>`
    for (let i = n; i > 1; i--){
        res.innerHTML += `${i} x `
        fat *= i
    }
    res.innerHTML += `1 = <strong>${fat.toLocaleString("pt-br")}</strong>`
}
