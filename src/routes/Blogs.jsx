import {
  Button,
  Box,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Center,
  Spinner,
} from "@chakra-ui/react";
import { React, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.config";
import { createBlog } from "../controllers/blogs";
import mongoose from "mongoose";

export const Blog = () => {
  const startMongoDB = () => {
    try {
      mongoose.connect(import.meta.env.VITE_APP_MONGO_URI);
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error(error);
    }
  };

  startMongoDB();

  //   state = { showBlogForm: false };

  const [user, loading, error] = useAuthState(auth);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
  const [showBlogFormState, setShowBlogFormState] = useState(false);

  if (loading) {
    return (
      <Box bg="#CBE7F3" h="calc(100vh)">
        <Center>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Center>
      </Box>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res = createBlog({
        title: title,
        content: content,
        author: user.uid,
      });

      if (res == false) {
        setMessage("An error occured.");
      } else {
        setTitle("");
        setContent("");
        setMessage("Blog posted successfully!");
      }
    } catch (err) {
      console.log(err);
    }

    return (
      <div>
        <FormControl id="new-blog" onSubmit={handleSubmit}>
          <FormLabel>Title</FormLabel>
          <Input
            type="title"
            value={title}
            placeholder="Title"
            onChange={(e) => setName(e.target.value)}
          />

          <FormLabel>Content</FormLabel>
          <Input
            type="content"
            value={content}
            placeholder="Content"
            onChange={(e) => setName(e.target.value)}
          />

          <Button>Create Blog</Button>

          <FormHelperText className="message">
            {message ? <p>{message}</p> : null}
          </FormHelperText>
        </FormControl>
      </div>
    );
  };
  return (
    <div>
      <h1>Blogs</h1>
      <Box bg={"blue"}>
        <Button
          size="lg"
          onClick={() => setShowBlogFormState(true)}
          bg="#172155"
          height="60px"
          color="white"
        >
          New Blog
        </Button>
      </Box>
    </div>
  );
};
