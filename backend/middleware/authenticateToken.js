import jwt from 'jsonwebtoken';
import usersCollection from '../models/usersschema.js';

async function authenticateToken (req, res, next) {
    try{
        const token = req.headers.token
        // console.log(token)
        //verify token
        const payload = jwt.verify(token, process.env.TOKEN_SECRET_KEY);
        // console.log(payload);
        const user = await usersCollection.findById(payload._id)
        console.log(user)
        // attach user to req
        req.user = user;
        next() // moving to the users controller verifyToken function
    }
    catch(err){
        next(err)
        // res.json({
        //     message: 'Authentication Failed'
        // })
    }
};

export default authenticateToken;