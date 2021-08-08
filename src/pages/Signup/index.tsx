import { Flex, Text, Box } from '@chakra-ui/react'
import { SignUpForm } from '../../components/Form/Singup'
import { SignUpFormData } from '../../interfaces/mock'

interface PagesSignUpProps {
    onSubmit(data: SignUpFormData): void
}

export function PagesSignUp(props: PagesSignUpProps): JSX.Element {

    const { onSubmit } = props

    return (
        <Flex alignItems="center" justifyContent="center" height="100vh">
            <Box w="40%" bg="#141414" py="6" px="6" borderRadius="10px">
                <Text mb="20px" color="#C6E6F2">
                    {' '}
                    Welcome to CodeLeap network!
                </Text>
                <SignUpForm onSubmit={onSubmit} />
            </Box>
        </Flex>
    )
}
