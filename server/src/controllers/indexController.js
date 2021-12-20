const { Post, User } = require('../db/models');

class IndexController {
  static async showAllPosts(req, res) {
    try {
      const posts = await Post.findAll({
        order: ['createdAt'],
        include: [User],
      });
      res.render('index', { posts });
    } catch (error) {
      res.sendStatus(500);
      res.render('404');
    }
  }
}

module.exports = IndexController;
