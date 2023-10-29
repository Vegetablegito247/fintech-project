import React from 'react';
import './acct.css'

function Account() {
  return (
    <div className='account'>
        <form action="" className="editInfo">
            <div className="frmCtrl">
                <label htmlFor="">username</label>
                <input type="text" />
            </div>
            <div className="frmCtrl">
                <label htmlFor="">First Name</label>
                <input type="text" />
            </div>
            <div className="frmCtrl">
                <label htmlFor="">Last Name</label>
                <input type="text" />
            </div>
            <div className="frmCtrl">
                <label htmlFor="">Date of Birth </label>
                <input type="date" name="" id="" />
            </div>
        </form>
    </div>
  )
}

export default Account