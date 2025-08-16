import mongoose, {isValidObjectId, model} from "mongoose";
import {Video} from "../models/video.model.js"
import { User } from "../models/user.model.js"
import ApiError from "./utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"

const getAllVideos = asyncHandler( async(req, res) => {
    const{page = 1, limit = 10, query, sortBy, sortType, userId } = req.query
    //TODO: get all videos based on query, sort, pagination
})

export {getAllVideos}