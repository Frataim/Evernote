const bcrypt = require('bcryptjs');
const { User, Post } = require('../db/models');

class UsersController {
  static async signUp(req, res) {
    const { password } = req.body;
    try {
      const cryptPass = await bcrypt.hash(
        password,
        Number(process.env.SALT_ROUND)
      );

      const currentUser = await User.create({
        ...req.body,
        password: cryptPass,
      });
      req.session.user = {
        id: currentUser.id,
        name: currentUser.name,
      };
      return res.redirect(`/users/${currentUser.id}`);
    } catch (err) {
      // const errData = detectError(err)
      // res.status(500).json(errData)
      return res.redirect('/users/signup');
    }
  }

  static async signIn(req, res) {
    const message = 'Something goes wrong';
    try {
      const { email, password } = req.body;
      const currentUser = await User.findOne({ where: { email } });
      if (currentUser) {
        const isCorrectPassword = await bcrypt.compare(
          password,
          currentUser.password
        );
        if (isCorrectPassword) {
          req.session.user = {
            id: currentUser.id,
            name: currentUser.name,
          };
          res.redirect(`/users/${currentUser.id}`);
        }
      } else {
        res.sendStatus(500);
      }
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  }

  static async signOut(req, res) {
    req.session.destroy();
    res.clearCookie('sid').redirect('/');
  }

  static async showUsersPosts(req, res) {
    try {
      const userId = req.params.id;
      const posts = await Post.findAll({
        where: {
          userid: userId,
        },
      });
      res.render('myaccount', { posts });
    } catch (error) {
      console.log(error);
      res.redirect('/');
    }
  }
}

module.exports = UsersController;
