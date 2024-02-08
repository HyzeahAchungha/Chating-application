


const io = require('socket.io')(8800, {
    cors: {
        origin: "https://chating-application-kdpx.vercel.app/auth"
        

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

//send messages
socket.on("send-message", (data)=>{
    const {receiverId}=data;
    const user = activeUsers.find((user)=>user.userId===receiverId)
    console.log("Sending from socket to: ", receiverId);
    console.log("Data",data);
    if (user) {
        io.to(user.socketId).emit("receive-message",data)
        
    }
})

    socket.on("disconnected", () => {
        activeUsers = activeUsers.filter((user) => user.socketId !== socket.id)
        console.log("User Disconnected", activeUsers);
        io.emit('get-users', activeUsers)
    })

})

