const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'assets')));


app.get('/', (req, res) => {
    const logo = "US Best Chicken & Burger"
    res.render('index', {logo });
});

app.get("/menu", (req, res) => {
    res.render("menu")
})
app.get("/gallery", (req, res) => {
    res.render("gallery")
})
app.get("/contact", (req, res) => {
    res.render("contact")
})
app.get("/cart", (req, res) => {
    res.render("cart")
})
app.get("/checkout", (req, res) => {
    res.render("checkout")
})
app.get("/blog", (req, res) => {
    res.render("blog")
})
app.get("/delivery", (req, res) => {
    res.render("delivery")
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
