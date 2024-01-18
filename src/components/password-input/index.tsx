"use client";

import {type MouseEvent, type ReactElement, type FC, useState} from "react";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import type PasswordInputProps from './type';

const PasswordInput: FC<PasswordInputProps> = ({ label, id, sx, required = false, disabled = false }: PasswordInputProps): ReactElement => {
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    }

    return (
        <FormControl variant="outlined" fullWidth sx={sx}>
            <InputLabel htmlFor={id}>{label}</InputLabel>
            <OutlinedInput
                disabled={disabled}
                required={required}
                id={id}
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
                label="Password"
            />
        </FormControl>
    )
};

export default PasswordInput;