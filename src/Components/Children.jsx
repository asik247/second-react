import React from 'react';

const Children = (props) => {
    const {address,roadNo,location} = props;
    return (
        <div style={{
            border:'2px solid yellow',
            padding:'10px'
        }}>
            <h1>My Address is {address}</h1>
            <p>Iam here {location}</p>
            <h2>This Area RoadNo {roadNo}</h2>
        </div>
    );
};

export default Children;