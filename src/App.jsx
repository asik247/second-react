import React from 'react';

const App = () => {
  return (
    <div>
      <h1>Hi</h1>
        <Person></Person>
        <Developer></Developer>

    </div>
  );
};

export default App;

function Person (){
  const someStyle = {
    color: "red",
    border:'2px solid red',
    textAlign:"center"
  }
  return(
    <div style={someStyle}>
      <p>Name:</p>
      <p>Dept:</p>
    </div>
  )
}

function Developer (){
  return(
    <div style={{
      border:'2px solid green',
      margin:'10px',
      textAlign:'center'
    }}>
      <h3>Developer:</h3>
      <p>Technology:</p>
    </div>
  )
}