// backend/models/feedback.js
module.exports = function(db) {
    const createFeedback = (reviewerId, revieweeId, feedbackText, callback) => {
        const query = `INSERT INTO feedback (reviewer_id, reviewee_id, feedback_text) 
                       VALUES (${reviewerId}, ${revieweeId}, '${feedbackText}')`;
        db.query(query, callback);
    };

    return { createFeedback };
};

