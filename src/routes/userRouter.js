const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.route('/').post(usersController.addUser);
router
    .route('/:id')
    .get(usersController.getUser)
    .put(usersController.updateUser);

module.exports = router;
