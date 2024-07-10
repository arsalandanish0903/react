// import React, { useState } from 'react'

// function Login() {
//     const [userLoggin, setuserLoggin] = useState(false)
//     const [userName, setuserName] = useState('')

//     const setLoggin = () => {
//         setuserLoggin = (true)
//     }
//     const setLogout = () => {
//         setuserLoggin = (false)
//         setuserName('')
//     }
//     const usernamechange = (e) => {
//         setuserName(e.target.value)
//     }
//     if (!userLoggin) {
//         return (
//             <>
//                 <div className='bg-gray-400 py-20 flex items-center justify-center h-80 my-8'>
//                     <form action="" className='bg-gray-200 w-72 h-72 py-10'>
//                         <label htmlFor="" className='mr-2'>Name</label>
//                         <input type="text" className='border-2 border-solid border-black pl-2 mb-4' />
//                         <label htmlFor="" className='mr-2'>Name</label>
//                         <input type="text" className='border-2 border-solid border-black pl-2 mb-4' />
//                         <label htmlFor="" className='mr-2'>Name</label>
//                         <input type="text" className='border-2 border-solid border-black pl-2 mb-4' />
//                         <button className='bg-black text-white px-5 py-2'>Loggin </button>
//                     </form>
//                 </div>
//             </>
//         )
//     } else {
//         return (
//             <>
//                 <div className='my-6'>
//                 <h2>Welcome {setuserName}</h2>
//                 <button className='bg-black text-white'>LoggOut</button>
//                 </div>
//             </>
//         )
//     }

// }

// export default Login

import React, { useState } from 'react';

const Login = () => {
  // Define state variable to track login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // Define state variable to store username
  const [username, setUsername] = useState('');

  // Function to handle login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  // Function to handle input change for username
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  // Render login form if user is not logged in
  if (!isLoggedIn) {
    return (
      <div>
        <h2>Login</h2>
        <form>
          <label htmlFor="username">Username:</label>
          <input 
            type="text" 
            id="username" 
            value={username} 
            onChange={handleUsernameChange} 
          />
          <button type="button" onClick={handleLogin}>Login</button>
        </form>
      </div>
    );
  } else { // Render welcome message if user is logged in
    return (
      <div>
        <h2>Welcome, {username}!</h2>
        <button type="button" onClick={handleLogout}>Logout</button>
      </div>
    );
  }
};

export default Login;
