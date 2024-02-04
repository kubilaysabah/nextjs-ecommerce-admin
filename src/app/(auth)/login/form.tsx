"use client"

import { Unstable_Grid2 as Grid, Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { Input, PasswordInput, Button } from '@/components'
import { login } from './actions'
import { useFormState, useFormStatus } from "react-dom";

const Form = () => {
    const { spacing } = useTheme();
    const { pending } = useFormStatus();
    const [errors, formAction] = useFormState(login, {});

    return (
        <Grid container minHeight={'100vh'} height={'100%'} alignItems={'center'} justifyContent={'center'}>
            <Grid lg={4} xl={3}>
                <Box component={'form'} action={formAction} noValidate>
                    <Input
                        error={errors.email}
                        input={{
                            error: !!errors.email,
                            id: 'email',
                            label: 'e-mail',
                            name: 'email',
                            type: 'email'
                        }}
                        formControl={{
                            sx: {
                                marginBottom: spacing(2)
                            }
                        }}
                    />
                    <PasswordInput
                        error={errors.password}
                        input={{
                            error: !!errors.password,
                            id: 'password',
                            label: 'Password',
                            name: 'password'
                        }}
                        formControl={{
                            sx: {
                                marginBottom: spacing(2)
                            }
                        }}
                    />
                    <Button aria-disabled={pending} type={'submit'} fullWidth variant={'contained'}
                            color={'primary'}>{'Gönder'}</Button>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Form