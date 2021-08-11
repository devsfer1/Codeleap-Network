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
import { CreateFormData } from '../../../interfaces/mock'
import mockServices from '../../../actions/mock'
import { useDispatch, useSelector } from 'react-redux'
import { updatePosts, selectPosts } from '../../../redux/postsSlice'

import { FormInput } from '../Input'

const createFormSchema: yup.SchemaOf<CreateFormData> = yup.object().shape({
    title: yup.string().required('Título Obrigatório'),
    content: yup.string().required('Conteúdo Obrigatório')
})

interface EditFormProps {
    id: number
    closeEdit(): void
}

export function EditForm({ id, closeEdit }: EditFormProps): JSX.Element {
    const { _update } = mockServices()

    const { posts } = useSelector(selectPosts)

    const dispatch = useDispatch()
    const toast = useToast()

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<CreateFormData>({
        resolver: yupResolver(createFormSchema)
    })

    const handleUpdatePost = useCallback(async data => {
        try {
            await _update(data, id).then(() => {
                const postsCopy = [...posts]
                postsCopy.push(data)
                dispatch(updatePosts(postsCopy))

                closeEdit()

                toast({
                    title: `Post successfully updated`,
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
    }, [_update, dispatch, id, posts, toast])

    return (
        <Flex
            as="form"
            direction="column"
            onSubmit={handleSubmit(handleUpdatePost)}
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
                aria-label="teste"
                resize="none"
                bg="white"
                placeholder="Content here"
                {...register('content')}
                name="content"
                id="content"
            />
            {errors.content}
            <Button
                type="submit"
                isLoading={isSubmitting}
                w="30%"
                alignSelf="flex-end"
                mt="25px"
            >
                <Text>Create</Text>
            </Button>
        </Flex>
    )
}
