const m = require("../db/index");
const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
async function adminMiddleware(req, res, next) {
    try {
        // Implement admin auth logic
        // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
        
        let token = req.headers.token;

        //console.log({ username, password });
        let decoded = jwt.verify(token,jwtPassword);
        let username = decoded.username
        let password = decoded.password
        //console.log({username,password})

        let admin = await m.Admin.findOne({ username, password });

        //console.log(admin);

        if (admin) {
            next();
        } else {
            throw 'Invalid Username or Password';
        }
    } catch (error) {
        console.error(error);
        res.status(401).json({ message: 'Unauthorized: ' + error });
    }
}

module.exports = adminMiddleware;
