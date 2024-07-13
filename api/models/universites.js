const mongoose = require("mongoose");

const UniversitySchema = new mongoose.Schema({
    ADI: {
        type: String,
        required: true
    },
    ADRES: {
        type: String,
        required: true
    },
    X_KOORDINAT: {
        type: Number,
        required: true
    },
    Y_KOORDINAT: {
        type: Number,
        required: true
    }
});

const University = mongoose.model('universites', UniversitySchema);

module.exports = University;
