function converter(){
    let distancia = window.prompt("Digite uma distancia em metros (m)")
    let res = document.querySelector('div#res')
    let n = Number(distancia).toFixed(2)
    res.innerHTML = `<h1>A distância de ${n} metros, corresponde a...`
    res.innerHTML += `<p>${(n /1000)} quilômetros (Km)</p>`
    res.innerHTML += `<p>${n / 100} hectômetros (Hm)</p>`
    res.innerHTML += `<p>${n / 10} decâmetros (Dam)</p>`
    res.innerHTML += `<p>${n * 10} decímetros (dm)</p>`
    res.innerHTML += `<p>${n * 100} centímetros (cm)</p>`
    res.innerHTML += `<p>${n * 1000} milímetros (mm)</p>`
}
