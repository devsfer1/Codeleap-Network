import React, { useState, useEffect, useCallback } from 'react'

import { Flex } from '@chakra-ui/react'
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
        </Flex>
    )
}

export default App
