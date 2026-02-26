
import './App.css'
import { SignInButton, SignOutButton } from '@clerk/clerk-react'

function App() {
 

  return (
    <>
      <h2>welcome to App jsx</h2>
      <SignOutButton>
      <SignInButton mode='modal'/>
      </SignOutButton>
      
 </>
  )
}

export default App
