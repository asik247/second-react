import React from 'react';

const Child = ({name,age,hobbie}) => {
    return (
        <div>
            <h1>Assalum Alaikum {name}</h1>
            <h1>My age is {age}</h1>
            <h1>Programming {hobbie}</h1>
        </div>
    );
};

export default Child;