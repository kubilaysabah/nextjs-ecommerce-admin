"use client"

import {
    Unstable_Grid2 as Grid,
    Box
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { Input, PasswordInput, Button } from '@/components'

const Form = () => {
    const { spacing } = useTheme();

    return (
        <Grid container minHeight={'100vh'} height={'100%'} alignItems={'center'} justifyContent={'center'}>
            <Grid lg={4} xl={3}>
                <Box component={'form'}>
                    <Input
                        type={'email'}
                        id={'email'}
                        label={'e-mail'}
                        sx={{
                            marginBottom: spacing(2)
                        }}
                    />
                    <PasswordInput
                        input={{
                            id: 'password',
                            label: 'Password',
                        }}
                        formControl={{
                          sx: {
                              marginBottom: spacing(2)
                          }
                        }}
                    />
                    <Button type={'submit'} fullWidth variant={'contained'} color={'primary'}>{'Gönder'}</Button>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Form