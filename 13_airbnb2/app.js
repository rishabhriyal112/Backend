// Core Module
const path = require('path');

// External Modules
const express = require('express');
const rootDir = require("./utils/pathUtil");

// Initialize the Express application
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', 'views');

// Custom Routers
const userRouter = require('./routes/userRouter');
const { hostRouter } = require('./routes/hostRouter'); // Destructured import

// Serve static files from /public folder
app.use(express.static(path.join(rootDir, 'public')));

// Parse incoming form data (url-encoded)
app.use(express.urlencoded());

// Route Handling
app.use(userRouter);               // For "/"
app.use("/host", hostRouter);      // For "/host/*" routes

// 404 Handler (must be last)
app.use((req, res, next) => {
    res.status(404).render('404' ,{pageTitle : 'Page Not Found'} )
});

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
