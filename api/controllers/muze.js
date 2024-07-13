const Muze = require('../models/muze')

const getMuze = async(req,res) => {
    try{
        const muze = await Muze.find();
        res.status(200).json(muze)
    }
    catch(error) {
    console.log("🚀 ~ app.get ~ error:", error)
    }
}

module.exports = {getMuze}