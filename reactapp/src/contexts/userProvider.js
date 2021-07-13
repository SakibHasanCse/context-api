
import React, { useState } from 'react'



const UserProvider = ({ children }) => {
    const [name, setName] = useState('Sakib hasan');
    const [age, setAge] = useState(20);
    const happyBirthday = () => setAge(age + 1);


    return (
        <UserContext.Provider value={name, age, happyBirthday}>
            {children}
        </UserContext.Provider>
    )
}


