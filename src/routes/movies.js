const express = require('express');
const router = express.Router();

const moviesController  = require('../controllers/moviesController');

router.get('/', moviesController.list);
router.get('/newMovie', moviesController.newMovie);
router.get('/delete/:id', moviesController.delete);
router.get('/update/:id', moviesController.edit);
router.post('/update/:id', moviesController.update);
router.post('/add', moviesController.save);

module.exports = router;