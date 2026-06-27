import {Team } from "../models/team.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import  {asyncHandler} from "../utils/asyncHandler.js"

const createTeam = asyncHandler(async(req,res)=>{
    const {name, description, project, skillsNeeded, maxMembers, visibility, tags} = req.body;
    if(!name){
        throw new ApiError(400,"Team Name is requried");
    }
    const team = await Team.create({
    name,
    description,
    creator: req.user._id,
    project: project || null,
    skillsNeeded,
    maxMembers,
    visibility,
    tags,
    members: [{ user: req.user._id, role: "Creator" }],

    });
    return res.status(200).json(new ApiResponse(200,"Team created successfully",team));
});