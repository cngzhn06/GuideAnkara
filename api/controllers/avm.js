const Avm = require('../models/avm')

const getAvm = async(req,res) => {
    try{
        const avm = await Avm.find();
        res.status(200).json(avm)
    }
    catch(error) {
    console.log("🚀 ~ app.get ~ error:", error)
    }
}

module.exports = {getAvm}