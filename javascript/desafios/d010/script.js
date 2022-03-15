function calcular(){
    let res = document.querySelector('div#res')
    let va = window.prompt("Qual é o valor de a?")
    let vb = window.prompt("Qual é o valor de b?")
    let vc = window.prompt("Qual é o valor de c?")
    let a = Number(va)
    let b = Number(vb)
    let c = Number(vc)
    let delta = b**2 - 4*a*c
    res.innerHTML = `<h1>Resolvendo Bhaskara</h1>`
    res.innerHTML += `<p>A equação atual é <strong>${a}x<sup>2</sup> + ${b}x + ${c} = 0</strong></p>`
    res.innerHTML += `<p>O cálculo realizado será <strong>Δ = ${b}<sup>2</sup> - 4 . ${b} . ${c}</strong></p>`
    res.innerHTML += `<p>O valor calculado foi <strong>Δ = ${delta}</strong></p>`
}
