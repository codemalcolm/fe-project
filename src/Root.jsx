import { Outlet } from 'react-router-dom'
import Layout from './assets/Layouts/Layout'
import { Box, Link } from '@chakra-ui/react'

const Root = () => {
  return (
    <Box>
        <Layout />
        <Outlet />
    </Box>
  )
}

export default Root
