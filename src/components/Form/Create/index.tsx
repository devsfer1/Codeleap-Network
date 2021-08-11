import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import {
    Button,
    Flex,
    Text,
    Textarea,
    FormLabel,
    useToast
} from '@chakra-ui/react'
import { CreateFormData } from '../../../interfaces/post'
import postServices from '../../../actions/post'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../../../redux/userSlice'
import { updatePosts, selectPosts } from '../../../redux/postsSlice'

import { FormInput } from '../Input'

const createFormSchema: yup.SchemaOf<CreateFormData> = yup.object().shape({
    title: yup.string().required('Title required'),
    content: yup.string().required('Content required')
})

export function CreateForm(): JSX.Element {
    const { _create } = postServices()

    const { user } = useSelector(selectUser)
    const { posts } = useSelector(selectPosts)

    const dispatch = useDispatch()
    const toast = useToast()

    const handleCreatePost = useCallback(
        async data => {
            try {
                await _create(data, user).then(res => {
                    const postsCopy = [...posts]
                    postsCopy.push(res)
                    dispatch(updatePosts(postsCopy))

                    toast({
                        title: `Post successfully created`,
                        status: 'success',
                        isClosable: true
                    })
                })
            } catch (err) {
                toast({
                    title: `An error has occurred, please try again`,
                    status: 'error',
                    isClosable: true
                })
            }
        },
        [_create, user, dispatch, posts, toast]
    )

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting }
    } = useForm<CreateFormData>({
        resolver: yupResolver(createFormSchema)
    })

    const titleInput = watch('title')
    const contentInput = watch('content')

    return (
        <Flex
            as="form"
            direction="column"
            onSubmit={handleSubmit(handleCreatePost)}
        >
            <FormInput
                label="Title"
                type="text"
                {...register('title')}
                placeholder="Hello World"
                error={errors.title}
            />
            <FormLabel
                htmlFor="content"
                fontWeight="normal"
                color="#C6E6F2"
                fontSize="sm"
                mt="10px"
            >
                Content
            </FormLabel>
            <Textarea
                resize="none"
                bg="white"
                placeholder="Content here"
                {...register('content')}
                name="content"
                id="content"
            />
            {!!errors.content && (
                <Text color="#E53E3E" fontSize="sm" mt="3px">
                    {errors.content.message}
                </Text>
            )}
            <Button
                type="submit"
                isLoading={isSubmitting}
                w="30%"
                alignSelf="flex-end"
                mt="25px"
                isDisabled={
                    titleInput?.length <= 0 || contentInput?.length <= 0
                        ? true
                        : false
                }
            >
                <Text>Create</Text>
            </Button>
        </Flex>
    )
}
