const { inherits } = require('util')
const { EventEmitter } = require('events')

function Personagem(nome){
    this.nome = nome
}

inherits(Personagem, EventEmitter)

const chapolin =  new Personagem('Chapolin')
chapolin.on('help', ()=> console.log(`Eu! O ${chapolin.nome} Colorado!`))

console.log('Oh! E agora, quem poderá me defender?')
chapolin.emit('help')