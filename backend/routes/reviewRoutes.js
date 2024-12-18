// backend/routes/reviewRoutes.js
const reviewModel = require('../models/performanceReview')(db);
const authMiddleware = require('../middleware/auth');

module.exports = function(app) {
    app.post('/reviews', authMiddleware, (req, res) => {
        const { employeeId, managerId, reviewDate, reviewText } = req.body;
        reviewModel.createReview(employeeId, managerId, reviewDate, reviewText, (err, result) => {
            if (err) return res.status(500).json({ message: 'Error creating review' });
            res.status(201).json({ message: 'Review created successfully' });
        });
    });
};
