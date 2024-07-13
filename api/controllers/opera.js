const Opera = require('../models/opera')

const getOpera = async(req,res) => {
    try{
        const opera = await Opera.find();
        res.status(200).json(opera)
    }
    catch(error) {
    console.log("🚀 ~ app.get ~ error:", error)
    }
}

module.exports = {getOpera}