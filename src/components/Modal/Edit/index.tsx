import React from 'react'
import {
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalCloseButton
} from '@chakra-ui/react'

interface ModalDeleteProps {
    openDelete: boolean
    closeDelete(): void
    id: number
}

import { EditForm } from '../../Form/Edit'

export default function ModalEdit({
    openDelete,
    closeDelete,
    id
}: ModalDeleteProps): JSX.Element {
    return (
        <Modal isOpen={openDelete} onClose={closeDelete} size="6xl">
            <ModalOverlay />
            <ModalContent bg="#141414" py="10" px="6">
                <ModalCloseButton />
                <Text color="#C6E6F2" mb="20px">Edit Form</Text>
                <EditForm id={id} closeEdit={closeDelete} />
                <ModalFooter></ModalFooter>
            </ModalContent>
        </Modal>
    )
}
