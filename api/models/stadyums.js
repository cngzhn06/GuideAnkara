const mongoose = require("mongoose");

const StadyumSchema = new mongoose.Schema({
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

const Stadyum = mongoose.model('stadyums', StadyumSchema);

module.exports = Stadyum;
