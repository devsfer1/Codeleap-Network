import React, { useState, useCallback, useEffect } from 'react'

import { Flex } from '@chakra-ui/react'
import { PagesMain } from './pages/Main'
import { PagesSignUp } from './pages/Signup'

import mockServices from './actions/mock'
import { SignUpFormData, UserData, MockData } from './interfaces/mock'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from './redux/userSlice'
import { updatePosts } from './redux/postsSlice'

const App: React.FC = () => {
    const [user, setUser] = useState<string | undefined>()
    const [posts, setPosts] = useState<UserData[]>([])
    const [loggedIn, setLoggedIn] = useState<boolean>(false)

    const dispatch = useDispatch()

    const { _getAll, _create, _delete } = mockServices()

    const handleSignUp = (data: SignUpFormData | undefined) => {
        dispatch(updateUser(data?.name))
        setLoggedIn(true)
    }

    const handleCreatePost = useCallback(
        async data => {
            try {
                await _create(data, user)
            } catch (err) {
                console.log(err)
            }
        },
        [_create, user]
    )

    const handleGetPosts = useCallback(async () => {
        const data = await _getAll()
        dispatch(updatePosts(data.results))
    }, [_getAll, dispatch])

    useEffect(() => {
        handleGetPosts()
    }, [handleGetPosts])

    return (
        <Flex bg="#000000" direction="column" minH="100vh">
            {!loggedIn && <PagesSignUp onSubmit={handleSignUp} />}
            {loggedIn && (
                <PagesMain
                    handleCreatePost={handleCreatePost}
                />
            )}
        </Flex>
    )
}

export default App
