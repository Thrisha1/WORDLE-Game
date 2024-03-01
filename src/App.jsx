// import Button from './components/Button'
import {useState, createContext } from 'react'
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'

export const UserContext = createContext()
function App() {
  // const [state, setstate] = useState("hi");

  
  return (
    <div>
      <HomePage/>
    </div>
  );
}

export default App;
