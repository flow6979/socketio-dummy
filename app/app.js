
const socket = io('ws://localhost:8080'); /// connecting client to server

// listening
socket.on('message', text => {

    const el = document.createElement('li');
    el.innerHTML = text;
    document.querySelector('ul').appendChild(el)

});

// allowing user to send message
document.querySelector('button').onclick = () => {

    const text = document.querySelector('input').value;
    socket.emit('message', text)
    
}

// Regular Websockets

/*
const socket = new WebSocket('ws://localhost:8080');

// Listen for messages
socket.onmessage = ({ data }) => {
    console.log('Message from server ', data);
};

document.querySelector('button').onclick = () => {
    socket.send('hello');
}
*/