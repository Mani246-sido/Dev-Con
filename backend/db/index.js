import mongoose from 'mongoose';

//raaj--->> yha pe mongo db se connect hone ka code h

const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }
    catch(error){
    console.error(`Error:connection issue--->${error.message}`);
    process.exit(1);
    }
};
export default connectDB;