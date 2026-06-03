const validatePost = (req, res, next) => {
  const { title, content } = req.body;

  let errors = [];

  if (!title || title.trim().length < 5) {
    errors.push("Title must contain at least 5 characters");
  }

  if (!content || content.trim().length < 20) {
    errors.push("Content must contain at least 20 characters");
  }

  if (errors.length > 0) {
    return res.status(400).json({
      messages: errors,
    });
  }

  next();
};

module.exports = validatePost;