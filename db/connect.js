const mongoose = require('mongoose');


const connectDB = (url) => {
    console.log('%c Connected to database...', 'color: blue; font-weight: bold;');
    return mongoose.connect(url)
}

export { connectDB };