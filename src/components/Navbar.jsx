import React from 'react';
import { Box, Button, Image, Link, Stack, Text } from "@chakra-ui/react";

const Navbar = () => {
    return (
        <div>
        <Box bg='#172155' color='white'>
          <Link href='/login'>
            <Button
              variant='outline'
              borderRadius='10'
              position='absolute'
              left='87.43%'
              right='2.18%'
              top='15.62%'
              bottom='15.62%'
              >
                Get Started
            </Button>
          </Link>
          <Text
            position='absolute'
            left='6.94%'
            right='82.88%'
            top='22.92%'
            bottom='23.96%'
            fontFamily='Julius Sans One'
            fontStyle='normal'
            fontWeight='400'
            fontSize='40px'
            lineHeight='44px'
            display='flex'
            alignItems='center'
            textAlign='center'
            >
              PiSpace
          </Text>
          {/* navigation tabs */}
          <Stack direction='row'>
            <Text
              position='absolute'
              fontFamily='Inter'
              fontStyle='normal'
              fontWeight='400'
              fontSize='25px'
              lineHeight='30px'
              display='flex'
              alignItems='center'
              textAlign='center'
              left='82.63%'
              right='6.76%'
              top='28.6%'
              bottom='26.5%'
              >
                Home
            </Text>
            <Text
              position='absolute'
              fontFamily='Inter'
              fontStyle='normal'
              fontWeight='400'
              fontSize='25px'
              lineHeight='30px'
              display='flex'
              alignItems='center'
              textAlign='center'
              left='24.9%'
              right='52.32%'
              top='27.55%'
              bottom='27.55%'
              >
                About Us
            </Text>
            <Text
              position='absolute'
              fontFamily='Inter'
              fontStyle='normal'
              fontWeight='400'
              fontSize='25px'
              lineHeight='30px'
              display='flex'
              alignItems='center'
              textAlign='center'
              left='52.51%'
              right='23.36%'
              top='27.37%'
              bottom='27.73%'
              >
                The Team
            </Text>
            <Text
              position='absolute'
              fontFamily='Inter'
              fontStyle='normal'
              fontWeight='400'
              fontSize='25px'
              lineHeight='30px'
              display='flex'
              alignItems='center'
              textAlign='center'
              left='82.63%'
              right='6.76%'
              top='28.6%'
              bottom='26.5%'
              >
                Help
            </Text>
          </Stack>
          <Box
            position='absolute'
            right='1.46%'
            left='94.58%'
            top='18.75%'
            bottom='14.58%'
            mixBlendMode='ligten'
            >
              <Image src='../assets/images/pispaceLogo.png' alt='PiSpace Logo'/>
          </Box>
        </Box>
      </div>
    );
};

export default Navbar;