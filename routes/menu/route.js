const express = require('express');
const axios = require("axios")
const router = express.Router();


router.get('/', async(req, res) => {
    const activeCategoryId = req.query.id;
    try {
        // Banner API
        const apiResponse = await axios.post(`${process.env.API_URI}/GetBanner`, {
            resturantId: process.env.RESTURANT_ID,
            page: "Menu"
        });

        // Category Menu API
        const apiResponse2 = await axios.post(`${process.env.API_URI}/GetCategoryMenu`, 
            { resturantId: process.env.RESTURANT_ID });

        // Correct variable
        const categoryMenu = apiResponse2.data?.data || apiResponse2.data;

        const bannerData = apiResponse.data?.data || apiResponse.data;

        res.render('menu', { bannerData, categoryMenu, activeCategoryId });
    } catch (error) {
        console.error("API request failed:", error.message);
        res.status(500).send("Error fetching data");
    }
});

module.exports = router;
