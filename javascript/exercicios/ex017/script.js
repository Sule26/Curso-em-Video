let res = document.querySelector("div#res")
function gerar(){
    let min = 1
    let max = 100
    let dif = max - min
    let aleatorio = Math.random()
    let n = min + Math.trunc(dif * aleatorio)
    res.innerHTML += `<p>Acabei de pensar no número <mark>${n}</mark>!</p>`
}

function zerar(){
    res.innerHTML = ""
}
