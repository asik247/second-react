import React from 'react';
const Home = () => {
    const students = ['Rahim', 'Karim', 'Sakib']
    const numbers = [10, 20, 30, 40, 50]
    const aleartShowFunk = () => {
        alert("Button Clicked")
    }
    const firends = ['ar', 'rh', 'jr']
    function showMessage(name) {
        alert("Hello " + name)
    }
    return (
        <div>
            <h1>I am Home</h1>
            {students.map((student, index) => (
                <h2 key={index}>{student}</h2>
            ))}

            {numbers.map((name) => (
                <h1>{name}</h1>
            ))}


            <p>{numbers}</p>
            <button onClick={aleartShowFunk}>Click me</button>
            <h1>Friends List</h1>
            {firends.map((fr) => (
                <>
                    <p>{fr}</p>
                    <button onClick={() => showMessage(fr)}>Say Hello</button>
                </>

            ))}

        </div>
    );
};

export default Home;