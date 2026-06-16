import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
{
    name:{
        type:string,
        required:true,
    },
    email:{
        type:string,
        required:true,
        unique:true,
    },
    phoneNumber:{
        type:Number,
        required:true,
        unique:true,
    },
    password:{
        type:string,
        required:true,
        unique:true,
        length:8,
        trim:true,

    },
    username:{
        type:string,
        required:true,
        unique:true,
    },
    profilePicture:{
        type:string,
    },
    coverPicture:{
        type:string,
    },
    
    


    
},{
    timestamps:true
})

export const User = mongoose.model("User",userSchema)