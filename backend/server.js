import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv"

dotenv.config()
const app = express(); 
const PORT = process.env.PORT || 5000; 
app.use(cors);
app.use(express.json()); 

app.get("/", (req, res) => {
    res.send("API moveis nadalini esta funcionando");
});

const MongoURL = process.env.MONGO_URL

mongoose.connect(MongoURL, {

}).then(() => {
    app.listen(PORT, () => console.log('servidor rodando na porta' + PORT))
}).catch((err) => console.error("Erro ao conectar no Mongo ", err))