import {Project } from "../models/project.model.js"
import { ApiResponse } from "../utils/ApiResponse.js";

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

})