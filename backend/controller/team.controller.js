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

const editTeams = asyncHandler(async(req,res)=>{
    const team = Team.findById(req.params.id);
    if(!team){
        throw new ApiError(404,"Team Not found");
    }
    if(!team.creator.toString()!==req.user._id.toString()){
        throw new ApiError(403,"Only the team creator can edit this team");
    }
    const allowedFields = ["name","description","skillsNeeded", "maxMembers", "visibility", "tags", "status"]
    allowedFields.forEach((field)=>{
        if(req.body[field]!==undefined) team[field]= req.body[field];
    });
    team.refershStatus();
    await team.save();
    return res.status(200).json(new ApiResponse(200,"Team updated successfully",team));
});

const getTeamDetails = asyncHandler(async(req,res)=>{
    const team= await Team.findById(req.params.id)
    .populate("creator", "name username profilePicture reputation")
    .populate("members.user", "name username profilePicture skills reputation")
    .populate("project", "title type status");

    if(!team){
        throw new ApiError(404,"Team Not found");
    }
    return res.status(200).json(new ApiResponse(200,"Team detaills fetched",team));
});