import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const App = () => {
  const { loginWithRedirect, user ,isAuthenticated ,logout} = useAuth0();
  console.log(user);
  

  return (
    <div>
      <h1>Auth0  Implementation</h1>
      { isAuthenticated ? <>
      <div>
        welcome {user.name}
        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
      </div>
      
      </> :
            <button onClick={()=>{loginWithRedirect()}}>Login</button>

      }
      
      
      
    </div>
  )
}

export default App
