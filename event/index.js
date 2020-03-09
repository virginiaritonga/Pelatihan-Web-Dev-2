const events = require('events');
const emitter = new events.EventEmitter();

// create event scream
var screamCallBack = (message) => {
    console.log('Saya teriak ${message');
}

emitter.on('scream', screamCallBack);

//fire event scream
emitter.emit('scream');