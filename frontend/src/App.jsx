import "./App.css"

import { SignInButton, SignOutButton, UserButton ,SignedIn,SignedOut} from '@clerk/clerk-react'

function App() {
 

  return (
    <>
      <h2>welcome to App jsx</h2>
      <SignedOut>
      <SignInButton mode='modal'>
        <button>Sign Up</button>
      </SignInButton>
      </SignedOut>
      <SignedIn>
        <SignOutButton/>
      </SignedIn>

      <UserButton/>
 </>
  )
}

export default App
