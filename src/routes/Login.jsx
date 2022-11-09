import { Button, Text } from "@chakra-ui/react";
import React from "react";
import { auth } from "../../firebase.config";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  let navigate = useNavigate();

  return (
    <div>
      {user ? (
        <Button
          colorScheme="twitter"
          onClick={() => {
            signInWithGoogle();
            navigate("/");
          }}
        >
          Sign In
        </Button>
      ) : (
        <Text>already logged in</Text>
      )}
    </div>
  );
}
