const multer = require('multer')

upload = multer({ dest: './uploads' })

module.exports = upload