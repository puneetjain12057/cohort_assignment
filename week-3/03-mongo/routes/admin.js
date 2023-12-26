const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const m=require("../db/index");

const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    let username=req.body.username
    let password=req.body.password
    let obj={username:username,password:password}
    let admin = new m.Admin(obj);
    //console.log(admin);
    admin.save();
    res.status(201).json({message: "Admin created successfully"})
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    let title=req.body.title
    let description=req.body.description
    let price=req.body.price
    //console.log(price)
    let imageLink=req.body.imageLink
    let obj={title:title,description:description,price:price,imageLink:imageLink}
    //console.log(obj)
    let course=new m.Course(obj)
    course.save()
    //console.log(course._id)
    res.status(201).json({message: "Course created successfully",courseId:course._id})

});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    m.Course
        .find()
        .then(courses => {
            res.json(courses);
        })
});

module.exports = router;