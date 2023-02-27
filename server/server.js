import express from "express"
import cors from "cors"
import morgan from 'morgan';
import connect from "./database/conn.js";
import router from "./router/route.js"; 


const app = express()


/********** Middelware ************/
app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))  //HTTP request logger middleware for node.js
// app.disable('x-powered-by')   //securty perpose 


/** Api Router */
app.use('/api',router)



app.get('/',(req,res)=>{
    res.send("helllo")
    console.log("welcome nodejs master");
    }
)




const port = 8080;
connect().then(()=>{
    try {
        app.listen(port,()=>{
            console.log(`server connected sesseccfuly in port: ${port}`);
        })
    }catch (error) {
        console.log('Cannot connect to the server')
    }
}).catch(error => {
    console.log("Invalid database connection....!")
})