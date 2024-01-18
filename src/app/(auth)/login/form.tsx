"use client";

import { Button, TextField, Box, Unstable_Grid2 as Grid } from '@mui/material';
import PasswordInput from "@/components/password-input";

const LoginForm = () => {
    return (
        <Grid
            container
            alignItems={'center'}
            justifyContent={'center'}
            sx={{
                minHeight: '100vh',
                height: '100%',
            }}
        >
            <Grid md={6} lg={4} xl={3}>
                <Box component={'form'}>
                    <TextField
                        id="email"
                        label="E-Mail"
                        variant="outlined"
                        fullWidth
                        sx={{
                            marginBottom: '1.6rem'
                        }}
                        required
                    />
                    <PasswordInput
                        id={'password'}
                        label={'Password'}
                        sx={{
                            marginBottom: '1.6rem'
                        }}
                    />
                    <Button type={"submit"} fullWidth variant="contained">{'Giriş Yap'}</Button>
                </Box>
            </Grid>
        </Grid>
    )
};

export default LoginForm