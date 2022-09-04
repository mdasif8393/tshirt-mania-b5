import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';

export const RingContext = createContext('diamond');

const Grandpa = () => {
    const ornament = 'Diamond Ring';

    const [house, setHouse]= useState(1);

    const handleBuyAHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }
    return (
        <div>
            <RingContext.Provider value={ornament}>
                <Father></Father>
                <Uncle></Uncle>
                <Aunty></Aunty>
            </RingContext.Provider>
        </div>
    );
};

export default Grandpa;