const express = require('express');
const app = express();
const path = require('path');

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.render('index'); // Render the main page with slideshow
});

app.get('/login', (req, res) => {
    res.render('login'); // Render login page
});

app.get('/register', (req, res) => {
    res.render('register'); // Render register page
});

app.get('/otp', (req, res) => {
    res.render('otp'); // Render OTP verification page
});

app.get('/home', (req, res) => {
    res.render('home'); // Ensure you have a 'home.ejs' file inside the views directory
});

app.get("/scooty_catalog", (req, res) => {
    res.render("scooty_catalog");
});

app.get("/test_riding", (req, res) => {
    res.render("test_riding");
});

app.get("/service", (req, res) => {
    res.render("service");
});

app.get("/saving_calculator", (req, res) => {
    res.render("saving_calculator");
});

app.get("/feedback", (req, res) => {
    res.render("feedback");
});

app.get("/admin_dashboard", (req, res) => {
    res.render("admin_dashboard");
});
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
