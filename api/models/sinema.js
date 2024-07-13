const mongoose = require("mongoose");

const SinemaSchema = new mongoose.Schema({
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

const Sinema = mongoose.model('sinemas', SinemaSchema);

module.exports = Sinema;
