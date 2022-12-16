import React from 'react';
import '../main.css'
import { Button, ButtonGroup, Box, Image } from '@chakra-ui/react'
import { auth } from "../../firebase.config";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let navigate = useNavigate();
    return (
        <div className='Navbar'>
                <Image src='https://cdn.discordapp.com/attachments/1038360446383693904/1038361636211273728/pi_space_png.png' alt='Dan Abramov' className='navimg' />
        </div>
    );
};