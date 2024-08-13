const { Comment } = require("../models");

const commentData = [
    {
      "user_id": 1,
      "post_id": 1,
      "comment_txt": "The crazy amount of MLMs in the salt lake valley"
    },
    {
      "user_id": 1,
      "post_id": 1,
      "comment_txt": "The inversion in December- January and the forest fire smoke july-september is horrendous.",
     }

];
const preprocessData = (data) => {
  return data.map(item => {
    return {
      ...item,
      user_id: item.user_id === "" ? null : item.user_id,
      post_id: item.prompt_id === "" ? null : item.post_id
    };
  });
};

const seedComment = () => Comment.bulkCreate(preprocessData(commentData));
module.exports = seedComment;