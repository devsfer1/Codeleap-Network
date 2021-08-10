import React from 'react'
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalFooter,
    ModalCloseButton,
} from '@chakra-ui/react'

interface ModalDeleteProps {
    openDelete: boolean
    closeDelete(): void
    handleDelete(): void
}

export default function ModalDelete({
    openDelete,
    closeDelete,
    handleDelete

}: ModalDeleteProps): JSX.Element {
    return (
        <Modal isOpen={openDelete} onClose={closeDelete}>
            <ModalOverlay />
            <ModalContent>

                <ModalCloseButton />
                <ModalBody>Are you sure want to delete this item?</ModalBody>

                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={closeDelete}>
                        Cancel
                    </Button>
                    <Button variant="ghost" onClick={handleDelete}>Ok</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
