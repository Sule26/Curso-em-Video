function converter(){
    let num = window.prompt("Digite uma temperatura em ºC(Celsius)")
    let res = document.getElementById('res')
    let n = Number(num)
    let f = (n * 9 / 5) + 32
    let k = n + 273.15
    res.innerHTML = `<h1>A temperatura de ${num.replace('.', ',')}ºC, correspondee a...</h1>`
    res.innerHTML += `<p>${k.toFixed(2).replace('.', ',')}ºK (Kelvin)</p>`
    res.innerHTML += `<p>${f.toFixed(2).replace('.', ',')}ºF (Fahrenheit)</p>`
}
