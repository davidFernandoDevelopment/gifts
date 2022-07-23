import { ChangeEvent, FormEvent, useState } from 'react';


interface Props {
    onValue: (value: string) => void;
}


export const Input = ({ onValue }: Props) => {
    const [value, setValue] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!value) return;

        onValue(value.trim());
        setValue('');
    };

    return (
        <form onSubmit={handleSubmit} aria-label='form'>
            <input
                type="text"
                value={value}
                onChange={handleChange}
            />
        </form>
    );
};

export default Input;