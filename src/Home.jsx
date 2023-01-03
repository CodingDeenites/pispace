import React from "react";
import { Button, Center, Heading, Link, Spinner, Text, Box } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase.config";
import { signOut } from "firebase/auth";
import { Homepage } from "./routes/Homepage";
import { Navbar } from "./components/Navbar";
const Home = () => {
  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };

  if (loading) {
    return (
      <Box  bg='#CBE7F3' h='calc(100vh)'>
        <Center>
        <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
       />        
    </Center>
      </Box>
    );
  }

  return (
    <div>

      {user ? (
        <Center pt="5">
          <Text>
            Logged in user: {user.displayName} <br />
            Email: {user.email} <br />
            <Button colorScheme="twitter" onClick={logout}>
              sign out
            </Button>
          </Text>
        </Center>


      ) : (
        // <Center pt="5">
        //   <Text>
        //     no one's logged in rn. <Link href="/login">sign in</Link>
        //   </Text>
        // </Center>
        <Center>
          <Navbar/>
        <br/>
          <Homepage/>
        </Center>
      )}
    </div>
  );
};

export default Home;
