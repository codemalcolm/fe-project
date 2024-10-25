import { Outlet } from 'react-router-dom'
import Layout from './Layouts/Layout'
import { Box, Link } from '@chakra-ui/react'

const Root = () => {
  return (
    <Box>
        <Layout>
          <Outlet />
        </Layout>
    </Box>
  )
}

export default Root
