// backend/models/goal.js
module.exports = function(db) {
    const createGoal = (employeeId, goalDescription, targetDate, progress, callback) => {
        const query = `INSERT INTO goals (employee_id, goal_description, target_date, progress) 
                       VALUES (${employeeId}, '${goalDescription}', '${targetDate}', ${progress})`;
        db.query(query, callback);
    };

    return { createGoal };
};

