import React, { useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";



function Header() {
const context = useContext(Context);

  return (
  <header>
    <div className="wrap header--flex">
      <h1 className="header--logo"><Link to="/">Courses</Link></h1>
      <nav>
 {/* If there is an authorized user, a Welcome span and Sign Out button appear. */
        /* If there is not an authorized user, a Sign In and Sign Up button appear. */}        { !context.authenticatedUser && (<ul className="header--signedout">
            <li><Link to="/signup">Sign Up!</Link></li>
            <li><Link to="signin">Sign In!</Link></li>
         </ul>)}
          { context.authenticatedUser && (<ul className="header--signedin">
            <li>{`Welcome ${context.authenticatedUser.firstName} ${context.authenticatedUser.lastName}!`}</li>
            <li><Link to="/signout">Sign Out!</Link></li>
          </ul>)} 
      </nav>
    </div> 
  </header>
  
  
  )
  
}

export default Header;