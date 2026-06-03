# Blog API using Node.js and Express.js (MVC Architecture)

## Project Description

This project is a Blog REST API developed using Node.js and Express.js following MVC Architecture.

The API supports:

* Create Post
* Read Posts
* Update Post
* Delete Post
* Pagination
* Validation Middleware
* Logging Middleware
* Error Handling
* Timestamps

The API was tested using Postman.

---

# Technologies Used

* Node.js
* Express.js
* Postman

---

# MVC Architecture

This project follows MVC architecture for better code organization and maintainability.

### MVC Components

| Component   | Purpose                |
| ----------- | ---------------------- |
| Routes      | API endpoints          |
| Controllers | Business logic         |
| Middleware  | Validation and logging |
| Data        | Temporary data storage |

---

# Project Structure

```plaintext
BLOG-API
│
├── controllers
│   └── postController.js
│
├── routes
│   └── postRoutes.js
│
├── middleware
│   ├── logger.js
│   └── validatePost.js
│
├── data
│   └── postsData.js
│
├── server.js
├── package.json
├── README.md
└── .gitignore
```

---

# Installation Steps

## Step 1: Clone Repository

```bash
git clone <repository-url>
```

---

## Step 2: Open Project Folder

```bash
cd BLOG-API
```

---

## Step 3: Install Dependencies

```bash
npm install
```

---

# Dependencies Used

* express
* nodemon (optional)

---

# Run Project

## Normal Run

```bash
npm start
```

---

## Development Mode

```bash
npm run dev
```

---

# Server

Server runs on:

```plaintext
http://localhost:5000
```

---

# API Endpoints

| Method | Endpoint       | Description     |
| ------ | -------------- | --------------- |
| GET    | /api/posts     | Get all posts   |
| GET    | /api/posts/:id | Get single post |
| POST   | /api/posts     | Create post     |
| PUT    | /api/posts/:id | Update post     |
| DELETE | /api/posts/:id | Delete post     |

---

# Pagination

Example:

```plaintext
GET /api/posts?page=1&limit=5
```

---

# Validation Rules

* Title must contain at least 5 characters
* Content must contain at least 20 characters

---

# Example Request

```json
{
  "title": "Learning Express",
  "content": "Express JS is useful for backend API development.",
  "author": "Suneetha"
}
```

---

# Example Validation Response

```json
{
  "messages": [
    "Title must contain at least 5 characters",
    "Content must contain at least 20 characters"
  ]
}
```

---

# Features Implemented

* REST API
* CRUD Operations
* Pagination
* MVC Architecture
* Validation Middleware
* Logging Middleware
* Error Handling
* Timestamps
* Postman Testing

---

# Author

Suneetha Vemagiri
