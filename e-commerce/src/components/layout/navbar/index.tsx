import { ReactNode } from 'react';
import './navBar.css';
import {
  IoHomeOutline,
  IoCartOutline,
  IoHeartOutline,
  IoPersonOutline,
} from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

export function NavBar(): ReactNode {
  return (
    <section className="nav">
      <NavLink to="/home">
        <IoHomeOutline stroke="#EEEED0" />
      </NavLink>
      <NavLink to="/cart">
        <IoCartOutline stroke="#EEEED0" />
      </NavLink>
      <NavLink to="/wishlist">
        <IoHeartOutline stroke="#EEEED0" />
      </NavLink>
      <NavLink to="/profile">
        <IoPersonOutline stroke="#EEEED0" />
      </NavLink>
    </section>
  );
}


// import React from 'react'

// export  function songDetails() {
//   return (
//     <section>
//         <button>back</button>
//         <div>
//             <img src="" alt="" />
//         </div>
//         <p></p>
//         <p></p>
//         // flex
//         <button>like/dislke</button>
//         // barra de la cancion
//         <button>last song</button>
//         <button>play/pause</button>
//         <button>next song</button>
//     </section>
//   )
// }