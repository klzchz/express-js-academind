const  express = require('express');
const NotFound =  require('../controllers/NotFound');
router  = express.Router();


router.use(NotFound.NotFound);

module.exports = router;