
import React, { useEffect } from 'react';
const DogDetails = () => {
    useEffect(() => {
        document.title = 'Dog Details';
    });
    return (
        <div>
            <h1>Dog Details</h1>
            <p>These are my dogs...</p>
        </div>
    );
};
export default DogDetails;
