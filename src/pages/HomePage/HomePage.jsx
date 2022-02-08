import { useState } from 'react';
import { getUser } from '../../utilities/users-service';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from '../../components/NavBar/NavBar';
import AuthPage from '../AuthPage/AuthPage';

export default function HomePage() {
    const [user, setUser] = useState(getUser());
  
    return (
        <main className='App'>
            <Router>
                <NavBar user={user} setUser={setUser} />
                {/* <Routes>
                    <Route path="/login"></Route>
                </Routes> */}
            </Router>
        </main>
    );
}
