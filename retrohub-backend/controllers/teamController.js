const Team=require('../models/Team');
const TeamMemberShip=require('../models/TeamMembership');

//Team creation route
const createTeam=async(req,res)=>{
    try{
        console.log("REQ BODY:", req.body);
        const userid=req.user.id;
        const {team_name,description,team_type}=req.body;
        const team=await Team.create({team_name,team_type,description,created_by:userid});
        console.log(team);
        console.log(userid);
        const teamMembership=await TeamMemberShip.create({user:userid,team:team._id,role:"manager",joined_date:Date.now()})
        res.status(201).json({message:"team created",team,teamMembership});
    }catch(err){
        res.status(500).json({ message: "Server error", error: err.message });
    }
    

};

//delete Team
const deleteTeam=async(req,res)=>{
    try{
        const userid=req.user.id;
        console.log(userid);
        const manager=await TeamMemberShip.findOne({$and:[{role:"manager"},{user:user.id}]});
        console.log(manager);
        if(manager){
            const teamid=manager.team;
            const deletedTeam=await Team.findByIdAndDelete(teamid);
            console.log('deleted team',deletedTeam);
            //after deleting team delete all the membership record related to that team
            const deleteMemberships=await TeamMemberShip.findOneAndDelete({team:teamid});
            console.log("deleted all members from that team",deleteMemberships);
        }
    }catch(err){
         res.status(500).json({ message: "Server error", error: err.message });
    }
    
}

module.exports={createTeam};