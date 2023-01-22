import { Routes, Route } from "react-router-dom";

import Login from "./routes/Login";
import Blog from "./routes/Blogs";
import Home from "./Home";
import { connectDB } from "../db/connect";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blogs" element={<Blog />} />
      </Routes>
    </div>
  );
}

const startMongoDB = () => {
  try {
      connectDB(process.env.MONGO_URI);
      console.log('Connected to MongoDB')
  } catch (error) {
      console.log(error);
  }
}

export { App, startMongoDB };
