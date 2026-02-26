import React from 'react';

const Singer = ({singer}) => {
    // console.log(singer);
    return (
        <div>
            <h1>{singer.name}</h1>
        </div>
    );
};

export default Singer;