const express = require('express');
const axios = require("axios")
const router = express.Router();


router.post('/', async(req, res) => {
    const {menuId} = req.body;

console.log("server",menuId);

    if (!menuId) return res.status(400).json({ success: false, message: "menuId missing" });

    try {
        const apiResponse = await axios.post(`${API_URI}`, {
            resturantId: 1,
            "menuId":menuId
        });
        const menu = apiResponse.data || null;
        
        res.json({success: true,menu})
    } catch (error) {
        console.error("API request failed:", error.message);
        res.json({success: false, menu: null})
    }
});

module.exports = router;
