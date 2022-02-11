import { Link } from "react-router-dom";
import NewAssignment from "../../pages/NewAssignment/NewAssignment";
import * as userService from "../../utilities/users-service";
import Assignments from "../../pages/Assignments/Assignments";
import HomePage from "../../pages/HomePage/HomePage";
import './NavBar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from "react-bootstrap/Container";

function NavBars({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <>
      <Container>
        <Navbar fixed="top" bg='dark' variant='dark'>
          <Nav>
            &nbsp; &nbsp;
            <Link to="/home" element={<HomePage />}>Home</Link>
            &nbsp; | &nbsp;
            <Link to="/assignments" element={<Assignments />}>Assignments</Link>
            &nbsp; | &nbsp;
            <Link to="/assignments/new" element={<NewAssignment />}>New Assignment</Link>
            &nbsp; | &nbsp;
            <span id="welcome">Welcome, {user.name}!</span>
            &nbsp; | &nbsp;
            <Link onClick={handleLogOut} to="">Log Out</Link>
          </Nav>
        </Navbar>
      </Container>
    </>
  )
}

export default NavBars;