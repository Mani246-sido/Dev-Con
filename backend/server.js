/*import dotenv from 'dotenv';
dotenv.config();
import app from './app.js';
import connectDB from "./db/index.js";
const PORT = process.env.PORT || 5000;

const servertry = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
        });
        
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
        
    }
};
servertry();
*/
 import "/index.js";
 process.on("uncaughtException",(err)=>{
    console.error("UNCAUGHT EXCEPTION BHAI !!!!!! shutting down........")
    console.error(Err.name, err.name);
    process.exit(1);
 });
  
 process.on("unhandledRejection",(err)=>{
    console.error("UNHANDELED REQUEST REJECTED!! shotting down....");
    console.error(err.name,err.message);
    process.exit(1);
 })


 process.on("SIGTERM", () => {
  console.log("SIGTERM received. Shutting down gracefully...");
  process.exit(0);
});

process.on("SIGINT", () => {
  console.log("SIGINT received. Shutting down gracefully...");
  process.exit(0);
});


