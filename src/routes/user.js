const router = require('express').Router();
const ctrls = require('../controllers/user')
const {verify} = require('../middlewares/verify_token')
const {isCheckAdmin,isModerator} = require('../middlewares/verify_roles')


router.get('/',[verify], ctrls.getCurrent)



module.exports = router