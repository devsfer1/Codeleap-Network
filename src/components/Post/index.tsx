import { Flex, Text, Box, Button, useDisclosure } from '@chakra-ui/react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import ModalDelete from '../Modal/Delete'
import ModalEdit from '../Modal/Edit'

import { UserData } from '../../interfaces/mock'

interface PostProps {
    post: UserData
    user: string | undefined
    handleDelete(id: number): void
}

export function Post({ post, user, handleDelete }: PostProps): JSX.Element {
    const {
        isOpen: isOpenEdit,
        onOpen: onOpenEdit,
        onClose: onCloseEdit
    } = useDisclosure()
    const {
        isOpen: isOpenDelete,
        onOpen: onOpenDelete,
        onClose: onCloseDelete
    } = useDisclosure()

    return (
        <Box
            mb="20px"
            transition="transform 0.3s ease-in-out, box-shadow 0.4s linear"
            _hover={{
                transform: 'scale(1.01)'
            }}
            overflow="hidden"
            borderRadius="8px"
            boxShadow="lg"
        >
            <ModalDelete
                openDelete={isOpenDelete}
                handleDelete={() => {handleDelete(post.id)}}
                closeDelete={onCloseDelete}
            />
            <ModalEdit openDelete={isOpenEdit} closeDelete={onCloseEdit} />

            <Flex
                bg="#1F1F1F"
                py="6"
                px="6"
                alignItems="center"
                justifyContent="space-between"
            >
                <Text color="#C6E6F2">{post.title}</Text>
                <Flex>
                    {user === post.username && (
                        <>
                            <Button variant="unstyled" onClick={onOpenEdit}>
                                <EditIcon color="#C6E6F2" />
                            </Button>
                            <Button variant="unstyled" onClick={onOpenDelete}>
                                <DeleteIcon color="#C6E6F2" />
                            </Button>
                        </>
                    )}
                </Flex>
            </Flex>
            <Flex direction="column" bg="#141414" py="6" px="6">
                <Flex justifyContent="space-between" mb="5px">
                    <Text color="#C6E6F2">@{post.username}</Text>
                    <Text color="#C6E6F2">{post.created_datetime}</Text>
                </Flex>
                <Text color="#C6E6F2">{post.content}</Text>
            </Flex>
        </Box>
    )
}
