function contar() {
    let res = document.querySelector("div#res")
    let n1 = Number(document.getElementById("txtn1").value)
    let n2 = Number(document.getElementById("txtn2").value)
    res.innerHTML += `<h2>Contando de ${n1} até ${n2}</h2>`
    if (n1 > n2) {
        for (let i = n1; i >= n2; i--){
            res.innerHTML += ` ${i} 👉`
        }
    }else if (n2 > n1) {
        for (let i = n1; i <= n2; i++){
            res.innerHTML += ` ${i} 👉`
        }
    }else {
        res.innerHTML += `Não é possível contar, pois os números são iguais`
    }
    res.innerHTML += ' 🏁'
}
