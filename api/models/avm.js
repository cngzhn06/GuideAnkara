const mongoose = require("mongoose");

const AvmSchema = new mongoose.Schema({
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

const Avm = mongoose.model('avms', AvmSchema);

module.exports = Avm;
