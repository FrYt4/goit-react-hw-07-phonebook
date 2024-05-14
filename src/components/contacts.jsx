import React from 'react';
import PropTypes from 'prop-types';

export const Contacts = ({ userData, onDelete }) => {
    const { contacts, filter } = userData;
    const filteredContacts = filter
        ? contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        )
        : contacts;

    const usersList = filteredContacts.map(user => (
        <div key={user.id} >
            <li>{user.name}: {user.number}</li>
            <button id={user.id} onClick={onDelete} type='button'>Delete</button>
        </div>
    ));

    return (
        <div>
            <p>Contacts</p>
            <ul>{usersList}</ul>
        </div>
    );
}

Contacts.propTypes = {
    userData: PropTypes.shape({
        contacts: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                number: PropTypes.string.isRequired,
            })
        ).isRequired,
        filter: PropTypes.string.isRequired,
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
};