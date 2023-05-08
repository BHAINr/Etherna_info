const User = require("../models/userModels");
const catchAsyncError = require("../middleware/catchAsynError");
const ErrorHander = require("../utils/errorhandler");
const sendToken = require("../utils/jwtToken");

//Regester user

exports.registerUser = catchAsyncError(async (req, res,next) => {
    const { name, email, password } = req.body;

    const user = await User.create({
        name,
        email,
        password,
    });

    sendToken(user,200,res);

})


//Login user

exports.loginUser = catchAsyncError(async(req,res,next)=>{
    const {email ,password} = req.body ;
    if(!email && !password){
        return next(new ErrorHander("Enter Email & Password",404));
    }
    const user = await User.findOne({ email , password }).select("+password");
    if (!user) {
        res.status(400).json({
           err: "invalid user"
        })
    }
    const isPasswordMatched = user.comparePassword(password);

    if (!isPasswordMatched) {
        //return next(new ErrorHander("Invalid email & password", 401));
        return res.status(400).json({
            err:"invalid password"
        })
    }
    
    
    sendToken(user,200 ,res);   
})

//Logout user

exports.logOut = catchAsyncError(async(req,res,next)=>{
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        sucess: true,
        message: "Logout Sucessfully"
    });
})

//Get user detail

exports.getUserDetails = catchAsyncError(async (req, res, next) => {
    const user = await User.findById(req.user.id);
    res.status(200).json({
        sucess: true,
        user
    });
});

//update username and password

exports.updateProfile = catchAsyncError(async (req, res, next) => {
    const newUserDetails = {
        name: req.body.name,
        password: req.body.password
    }

    const user = await User.findByIdAndUpdate(req.user.id, newUserDetails, {
        new: true,
        runValidators: false,
        userFindAndModify: false
    });
    res.status(200).json({
        sucess: true,
        message: "Profile updated sucessfuly"
    })
})

