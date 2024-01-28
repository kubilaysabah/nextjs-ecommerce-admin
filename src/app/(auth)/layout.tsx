import { type ReactNode } from 'react'

type Props = {
    children: ReactNode
}

const AuthLayout = ({ children }: Props) => {
    return (
        <main>
            {children}
        </main>
    )
}

export default AuthLayout