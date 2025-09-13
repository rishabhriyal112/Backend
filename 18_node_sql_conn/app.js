const path = require('path');
const express = require('express');
const rootDir = require("./utils/pathUtil");
const errorsController = require("./controllers/errors")
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const storeRouter= require('./routes/storeRouter');
const  hostRouter  = require('./routes/hostRouter'); // Destructured import
const { Rows } = require('lucide-react');

app.use(express.static(path.join(rootDir, 'public')));
app.use(express.urlencoded());

app.use(storeRouter);              
app.use("/host", hostRouter);     

// 404 Handler (must be last)
app.use(errorsController.pageNotFound);

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
