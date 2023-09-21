const events = require('events')
const eventEmitter = new events.EventEmitter()

// create an event handler
const eventHandler = function () {
    console.log('I hear something')
}

// assign event handler to an event
eventEmitter.on('scream', eventHandler)

// fire the scream event
eventEmitter.emit('scream')
