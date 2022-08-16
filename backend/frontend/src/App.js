import React, { createContext, useReducer } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Start from "./components/Start/Start";
import Basic from "./components/Basic/Basic";
import File from "./components/NavComponents/File/File";
import Aboutme from "./components/NavComponents/Aboutme/Aboutme";
import Login from "./components/NavComponents/Login/Login";
import Register from "./components/NavComponents/Register/Register";
import Contact from "./components/NavComponents/Contact/Contact";
import Nav from "./components/Nav/Nav";
import Projects from "./components/NavComponents/Projects/Projects";
import Logout from "./components/NavComponents/Logout/Logout";
import { initialState, reducer } from "./reducer/useReducer";

//1.create context
export const UserContext = createContext();
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Router>
          <Nav />
          <Routes>
            <Route path="/start" element={<Start />} />
            <Route path="/" element={<Basic />} />
            <Route path="/file" element={<File />} />
            <Route path="/aboutme" element={<Aboutme />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </>
  );
};

export default App;
