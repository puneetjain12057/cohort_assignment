const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    let username=req.body.username
    let password=req.body.password
    let obj={username:username,password:password}
    //console.log(obj)
    let user = new m.User(obj);
    //console.log(admin);
    user.save();
    res.status(201).json({message: "User created successfully"})
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
    let username=req.body.username
    let password=req.body.password
    let token = jwt.sign({username,password},jwtPassword)
    res.status(201).json({token: token})
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    m.Course
    .find()
    .then(courses=>
        res.json(courses))
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    let id =req.params.courseId
    await m.Course.findByIdAndUpdate(
        id,
        {publised: true}
    )
    res.status(201).json({message: "Course purchased successfully"})
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
    m.Course
    .find({publised:true})
    .then(courses=>
        res.json(courses))
});

module.exports = router