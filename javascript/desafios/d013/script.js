function verificar(){
    let res = document.querySelector("div#res")
    let nome = window.prompt("Qual é o nome do aluno?")
    let n1_prompt = window.prompt(`Primeira nota de ${nome}:`)
    let n2_prompt = window.prompt(`Segunda nota de ${nome}:`)
    let n1 = Number(n1_prompt)
    let n2 = Number(n2_prompt)
    let media = (n1 + n2) / 2
    res.innerHTML = `<h1>Analisando a situação de ${nome}</h1>`
    res.innerHTML += `<p>Com as notas ${n1} e ${n2}, a <strong>média é ${media}</strong></p>`
    if (media >= 6) {
        res.innerHTML += `<p>Com média acima de 6,0, o aluno está <span id="aprovado">APROVADO</span></p>`
        document.getElementById('aprovado').style.backgroundColor = 'rgba(0, 255, 0, 0.400)'
    } else if (media < 3) {
        res.innerHTML += `<p>Com média abaixo de 3,0, o aluno está em <span id="reprovado">REPROVADO</span></p>`
        document.getElementById('reprovado').style.backgroundColor = 'rgba(255, 0, 0, 0.400)'
    } else{
        res.innerHTML += `<p>Com média entre 3,0 e 6,0, o aluno está em <span id="recuperacao">RECUPERAÇÃO</span></p>`
        document.getElementById('recuperacao').style.backgroundColor = 'rgba(255, 255, 0, 0.400)'
    }
}
