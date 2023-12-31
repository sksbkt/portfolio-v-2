import classNames from 'classnames';
import styles from './contact-form.module.scss';

import formSubmittedAnimation from '../../assets/form-sumbit_1.json';
import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import { Button, TextField } from '@mui/material';
import { useThemeContext } from '../../theme/ThemeContextProvider';
import { root } from '../../App';

export interface ContactFormProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ContactForm = ({ className }: ContactFormProps) => {

    // const { mode } = useThemeContext();
    // //? like this we can scss variables programmatically 
    // useEffect(() => {
    //     root?.style.setProperty("--main-color",
    //         mode === 'light' ? '#5f2d77' : '#fff'
    //     );

    // }, [mode]);


    const [query, setQuery] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    //? with this function we can handle all inputs with DRY principle
    const handleParam = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setQuery((prev) => ({
            ...prev,
            [name]: value
        }));

    }

    const formSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData();
        Object.entries(query).forEach(([key, value]) => {
            formData.append(key, value);

        });
        const submitForm = await fetch('https://getform.io/f/d787fd44-d32d-4773-9703-10f65b890f09',
            {
                method: 'POST',
                body: formData
            })
            .then(() => {
                setQuery({ name: '', email: '', message: '' });
                setSubmitted(true);
            });
    }

    return <div className={classNames(styles.root, className)}>
        {submitted ? <Lottie animationData={formSubmittedAnimation} /> :
            <div className={styles.formWrapper}>
                <h2 className={styles.formTitle}>Contact us</h2>
                <form onSubmit={formSubmit} className={styles.form}>
                    <TextField
                        label='Name'
                        name='name'
                        variant='outlined'
                        onChange={handleParam}
                        value={query.name}
                        className={styles.formInput}
                        focused
                    />
                    <TextField
                        label="Email"
                        type="email"
                        name="email"
                        onChange={handleParam}
                        value={query.email}
                        focused
                        className={styles.formInput}
                    />

                    <TextField
                        name="message"
                        label="Message"
                        onChange={handleParam}
                        value={query.message}
                        multiline={true}
                        rows={4}
                        inputProps={{}}
                        className={classNames(styles.formInputMsg, styles.formInput)}
                        focused
                    />

                    <Button type='submit' variant='outlined'>
                        Submit
                    </Button>
                </form>
            </div>
        }
    </div>;
};
