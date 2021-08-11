import React, { useCallback } from 'react'
import {
    Button,
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalFooter,
    ModalCloseButton,
    useToast
} from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'
import { selectPosts } from '../../../redux/postsSlice'
import { updatePosts } from '../../../redux/postsSlice'
import mockServices from '../../../actions/mock'

interface ModalDeleteProps {
    openDelete: boolean
    closeDelete(): void
    id: number
}

export default function ModalDelete({
    openDelete,
    closeDelete,
    id
}: ModalDeleteProps): JSX.Element {
    const { posts } = useSelector(selectPosts)
    const dispatch = useDispatch()
    const toast = useToast()

    const { _delete } = mockServices()

    const handleDelete = useCallback(
        async id => {
            try {
                await _delete(id).then(() => {
                    const postsCopy = [...posts]

                    const updatedPosts = postsCopy.filter(
                        post => post.id !== id
                    )

                    dispatch(updatePosts(updatedPosts))

                    toast({
                        title: `Post successfully deleted`,
                        status: 'success',
                        isClosable: true
                    })

                    closeDelete()
                })
            } catch (err) {
                toast({
                    title: `An error has occurred, please try again`,
                    status: 'error',
                    isClosable: true
                })
            }
        },
        [dispatch, _delete, posts, closeDelete, toast]
    )

    return (
        <Modal isOpen={openDelete} onClose={closeDelete}>
            <ModalOverlay />
            <ModalContent bg="#141414">
                <ModalCloseButton />
                <ModalBody>
                    <Text color="#C6E6F2">
                        Are you sure want to delete this item?
                    </Text>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={closeDelete}>
                        Cancel
                    </Button>
                    <Button variant="ghost" onClick={() => handleDelete(id)}>
                        Ok
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
