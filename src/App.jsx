import React from 'react';
import Children from './Components/Children';
import Child from './Components/Child';
import Home from './Components/Home';
import Acctor from './Components/Acctor';

const App = () => {
  const fetchData = async () =>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return data;
    // console.log(data);
  }

  return (
    <div> 
      <br /><br /><br />
        <Acctor></Acctor>
        <Person name='khan' dept='cst'></Person>
        <Developer name="Asik" language="Python"></Developer>
        <Children address='Dhaka'roadNo='10'location='savar'></Children>
        <Child name="Ar" age= {20} hobbie = 'codding'></Child>
        <Home fetchData={fetchData}></Home>

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