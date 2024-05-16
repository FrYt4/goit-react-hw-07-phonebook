import React from 'react';
import PropTypes from 'prop-types';

export const TextInput = ({ onChange, onSubmit, nameValue, numberValue }) => {
    return (
        <div>  
            <p>Contacts</p>
            <form onSubmit={onSubmit}> 
                <p>Name</p>    
                <input
                    type="text"
                    name="name"
                    value={nameValue}
                    pattern="^[a-zA-Zа-яА-Я]+((['\s\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={onChange}
                />
                <input
                    type="tel"
                    name="number"
                    value={numberValue}
                    pattern="^\+((?:9[679]|8[035789]|6[789]|5[90]|42|3[578]|2[1-689])|9[0-58]|8[1246]|6[0-6]|5[1-8]|4[013-9]|3[0-469]|2[70]|7|1)(?:\W*\d){0,13}\d$"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={onChange}
                />
                <button type='submit'>Add Contact</button>
            </form> 
        </div>
    );
}

TextInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    nameValue: PropTypes.string.isRequired,
    numberValue: PropTypes.string.isRequired,
};