import {Project } from "../models/project.model.js"
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js"

const createProject = asyncHandler(async(req,res)=>{
    const {title, description, type, techStack, rolesNeeded, maxTeamSize, deadline, github, tags} = req.body;
    if(!title || !description || !type){
        throw new ApiError(400,"These are mandatory fields. Please fill to proceed :)");

    }
    const project = await Project.create({
    title,
    description,
    owner: req.user._id,
    type,
    techStack,
    rolesNeeded,
    maxTeamSize,
    deadline,
    github,
    tags,
    members: [{ user: req.user._id, role: "Owner" }],

    });
    return res.status(200).json(new ApiResponse(201,"Project created succesfully !", project));

});

const editProject = asyncHandler(async(req,res)=>{
    const project = await Project.findById(req.params.id);
    if(!project){
        throw new ApiError(404,"Project Not Found ");

    }
    if(project.owner.toString() !==req.user._id.toString()){
        throw new ApiError(403,"Sorry, Only the project owner can edit this project :)")
    }
    const allowedFields = ["title", "description","type","status","techStack","rolesNeeded","maxTeamSize","deadline","github","tags"];
    allowedFields.forEach((field)=>{
        if(req.body[field] !== undefined) project[field]=req.body[field];
    });
    await project.save();
    return res.status(200).json(new ApiResponse(200,"Project updated successfully", project));
});
