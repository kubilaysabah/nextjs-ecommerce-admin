import { type TextFieldProps } from '@mui/material'

type PasswordInputProps = {
    id: string;
    label: string;
    required?: boolean;
    disabled?: boolean;
    sx?: TextFieldProps['sx'];
}

export default PasswordInputProps;