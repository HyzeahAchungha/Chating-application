const io = require('socket.io')(8800, {
    cors: {
        origin: "http://localhost:3000"
    }
})

let activeUsers = []

io.on("connection", (socket) => {

    //add new User
    socket.on('new-user-add', (newUserId) => {
        // if user is not added previouly
        if (!activeUsers.some((user) => user.userId === newUserId)) {

            activeUsers.push({
                userId: newUserId,
                socketId: socket.id
                
            })
        }
        console.log("Connected Users", activeUsers);
        io.emit('get-users', activeUsers)
    })
    socket.on("disconnected", () => {
        activeUsers = activeUsers.filter((user) => user.socketId !== socket.id)
        console.log("User Disconnected", activeUsers);
        io.emit('get-users', activeUsers)
    })

})
