import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Form from './components/form';
import Color from './components/color';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/color" element={<Color />} />
      </Routes>
    </Router>
  );
}

export default App;
