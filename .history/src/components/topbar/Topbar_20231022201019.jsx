import React from 'react'
import "./topbar.css";

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">lamaadmin</span>
        </div>
        <div className="topRight">right</div>
      </div>
    </div>
  )
}
