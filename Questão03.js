function compararNumeros(n1, n2){
    if (n1 > n2){
        console.log("Numero1 é maior")
    }
    else if (n1 === n2){
        console.log("Numeros iguais")
    }
    else{
        console.log("Numero2 é maior")
    }
}

console.log(compararNumeros(9,4))
console.log(compararNumeros(4,9))
console.log(compararNumeros(5,5))