const { Post } = require('../db/models');

// проверка авторизации
const authCheck = (req, res, next) => {
  if (res.locals.user) {
    res.redirect('/');
  } else {
    next();
  }
};

// пользователь авторизован
const isAuthorizated = (req, res, next) => {
  if (!res.locals.user) {
    res.redirect('/users/signup');
  } else {
    next();
  }
};

// страница пользователя
const isOwner = async (req, res, next) => {
  const userId = req.session.user.id;
  const postId = req.params.id;
  try {
    const post = await Post.findOne({
      where: {
        id: postId,
      },
    });

    if (post.userid === Number(userId)) {
      next();
    } else {
      res.redirect('/');
    }
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
};

// учетная запись пользователя
const isUsersAcc = (req, res, next) => {
  if (req.session.user.id === Number(req.params.id)) {
    next();
  } else {
    res.redirect('/');
  }
};

module.exports = {
  authCheck,
  isAuthorizated,
  isOwner,
  isUsersAcc,
};
