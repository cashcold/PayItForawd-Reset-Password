const jwt = require('jsonwebtoken')
const dotEnv = require('dotenv')
dotEnv.config()

function auth(req,res,next){
    const token = req.header('x-access-token');
    if(!token) return res.status(401).send("Access Denied")
   
    try{
        jwt.verify(token, process.env.TokenSecret,(err, decoded)=>{
            if(err) return status(400).send('invalid Client')
            else{
                req.decoded = decoded
                next()
            }
        })
        
    }catch(err){
        res.send('invalid token')
    }


}

module.exports = auth;

