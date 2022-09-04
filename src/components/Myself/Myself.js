import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Myself = () => {
    const value = useContext(RingContext);
    return (
        <div>
            <h2>Myself: {value}</h2>
        </div>
    );
};

export default Myself;