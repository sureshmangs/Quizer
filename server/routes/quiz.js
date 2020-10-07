const router = require('express-promise-router')();
const UsersController = require('../controllers/quiz');



router.route('/fetchQuiz')
    .post(UsersController.fetchQuiz);

router.route('/addquiz')
    .post(UsersController.addQuiz)


module.exports = router;