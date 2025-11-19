const express = require('express');
const axios = require("axios")
const router = express.Router();

router.get('/', async(req, res) => {
    const logo = "US Best Chicken & Burger"
    try {
        const apiResponse = await axios.post(`${process.env.API_URI}/GetBanner`,{
         "resturantId":process.env.RESTURANT_ID,
         "page":"Home"
        })
        const apiResponse2 = await axios.post(`${process.env.API_URI}/GetCategoryMenu`, 
        { resturantId: process.env.RESTURANT_ID });
        const response = apiResponse.data?.data || apiResponse.data;
        const categoryMenu = apiResponse2.data?.data || apiResponse2.data;

        res.render('index', { logo, data: response, categoryMenu});
    } catch (error) {
        console.error("API request failed:", error.message);
        res.status(500).send("Error fetching data");
        
    }
});

module.exports = router;