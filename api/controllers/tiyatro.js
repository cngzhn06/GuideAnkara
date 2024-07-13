const Tiyatro = require('../models/tiyatro')

const getTiyatro = async(req,res) => {
    try{
        const tiyatro = await Tiyatro.find();
        res.status(200).json(tiyatro)
    }
    catch(error) {
    console.log("🚀 ~ app.get ~ error:", error)
    }
}

module.exports = {getTiyatro}