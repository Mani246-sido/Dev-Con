/*import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json({limit:"5mb"}));
app.use(express.urlencoded({extended:true,limit:"5mb"}));


export default app;*/
import express from "express";
import cors from "cors";
import { router } from "./routes/routes.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(cors());
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true, limit: "5mb" }));

app.get("/api/health", (req, res) => {
  res.status(200).json({ success: true, message: "DevConnect API running" });
});

app.use("/api/v1", router);

app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

app.use(errorHandler);

export default app;