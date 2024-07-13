const Hospital = require('../models/hospitals');

const getHospitals = async(req,res) => {
    try{
        const hospital = await Hospital.find();
        res.status(200).json(hospital)
    }
    catch(error) {
    console.log("🚀 ~ app.get ~ error:", error)
    }
}

module.exports = {getHospitals}