import { Button, Box } from "@chakra-ui/react";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.config";
import { createBlog } from "../controllers/blogs";
import { startMongoDB } from "../App";

state = {showBlogForm: false}
const [user, loading, error] = useAuthState(auth);

showBlogForm = (e) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [message, setMessage] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = createBlog(
                {
                    title: title,
                    content: content,
                    author: user.uid
                }
            );
            if (res == false) {
                setMessage("An error occured.")
            } else {
                setTitle("");
                setContent("");
                setMessage("Blog posted successfully!")
            }
        } catch (err) {
            console.log(err);
        };
    };

    return (
        <div>
            <form id="new-blog" onSubmit={ handleSubmit }>
                <label>Title</label>
                <input
                    type="title"
                    value={title}
                    placeholder="Title"
                    onChange={(e) => setName(e.target.value)}
                />

                <label>Content</label>
                <input
                    type="content"
                    value={content}
                    placeholder="Content"
                    onChange={(e) => setName(e.target.value)}
                />

                <button type="submit">Create Blog</button>

                <div className="message">{message ? <p>{message}</p> : null}</div>
            </form>
        </div>
    );
}

export default function Blog() {
    startMongoDB();
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
    return (
        <div>
            <h1>Blogs</h1>
            <Box bg={"blue"}>
                <Button size='lg' onClick={() => this.setState({showBlogForm: true}) } bg='#172155' height='60px' color='white'>New Blog</Button>
            </Box>
        </div>
    )
}
