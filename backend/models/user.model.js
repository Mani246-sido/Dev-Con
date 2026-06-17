import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
{
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true,
        trim:true,
    },
    phoneNumber:{
        type:Number,
        unique:true,
        sparse:true, 
    },
    password:{
        type:String,
        select:false,
        required:function(){
            return !this.googleId && !this.githubId;
        },
        unique:true,
        minlength:8,
        trim:true,

    },
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    profilePicture:{
        type:String,//cloudinary
        default:"",
    },
    coverPicture:{
        type:String,//cloudinary
        default:"",
    },
    //Oauths
    googleId:{ 
        type:String,
        default:null,
    },
    githubId:{
        type:String,
        default:null,
    },
    authProvider:{
        type:String,
        enum:["local","google","github"],
        default:"local",
    },

    bio:{
        type:String,
        default:"",
        maxlength:200,
    },
    skills:[{
        type:String,
        trim:true,
    }],
    experience:{
        type:String,
        enum:["Fresher","1-2 years","2-5 years","5+ years"],
        default:"Fresher",
    },
    isAvailable:{
        type:Boolean,
        default:true,   
    },
    AvailableFor:[{
        type:String,
        enum:[
            "Hackarthon",
            "open source contribution",
            "college project",
            "startup",
            "freelance",
        ],
    },
],

    
    


    
},{
    timestamps:true
})

export const User = mongoose.model("User",userSchema)