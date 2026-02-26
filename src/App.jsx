import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Nav from './Components/Nav'

import Child from './Components/Child'
import Children from './Components/Children'



function App() {
  return (
    <>
    {/* <Nav></Nav> */}
      {/* props code her */}
      {/* <Parent></Parent> */}
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      {/* <h1>React</h1> */}
      {/* props code start here */}
{/*      
    <Child>name = "Rahim" age = {25} hobbie = "codding"</Child>
     */}
     {/* <Child name="Rahim" age={25} hobbie="Coding" /> */}
     <Children address = "Dhaka" roadNo ={10} location = "Moiler Mor"/>
    </>
  )
}
export default App
