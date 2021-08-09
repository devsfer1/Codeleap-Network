import React from 'react'

import { Container } from '@chakra-ui/react'

import { Header } from '../../components/Header'
import { PagesHomeCreate } from '../../components/Create'
import { PagesHomeList } from '../../components/List'

import { UserData } from '../../interfaces/mock'

interface PagesMainProps {
    posts: UserData[] | undefined
}

export function PagesMain({ posts }: PagesMainProps): JSX.Element {
    return (
        <>
            <Header />
            <Container maxW="container.xl" py="6">
                <PagesHomeCreate />
                <PagesHomeList posts={posts} />
            </Container>
        </>
    )
}
