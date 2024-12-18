// backend/routes/goalRoutes.js
const goalModel = require('../models/goal')(db);
const authMiddleware = require('../middleware/auth');

module.exports = function(app) {
    app.post('/goals', authMiddleware, (req, res) => {
        const { employeeId, goalDescription, targetDate, progress } = req.body;
        goalModel.createGoal(employeeId, goalDescription, targetDate, progress, (err, result) => {
            if (err) return res.status(500).json({ message: 'Error creating goal' });
            res.status(201).json({ message: 'Goal created successfully' });
        });
    });
};
