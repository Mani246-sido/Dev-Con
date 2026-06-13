import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json({limit:"5mb"}));
app.use(urlencoded({extended:true,limit:"5mb"}));


export default app;