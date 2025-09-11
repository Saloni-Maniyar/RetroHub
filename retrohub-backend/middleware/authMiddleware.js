require('dotenv').config();
const jwt=require('jsonwebtoken');

const authMiddleware=(req,res,next)=>{
        const authHeader = req.headers.authorization;
        if (!authHeader) {
             return res.status(401).json({ message: "No token provided" });
        }

        const token = authHeader.split(" ")[1]; // extract token after "Bearer"

         jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
             return res.status(403).json({ message: "Invalid or expired token" });
        }

        req.user = decoded; // decoded = { id, role, iat, exp }
        next(); // go to the next handler
  });
}