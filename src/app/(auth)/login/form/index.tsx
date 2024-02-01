"use client";

import { useState } from 'react'
import {
    Box,
    TextField,
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton,
    Unstable_Grid2 as Grid,
    useTheme
} from '@mui/material'
import { VisibilityOff, Visibility } from '@mui/icons-material';

const LoginForm = () => {
    const { spacing } = useTheme();
    const [showPassword, setShowPassword] = useState<boolean>(false);

    return (
        <Grid container height={'100%'} minHeight={'100vh'} alignItems={'center'} justifyContent={'center'}>
            <Grid lg={4} xl={3}>
                <Box component={"form"}>
                    <TextField type={"email"} fullWidth />
                    <FormControl variant="outlined" fullWidth sx={{
                        marginBottom: spacing(2)
                    }}>
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => setShowPassword((show) => !show)}
                                        onMouseDown={event => event.preventDefault()}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                </Box>
            </Grid>
        </Grid>
    )
};

export default LoginForm