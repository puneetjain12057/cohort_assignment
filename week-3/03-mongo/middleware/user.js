const m = require("../db/index");
async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
        let username = req.headers.username;
        let password = req.headers.password;

        //console.log({ username, password });

        let user = await m.User.findOne({ username, password });

        //console.log(admin);

        if (user) {
            next();
        } else {
            throw 'Invalid Username or Password';
        }
}

module.exports = userMiddleware;