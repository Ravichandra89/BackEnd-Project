import mongoose from "mongoose";

const userSchema = new Schema(
  {
    username: {
        type : String,
        required: true,
        unique: true,
        lowercase : true,
        trim: true,
        index: true // Male element searchable
    },
    email: {
        type : String,
        required: true,
        unique: true,
        lowercase : true,
        trim: true,
    },
    fullname: {
        type : String,
        required: true,
        trim: true,
        index: true
    },
    avatar: {
        type: String, // Cloudnary service
        required: true,
    },
    coverImage: {
        type : String, // Cloudnary
    },
    // Array 
    watchHistory: [
        {
            type: Schema.Types.ObjectId,
            reg: "Video"
        }
    ],
    password: {
        // Password is Encrypted 
        type: String,
        required: [true, "Password is Required"]
    },
    refreshToken: {
        type: String,
    }
    // Timestamps gives the CreatedAt and Updated At details
  },
  {
    timestamp: true
  }
)

export const User = mongoose.model("User",userSchema);