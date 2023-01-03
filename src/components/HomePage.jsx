import React from "react";
import { Box, Button, Image, Link, Stack, Text } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <div>
      <Box bg="#CBE7F3" position="absolute">
        <Image
          src="../assets/images/homePageLaptopImage.png"
          alt="Home Page Laptop Image"
        />

        <Text
          position="absolute"
          left="0%"
          right="40.34%"
          top="9.78%"
          bottom="57.64%"
          fontFamily="Inter"
          fontStyle="normal"
          fontWeight="400"
          fontSize="60px"
          fontHeight="73px"
          display="flex"
          alignItems="center"
          textAlign="center"
        >
          Make School Easier
          <br />
          With PiSpace
        </Text>

        <Text
          position="absolute"
          left="0%"
          right="40.34%;"
          top="39.51%"
          bottom="22.3%"
          fontFamily="Open Sans"
          fontStyle="normal"
          fontWeight="400"
          fontSize="40px"
          fontHeight="54px"
          display="flex"
          alignItems="center"
          textAlign="center"
          color="#000000"
        >
          No more jumbles of countless tabs.
          <br />
          One place for everything!
        </Text>

        <Link href="/login">
          <Button
            position="absolute"
            left="5.49%"
            right="78.04%"
            top="77.7%"
            bottom="11%"
            bg="#172155"
            borderRadius="20px"
            variant="solid"
          >
            <Text
              position="absolute"
              left="5.62%"
              right="78.04%"
              top="77.7%"
              bottom="11%"
              fontFamily="Inter"
              fontStyle="normal"
              fontWeight="700"
              fontSize="40px"
              fontHeight="48px"
              display="flex"
              alignItems="center"
              textAlign="center"
              color="#FFFFFF"
            >
              Sign In
            </Text>
          </Button>
        </Link>

        <Text
          position="absolute"
          left="6.28%"
          right="78.7%"
          top="89%"
          bottom="6.92%"
          fontFamily="Inter"
          fontStyle="normal"
          fontWeight="400"
          fontSize="15px"
          lineHeight="18px"
          display="flex"
          alignItems="center"
          textAlign="center"
          color="#000000"
        >
          It takes less than a minute.
        </Text>
      </Box>
    </div>
  );
};

export default HomePage;
