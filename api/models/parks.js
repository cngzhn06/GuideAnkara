const mongoose = require("mongoose");

const ParkSchema = new mongoose.Schema({
    TUR: {
        type: String,
        required: true
    },
    YER_ADI: {
        type: String,
        required: true
    },
    ILCE: {
        type: String,
        required: true
    },
    CIM_ALAN_MIKTAR: {
        type: Number,
        required: true
    },
    CALILIK_ALAN: {
        type: Number,
        required: true
    },
    CICEKLIK_ALAN: {
        type: Number,
        required: true
    },
    COCUK_OYUN_ALAN: {
        type: Number,
        required: true
    },
    AGACLIK_ALAN: {
        type: Number,
        required: true
    },
    PIKNIK_ALAN: {
        type: Number,
        required: true
    },
    WC_ALAN: {
        type: Number,
        required: true
    },
    KOSUYOLU_MIKTAR: {
        type: Number,
        required: true
    },
    SPOR_ALAN: {
        type: Number,
        required: true
    },
    HAVUZ_ALAN: {
        type: Number,
        required: true
    },
    DEKORATIF_ALAN: {
        type: Number,
        required: true
    },
    YAPI_ALAN: {
        type: Number,
        required: true
    }
});

const Park = mongoose.model('park_yesilalans', ParkSchema);

module.exports = Park;
