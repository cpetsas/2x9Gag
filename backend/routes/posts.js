const express = require('express')
const router = express.Router()
const postsController = require('../controllers/post_controller')
const upload = require('../uploads_config')

// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './uploads')
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.originalname)
//     }
// })

router.post('/:id', upload.single('photo'), postsController.attachImage)
router.post('/', postsController.createPost)

module.exports = router