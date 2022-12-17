import React from 'react';
import '../main.css'
import { Button, ButtonGroup, Box, Image, Stack, Spacer, Flex } from '@chakra-ui/react'
import { auth } from "../../firebase.config";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

export const Navbar = ({ title, desc, ...rest }) => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let navigate = useNavigate();
    return (
        <Box className='Navbar'>
            <Flex minWidth='max-content' alignItems='center' gap='2'maxHeight='max-content'>
                <Box p='2'>
                    <Image src='https://cdn.discordapp.com/attachments/1038360446383693904/1038361636211273728/pi_space_png.png' alt='logo' className='navimg' boxSize='50%' margin-left= '20px' margin-top='1vh' />    
                </Box>
                <Spacer />
                    <Button colorScheme='blue'><a href="/login">Get started</a></Button>
            </Flex>
                {/* <Box alignItems='right'>
                    <Button >
                    <a href='/login' align='right'>Login</a>
                    </Button>
                </Box> */}

        </Box>
    );
};


