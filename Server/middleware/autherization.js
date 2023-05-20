const dotenv = require("dotenv");
dotenv.config();


const Authentication = (req,res,next)=>{                    //Authorize API 
    if (req.headers.authorization) {
        const token = req.headers.authorization
        if (token) {
            function VerifyAPItoken(token){
                if(token !== process.env.APITOKEN){    //Created Own API Token
                    return res.status(400).json({
                        message: "Not a Valid Token"
                    })
                }
                next()
            }
            VerifyAPItoken(token)
            
        } else {
            return res.status(401).json({
                message: "Token Missing"
            })
        }

    } else {
        return res.status(403).json({
            message: "Not Authenticated User"
        })
    }
}

module.exports = Authentication;
