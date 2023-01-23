import mongoose from 'mongoose';
const { Schema } = mongoose;

const BlogSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: [10, 'Title must be atleast 10 characters long.'],
        maxlength: [70, 'Title cannot have more than 70 characters.']
    },
    content: {
        type: String,
        required: true,
        trim: true,
        minlength: [50, 'Content must have atleast 10 characters.'],
        maxlength: [512, 'Content can not have more than 512 characters']
    },
    author: {
        type: String,
        required: true
    }
})

export const BlogModel = mongoose.model('Blog', BlogSchema);