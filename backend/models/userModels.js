const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Enter your name"]
    },
    email: {
        type: String,
        require: [true, "Enter your email"],
        unique: true,
        validator: validator.isEmail
    },
    password: {
        type: String,
        require: [true, "Please enter your password"],
        minLength: [8, "password should have min 8 length"],
        select: false
    },
    avatar: {
        public_id: {
            type: String,
            required: true
        },
        public_url: {
            type: String,
            required: true
        }
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    role: {
        type: String,
        default: "user",
    },


})
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }

    this.password = await bcrypt.hash(this.password, 10);
})


userSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    })
}

userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);