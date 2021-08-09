import { Flex, Text, Container } from '@chakra-ui/react'
import { CreateForm } from '../Form/Create'
import { CreateFormData } from '../../interfaces/mock'

interface PagesHomeCreateProps {
    handleCreatePost(data: CreateFormData): void
}

export function PagesHomeCreate(props: PagesHomeCreateProps): JSX.Element {

    const { handleCreatePost } = props

    return (
        <Flex
            py="6"
            px="6"
            bg="#141414"
            direction="column"
            w="100%"
            mb="20px"
            borderRadius="8px"
            boxShadow="lg"
        >
            <Text mb="20px" color="#C6E6F2">
                What's on your mind?
            </Text>
            <CreateForm handleCreatePost={handleCreatePost} />
        </Flex>
    )
}
