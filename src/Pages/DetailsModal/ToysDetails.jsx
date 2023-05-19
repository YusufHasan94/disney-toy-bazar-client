import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToysDetails = () => {
    const toys = useLoaderData();
    console.log(toys);
    return (
        <div>
            <h1>New Toys come</h1>
        </div>
    );
};

export default ToysDetails;