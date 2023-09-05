import express, { request, response } from "express";
import {PORT, mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";
const app  = express();

app.use(express.json()); 

// Middleware for handling CORS Policy
// option:1 allow all origin with default of cors(*)  
app.use(cors());
// option:2 allow specific origin  
// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', "POST", "PUT", "DELETE"],
//     allowedHeaders: ['Content-Type'],
// })
// );

app.get("/", (request, response)=>{
    console.log(request)
    return response.status(234).send('bookstore app')
});
app.use("/books", booksRoute); 
mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('app connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening on port ${PORT}`)
        });
    })
    .catch(()=>{
        console.log(error);
    })