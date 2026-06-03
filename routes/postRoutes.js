const express = require("express");

const router = express.Router();

const {
  getAllPosts,
  getSinglePost,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/postController");

const validatePost = require("../middleware/validatePost");

router.get("/", getAllPosts);

router.get("/:id", getSinglePost);

router.post("/", validatePost, createPost);

router.put("/:id", validatePost, updatePost);

router.delete("/:id", deletePost);

module.exports = router;