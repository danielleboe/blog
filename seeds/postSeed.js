const { Comment } = require("../models");

const commentData = [
    {
      "user_id": 1,
      "post_title":"test title",
      "post_txt": "test contentt",
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

const seedComment = () => Comment.bulkCreate(preprocessData(commentData));
module.exports = seedComment;