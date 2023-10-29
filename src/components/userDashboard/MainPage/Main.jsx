import React from 'react';
import LeftSideBar from '../leftSideBar/LeftSideBar';
import NavbarUser from '../navbarUser/NavbarUser';
import './main.css';
import { Outlet } from 'react-router-dom';

function Main() {
  return (
    <div className='mainOptionsView'>
        <LeftSideBar />
        <div className="bodyMain">
          <NavbarUser />
          <div className="outlets">
            <Outlet />
          </div>
        </div>
    </div>
  )
}

export default Main