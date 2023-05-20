const router = require("express").Router();
const axios = require("axios");

router.get("/api/v3/capsules" , async(req,res)=>{
    try{
        const response = await axios.get("https://api.spacexdata.com/v3/capsules")  // fetching the data from SpaceX's Api

        return res.status(200).json({  // sending data to own API
            capsules:response.data
        })

    }catch(e){
        return res.status(400).json({message:e.message})
    }
})

module.exports = router;