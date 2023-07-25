const { EventEmitter } = require('events')

const ev = new EventEmitter()

// ! ev.on() => sempre que ouvir.
// ! ev.once() => somente a primeira vez.

ev.on('saySomething', (message) => {
    console.log('Ouvindo... ', message)
})

ev.emit('saySomething', "Tudo")