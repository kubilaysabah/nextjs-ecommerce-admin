import { useState } from 'react'
import {
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton,
    type OutlinedInputProps,
    type FormControlProps,
    type IconButtonProps, Typography
} from "@mui/material";
import { Visibility, VisibilityOff } from '@mui/icons-material'

type Props = {
    input?: OutlinedInputProps
    formControl?: FormControlProps
    iconButton?: IconButtonProps
    error?: string;
}

const PasswordInput = ({ input = {}, formControl = {}, iconButton = {}, error }:Props) => {
    const [showPassword, setShowPassword] = useState<boolean>(false)

    return (
        <FormControl variant="outlined" fullWidth {...formControl}>
            {input.label && <InputLabel htmlFor={input.id}>{input.label}</InputLabel>}
            <OutlinedInput
                fullWidth
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            onClick={() => setShowPassword((show) => !show)}
                            onMouseDown={event => event.preventDefault()}
                            edge="end"
                            {...iconButton}
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
                {...input}
            />
            {error && (
                <Typography aria-live="polite" role="status" color={'error'}>
                    {error}
                </Typography>
            )}
        </FormControl>
    )
}

export default PasswordInput