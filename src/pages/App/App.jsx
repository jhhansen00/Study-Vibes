import './App.css';
import { useState } from "react";
import { getUser } from "../../utilities/users-service";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import NewAssignment from '../NewAssignment/NewAssignment';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {
        user ?
        <>
        <NavBar setUser={setUser} user={user}/>
          <Routes>
            <Route path="/assignments/new" element={<NewAssignment />}/>
            <Route path="/orders" />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;
