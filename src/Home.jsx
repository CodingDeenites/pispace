import React from "react";
import { Box, Button, Center, Heading, Link, Spinner, Text } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase.config";
import { signOut } from "firebase/auth";
import HomePage from "./components/HomePage"
import Navbar from "./components/Navbar"

const Home = () => {
  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };

  if (loading) {
    return (
      <div>
        <Spinner />
      </div>
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
        <Center pt="5">
          {/* navbar: */}
          <Navbar />
          {/* homepage: */}
          <HomePage />
        </Center>
      )}
    </div>
  );
};

export default Home;
