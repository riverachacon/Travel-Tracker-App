var votes = []

function vote(candidato) {
    votes.push(candidato);
}

function countVotes(){
    var conteo = {}
    for(var i = 0; i< votes.length; i++){
        var voto = votes[i]
        if (conteo[voto] === undefined){
            conteo[voto] = 1
        }else{
            conteo[voto]++
        }
    }
    return conteo
}

vote('candidato 1')
vote('candidato 2')
vote('candidato 3')
vote('candidato 1')
vote('candidato 1')
vote('candidato 1')
vote('candidato 1')


console.log(countVotes())