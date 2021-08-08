import { forwardRef, ForwardRefRenderFunction } from 'react'
import {
    Input,
    FormControl,
    FormLabel,
    InputProps,
    FormErrorMessage,
    InputGroup,
    InputLeftElement,
    InputRightAddon
} from '@chakra-ui/react'
import { FieldError } from 'react-hook-form'

interface FormInputProps extends InputProps {
    name: string
    label?: string
    error?: FieldError
    labelTop?: number
    leftContent?: string
    rightContent?: string
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, FormInputProps> = (
    { name, label, labelTop, error = null, leftContent, rightContent, ...rest },
    ref
) => (
    <FormControl isInvalid={!!error} data-testid="testFormId">
        {!!label && (
            <FormLabel
                htmlFor={name}
                fontSize={rest.fontSize ?? 'sm'}
                fontWeight="normal"
                mt={labelTop}
                color="#C6E6F2"
            >
                {label}
            </FormLabel>
        )}

        <InputGroup>
            {leftContent && <InputLeftElement>{leftContent}</InputLeftElement>}

            <Input
                data-testid={name}
                id={name}
                name={name}
                bgColor="white"
                variant="filled"
                _hover={{ bgColor: 'white' }}
                _focus={{ bgColor: 'white' }}
                height="10"
                fontSize="sm"
                boxShadow="md"
                ref={ref}
                {...rest}
            />

            {rightContent && <InputRightAddon>{rightContent}</InputRightAddon>}
        </InputGroup>

        {!!error && (
            <FormErrorMessage fontSize={rest.fontSize ?? 'sm'}>
                {error.message}
            </FormErrorMessage>
        )}
    </FormControl>
)

export const FormInput = forwardRef(InputBase)
