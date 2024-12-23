import "dotenv/config";
import "./database/connectdb.js";
import express from "express";
import authRouter from "./routes/auth.routes.js";


const app = express();
app.use(express.json());
app.use('/', authRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("hola server http://localhost:" + PORT));
