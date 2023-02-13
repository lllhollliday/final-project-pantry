import usersCollection from "../models/usersschema.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await usersCollection.find()
    res.json(users)
  } catch (err) {
    next(err)
  }
}

export const getSingleUser = async (req, res, next) => {
  // "/users/:id"
  try {
    const id = req.params.id
    const singleUser = await usersCollection.find(id)
    res.json({ success: true, users: singleUser })
  } catch (err) {
    next(err)
  }
}

export const createUser = async (req, res, next) => {
 
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = new usersCollection({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashedPassword,
        });

        await user.save();

        res.json({ success: true, user });

    } catch(err){
        next(err);
    }
};




export const loginUser = async (req, res, next) => {
  let email = req.body.email
  let password = req.body.password

  try {
    const user = await usersCollection
      .findOne({ email: email })
      .then((user) => {
        if (user) {
          bcrypt.compare(password, user.password, function (err, result) {
            if (err) {
              res.json({
                error: err,
              })
            }
            if (result) {
              let token = jwt.sign(
                { _id: user._id, name: user.name },
                process.env.TOKEN_SECRET_KEY,
                { expiresIn: "1d" }
              )
              res.header("token", token).json({
                success: true,
                user,
              })
            } else {
              res.json({
                success: false,
                message: "Password does not match",
              })
            }
          })
        } else {
          res.json({
            message: "No User Found",
          })
        }
      })
  } catch (err) {
    next(err)
  }
}

export const updateUser = async (req, res, next) => {
  try {
    const id = req.params.id
    const updatedUser = await usersCollection.findByIdAndUpdate(id, req.body, {
      new: true,
    })
    res.json({ success: true, user: updatedUser })
  } catch (err) {
    next(err)
  }
}

export const deleteUser = async (req, res, next) => {
  try {
    const id = req.params.id
    const existingUser = await usersCollection.find(id)
    if (existingUser) {
      const deletedUser = await usersCollection.deleteOne({ _id: existingUser })
      res.json({ success: true, status: deleteUser })
    } else {
      throw new Error("User ID does not exist")
    }
  } catch (err) {
    next(err)
  }
}

export const addFavoritesItems = async (req, res, next) => {
  try {
    console.log("fav hello:", req.body)
    const user = await usersCollection.findById(req.body.id)

    const idx = user.favourites.findIndex(
      (item) => item.label === req.body.item.label
    )

    let newFavourites = []

    if (idx > -1) {
      // it is already in the favourites

      newFavourites = user.favourites.filter(
        (item) => item.label !== req.body.item.label
      )
    } else {
      user.favourites.push(req.body.item)
      newFavourites = user.favourites
    }

    const newUser = await usersCollection.findByIdAndUpdate(
      req.body.id,
      { favourites: newFavourites },
      { new: true }
    )

    // user.favourites.put(req.body.item)
    // await user.save()
    console.log("fav:", newUser)
    res.json({ success: true, favourites: newUser.favourites })
  } catch (err) {
    next(err)
  }
}

export const getFavourites = async (req, res, next) => {
  console.log("working")
  try {
    const user = await usersCollection.findById(req.user._id)

    res.json({ success: true, data: user })

    console.log("from the fav res", res.json(user))
    console.log(user)
  } catch (err) {
    next(err)
  }
}

export const addIngredientToMyPantry = async (req, res, next) => {
  try {
  
        const user = await usersCollection.findById(req.body.userId)
        user.pantry.push(req.body.item)
        await user.save()

        res.json({success: true, data: user})
    }
    catch(err) {
        next(err)
    }
}

export const verifyToken =  (req, res, next) => {
    console.log("reached?")
    res.json({user: req.user, success: true})
}

