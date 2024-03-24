import dotenv from "dotenv"
import connectDB from "./db/index.js";


// Config the DotEnv
dotenv.config({
    path: "./env" 
})

connectDB()
.then(() =>{
    app.listen(8000 || process.env.PORT, () => {
        console.log(`Server Running on ${process.env.PORT}`);
    })

    app.on("error",(error) => {
        console.log("ERROR : ",error);
        throw error
    })
})
.catch((err) => {
    console.log("MongoDb connection Failer",err);
})




// import express from "express"
// const app = express()

// ( async () => {
//     try {
//         mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

//         // Adding the listners
//         app.on("error",(error) => {
//             console.log("ERROR: ",error);
//             throw error;
//         })

//         app.listen(process.env.PORT, () => {
//             console.log("App is listning on port",process.env.PORT);
//         })

//     } catch (error) {
//         console.error("ERROR: ", error);
//     }
// })()

