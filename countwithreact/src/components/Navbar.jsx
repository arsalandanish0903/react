// import React, { useState } from 'react';
// import './Navbar.css'; // Import your CSS file

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <a href="/" className="navbar-logo">Your Logo</a>
//         <div className={isOpen ? 'navbar-menu active' : 'navbar-menu'}>
//           <a href="/" className="nav-link">Home</a>
//           <a href="/" className="nav-link">About</a>
//           <a href="/" className="nav-link">Services</a>
//           <a href="/" className="nav-link">Contact</a>
//         </div>
//         <div className="menu-icon" onClick={toggleMenu}>
//           <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState } from 'react'

const CounterBtn = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={()=> {setCount(count + 1)}}>Click Me</button>
      <span> Count: {count}</span>
    </div>
  )
}

export default CounterBtn

