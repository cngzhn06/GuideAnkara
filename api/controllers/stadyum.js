const Stadium = require('../models/stadyums')

const getStadyum = async(req,res) => {
    try{
        const stadyum = await Stadium.find();
        res.status(200).json(stadyum)
    }
    catch(error) {
    console.log("🚀 ~ app.get ~ error:", error)
    }
}

module.exports = {getStadyum}