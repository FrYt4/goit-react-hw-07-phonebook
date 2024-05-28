import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../redux/contactsSlice';

export const Contacts = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts);
    const filter = useSelector(state => state.filter);

    console.log('Contacts from state:', contacts);

    const filteredContacts = filter
        ? contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        )
        : contacts;

    const usersList = filteredContacts.map(user => (
        user && user.name && user.number && (
            <li key={user.id}>
                {user.name}: {user.number}
                <button id={user.id} onClick={() => dispatch(deleteContact(user.id))} type='button'>Delete</button>
            </li>
        )
    ));

    return (
        <div>
            <p>Contacts</p>
            <ul>{usersList}</ul>
        </div>
    );
};