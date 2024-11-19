import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import BrowseCharacters from "./pages/BrowseCharacters";
import CharacterDetails from "./pages/CharacterDetails";
import Comics from "./pages/Comics";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <NavLink to="/" exact="true" activeclassname="active-link">
            Home
          </NavLink>
          <NavLink to="/characters" activeclassname="active-link">
            Browse Characters
          </NavLink>
          <NavLink to="/comics" activeclassname="active-link">
            Comics
          </NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<BrowseCharacters />} />
          <Route path="/characters/:id" element={<CharacterDetails />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
