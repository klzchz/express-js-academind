const path = require('path')
const  express = require('express');

router  = express.Router();

router.use((req,res,next)=>{
    // res.status(404).send('<h1>Page Not Found</h1>');
    res.sendFile(path.join(__dirname,'../','views','404.html'));
})

module.exports = router;