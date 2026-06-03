const { posts, getCurrentId } = require("../data/postsData");


// GET ALL POSTS

const getAllPosts = (req, res) => {
  let page = parseInt(req.query.page) || 1;

  let limit = parseInt(req.query.limit) || 5;

  if (page <= 0 || limit <= 0) {
    return res.status(400).json({
      message: "Page and limit must be greater than 0",
    });
  }

  const startIndex = (page - 1) * limit;

  const endIndex = startIndex + limit;

  const paginatedPosts = posts.slice(startIndex, endIndex);

  const totalPosts = posts.length;

  const totalPages = Math.ceil(totalPosts / limit);

  if (page > totalPages && totalPosts > 0) {
    return res.status(404).json({
      message: "Invalid page number",
    });
  }

  res.status(200).json({
    page,
    limit,
    totalPosts,
    totalPages,
    data: paginatedPosts,
  });
};


// GET SINGLE POST

const getSinglePost = (req, res) => {
  const id = parseInt(req.params.id);

  const post = posts.find((p) => p.id === id);

  if (!post) {
    return res.status(404).json({
      message: "Post not found",
    });
  }

  res.status(200).json(post);
};


// CREATE POST

const createPost = (req, res) => {
  const { title, content, author } = req.body;

  const newPost = {
    id: getCurrentId(),
    title,
    content,
    author,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  posts.push(newPost);

  res.status(201).json({
    message: "Post created successfully",
    data: newPost,
  });
};


// UPDATE POST

const updatePost = (req, res) => {
  const id = parseInt(req.params.id);

  const post = posts.find((p) => p.id === id);

  if (!post) {
    return res.status(404).json({
      message: "Post not found",
    });
  }

  const { title, content, author } = req.body;

  post.title = title;

  post.content = content;

  post.author = author;

  post.updatedAt = new Date();

  res.status(200).json({
    message: "Post updated successfully",
    data: post,
  });
};


// DELETE POST

const deletePost = (req, res) => {
  const id = parseInt(req.params.id);

  const postIndex = posts.findIndex((p) => p.id === id);

  if (postIndex === -1) {
    return res.status(404).json({
      message: "Post not found",
    });
  }

  posts.splice(postIndex, 1);

  res.status(200).json({
    message: "Post deleted successfully",
  });
};


module.exports = {
  getAllPosts,
  getSinglePost,
  createPost,
  updatePost,
  deletePost,
};