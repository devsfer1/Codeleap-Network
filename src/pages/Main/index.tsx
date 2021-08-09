import React from 'react'

import { Container } from '@chakra-ui/react'

import { Header } from '../../components/Header'
import { PagesHomeCreate } from '../../components/Create'
import { PagesHomeList } from '../../components/List'

import { UserData, CreateFormData } from '../../interfaces/mock'

interface PagesMainProps {
    posts: UserData[] | undefined
    handleCreatePost(data: CreateFormData): void
}

export function PagesMain({ posts, handleCreatePost }: PagesMainProps): JSX.Element {
    return (
        <>
            <Header />
            <Container maxW="container.xl" py="6">
                <PagesHomeCreate handleCreatePost={handleCreatePost} />
                <PagesHomeList posts={posts} />
            </Container>
        </>
    )
}
