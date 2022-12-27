import React from 'react';
import { Button, Center, Heading, Link, Spinner, Text, Box, Img, Spacer } from "@chakra-ui/react";
import '../main.css'
import { auth } from "../../firebase.config";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";



export const Homepage = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let navigate = useNavigate();
  
    if (loading) {
      return (
        <Center>
          <Spinner />
        </Center>
      );
    }
    return (
    
        <div className='homebg'>
            <center>
            <Img src="https://cdn.discordapp.com/attachments/1038360446383693904/1057238995182034974/image.png" pt='6%'></Img>
                <Text className='heading'>PiSpace</Text>
                <Text fontSize='4xl' as='b' className='poppins'>Need some help? Or want to share your work?<br/>
                    Make things interesting!<br/>
                    Join us and login!
                </Text><br/>
                <Button size='lg' onClick={() => { navigate("/login"); }} bg='#172155' height='60px' color='white'><Img src="https://img.icons8.com/fluency/512/google-logo.png" pr="13px" width='50px'/> Sign In With Google</Button>
            </center>
        </div>
    );
};      