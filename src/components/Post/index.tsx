import { Flex, Text, Box } from '@chakra-ui/react'

import { UserData } from '../../interfaces/mock'

interface PostProps {
    post: UserData
}

export function Post({ post }: PostProps): JSX.Element {
    return (
        <Box bg="white" mb="20px">
            <Flex bg="#1F1F1F" py="6" px="6">
                <Text color="#C6E6F2">{post.title}</Text>
            </Flex>
            <Flex direction="column" bg="#141414" py="6" px="6">
                <Text color="#C6E6F2">@{post.username}</Text>
                <Text color="#C6E6F2">{post.content}</Text>
            </Flex>
        </Box>
    )
}
