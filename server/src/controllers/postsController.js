const { response } = require('express');
const { Post,User } = require('../db/models');

class PostsController {
  static async showPost(req, res) {}

  static async createPost(req, res) {
    const userId = req.session.user.id;
    let { title, descript } = req.body;

    try {
      const post = await Post.create({
        title,
        descript,
        userid: userId,
      });
      res.json({ post });
    } catch (error) {
      console.log(error);
      // res.redirect('/');
    }
  }

  static async editPost(req, res) {
    const postId = req.params.id;
    try {
      const post = await Post.findOne({
        where: {
          id: postId,
        },
      });
      res.render('postedit', { post });
    } catch (error) {
      console.log(error);
    }
  }

  static async updatePost(req, res) {
    const postId = req.params.id;
    try {
      const { title, descript} = req.body;
      console.log(title, descript);
      await Post.update(
        { title, descript},
        {
          where: {
            id: postId,
          },
        }
      );
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }

  static async deletePost(req, res) {
    try {
      const postId = req.params.id;
      await Post.destroy({
        where: {
          id: postId,
        },
      });
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }
}

module.exports = PostsController;
