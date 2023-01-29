import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    minlength: 3,
    maxlength: 20,
    // trim: true,
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
  //fav array should come here?
  favourites: [{ 
    type: Object 
  }],
  pantry: [{
    type: String
  }]
})

// export default mongoose.model('User', UserSchema)
const usersCollection = mongoose.model("users", userSchema);

// create index
usersCollection.createIndexes({email: -1})

export default usersCollection;