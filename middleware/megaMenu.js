const axios = require("axios");

async function fetchMegaMenu(req, res, next) {
  try {
    const apiResponse = await axios.post("https://admin.foodstek.com/api/GetMegaCategory", {
      resturantId: 1,
    });
    res.locals.megaMenu = apiResponse.data?.data || apiResponse.data;
  } catch (error) {
    console.error("Failed to fetch Mega Menu:", error.message);
    res.locals.megaMenu = []; 
  }

  next();
}

module.exports = fetchMegaMenu;
