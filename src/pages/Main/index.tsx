import React from 'react'

import { Container } from '@chakra-ui/react'

import { Header } from '../../components/Header'
import { PagesHomeCreate } from '../../components/Create'
import { PagesHomeList } from '../../components/List'

import { UserData, CreateFormData } from '../../interfaces/mock'

interface PagesMainProps {
    handleCreatePost(data: CreateFormData): void
}

export function PagesMain({ handleCreatePost }: PagesMainProps): JSX.Element {
    return (
        <>
            <Header />
            <Container maxW="container.xl" py="6">
                <PagesHomeCreate handleCreatePost={handleCreatePost} />
                <PagesHomeList
                />
            </Container>
        </>
    )
}
