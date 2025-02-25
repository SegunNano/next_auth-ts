import mongoose from "mongoose";
const { models, Schema, model } = mongoose
const required: true = true
const unique: true = true

const userSchema = new Schema({
    firstName: { type: String, required },
    lastName: { type: String, required },
    email: { type: String, required, unique },
    password: { type: String, select: false },
    isAdmin: { type: Boolean, default: false },
    image: { type: String },
    authProviderId: { type: String }
})

const User = models?.User || model('User', userSchema)


export default User