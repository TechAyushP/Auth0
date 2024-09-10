// import React from 'react'
// import { useAuth0 } from '@auth0/auth0-react'

// const App = () => {
//   const { loginWithRedirect, user ,isAuthenticated ,logout} = useAuth0();
//   console.log(user);
  

//   return (
//     <div>
//       <h1>Auth0  Implementation</h1>
//       { isAuthenticated ? <>
//       <div>
//         welcome {user.name}
//         <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
//       </div>
      
//       </> :
//             <button onClick={()=>{loginWithRedirect()}}>Login</button>

//       }
      
      
      
//     </div>
//   )
// }

// export default App
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const MyComponent = () => {
  const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();

  return (
    <div>
      {/* Internal CSS */}
      <style>{`
        .container {
          text-align: center;
          margin-top: 50px;
        }
        .button {
          padding: 10px 20px;
          font-size: 16px;
          background-color: #4CAF50;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .button:hover {
          background-color: #45a049;
        }
        .user-info {
          margin-top: 20px;
          font-size: 18px;
        }
      `}</style>

      <div className="container">
        {!isAuthenticated && (
          <button className="button" onClick={() => loginWithRedirect()}>
            Log in
          </button>
        )}

        {isAuthenticated && (
          <div>
            <div className="user-info">
              <h2>Welcome, {user.name}!</h2>
              <img src={user.picture} alt="User Profile" />
              <p>{user.email}</p>
              
            </div>
            <button
              className="button"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyComponent;
