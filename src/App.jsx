import { useState } from 'react'
import SideNav from './Components/sideNav'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <SideNav />
        
      </div>
      <div className='whole-page'>
        <div>
          <div className='home-page'>
            <h1>Welcome to the Overcooked Team Creator!</h1>
            <h3>Here is where you can create your team and begin your culinary experience!!</h3> 
            <img className='home-img' src="src/assets/logo.avif" />
            <img className='home-img' src="src/assets/start.webp" />
            </div>
        </div>
      </div>
      
    </>
  )
}

export default App
