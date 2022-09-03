import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Feedbackround from "./components/feedbackround/Feedbackround";
import Instructions from "./components/instructions/Instructions";
import Instructionquestion from "./components/instructionquestion/Instructionquestion";
import Homepage from "./components/homepage/Homepage";
import Learninground from "./components/learninground/Learninground";
import Officialround from "./components/officialround/Officialround";
import Questionaire from "./components/questionaire/Questionaire";

import Note from "./components/layout/Note";
import { formatDiagnostic } from "typescript";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/feedbackround" element={<Feedbackround />} />
          <Route
            path="/instructionquestion"
            element={<Instructionquestion />}
          />
          <Route path="/learninground" element={<Learninground />} />
          <Route path="/officialround" element={<Officialround />} />
          <Route path="/questionaire" element={<Questionaire />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
