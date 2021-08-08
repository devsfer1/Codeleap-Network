import { Flex, Text, Container } from '@chakra-ui/react'
import { UpdateForm } from '../Form/Create'

export function PagesHomeCreate(): JSX.Element {
    return (
        <Flex py="6">
            <Container maxW="container.xl" py="6" px="6" bg="#141414">
                <Text mb="20px" color="#C6E6F2">
                    What's on your mind?
                </Text>
                <UpdateForm />
            </Container>
        </Flex>
    )
}
