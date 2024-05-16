import { TextInput } from "./textinput";
import { Contacts } from "./contacts";
import { Filter } from "./filter";
import React, { useState, useEffect } from 'react';
import { nanoid } from "nanoid";

export const App = () => {
    const initialState = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',
        name: '',
        number: '',
    };

     const [userData, setUserData] = useState(() => {
        const savedUserData = localStorage.getItem('userData');
        const parsedData = savedUserData ? JSON.parse(savedUserData) : initialState;
        console.log('Loaded from localStorage:', parsedData);
        return parsedData;
    });

    useEffect(() => {
     console.log('Saving to localStorage:', userData);
        localStorage.setItem('userData', JSON.stringify(userData));
    }, [userData])

    const onChange = event => {
        const { name, value } = event.target;
        setUserData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const onDelete = event => {
        const { id } = event.target;
        setUserData(prevState => ({
            ...prevState,
            contacts: prevState.contacts.filter(contact => contact.id !== id),
        }));
    };

    const onSubmit = event => {
        event.preventDefault();
        const { name, number, contacts } = userData;
        const isContact = contacts.some(
            contact => contact.name.toLowerCase() === name.trim().toLowerCase()
        );

        if (isContact) {
            alert(`${name} is already in contacts`);
            return;
        }

        setUserData(prevState => ({
            ...prevState,
            contacts: [...prevState.contacts, { id: nanoid(), name, number }],
            name: '',
            number: '',
        }));
    };

    return (
        <div>
            <h1>Phonebook</h1>
            <TextInput
                onChange={onChange}
                onSubmit={onSubmit}
                nameValue={userData.name}
                numberValue={userData.number}
            />
            <h2>Contacts</h2>
            <Filter onChange={onChange} />
            <Contacts userData={userData} onDelete={onDelete} />
        </div>
    );
};