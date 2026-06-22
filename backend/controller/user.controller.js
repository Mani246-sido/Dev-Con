import User from '../models/user.model.js';
import { ApiError } from '../utils/ApiError.js';
import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiResponse} from "../utils/ApiResponse.js"

const getMe = asyncHandler(async(req,res)=>{
    const user = await User.findbyId(req.user._id);
    if(!user){
        throw new ApiError(404,"User Not Found");

    }
    return res.status(200).json(new ApiResponse(200,"Profile fetched successfully",user));
});
export{
    getMe,
};