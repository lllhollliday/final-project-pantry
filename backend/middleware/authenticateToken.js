import jwt from 'jsonwebtoken';
import usersCollection from '../models/usersschema.js';

async function authenticateToken (req, res, next) {
    try{
        const {token} = req.headers
        console.log(token)
        //verify token
        const payload = jwt.verify(token, 'secretKey');
        // console.log(payload);
        const user = await usersCollection.findById(payload._id)
        // attach user to req
        req.user = user;
        next()
    }
    catch(err){
        // next(err)
        res.json({
            message: 'Authentication Failed'
        })
    }
};

export default authenticateToken;