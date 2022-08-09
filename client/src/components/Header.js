import React, { useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";

function Header() {
const  { authUser } = useContext(Context);


return (
  <header>
    <div className="wrap header--flex">
      <h1 className="header--logo"><Link to="/">Courses</Link></h1>
      <nav>
        <ul className="header--signedout">
        {/* If there is an authorized user, a Welcome span and Sign Out button appear. */
        /* If there is not an authorized user, a Sign In and Sign Up button appear. */}        
        {authUser ? (
              <React.Fragment>
                <span> Welcome, {authUser.firstName}!</span>
                <li>
                  <Link to={'/signout'}>Sign Out</Link>
                </li>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
                <li className="header--signedin">
                  <Link to="/signin">Sign In</Link>
                </li>
              </React.Fragment>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};


export default Header;