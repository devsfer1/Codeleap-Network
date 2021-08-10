import React from 'react'
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalCloseButton
} from '@chakra-ui/react'

interface ModalDeleteProps {
    openDelete: boolean
    closeDelete(): void
}

import { UpdateForm } from '../../Form/Update'

export default function ModalEdit({
    openDelete,
    closeDelete
}: ModalDeleteProps): JSX.Element {
    return (
        <Modal isOpen={openDelete} onClose={closeDelete}>
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton />
                <ModalBody>Teste</ModalBody>
                <UpdateForm />

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
