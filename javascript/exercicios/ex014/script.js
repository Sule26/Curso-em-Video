function interagir(){
    let res = document.querySelector("div#res")
    let agora = new Date
    res.innerHTML = `<p>O que eu recebi do sistema foi <mark>${agora}</mark></p>`
}
