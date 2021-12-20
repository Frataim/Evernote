const router = require('express').Router();

const UsersController = require('../controllers/usersController');
const {
  authCheck,
  isUsersAcc,
  isAuthorizated,
} = require('../middlewares/usersMiddlewares');

// зарегистрироваться
router
  .route('/signup')
  .get(authCheck, (req, res) => {
    res.render('users/signup');
  })
  .post(UsersController.signUp);

  // войти
router
  .route('/signin')
  .get(authCheck, (req, res) => {
    res.render('users/signin');
  })
  .post(UsersController.signIn);

  // выйти
router.route('/signout').get(UsersController.signOut);

router.get('/:id', isAuthorizated, isUsersAcc, UsersController.showUsersPosts);

module.exports = router;
