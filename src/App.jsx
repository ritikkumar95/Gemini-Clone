import { useState } from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import './App.css';
import Main from './Components/Main/Main';

function App() {
  const [count, setCount] = useState(0)
  // returns embedded sidebar component, main component
  return (
    <>
      <Sidebar />
      <Main />
    </>
  )
}

export default App