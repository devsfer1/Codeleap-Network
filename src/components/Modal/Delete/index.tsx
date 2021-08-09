import React from 'react'
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalCloseButton,
} from '@chakra-ui/react'

interface ModalDeleteProps {
    openDelete: boolean
    closeDelete(): void
}

export default function ModalDelete({
    openDelete,
    closeDelete

}: ModalDeleteProps): JSX.Element {
    return (
        <Modal isOpen={openDelete} onClose={closeDelete}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Modal Delete</ModalHeader>
                <ModalCloseButton />
                <ModalBody>Teste</ModalBody>

                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={closeDelete}>
                        Close
                    </Button>
                    <Button variant="ghost">Secondary Action</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
