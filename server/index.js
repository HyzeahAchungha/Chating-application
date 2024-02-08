import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from "body-parser";
import AuthRoute from './Router/AuthRoute.js'
import UserRoute from "./Router/UserRoute.js"
import postRoute from './Router/postRoute.js'
import UploadRoute from './Router/UploadRoute.js'
import MessageRoute from "./Router/MessageRoute.js"
import ChatRoute from "./Router/ChatRoute.js"
//Routes

const app = express()


// to serve images for public
app.use(express.static('public'))
app.use('/images', express.static("images"))

//middleware
onst cors = require('cors');
const corsOptions ={
    origin:'https://chating-application-kdpx.vercel.app/auth', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
dotenv.config()
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});


mongoose.connect(process.env.MONGO_DB,
	{ useNewUrlparser: true, useUnifiedTopology: true }
)
	.then(() => app.listen(process.env.PORT, () => console.log(`server is runing on ${process.env.PORT}`)))
	.catch((error) => console.log(error))



	
//usage of routes
app.use('/auth', AuthRoute)
app.use("/user", UserRoute)
app.use('/post', postRoute)
app.use('/upload',UploadRoute)
app.use("/chat",ChatRoute)
app.use("/message", MessageRoute)
