const axios = require("axios");

async function fetchMegaMenu(req, res, next) {
  try {
    const apiResponse = await axios.post(`${process.env.API_URI}/GetMegaCategory`, {
      resturantId: process.env.RESTURANT_ID,
    });
    res.locals.megaMenu = apiResponse.data?.data || apiResponse.data;
  } catch (error) {
    console.error("Failed to fetch Mega Menu:", error.message);
    res.locals.megaMenu = []; 
  }

  next();
}

module.exports = fetchMegaMenu;
