const express = require("express");
const axios = require("axios");

const router = express.Router();

const { getHospitals } = require("../controllers/hospitals");
const { getParks } = require("../controllers/parks");
const { getUniversites } = require("../controllers/universites");
const { getAvm } = require("../controllers/avm");
const { getMuze } = require("../controllers/muze");
const { getOpera } = require("../controllers/opera");
const { getSinema } = require("../controllers/sinema");
const { getStadyum } = require("../controllers/stadyum");
const { getTiyatro } = require("../controllers/tiyatro");

router.get("/get-parks", getParks);
router.get("/get-hospitals", getHospitals);
router.get("/get-universites", getUniversites);
router.get("/get-avm", getAvm);
router.get("/get-muze", getMuze);
router.get("/get-opera", getOpera);
router.get("/get-sinema", getSinema);
router.get("/get-stadyum", getStadyum);
router.get("/get-tiyatro", getTiyatro);

router.get('/yelp', async (req, res) => {
    const location = req.query.location || 'Ankara';
    const term = req.query.term || ''; 

    try {
        const response = await axios.get('https://api.yelp.com/v3/businesses/search', {
            headers: {
                Authorization: `Bearer ${process.env.TOKEN}`
            },
            params: {
                location: location,
                term: term, 
                limit: 50,
            }
        });
        res.json(response.data.businesses);

    } catch (e) {
        console.error('Error', e);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

module.exports = router;
