import React from 'react'

export default function Navbar(props) {
  return (
      <nav className="navbar navbar-light bg-dark-subtle sticky-top py-0">
        <div className="container-fluid ">
          <a className="navbar-brand py-0 " href="/">
            <img id="mylogo" src='/images/logo1.png' alt="Logo"  width="160" height="45" className=" py-0 my-0 d-inline-block align-text-top"/>
            
          </a>
          <form className="d-flex">
            <label className={`form-check-label px-2 text-${props.mode==='light'?'dark':'light'}`}  htmlFor="flexSwitchCheckDefault">Enable {props.mode==='light'?'dark':'light'} Mode </label>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
            </div>
          </form>
        </div>
      </nav>
  )
}
Navbar.defaultProps = {
  mode: 'light'
}