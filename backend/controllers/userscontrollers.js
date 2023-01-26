import usersCollection from "../models/usersschema.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const getAllUsers = async (req, res, next) => {
    try{
        const users = await usersCollection.find()
        res.json(users)
    }
    catch(err){
        next(err)
    }
};

export const getSingleUser = async (req, res, next) => {
    // "/users/:id"
    try{
        const id = req.params.id
        const singleUser = await usersCollection.find(id)
        res.json({success: true, users: singleUser})
    }
    catch(err){
        next(err)
    }
};


export const createUser = async (req, res, next) => {
    // try{
    //     const user = await usersCollection.find(req.body)
    //     await user.save()
    //     res.json({success: true, user})
    // }
    // catch(err){
    //     next(err)
    // }
    console.log(req.body)
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
                success:true, user
            })
        })
        .catch(error => {
            res.json({
                success: false, message: 'An error occured'
            })
        })
    })
};


export const loginUser = async (req, res, next) => {
    let email = req.body.email;
    let password = req.body.password

   try{
    const user = await usersCollection.findOne({email: email})
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
                    res.header({token}).json({
                        success: true,
                        user
                    })
                }else{
                    res.json({
                        success: false, 
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
    try{
        const id = req.params.id
        const updatedUser = await usersCollection.find(id)
        res.json({success: true, user: updatedUser})
    }
    catch(err){
        next(err)
    }
};

export const deleteUser = async (req, res, next) => {
    try{
        const id = req.params.id
        const existingUser = await usersCollection.find(id)
        if(existingUser){
            const deletedUser = await usersCollection.deleteOne({_id: existingUser})
            res.json({success: true, status: deleteUser})
        }else{
            throw new Error ("User ID does not exist")
        }
    }
    catch(err){
        next(err)
    }
};

export const addFavoritesItems = async ( req, res, next ) => {
    try {

        const user = await usersCollection.findById(req.body.userId)
        user.favourites.push(req.body.item)
        await user.save()

        res.json({success: true, data: user})
    }
    catch(err) {
        next(err)
    }
}