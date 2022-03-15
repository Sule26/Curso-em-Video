function idade(){
    let res = document.querySelector("div#res")
    let ano_nascimento = Number(window.prompt("Em que ano você nasceu?"))
    let agora = new Date
    let ano = agora.getFullYear()
    res.innerHTML = `<p>Quem nasceu em ${ano_nascimento} vai completar <strong>${ano - ano_nascimento}</strong> anos em ${ano}.`
}
