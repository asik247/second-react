import React from 'react';
import Children from './Components/Children';
import Child from './Components/Child';
import Home from './Components/Home';
import Acctor from './Components/Acctor';
import Singer from './Components/Singer';

const App = () => {
  const allNayokNames = ['Rajjak','Bappa Raj','Omar Sunny','Salman Shah','Jasim','Anwar'];
  // Object declare code start here;
  const singers = [
    {id:1,name:'Tahasan',age:45},
    {id:2,name:'Pollobi',age:35},
    {id:3,name:'Pagly',age:19},
  ]
  const fetchData = async () =>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return data;
    // console.log(data);
  }

  return (
    
    <div> 
      <br /><br /><br />
      {
        allNayokNames.map(actor=><Acctor key={actor} actor={actor}></Acctor>)
      }
      {
        singers.map(singer=><Singer key={singer.id} singer={singer}></Singer>)
      }
       
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