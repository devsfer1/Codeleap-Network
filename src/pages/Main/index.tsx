import React from 'react'

import { Flex, Text } from '@chakra-ui/react'

import { Header } from '../../components/Header'
import { PagesHomeCreate } from '../../components/Create'
import { PagesHomeList } from '../../components/List'

export function PagesMain(): JSX.Element {
    return (
        <>
            <Header />
            <PagesHomeCreate />
            <PagesHomeList />
        </>
    )
}
