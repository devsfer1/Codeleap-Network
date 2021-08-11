import { Flex, Text, Box, Button, useDisclosure } from '@chakra-ui/react'
import { formatDistance } from 'date-fns'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import ModalDelete from '../Modal/Delete'
import ModalEdit from '../Modal/Edit'
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/userSlice'

import { PostData } from '../../interfaces/post'

interface PostProps {
    post: PostData
}
export function Post({ post }: PostProps): JSX.Element {
    const teste = formatDistance(new Date(post.created_datetime), new Date(), {
        includeSeconds: true
    })

    console.log(teste)

    const { user } = useSelector(selectUser)

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
                closeDelete={onCloseDelete}
                id={post.id}
            />
            <ModalEdit
                openDelete={isOpenEdit}
                closeDelete={onCloseEdit}
                id={post.id}
            />

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
                    <Text color="#C6E6F2">{`${teste} ago`}</Text>
                </Flex>
                <Text color="#C6E6F2">{post.content}</Text>
            </Flex>
        </Box>
    )
}
