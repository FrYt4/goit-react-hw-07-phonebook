import { TextInput } from "./textinput";
import { Contacts } from "./contacts";
import { Filter } from "./filter";
import React from 'react';


export const App = () => {
   

    return (
        <div>
            <h1>Phonebook</h1>
            <TextInput />
            <h2>Contacts</h2>
            <Filter />
            <Contacts />
        </div>
    );
};