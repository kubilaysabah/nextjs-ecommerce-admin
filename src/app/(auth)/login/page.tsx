import LoginForm from './form'
import {Container, Banner, FormContainer} from './styles'

export default function Login() {
    return (
        <Container>
            <Banner></Banner>
            <FormContainer>
                <LoginForm />
            </FormContainer>
        </Container>
    )
}
