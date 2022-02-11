import { Link } from "react-router-dom";
import NewAssignment from "../../pages/NewAssignment/NewAssignment";
import * as userService from "../../utilities/users-service";
import Assignments from "../../pages/Assignments/Assignments";
import HomePage from "../../pages/HomePage/HomePage";
import './NavBar.css';

function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <>
      <nav className="NavBar">
        <Link to="/home" element={<HomePage />}>Home</Link>
        &nbsp; | &nbsp;
        <Link to="/assignments" element={<Assignments />}>Assignments</Link>
        &nbsp; | &nbsp;
        <Link to="/assignments/new" element={<NewAssignment />}>New Assignment</Link>
        &nbsp; | &nbsp;
        <span>Welcome, {user.name}!</span>
        &nbsp; | &nbsp;
        <Link onClick={handleLogOut} to="">Log Out</Link>
      </nav>
    </>
  )
}

export default NavBar;