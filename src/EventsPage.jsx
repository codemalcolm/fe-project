import { Box, Flex,Text } from '@chakra-ui/react';
import React from 'react'

const EventsPage = () => {
    console.log("team render");
    
  return (
    <Box width={"100%"} >
      {/* Header */}
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Text fontSize={"36px"} fontWeight={"600"}>Events Page</Text>
        <Box>filter icons go here</Box>
      </Flex>

    </Box>
  )
}

export default EventsPage
