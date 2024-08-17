const router = require("express").Router();
const { Comment, Post, User } = require("../../models");
const { ensureAuthenticated } = require("../../utils/auth.js"); // middleware for authentication

// CREATE a new comment
router.post("/", ensureAuthenticated, async (req, res) => {
  try {
    console.log(`11111`, req.body);
    const newComment = await Comment.create({
      comment_txt: req.body.comment_text,
      post_id: req.body.post_id,
      user_id: req.user.id, // assuming session middleware stores user ID
    });

    res.status(200).json(newComment);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// GET all comments
router.get("/", async (req, res) => {
  try {
    const comments = await Comment.findAll({
      //   include: [],
    });
    res.status(200).json(comments);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "Failed to retrieve comments", error: err });
  }
});

// GET a single comment
router.get("/:id", async (req, res) => {
  try {
    const comment = await Comment.findByPk(req.params.id, {
      include: [{ model: Post }, { model: User }],
    });

    if (!comment) {
      res.status(404).json({ message: "No comment found with this id!" });
      return;
    }

    res.status(200).json(comment);
  } catch (err) {
    res.status(500).json({ message: "Failed to retrieve comment", error: err });
  }
});

//PUT - Update an exisiting comment by ID
router.put("/:id", async (req, res) => {
  try {
    const [updated] = await Comment.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (updated) {
      const updatedComment = await Comment.findByPk(req.params.id);
      res.json(updatedComment);
    } else {
      res.status(404).json({ message: "No comment found with this id!" });
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a comment
router.delete("/:id", async (req, res) => {
  try {
    const commentData = await Comment.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!commentData) {
      res.status(404).json({ message: "No comment found with that id!" });
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
