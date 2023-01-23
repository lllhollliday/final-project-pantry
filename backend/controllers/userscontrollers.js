import usersCollection from "../models/usersschema.js";

export const getAllUsers = async (req, res, next) => {
    res.send("users get req")
};

export const getSingleUser = async (req, res, next) => {
    res.send("users/:id get req")
};

export const createUser = async (req, res, next) => {
    res.send("users post req")
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