const mongoose = require("mongoose");

const TiyatroSchema = new mongoose.Schema({
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

const Tiyatro = mongoose.model('tiyatros', TiyatroSchema);

module.exports = Tiyatro;
