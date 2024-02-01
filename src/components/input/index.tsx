import { TextField, TextFieldProps } from '@mui/material'

const Input = (props: TextFieldProps) => {
    return (
        <TextField fullWidth variant="outlined" {...props} />
    )
}

export default Input;