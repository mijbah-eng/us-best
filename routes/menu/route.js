const express = require('express');
const axios = require("axios")
const router = express.Router();


router.get('/', async(req, res) => {
    const activeCategoryId = req.query.id;
    try {
        // Banner API
        const apiResponse = await axios.post("https://admin.foodstek.com/api/GetBanner", {
            resturantId: 1,
            page: "Menu"
        });

        // Category Menu API
        const apiResponse2 = await axios.post("https://admin.foodstek.com/api/GetCategoryMenu", 
            { resturantId: 1 },
            { timeout: 8000 }
        );

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
