const Park = require('../models/parks')

const getParks = async(req,res) => {
    try{
        const park = await Park.find();
        res.status(200).json(park)
    }
    catch(error) {
    console.log("🚀 ~ app.get ~ error:", error)
    }
}

module.exports = {getParks}