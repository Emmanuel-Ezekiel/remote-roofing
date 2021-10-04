import React from 'react';
import { FaBars } from 'react-icons/fa'
import { BsTelephoneFill } from 'react-icons/bs'



const Navbar = () => {
//   const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
//   const displaySubmenu = (e) => {
//     const page = e.target.textContent;
//     const tempBtn = e.target.getBoundingClientRect();
//     const center = (tempBtn.left + tempBtn.right) / 2;
//     const bottom = tempBtn.bottom - 3;
//     openSubmenu(page, { center, bottom });
//   };
//   const handleSubmenu = (e) => {
//     if (!e.target.classList.contains('link-btn')) {
//       closeSubmenu();
//     }
//   };
  return (
    <nav className='nav' >
      <div className='nav-center'>
        <div className="nav-header">
            <img alt="remote roofing logo" className="nav-logo" src="https://www.remoteroofing.com/assets/svgs/mob-logo.svg"></img>
            <a href="/menu" className="btn toggle-btn"> <FaBars/></a>
         </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn'>
              Home
            </button>
          </li>
          <li>
            <button className='link-btn' >
              Services
            </button>
          </li>
          <li>
            <button className='link-btn'>
              How it works
            </button>
          </li>
        </ul>
        <button className='btn signin-btn'> <span className="phone-btn"><BsTelephoneFill/></span> 214-448-9057 </button>
      </div>
    </nav>
  );
};

export default Navbar;