const express = require('express');

const router = express.Router();

// controller
// const IndexController = require('../controllers/indexController');

/* GET home page. */
// router.get('/', IndexController.showAllPosts);
router.get('/', (req, res) => {
  console.log('server')
})

module.exports = router;
