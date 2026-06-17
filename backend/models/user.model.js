import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
{
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    phoneNumber:{
        type:Number,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        unique:true,
        length:8,
        trim:true,

    },
    username:{
        type:String,
        required:true,
        unique:true,
    },
    profilePicture:{
        type:String,
    },
    coverPicture:{
        type:String,
    },
    
    


    
},{
    timestamps:true
})

export const User = mongoose.model("User",userSchema)