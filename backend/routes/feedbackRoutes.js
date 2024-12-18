const db = require('../config/database'); 
const Feedback = require('../models/feedback'); 

exports.createFeedback = (req, res) => {
    const { reviewer_id, reviewee_id, feedback_text } = req.body;

    const query = 'INSERT INTO feedback (reviewer_id, reviewee_id, feedback_text) VALUES (?, ?, ?)';
    const values = [reviewer_id, reviewee_id, feedback_text];

    db.query(query, values, (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Failed to create feedback', error: err });
        }
        res.status(201).json({ message: 'Feedback created successfully', id: results.insertId });
    });
};

exports.getAllFeedback = (req, res) => {
    const query = 'SELECT * FROM feedback';

    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Failed to fetch feedback', error: err });
        }
        res.status(200).json(results);
    });
};

exports.getFeedbackByUser = (req, res) => {
    const userId = req.params.id;
    const query = 'SELECT * FROM feedback WHERE reviewer_id = ? OR reviewee_id = ?';

    db.query(query, [userId, userId], (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Failed to fetch feedback for user', error: err });
        }
        res.status(200).json(results);
    });
};

exports.updateFeedback = (req, res) => {
    const feedbackId = req.params.id;
    const { feedback_text } = req.body;

    const query = 'UPDATE feedback SET feedback_text = ? WHERE id = ?';
    db.query(query, [feedback_text, feedbackId], (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Failed to update feedback', error: err });
        }
        res.status(200).json({ message: 'Feedback updated successfully' });
    });
};

exports.deleteFeedback = (req, res) => {
    const feedbackId = req.params.id;

    const query = 'DELETE FROM feedback WHERE id = ?';
    db.query(query, [feedbackId], (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Failed to delete feedback', error: err });
        }
        res.status(200).json({ message: 'Feedback deleted successfully' });
    });
};
