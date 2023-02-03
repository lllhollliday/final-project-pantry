import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please provide first name"],
    minlength: 2,
    maxlength: 20,
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, "Please provide last name"],
    minlength: 2,
    maxlength:20,
    trim: true,
  },
  location: {
    type: String,
    minlength: 3
  },
  birthday: {
    type: Date
  },
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

  favourites: [
    { type: Object }
  ],
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  }
})

// export default mongoose.model('User', UserSchema)
const usersCollection = mongoose.model("users", userSchema);

// create index
usersCollection.createIndexes({email: -1})

export default usersCollection;