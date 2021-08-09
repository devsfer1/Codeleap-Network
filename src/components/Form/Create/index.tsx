import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Flex, Text, Textarea, FormLabel } from '@chakra-ui/react'
import { CreateFormData } from '../../../interfaces/mock'

import { FormInput } from '../Input'

const createFormSchema: yup.SchemaOf<CreateFormData> = yup.object().shape({
    title: yup.string().required('Título Obrigatório'),
    content: yup.string().required('Conteúdo Obrigatório')
})

interface CreateFormProps {
    handleCreatePost(data: CreateFormData): void
}

export function CreateForm(props: CreateFormProps): JSX.Element {

    const { handleCreatePost } = props

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<CreateFormData>({
        resolver: yupResolver(createFormSchema)
    })

    return (
        <Flex as="form" direction="column" onSubmit={handleSubmit(handleCreatePost)}>
            <FormInput
                label="Title"
                type="text"
                {...register('title')}
                placeholder="Hello World"
                error={errors.title}
            />
            <FormLabel htmlFor="content" fontWeight="normal" color="#C6E6F2" fontSize="sm" mt="10px">
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
