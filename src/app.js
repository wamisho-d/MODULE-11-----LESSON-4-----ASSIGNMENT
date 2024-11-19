import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import BrowseCharacters from "./components/BrowseCharacters";
import CharacterDetails from "./components/CharacterDetails";
import Comics from "./components/Comics";

const App = () => {
    return (
        <Router>
            <div>
                <h1>Comic Book Library</h1>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/characters" element={<BrowseCharacters />} />
                    <Route path="/characters/:id" element={<CharacterDetails />} />
                    <Route path="/comics" element={<Comics />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
