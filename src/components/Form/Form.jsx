import './Form.scss'
import {useForm} from "react-hook-form";
import {Input} from "./Input/Input";
import {TextArea} from "./TextArea/TextArea";

export const Form = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm({
        defaultValues: {
            name: '',
            email: '',
            yourMessage: ''
        },
        mode: "onTouched"
    })
    const onSubmit = (data) => {
        console.log("Form submitted", data)

        reset();
    };

    return (
        <main className='form-wrapper'>
            <form onSubmit={handleSubmit(onSubmit)} className='form' method='get'>
                    <Input
                        id='name'
                        errors={errors.name?.message}
                        name='name'
                        type='text'
                        placeholder='Full name'
                        register={register}
                        options={{
                            required: {
                                value: true,
                                message: 'It is required'
                            },
                            minLength: {
                                value: 4,
                                message: "min length 4 symbols"
                            }
                        }}
                    />
                    <Input
                        id='email'
                        errors={errors.email?.message}
                        name='email'
                        type='email'
                        placeholder='Email'
                        register={register}
                        options={{
                            required: {
                                value: true,
                                message: "It is required"
                            },
                            pattern: {
                                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                message: 'Invalid email format'
                            },
                            validate: {
                                russianDomain: (fieldValue) => {
                                    return !fieldValue.endsWith('.ru') ||
                                        "Are you supporting these motherfuckers? FUCK YOU, BITCH"
                                }
                            }
                        }}
                    />

                <TextArea
                    id='yourMessage'
                    errors={errors.yourMessage?.message}
                    name='yourMessage'
                    placeholder='Tell more..'
                    register={register}
                    options={{
                        required: {
                            value: false
                        },
                        minLength: {
                            value: 20,
                            message: "min length 20 symbols"
                        },
                        maxLength: {
                            value: 100,
                            message: 'max length 100 symbols'
                        }
                    }}
                />
                <button  className='btn' type='submit'>Submit</button>
            </form>
        </main>

    )
}