import React from 'react';
import { TbChartCandle } from 'react-icons/tb';
import { BiSolidDashboard, BiSolidUserCircle } from 'react-icons/bi';
import './leftside.css';
import { NavLink } from 'react-router-dom';

function LeftSideBar() {
  return (
    <div className='leftSide'>
        <NavLink to='/trade/chart' className="sideList">
            <div className="sideIcons">
                <TbChartCandle />
            </div>
            <div className="sideInfo">
                <span>Trade</span>
            </div>
        </NavLink>
        <NavLink to='/trade/dashboard' className="sideList">
            <div className="sideIcons">
                <BiSolidDashboard />
            </div>
            <div className="sideInfo">
                <span>Dashboard</span>
            </div>
        </NavLink>
        <NavLink to='/trade/account' className="sideList">
            <div className="sideIcons">
                <BiSolidUserCircle />
            </div>
            <div className="sideInfo">
                <span>Account</span>
            </div>
        </NavLink>
    </div>
  )
}

export default LeftSideBar