import React, { useState, useCallback, useEffect } from 'react'

import { Flex } from '@chakra-ui/react'
import { PagesMain } from './pages/Main'
import { PagesSignUp } from './pages/Signup'

import mockServices from './actions/mock'
import { SignUpFormData, UserData, MockData } from './interfaces/mock'

const App: React.FC = () => {
    const [user, setUser] = useState<string | undefined>()
    const [posts, setPosts] = useState<UserData[]>([])
    const [loggedIn, setLoggedIn] = useState<boolean>(false)

    const { _getAll, _create, _delete } = mockServices()

    const handleSignUp = (data: SignUpFormData | undefined) => {
        setUser(data?.name)
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

        setPosts(data.results)
    }, [_getAll])

    const handleDelete = useCallback(async (id) => {
        const data = await _delete(id).then(() => {
            const postsCopy = [...posts]

            const updatedPosts = postsCopy.filter(post => post.id !== id)

            setPosts(updatedPosts)
        })
    }, [_delete, posts])

    useEffect(() => {
        handleGetPosts()
    }, [handleGetPosts])

    return (
        <Flex bg="#000000" direction="column" minH="100vh">
            {!loggedIn && <PagesSignUp onSubmit={handleSignUp} />}
            {loggedIn && (
                <PagesMain
                    posts={posts}
                    handleCreatePost={handleCreatePost}
                    handleDelete={handleDelete}
                    user={user}
                />
            )}
        </Flex>
    )
}

export default App
