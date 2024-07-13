const University = require('../models/universites')


const getUniversites = async(req,res) => {
    try{
        const universites = await University.find();
        res.status(200).json(universites)
    }
    catch(error) {
    console.log("🚀 ~ app.get ~ error:", error)
    }
}

module.exports = {getUniversites}