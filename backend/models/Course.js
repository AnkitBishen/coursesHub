const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    price: { type: Number, required: true, trim: true },
    image: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true },
});

module.exports = mongoose.model('Course', courseSchema);