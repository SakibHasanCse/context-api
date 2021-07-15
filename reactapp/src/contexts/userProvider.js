
import React, { useState } from 'react';
import { UserProvider } from './context'


const UserProvider = ({ children }) => {
    const [name, setName] = useState('Sakib hasan');
    const [age, setAge] = useState(20);
    const happyBirthday = () => setAge(age + 1);


    return (
        <UserProvider.Provider value={name, age, happyBirthday}>
            {children}
        </UserProvider.Provider>
    )
}


