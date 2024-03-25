import {v2 as clodinary} from 'cloudinary';
import fs from 'fs'
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

// Creating method having the filePath
const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return "Path Not found!"
        const response = cloudinary.uploader.upload(localFilePath,{
            resource_type : "auto"
        })  
       //  Responsed Back to the user
       console.log("File is uploaded on CloudiNary",response.url);
       return response;
       
    } catch (error) {
        fs.unlink(localFilePath) 
    }

}