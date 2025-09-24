const express=require('express');
const router=express.Router();
const {createTeam,deleteTeam,fetchTeams}=require('../controllers/teamController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/',authMiddleware,createTeam);
router.delete('/:teamid',authMiddleware,deleteTeam);
router.get('/',authMiddleware,fetchTeams);
module.exports=router;