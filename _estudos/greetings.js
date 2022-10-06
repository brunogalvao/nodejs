const getFlagsValue = require('./flags.js')


console.log(`Oi ${getFlagsValue('--name')}. ${getFlagsValue('--greeting')}`)