'use server'

import validation from '@/utils/validation'

type Return = {
    [key: string]: string
}

const yupSchema = async () => {
    const { object, string } = await import('yup')

    return object({
        email: string().email('Lütfen geçerli bir e-posta adresi giriniz').required('Lütfen bir e-posta adresi giriniz'),
        password: string().required('Lütfen şifre giriniz').min(8, 'Şifre 8 karakterden kısa olamaz').max(32, 'Şifreniz en fazla 32 karakter olmalı')
    })
}

export async function login(prevState: Return, formData: FormData): Promise<Return> {
    const schema = await yupSchema()
    return validation({ schema, formData, prevState })
}