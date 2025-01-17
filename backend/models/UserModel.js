import mongoose from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },

    email : {
        type : String,
        require : true,
        unique : true,
    },

    password : {
        type : String,
        require : true,
        unique : true,
    },

});

export default mongoose.model("User", userSchema);