import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Flex, Text } from '@chakra-ui/react'

import { FormInput } from '../Input'
import { SignUpFormData } from '../../../interfaces/post'

const signUpFormSchema: yup.SchemaOf<SignUpFormData> = yup.object().shape({
    name: yup.string().required('Name required')
})

interface SignUpFormProps {
    onSubmit(data: SignUpFormData): void
}

export function SignUpForm(props: SignUpFormProps): JSX.Element {
    const { onSubmit } = props

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting }
    } = useForm<SignUpFormData>({
        resolver: yupResolver(signUpFormSchema)
    })

    const nameInput = watch('name')

    return (
        <Flex as="form" direction="column" onSubmit={handleSubmit(onSubmit)}>
            <FormInput
                label="Please enter your username"
                type="text"
                {...register('name')}
                placeholder="John doe"
                error={errors.name}
            />
            <Button
                type="submit"
                isLoading={isSubmitting}
                w="30%"
                alignSelf="flex-end"
                mt="25px"
                isDisabled={nameInput?.length <= 0 ? true : false}
            >
                <Text>Enter</Text>
            </Button>
        </Flex>
    )
}
