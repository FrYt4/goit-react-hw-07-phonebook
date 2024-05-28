import React from 'react';
import PropTypes from 'prop-types'; 
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/filterSlice';


export const Filter = () => {
    const dispach = useDispatch();

    const onChange = (event) => {
        dispach(setFilter(event.target.value));
    };

    return (
        <input
            type="text"
            name="filter"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={onChange}
        />
    )
}

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
};