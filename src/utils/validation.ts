import { ObjectSchema } from 'joi'

type Error = {
    message: string
    errors: string[]
    path: string
    type: string
    params: {
        value: string
        originalValue: string
        label: string | undefined
        path: string
        min: number
    }
}

const validation = <T>(schema: ObjectSchema<T>, data: T) => {
    try {
        schema.validate(data)
    } catch (err) {
        const error = err as Error
        console.log(error);
    }
}

export default validation