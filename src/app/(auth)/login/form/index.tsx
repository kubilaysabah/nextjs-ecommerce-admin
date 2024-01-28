import { Button, Unstable_Grid2 as Grid } from '@mui/material';
import { Form, Input, PasswordInput } from './styles'

const LoginForm = () => {
    return (
        <Form component={'form'} container>
            <Grid md={6} lg={4} xl={3}>
                <Input
                    id="email"
                    label="E-Mail"
                    variant="outlined"
                    fullWidth
                    required
                />
                <PasswordInput
                    id={'password'}
                    label={'Password'}
                />
                <Button type={"submit"} fullWidth variant="contained">{'Giriş Yap'}</Button>
            </Grid>
        </Form>
    )
};

export default LoginForm