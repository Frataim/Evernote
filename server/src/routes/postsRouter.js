
const router = require('express').Router();
const { Post } = require('../db/models')

router.get('/all', async (req, res) => {
  if(req.session.user) {
    const allPosts = await Post.findAll({where: {userId: req.session.user.id}})
    return res.json(allPosts);
  }
  return res.sendStatus(406);
});

router.route('/new').post(async (req, res) => {
  const { title } = req.body;
  console.log(req.body)
  console.log('====>>>>sessionNEW', req.session)
  if (title) {
    const newPost = await Post.create({ title, status: false, userId: req.session.user.id });
    return res.status(201).json(newPost);
  }
  return res.sendStatus(406);
});

router.route('/:id').delete(async (req, res) => {
  const id = req.params.id;
  await Post.destroy({ where: { id, userId: req.session.user.id } })
  return res.sendStatus(200)
});

router.route('/edit/:id').patch(async (req, res) => {
  const id = req.params.id;
  const { title } = req.body
  await Post.update(title, { where: { id, userId: req.session.user.id } })
  res.json(title)
})

router.route('/:id').patch(async (req, res) => {
  const id = req.params.id;
  const findPost = await Post.findOne({ where: { id, userId: req.session.user.id } })
  const selectedPost = await Post.update(!findPost.status, { where: { id } })
  return res.json(selectedPost)
})



module.exports = router



// const express = require('express');

// const router = express.Router();

// const PostsController = require('../controllers/postsController');

// const { isOwner } = require('../middlewares/usersMiddlewares');

// router.route('/').post(PostsController.createPost);

// router.route('/:id').get(PostsController.showPost);

// router.route('/:id/del').delete(isOwner, PostsController.deletePost);

// router
//   .route('/:id/edit')
//   .get(isOwner, PostsController.editPost)
//   .patch(isOwner, PostsController.updatePost);

// module.exports = router;
