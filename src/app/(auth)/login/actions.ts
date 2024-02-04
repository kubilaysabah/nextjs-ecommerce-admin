'use server'

import { object, string, ValidationError } from 'yup';

type Return = {
    [key: string]: string
}

const schema = () => {
    return object({
        email: string().email('Lütfen geçerli bir e-posta adresi giriniz').required('Lütfen bir e-posta adresi giriniz'),
        password: string().required('Lütfen şifre giriniz').min(8, 'Şifre 8 karakterden kısa olamaz').max(32, 'Şifreniz en fazla 32 karakter olmalı')
    })
}

export async function login(prevState: Return, formData: FormData): Promise<Return> {
    const data = Object.fromEntries(formData.entries())
    const errors = { ...prevState };

    try {
        await schema().validate(data, { abortEarly: false })

        return errors;
    } catch (err) {
        if (err instanceof ValidationError) {
            err.inner.forEach((error) => {
                if (error.path && typeof error.path === "string") {
                    errors[error.path] = error.message
                }
            });

            return errors

        } else {
            throw err;
        }
    }
}