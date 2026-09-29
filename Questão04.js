function verificarParticipacao(idade){
    if (idade >= 16){
        console.log("Participação permitida")
    }
    else if (idade < 16){
        console.log("Participação não permitida")
    }
    else if (idade < 0){
        console.log("Idade inválida")
    }
}

console.log(verificarParticipacao(15))
console.log(verificarParticipacao(16))
console.log(verificarParticipacao(-1))