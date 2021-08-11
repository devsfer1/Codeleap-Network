import React, { useState, useEffect, useCallback } from 'react'

import { Flex, Text, Container, Link } from '@chakra-ui/react'
import { PagesMain } from './pages/Main'
import { PagesSignUp } from './pages/Signup'

import { SignUpFormData } from './interfaces/post'
import { useDispatch } from 'react-redux'
import { updateUser } from './redux/userSlice'
import { updatePosts } from './redux/postsSlice'

import postServices from './actions/post'

const App: React.FC = () => {
    const [loggedIn, setLoggedIn] = useState<boolean>(false)

    const dispatch = useDispatch()

    const handleGetPosts = useCallback(async () => {
        const { _getAll } = postServices()

        const data = await _getAll()
        dispatch(updatePosts(data.results))
    }, [dispatch])

    useEffect(() => {
        handleGetPosts()
    }, [handleGetPosts])

    const handleSignUp = (data: SignUpFormData | undefined) => {
        dispatch(updateUser(data?.name))
        setLoggedIn(true)
    }

    return (
        <Flex bg="#000000" direction="column" minH="100vh">
            {!loggedIn && <PagesSignUp onSubmit={handleSignUp} />}
            {loggedIn && <PagesMain />}
            <Container maxW="container.xl" py="6">
                <Flex>
                    <Text color="#b3d9e8">
                        Made with ❤️ by{' '}
                        <Link
                            href="https://www.linkedin.com/in/fernandochavesfc/"
                            color="#699AE8"
                        >
                            @devsfer
                        </Link>
                    </Text>
                </Flex>
            </Container>
        </Flex>
    )
}

export default App
