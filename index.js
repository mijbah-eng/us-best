require('dotenv').config()

const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const homePageRoute = require('./routes/home/route');
const menuPageRoute = require('./routes/menu/route');
const fetchMegaMenu = require('./middleware/megaMenu');
const getMenuDetails = require('./routes/menuDetails/route');

// Add body parser middleware
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'assets')));

// Use fetchMegaMenu BEFORE routes
app.use(fetchMegaMenu);

app.use('/', homePageRoute);
app.use("/menu", menuPageRoute);
app.use("/getMenuDetails", getMenuDetails);

app.get("/gallery", (req, res) => {
    res.render("gallery");
});
app.get("/contact", (req, res) => {
    res.render("contact");
});
app.get("/cart", (req, res) => {
    res.render("cart");
});
app.get("/checkout", (req, res) => {
    res.render("checkout");
});
app.get("/blog", (req, res) => {
    res.render("blog");
});
app.get("/delivery", (req, res) => {
    res.render("delivery");
});
app.get("/blog-details", (req, res) => {
    res.render("blog-details");
});
app.get("/login", (req, res) => {
    res.render("account");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
