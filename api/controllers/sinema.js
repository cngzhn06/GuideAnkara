const Sinema = require('../models/sinema')

const getSinema = async(req,res) => {
    try{
        const sinema = await Sinema.find();
        res.status(200).json(sinema)
    }
    catch(error) {
    console.log("🚀 ~ app.get ~ error:", error)
    }
}

module.exports = {getSinema}