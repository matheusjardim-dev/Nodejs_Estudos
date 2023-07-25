const getFlagValue = require('./getFlag')

console.log(`Olá ${getFlagValue('--name')}, ${getFlagValue('--greeting')}`)