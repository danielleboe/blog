const { Post } = require("../models");

const postData = [
    {
      "user_id": 1,
      "post_title":"test title",
      "post_txt": "test content",
    }

];
const preprocessData = (data) => {
  return data.map(item => {
    return {
      ...item,
      user_id: item.user_id === "" ? null : item.user_id
        };
  });
};

const seedComment = () => Post.bulkCreate(preprocessData(postData));
module.exports = seedComment;