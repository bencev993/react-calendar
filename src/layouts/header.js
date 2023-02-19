import React from 'react'

const Header = ({ isChecked, toggleTheme}) => {
  return (
    <nav className="flex justify-end py-5">
    <div className="theme-switch-wrapper flex items-center mr-8">
        <label className="theme-switch inline-block h-8 w-16 relative" htmlFor="checkbox">
            <input className="display-none" type="checkbox" id="checkbox" checked={isChecked} onChange={toggleTheme} />
            <div className="slider round"></div>
        </label>
    </div>
    </nav>
  )
}

export default Header