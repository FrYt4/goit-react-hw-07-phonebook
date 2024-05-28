import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contactsSlice';

export const TextInput = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();

    const onChange = (event) => {
        const { name, value } = event.target;
        name === 'name' ? setName(value) : setNumber(value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(addContact(name, number));
        setName('');
        setNumber('');
    };

    return (
        <div>
            <p>Contacts</p>
            <form onSubmit={onSubmit}>
                <p>Name</p>
                <input
                    type="text"
                    name="name"
                    value={name}
                    pattern="^[a-zA-Zа-яА-Я]+((['\s\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={onChange}
                />
                <input
                    type="tel"
                    name="number"
                    value={number}
                    pattern="^\+((?:9[679]|8[035789]|6[789]|5[90]|42|3[578]|2[1-689])|9[0-58]|8[1246]|6[0-6]|5[1-8]|4[013-9]|3[0-469]|2[70]|7|1)(?:\W*\d){0,13}\d$"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={onChange}
                />
                <button type='submit'>Add Contact</button>
            </form>
        </div>
    );
};