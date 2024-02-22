import { useState } from 'react'
import './App.css'
import PhoneOTP from './Components/PhoneOTPLogin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <h1>
      Login with Phone
      </h1>
      <PhoneOTP  />
    </div>
  )
}

export default App;


