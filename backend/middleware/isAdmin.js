export const isAdmin = ( req, res, next) => {
    if((req.user.isAdmin)) {

        next()

    } else {
        
        if(req.user._id.toString() === req.params.id){

            next() 

        } else {

            const error = new Error("Access not authorized!")
            error.status = 403;
            next(error)
            
        }
    }
}