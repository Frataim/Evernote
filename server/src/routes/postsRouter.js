const express = require('express');

const router = express.Router();

const PostsController = require('../controllers/postsController');

const { isOwner } = require('../middlewares/usersMiddlewares');

router.route('/').post(PostsController.createPost);

router.route('/:id').get(PostsController.showPost);

router.route('/:id/del').delete(isOwner, PostsController.deletePost);

router
  .route('/:id/edit')
  .get(isOwner, PostsController.editPost)
  .patch(isOwner, PostsController.updatePost);

module.exports = router;
