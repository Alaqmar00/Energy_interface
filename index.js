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

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
