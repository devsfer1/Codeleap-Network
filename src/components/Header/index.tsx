import { Flex, Text, Container } from '@chakra-ui/react'

export function Header(): JSX.Element {
    return (
        <Flex bg="#1f1f1f" w="100%">
            <Container maxW="container.xl" py="6" px="6">
                <Text color="#C6E6F2">CodeLeap Network</Text>
            </Container>
        </Flex>
    )
}
