import { SignInButton } from '@clerk/clerk-react'
import { SignOutButton } from '@clerk/clerk-react'
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'  
import './App.css'

function App() {

  return (
    <>
      <h1>Welcome to the app</h1>

      <SignedOut> 
        <SignInButton mode="modal">
          <button className=''>
            Sign Up Please
          </button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton></SignOutButton>
      </SignedIn>

      <UserButton/>

      
    </>
  )
}

export default App
