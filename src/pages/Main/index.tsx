import React from 'react'

import { Container } from '@chakra-ui/react'

import { Header } from '../../components/Header'
import { PagesHomeCreate } from '../../components/Create'
import { PagesHomeList } from '../../components/List'

export function PagesMain(): JSX.Element {
    return (
        <>
            <Header />
            <Container maxW="container.xl" py="6">
                <PagesHomeCreate />
                <PagesHomeList
                />
            </Container>
        </>
    )
}
