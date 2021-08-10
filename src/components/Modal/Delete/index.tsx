import React, { useCallback } from 'react'
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalFooter,
    ModalCloseButton,
} from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'
import { selectPosts } from '../../../redux/postsSlice'
import { updatePosts } from '../../../redux/postsSlice'
import mockServices from '../../../actions/mock'

interface ModalDeleteProps {
    openDelete: boolean
    closeDelete(): void
}

export default function ModalDelete({
    openDelete,
    closeDelete,

}: ModalDeleteProps): JSX.Element {

    const { posts } = useSelector(selectPosts)

    const dispatch = useDispatch()

    const { _delete } = mockServices()

    const handleDelete = useCallback(
        async id => {
            const data = await _delete(id).then(() => {
                const postsCopy = [...posts]

                const updatedPosts = postsCopy.filter(post => post.id !== id)

                dispatch(updatePosts(updatedPosts))
            })
        },
        [dispatch, _delete, posts]
    )


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
