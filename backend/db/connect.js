import mongoose from "mongoose";

// mongoose connect method returns promise, so use async await
const connectDB = (URL) => {
    return mongoose.connect(URL)
}

export default connectDB