const express=require('express');
const socket=require('socket.io');

var app=express();

app.use(express.static('public'));
var server=app.listen(3000,function(){
    console.log('listening to the port 3000');
});
//socket setup
var io=socket(server);

io.on('connection',function(socket){
    console.log('socket connection has been made',socket.id);
    socket.on('chat',function(data){
        io.sockets.emit('chat',data);
    });
    socket.on('typing',function(data){
        socket.broadcast.emit(data);
    });
});
