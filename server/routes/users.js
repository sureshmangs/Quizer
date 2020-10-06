const router = require('express-promise-router')();
const passport = require('passport');
const passportConf = require('../passport');
const UsersController = require('../controllers/users');
const passportJWT = passport.authenticate('jwt', { session: false });
const passportGoogle = passport.authenticate('googleToken', { session: false });


router.route('/oauth/google')
    .post(passportGoogle, UsersController.googleOAuth);


router.route('/status')
    .get(passportJWT, UsersController.checkAuth);


router.route('/userprofile')
    .post(UsersController.fetchUserProfile);


module.exports = router;