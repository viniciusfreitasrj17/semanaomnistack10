import socketio from 'socket.io-client';

const socket = socketio('http://192.168.100.6:3333', {
    autoConnect: false,
});

function subscribeToNewDevs(subscribeFunction) {
    socket.on('new-dev', subscribeFunction)
}

function connect(latitude, longitude, techs) {
    socket.io.opts.query = {
        latitude,
        longitude,
        techs,
    };
    
    socket.connect();
}

function desconnect() {
    if(socket.connected){
        socket.desconnect();
    }
}

export { connect, desconnect, subscribeToNewDevs };
