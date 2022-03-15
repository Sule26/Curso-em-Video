let num = [5, 8, 4]
num[3] = 6
num.push(7)
console.log(num)
console.log(num.length)
num.sort()
console.log(num)

for(let i in num){
    console.log(i)
}

console.log(num.indexOf(7))
