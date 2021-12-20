const express = require('express');

const router = express.Router();

// controller
const IndexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', IndexController.showAllPosts);

module.exports = router;
