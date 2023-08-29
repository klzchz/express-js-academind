const path = require('path')
const  express = require('express');
router  = express.Router();
const rootDir = require('../util/path');

router.use((req,res,next)=>{
    // res.status(404).send('<h1>Page Not Found</h1>');
    res.sendFile(path.join(rootDir,'views','404.html'));
})

module.exports = router;