import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Flex, Text } from '@chakra-ui/react'
import { UpdatePostFormData } from '../../../interfaces/post'

import { FormInput } from '../Input'

const updateFormSchema: yup.SchemaOf<UpdatePostFormData> = yup.object().shape({
    title: yup.string().required('Title required'),
    content: yup.string().required('Content required')
})

export function UpdateForm():JSX.Element {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<UpdatePostFormData>({
        resolver: yupResolver(updateFormSchema)
    })

    return (
        <Flex as="form" direction="column">
            <FormInput
                label="Title"
                type="text"
                {...register('title')}
                placeholder="Hello World"
                error={errors.title}
            />
            <FormInput
                label="Content"
                type="text"
                {...register('content')}
                placeholder="Hello World"
                error={errors.content}
            />
            <Button
                type="submit"
                isLoading={isSubmitting}
                w="30%"
                alignSelf="flex-end"
                mt="25px"
            >
                <Text>Save</Text>
            </Button>
        </Flex>
    )
}
