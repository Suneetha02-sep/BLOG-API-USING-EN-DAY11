let posts = [];

let currentId = 1;

const getCurrentId = () => {
  return currentId++;
};

module.exports = {
  posts,
  getCurrentId,
};
