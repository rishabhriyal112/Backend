//Core Module
const path = require('path');

// External Module
const express = require('express');

// Local Modules (Custom Routers)
const userRouter = require('./routes/userRouter');   // Handles "/"
const hostRouter = require('./routes/hostRouter');   // Handles "/host/add-home" GET and POST
const rootDir = require("./utils/pathUtil")

const app = express();

// Middleware to parse form data (application/x-www-form-urlencoded)
app.use(express.urlencoded()); // Allows you to access form data via req.body

// Mount Routers
app.use(userRouter);  // Handles routes like "/"
app.use("/host",hostRouter);  // Handles routes like "/host/add-home"

// 404 Middleware (must be placed after all other routes)
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir , 'views' ,'404.html'));
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
