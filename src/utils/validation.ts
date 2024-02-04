import {type ObjectSchema, type AnyObject, ValidationError} from 'yup'

type Props = {
    formData: FormData
    prevState: { [key: string]: string }
    schema: ObjectSchema<AnyObject>
}

const validation = async ({ schema, formData, prevState }: Props) => {
    const data = Object.fromEntries(formData.entries())
    const errors = { ...prevState };

    try {
        await schema.validate(data, { abortEarly: false })

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

export default validation