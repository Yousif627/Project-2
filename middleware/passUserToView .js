function passUserToView(req,res,next){
    try{
    res.locals.user = req.session.user || null
    next()
    }
    catch(error){
        console.log(error)
    }
}

module.exports = passUserToView