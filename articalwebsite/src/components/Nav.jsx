import { Link } from "react-router-dom";
import React from "react";

function Nav(props) {
  return (
    <div className="container">
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle"
          data-toggle="collapse"
          data-target=".navbar-collapse"
        >
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a className="navbar-brand" href="/">
          Write_IT
        </a>
      </div>
      <div className="navbar-collapse collapse">
        <ul className="nav navbar-nav navbar-right">
          <li>
            <Link to={`/`}>Articals</Link>

            {/* <a href="work.html">Articals</a> */}
          </li>
          <li>
            {/* <a href="about.html">Add Artical</a> */}
            <Link to={`/addArtical`}>Add Artical</Link>
          </li>
          {/* <li>
            <a href="blog.html">Blog</a>
          </li>
          <li>
            <a href="contact.html">Contact</a>
          </li> */}
        </ul>
      </div>
      {/*/.nav-collapse */}
    </div>
  );
}

export default Nav;
