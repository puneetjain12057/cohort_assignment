const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user");

// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/admin", adminRouter)
app.use("/user", userRouter)

<<<<<<< HEAD
app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
=======
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
>>>>>>> 081be9ec66420098381ce7ce9e4291ba35ec3658
});
