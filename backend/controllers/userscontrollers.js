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
    res.send("users post req on /login")
};

export const updateUser = async (req, res, next) => {
    res.send("users patch req on /:id")
};

export const deleteUser = async (req, res, next) => {
    res.send("users delete req")
};