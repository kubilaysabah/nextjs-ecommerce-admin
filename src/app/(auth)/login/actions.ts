'use server'

import Joi from 'joi'

type Return = {
    message: string
}

type State = { email: string, password: string }

const schema = async () => {
    return Joi.object<State>({
        email:
            Joi.string().label('E-posta adresi boş bırakılamaz')
            .email().label('Lütfen geçerli bir e-posta adresi giriniz')
            .required().label('E-posta adresi boş bırakılamaz'),
        password:
            Joi.string().label('Şifre boş bırakılamaz')
            .min(6).label('Şifreniz en az 6 haneli olmalı')
            .max(20).label('Şifreniz en fazla 20 haneli olmalı')
            .required().label('Şifre boş bırakılamaz')
    })
}

export async function login(prevState: Return, formData: FormData): Promise<Return> {
    const data = Object.fromEntries(formData.entries())

    try {
        await (await schema()).validateAsync(data)

        return {
            message: ''
        }
    } catch (err) {
        return {
            message: ''
        }
    }
}