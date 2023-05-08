const Errorhandler = require("../utils/errorhandler");
const catchAsyncError = require("./catchAsynError");
const jwt = require("jsonwebtoken");
const User = require("../models/userModels");
const cookies = require("../utils/jwtToken");

exports.isAuthenticatedUser = catchAsyncError(async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return next(new Errorhandler("Please login to correct resources", 401));
    }
    const decodeData = jwt.verify(token, process.env.JWT_SECRET);
   
    req.user = await User.findById(decodeData.id);

    next();
});



