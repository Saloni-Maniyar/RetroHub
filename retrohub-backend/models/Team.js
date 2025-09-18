const mongoose=require('mongoose');

const teamSchema=new mongoose.Schema({
    team_name:{
        type:String,
        required:true,
        maxlength:10,
        trim:true
    },

    team_type:{
        type:String,
        required:true,
        enum:["personal","organization","college"],
       
    },

    description:{
        type:String,

    },
    created_by:{
        user:{type:mongoose.Schema.Types.ObjectId,ref:'User'}
    },
    created_at:{
        type:Date,
        default:Date.now(),
    }
});

//for team should have unique name between team category like in college,organization or presonal team
teamSchema.index({ team_type: 1, team_name: 1 }, { unique: true });

module.exports=mongoose.model("Team",teamSchema); 