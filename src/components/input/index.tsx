import {FormControl, TextField, FormControlProps, type TextFieldProps, Typography} from '@mui/material'

type InputProps = {
    input?: TextFieldProps
    formControl?: FormControlProps
    error?: string
}

const Input = ({ input, formControl, error }: InputProps) => {
    return (
        <FormControl fullWidth {...formControl}>
            <TextField fullWidth variant="outlined" {...input} />
            {error && (
                <Typography aria-live="polite" role="status" color={'error'}>
                    {error}
                </Typography>
            )}
        </FormControl>
    )
}

export default Input;