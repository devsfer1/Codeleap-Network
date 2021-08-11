import React, { useState } from 'react'

import { Flex } from '@chakra-ui/react'
import { PagesMain } from './pages/Main'
import { PagesSignUp } from './pages/Signup'

import { SignUpFormData } from './interfaces/mock'
import { useDispatch } from 'react-redux'
import { updateUser } from './redux/userSlice'

const App: React.FC = () => {
    const [loggedIn, setLoggedIn] = useState<boolean>(false)

    const dispatch = useDispatch()

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
