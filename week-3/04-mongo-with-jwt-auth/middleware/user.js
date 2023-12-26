const m = require("../db/index");
const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    let token = req.headers.token;

    //console.log({ username, password });
    let decoded = jwt.verify(token,jwtPassword);
    let username = decoded.username
    let password = decoded.username

        let user = await m.User.findOne({ username, password });

        //console.log(admin);

        if (user) {
            next();
        } else {
            throw 'Invalid Username or Password';
        }
}

module.exports = userMiddleware;