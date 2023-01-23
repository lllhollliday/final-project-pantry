import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  /* lastName: {
    type: String,
    minlength: 6,
    trim: true,
  }, */
  email: {
    type: String,
    required: [true, "Please provide email"],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true],
    minlength: 6,
    trim: true,
  },
  /* location: {
    type: String,
    trim: true,
    maxlength: 20
  } */
})

export default mongoose.model('User', UserSchema)
