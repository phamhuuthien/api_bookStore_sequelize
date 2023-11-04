import * as controllers from '../controllers'
import express from 'express';
const {verify} = require('../middlewares/verify_token')
const {isCheckAdmin} = require('../middlewares/verify_roles')
const fileUploader = require('../middlewares/cloudinary')


const router = express.Router();

router.get('/', controllers.getBooks)

router.use(verify)
// file upload nếu không gửi ảnh lên thì nó sẽ là undefined
router.post('/',[isCheckAdmin],fileUploader.single("image"), controllers.createNewBook)

router.put('/',[isCheckAdmin],fileUploader.single("image"), controllers.updateBook)
router.delete('/',[isCheckAdmin], controllers.deleteBook)




module.exports = router