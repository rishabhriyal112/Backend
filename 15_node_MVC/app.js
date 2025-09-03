const path = require('path');
const express = require('express');
const rootDir = require("./utils/pathUtil");
const errorsController = require("./controllers/errors")
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const userRouter = require('./routes/userRouter');
const { hostRouter } = require('./routes/hostRouter'); // Destructured import

app.use(express.static(path.join(rootDir, 'public')));
app.use(express.urlencoded());

app.use(userRouter);              
app.use("/host", hostRouter);     

// 404 Handler (must be last)
app.use(errorsController.pageNotFound);

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
