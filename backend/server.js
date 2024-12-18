const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/database');
const authMiddleware = require('./middleware/auth');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Routes
require('./routes/employeeRoutes')(app);
require('./routes/reviewRoutes')(app);
require('./routes/goalRoutes')(app);
require('./routes/feedbackRoutes')(app);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
