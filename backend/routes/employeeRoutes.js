const bcrypt = require('bcryptjs');
const jwt = require('jwt-simple');
const db = require('../config/database');

module.exports = function(app) {
    app.post('/signup', (req, res) => {
        const { username, password, role } = req.body;
        bcrypt.hash(password, 10, (err, hashedPassword) => {
            if (err) return res.status(500).json({ message: 'Error hashing password' });

            const query = `INSERT INTO employees (username, password, role) VALUES ('${username}', '${hashedPassword}', '${role}')`;
            db.query(query, (err, result) => {
                if (err) return res.status(500).json({ message: 'Error creating user' });
                res.status(201).json({ message: 'User created successfully' });
            });
        });
    });

    app.post('/login', (req, res) => {
        const { username, password } = req.body;
        const query = `SELECT * FROM employees WHERE username = '${username}'`;

        db.query(query, (err, results) => {
            if (err || results.length === 0) return res.status(404).json({ message: 'User not found' });

            const user = results[0];
            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err || !isMatch) return res.status(401).json({ message: 'Invalid credentials' });

                const payload = { id: user.id, role: user.role };
                const token = jwt.encode(payload, 'your_secret_key');
                res.json({ token });
            });
        });
    });
};
