// backend/models/employee.js
module.exports = function(db) {
    const createEmployee = (username, password, role, callback) => {
        const query = `INSERT INTO employees (username, password, role) VALUES ('${username}', '${password}', '${role}')`;
        db.query(query, callback);
    };

    return { createEmployee };
};
