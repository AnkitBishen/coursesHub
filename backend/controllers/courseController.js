const Course = require('../models/Course');

const getAllCourses = async (req, res)=>{
    try{
        const courses = await Course.find();
        res.status(200).json(courses);
    }catch(err){
        res.status(500).json(err);

    }
}

const createCourse = async (req, res)=>{
    try{
        // need to validate fields

        // validate course is exist or not
        const isCourseExist = await Course.findOne({title:req.body.title})
        if(isCourseExist){
            res.status(403).json({errorMsg:'Course is already added.'})
        } else {
            const newCourse = new Course({
                title:req.body.title,
                description:req.body.description,
                price : req.body.price,
                image : req.body.image,
                category : req.body.category,
                author : req.body.author,

            })
            const course = await newCourse.save();
            res.status(200).json(course);
        }
    }
    catch(err){
        res.status(500).json(err);
    }
}
const updateCourse = async (req, res)=>{
    try{
        const course = await Course.findById(req.params.id);
        const updatedCourse = await Course.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(updatedCourse);
    }catch(err){
        res.status(500).json(err);
    }
}




module.exports = { getAllCourses, createCourse, updateCourse }