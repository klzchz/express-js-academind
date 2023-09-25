exports.NotFound = (req,res,next) =>{ 
    res.status(404).render('404',{docTitle: "Not Found ",path:false});
};