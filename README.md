# FinanceFlow

## Description

FinanceFlow is a full-stack expense tracking web application that helps users manage their personal income and expenses. Users can securely register and log in, add and manage transactions, search records in real time, and view category summaries through a modern dashboard interface.

The application is designed as a single-page application (SPA) using React and communicates with a backend API connected to MongoDB Atlas.

---

## Tech Stack

### Frontend

* React
* Vite
* React Router DOM
* Axios
* CSS

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* bcryptjs

---

## Features

* User Registration and Login
* JWT Authentication
* Password Hashing with bcrypt
* Protected Routes
* Create Transactions
* Read Transactions
* Update Transactions
* Delete Transactions
* Live Search Filtering
* Dashboard Summary Cards
* Category Summary
* Responsive Dashboard Layout

---

## Folder Structure

frontend/

* src/

  * components/
  * pages/
  * services/
  * App.jsx
  * main.jsx

backend/

* config/
* controllers/
* middleware/
* models/
* routes/
* server.js

---

## How to Run the Project

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Authentication

FinanceFlow uses JWT authentication for secure login sessions.

Passwords are hashed using bcrypt before storing them in MongoDB Atlas.

Protected routes require a valid JWT token.

---

## CRUD Operations

The application supports full CRUD operations:

* Create transaction
* Read transactions
* Update transaction
* Delete transaction

All data is stored in MongoDB Atlas.

---

## Live Search

The application includes a live search feature that filters transactions dynamically while users type into the search bar.

---

## Challenges and Solutions

One challenge during development was connecting the React frontend with the Express backend while keeping the UI responsive. Axios was used to simplify API communication.

Another challenge was implementing secure authentication. JWT tokens and bcrypt password hashing were added to improve security.

Managing real-time updates after CRUD operations was also important. React state and useEffect were used to refresh dashboard data dynamically.

---

## Future Improvements

* Monthly charts and analytics
* Dark mode
* Budget planning tools
* Mobile optimization
* User profile editing

---

## Author

Jialan Xing
