const axios = require("axios");

async function fetchCategoryMenu(req, res, next) {
  try {
    const apiResponse = await axios.post("https://admin.foodstek.com/api/GetCategoryMenu",{ 
    resturantId:1
    })
    res.locals.categoryMenu = apiResponse.data?.data || apiResponse.data;
  } catch (error) {
    console.error("Failed to fetch Mega Menu:", error.message);
    res.locals.categoryMenu = []; 
  }

  next();
}

module.exports = fetchCategoryMenu;
