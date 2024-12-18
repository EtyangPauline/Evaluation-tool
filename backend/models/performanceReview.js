// backend/models/performanceReview.js
module.exports = function(db) {
    const createReview = (employeeId, managerId, reviewDate, reviewText, callback) => {
        const query = `INSERT INTO performance_reviews (employee_id, manager_id, review_date, review) 
                       VALUES (${employeeId}, ${managerId}, '${reviewDate}', '${reviewText}')`;
        db.query(query, callback);
    };

    return { createReview };
};

