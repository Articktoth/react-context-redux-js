import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ContextPage } from './pages/ContextPage';
import Home from './pages/Home';
import { ReduxPage } from './pages/ReduxPage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/redux" element={<ReduxPage />} />
        <Route path="/context" element={<ContextPage />} />
      </Routes>
    </Router>
  );
}

export default App;
