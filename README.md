# Blog API using Node.js and Express.js

## Project Description

This project is a simple Blog REST API developed using Node.js and Express.js.

The API performs CRUD operations on blog posts and includes:

* Create Post
* Read Posts
* Update Post
* Delete Post
* Pagination
* Validation
* Middleware Logging
* Error Handling
* Timestamps

The API was tested using Postman.

---

# Technologies Used

* Node.js
* Express.js
* Postman

---

# Project Structure

```plaintext
BLOG-API
│
├── node_modules
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

---

# Installation Steps

## Install Dependencies

```bash
npm install
```

---

## Run Server

```bash
node server.js
```

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
| POST   | /api/posts     | Create new post |
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
* Validation
* Middleware Logging
* Error Handling
* Timestamps
* Postman Testing

---

# Author

Suneetha Vemagiri
