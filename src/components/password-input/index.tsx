import { useState } from 'react'
import {
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton,
    type OutlinedInputProps,
    type FormControlProps,
    type IconButtonProps
} from "@mui/material";
import { Visibility, VisibilityOff } from '@mui/icons-material'

type Props = {
    input?: OutlinedInputProps
    formControl?: FormControlProps
    iconButton?: IconButtonProps
}

const PasswordInput = ({ input = {}, formControl = {}, iconButton = {} }:Props) => {
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
        </FormControl>
    )
}

export default PasswordInput