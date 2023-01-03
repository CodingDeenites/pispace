import React from 'react';
import '../main.css'
import { Button, ButtonGroup, Box, Image, Stack, Spacer, Flex, Text, HStack } from '@chakra-ui/react'
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
                    <HStack>
                    
                    <Image src='https://cdn.discordapp.com/attachments/1038360446383693904/1059726965759803423/Untitled_design5.png' alt='logo' className='navimg' sizes='lx'  margin-left= '20px' margin-top='1vh' />    
                    <Text className='navtext'  color='white'fontSize='5xl' fontFamily= 'Julius Sans One' >PiSpace</Text>
                    </HStack>
                    {/* <Text fontSize='5xl' className='font' fontFamily= 'Julius Sans One'    >PiSpace</Text> */}
                </Box>
                <Spacer />
                    <Button  colorScheme='blue'><a href="/login">Get started</a></Button>..
            </Flex>
                {/* <Box alignItems='right'>
                    <Button >
                    <a href='/login' align='right'>Login</a>
                    </Button>
                </Box> */}

        </Box>
    );
};


