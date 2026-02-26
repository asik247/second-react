import React from 'react';
import Children from './Components/Children';
import Child from './Components/Child';

const App = () => {
  return (
    <div>
        <Person name='khan' dept='cst'></Person>
        <Developer name="Asik" language="Python"></Developer>
        <Children address='Dhaka'roadNo='10'location='savar'></Children>
        <Child name="Ar" age= {20} hobbie = 'codding'></Child>
    </div>
  ); 
};

export default App;

function Person (props){
  const someStyle = {
    color: "red",
    border:'2px solid red',
    textAlign:"center"
  }
  return(
    <div style={someStyle}>
      <p>Name:{props.name}</p>
      <p>Dept:{props.dept}</p>
    </div>
  )
}

function Developer ({name,language}){
  console.log(name,language);
  return(
    <div style={{
      border:'2px solid green',
      margin:'10px',
      textAlign:'center'
    }}>
      <h3>Developer:{name}</h3>
      <p>Technology:{language}</p>
    </div>
  )
}