
import React, { Component } from 'react';
import 'bulma/css/bulma.css'

class NavBar extends Component {

  render() {
    return (
      <nav className="nav">
  
  <span className="nav-toggle">
    <span></span>
    <span></span>
    <span></span>
  </span>

  <div className="nav-right nav-menu">
    <a className="nav-item" target="_self" href="http://localhost:3000/?page=10">
      ABOUT
    </a>
	
    <a className="nav-item" target="_self" href="http://localhost:3000/?page=10">
      MEMEBERSHIP BENIFITS
    </a>
    <a className="nav-item" target="_self" href="http://localhost:3000/?page=10">
      RESOURCES
    </a>
    <a className="nav-item" target="_self" href="http://localhost:3000/?page=10">
      BLOG
    </a>
	 <a className="nav-item" target="_self" href="http://localhost:3000/?page=10">
      CONTACT
    </a>

    <div className="nav-item">
      <div className="field is-grouped">
          <p className="control">
          <button className="button is-warning">
           
            <span>CLAIM FREE REPORTS</span>
          </button>
        </p>
        <p className="control">
          <button className="button is-success">
           
            <span>LOGIN</span>
          </button>
        </p>
      </div>
    </div>
  </div>
</nav>
    )
  }
}

export default NavBar;