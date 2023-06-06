import { FormInputLabel, Input, Group } from './input-form.styles';

/* 
    <InputForm id='email'
        label='Email'
        type='email'
        name='email'
        value={email}
        onChange={handleChange}
        required 
*/
const InputForm = ({ label, ...otherProps }) => {
    console.log('o', otherProps)

    return (
        <Group>
            <Input {...otherProps} />

            { label && (
                
                <FormInputLabel shrink={otherProps.value.length}>
                    {label}
                </FormInputLabel>
            ) } 
        </Group>
    )
}

export default InputForm