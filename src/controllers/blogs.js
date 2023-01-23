import { BlogModel } from '../../models/Blog';
const Blog = BlogModel;


const getAllBlogs = async () => {
    try {
        const blogs = await Blog.find({});
        return blogs;
    } catch (error) {
        console.log(error);
        return false;
    }
}

const createBlog = async (data) => {
    try {
        await Blog.create(data);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

const getBlog = async (blogID) => {
    try {
        const blog = await Blog.findOne({ _id: blogID });
        if (!blog) {
            return [false, "blog not found"]
        }
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

const deleteBlog = async (blogID) => {
    try {
        const blog = await Blog.findOneAndDelete({ _id: blogID });
        if (!blog) {
            return [false, "blog not found"]
        }
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export {
    createBlog, deleteBlog, getAllBlogs, getBlog, 
}