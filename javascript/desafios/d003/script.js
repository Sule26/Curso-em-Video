function AntSuc(){
    let num = window.prompt("Digite um número inteiro qualquer")
    let n = Number.parseInt(num)
    let ant = n - 1
    let suc = n + 1
    window.alert(`Antes de ${n}, temos o número ${ant}.
Depois de ${n}, temos o número ${suc}.`)
}
