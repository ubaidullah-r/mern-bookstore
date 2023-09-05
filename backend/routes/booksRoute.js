import express from "express";
import { Book } from "../models/bookModel.js";
const router = express.Router();

// route for getting all books
router.get("/", async(request, response) => {
    try{

        const books = await Book.find({});

        return response.status(200).json({
            count: books.length,
            data: books
        });

    }catch(error){
        console.log(error.message);
        return response.status(500).send({message: error.message});

    }

})
// route for getting book by id
router.get("/:id", async(request, response) => {
    try{

        const {id} = request.params;

        const book = await Book.findById(id);

        return response.status(200).json(book);

    }catch(error){
        console.log(error.message);
        return response.status(500).send({message: error.message});

    }

})
// route for adding books
router.post("/", async (request, response) => {
    try{
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
            
           ){
            return response.status(400).send({
                message:"send all required fields: title, author, publishYear",
           });
        }

        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear ,

        };

        const book = await Book.create(newBook);
        return response.status(201).send(book);

    } catch(error){
        console.log(error.message);
        return response.status(500).send({message:error.message});

    }

});

// route for updating books
router.put("/:id", async (request, response) => {
    try{
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
            
           ){
            return response.status(400).send({
                message:"send all required fields: title, author, publishYear",
           });
        }

        const {id}  = request.params;

        const result = await Book.findByIdAndUpdate(id, request.body);
        if (!result){
            return response.status(404).json({message: "book not find"});
        }

        return response.status(200).send({message: "book updated sucessfully"})
    }catch(error){
        console.log(error.message);
        return response.status(500).message({message: error.message})

    }
});

router.delete("/:id", async (request, response) => {
    const {id} = request.params;
    const result = await Book.findByIdAndDelete(id);
    if(!result){
        return response.status(404).json({message: "book not found"});
    }

    return response.status(200).send({message: "book has been deleted sucessfully"});
    
});

export default router;