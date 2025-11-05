const express = require('express');
const axios = require("axios")
const router = express.Router();

router.get('/', async(req, res) => {
    const logo = "US Best Chicken & Burger"
    try {
        const apiResponse = await axios.post("https://admin.foodstek.com/api/GetBanner",{
         "resturantId":1,
         "page":"Home"
        })
        const response = apiResponse.data?.data || apiResponse.data;
        res.render('index', { logo, data: response});
    } catch (error) {
        console.error("API request failed:", error.message);
        res.status(500).send("Error fetching data");
        
    }
});

module.exports = router;