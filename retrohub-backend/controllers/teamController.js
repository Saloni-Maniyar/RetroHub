const Team=require('../models/Team');
const TeamMemberShip=require('../models/TeamMembership');

//Team creation route
const createTeam=async(req,res)=>{
    try{
        console.log("REQ BODY:", req.body);
        const userid=req.user.id;
        console.log('userid ',userid);
        const {team_name,description,team_type}=req.body;
        const team=await Team.create({team_name,team_type,description,created_by:userid});
        console.log(team);
        console.log(userid);
        const teamMembership=await TeamMemberShip.create({user:userid,team:team._id,role:"manager",joined_date:Date.now()})
        return  res.status(201).json({message:"team created",team,teamMembership});
    }catch(err){
       return res.status(500).json({ message: "Server error", error: err.message });
    }
    

};

//delete Team
const deleteTeam=async(req,res)=>{
    try{
        const userid=req.user.id;
        const {teamid}=req.params;
        console.log(teamid);
        console.log(userid);
        const manager=await TeamMemberShip.findOne({role:"manager",user:userid,team:teamid});
        console.log(manager);
        if(!manager){
             return res.status(403).json({ message: "You are not authorized to delete this team" });
        }
        const deletedTeam=await Team.findByIdAndDelete(teamid);
        if(!deletedTeam){
            return res.status(404).json({message:"Team not found"});
        }
        console.log('deleted team',deletedTeam);
        //after deleting team delete all the membership record related to that team
        const deletedMemberships=await TeamMemberShip.deleteMany({team:teamid});
        console.log("deleted all members from that team",deletedMemberships);
         return res.status(200).json({
                message: "Team and related memberships deleted successfully",
                deletedTeam,
                deletedMemberships
    });
        
    }catch(err){
        return res.status(500).json({ message: "Server error", error: err.message });
    }
    
}

const fetchTeams=async(req,res)=>{
    try{
        const userid=req.user.id;
        const teams=await TeamMemberShip.find({user:userid}).populate('team');
        console.log('teams',teams);
        const managedTeams=teams.filter(team=>team.role=='manager');
        const participatedTeams=teams.filter(team=>team.role=='member');
        console.log('managed Teams: ',managedTeams);
        console.log('Participated Teams: ',participatedTeams);

       return res.status(200).json({
             message: "Fetched teams successfully",
             managedTeams,
             participatedTeams,
        });
        
    
    
    }catch(err){
        return  res.status(500).json({ message: "Server error", error: err.message });
    }
}

module.exports={createTeam,deleteTeam,fetchTeams};
