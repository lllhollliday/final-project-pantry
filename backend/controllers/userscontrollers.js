import usersCollection from "../models/usersschema.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const getAllUsers = async (req, res, next) => {
    res.send("users get req")
};

export const getSingleUser = async (req, res, next) => {
    res.send("users/:id get req")
};


export const createUser = async (req, res, next) => {
    // res.send("users post req")
    bcrypt.hash(req.body.password, 10, function(err, hashedPass){
        if(err) {
            res.json({
                error: err
            })
        }
        let user = new usersCollection ({
            name: req.body.name,
            email: req.body.email,
            password: hashedPass
        })
        user.save()
        // console.log(user.name);
        .then(user => {
            res.json({
                message: 'User Added Successfully'
            })
        })
        .catch(error => {
            res.json({
                message: 'An error occured'
            })
        })
    })
};


export const loginUser = async (req, res, next) => {
    // res.send("users post req on /login")
    let username = req.body.username;
    let password = req.body.password

   try{
    const user = await usersCollection.findOne({email: username})
    .then(user => {
        if(user) {
            bcrypt.compare(password, user.password, function(err, result){
                if(err) {
                    res.json({
                        error:err
                    })
                }
                if(result){
                    let token = jwt.sign({_id:user._id,
                    name: user.name}, 'secretKey', {expiresIn:'1d'})
                    res.json({
                        message: 'Login Successful',
                        token: token
                    })
                }else{
                    res.json({
                        message: 'Password does not match'
                    })
                }
            })
        }else{
            res.json({
                message: 'No User Found'
            })
        }
    })

   } 
   catch(err){
    next(err)
   }
};


export const updateUser = async (req, res, next) => {
    res.send("users patch req on /:id")
};

export const deleteUser = async (req, res, next) => {
    res.send("users delete req")
};