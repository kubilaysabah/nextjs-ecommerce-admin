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
                    <Grid container spacing={3}>
                        <Grid md>
                            <Input
                                type={'text'}
                                id={'firstname'}
                                name={'firstname'}
                                label={'Firstname'}
                            />
                        </Grid>
                        <Grid md>
                            <Input
                                type={'text'}
                                id={'lastname'}
                                name={'lastname'}
                                label={'Lastname'}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid md>
                            <Input
                                type={'tel'}
                                id={'tel'}
                                name={'tel'}
                                label={'Phone'}
                            />
                        </Grid>
                        <Grid md>
                            <Input
                                type={'email'}
                                id={'email'}
                                name={'email'}
                                label={'E-Mail'}
                            />
                        </Grid>
                    </Grid>

                    <Grid container spacing={3} sx={{
                        marginBottom: spacing(2)
                    }}>
                        <Grid md>
                            <PasswordInput
                                input={{
                                    id: 'password',
                                    label: 'Password',
                                }}
                            />
                        </Grid>
                        <Grid md>
                            <PasswordInput
                                input={{
                                    id: 'password-again',
                                    label: 'Password Again',
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid md>
                            <Button size={'large'} type={'submit'} fullWidth variant={'outlined'} color={'primary'}>{'Go Back'}</Button>
                        </Grid>
                        <Grid md>
                            <Button size={'large'} type={'submit'} fullWidth variant={'contained'} color={'primary'}>{'Register'}</Button>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Form