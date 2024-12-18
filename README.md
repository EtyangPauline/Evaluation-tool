# Evaluation-tool
## Overview
The **Performance Evaluation Tool** is a Human Resource Management platform designed to streamline the process of conducting performance reviews, setting goals, and providing feedback. This tool aims to enhance employee growth and productivity by enabling a structured evaluation system.

## Features
- **User Authentication**: Secure login and signup functionality.
- **Performance Reviews**: Create, view, and manage employee performance reviews.
- **Goal Setting**: Define and track employee goals.
- **Feedback Mechanism**: Facilitate self-assessments and 360-degree feedback.
- **Dashboard**: A user-friendly interface for managers and employees to access reviews and goals.

## Technologies Used
### Backend
- **Node.js**
- **Express.js**
- **MySQL**
- **JSON Web Tokens (JWT)** for authentication

### Frontend
- **HTML5**
- **CSS3**
- **JavaScript**

### Tools
- **Postman**: API testing
- **Git and GitHub**: Version control

## Setup Instructions
### Prerequisites
1. Install [Node.js](https://nodejs.org/).
2. Install MySQL and create a database.
3. Install [Postman](https://www.postman.com/) for API testing.

### Backend Setup
1. Navigate to the `backend/` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure the `.env` file with the following variables:
   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=performance_tool
   JWT_SECRET=your_jwt_secret
   ```
4. Run database migrations (if applicable).
5. Start the server:
   ```bash
   node server.js
   ```

### Frontend Setup
1. Open the `frontend/` directory.
2. Edit API endpoint URLs in `app.js` if necessary.
3. Open HTML files directly in your browser or serve them using a local server.

## Usage
- Access the frontend by opening `index.html` in your browser.
- Use Postman to test the backend API endpoints.
- Login or sign up to access the dashboard and explore features.

## API Endpoints
### Authentication
- **POST** `/api/auth/signup`: Register a new user.
- **POST** `/api/auth/login`: Authenticate a user.

### Performance Reviews
- **GET** `/api/reviews`: Fetch all performance reviews.
- **POST** `/api/reviews`: Create a new performance review.

### Goals
- **GET** `/api/goals`: Retrieve goals for an employee.
- **POST** `/api/goals`: Add a new goal.

### Feedback
- **POST** `/api/feedback`: Submit feedback.

## Contributing
We welcome contributions! Please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push to your fork.
4. Submit a pull request.
