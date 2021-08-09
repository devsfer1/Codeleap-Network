import { Flex, Text, Container } from '@chakra-ui/react'

import { UserData } from '../../interfaces/mock'
import { Post } from '../Post'

interface PagesHomeListProps {
    posts: UserData[] | undefined
}

export function PagesHomeList({ posts }: PagesHomeListProps): JSX.Element {
    return (
        <>
            {posts?.map(item => (
                <Post post={item} />
            ))}
        </>
    )
}
