import React from 'react';

const Children = ({address,roadNo,location}) => {
    return (
        <div>
            <h1>My Address is {address}</h1>
            <p>Iam here {location}</p>
            <h2>This Area RoadNo {roadNo}</h2>
        </div>
    );
};

export default Children;