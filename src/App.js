import './App.css';
import Home from './Home.js';
import Blog from './Blog';
import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/blog/" element={<Blog />}>
            {/* <Route path="blogone" element={} /> */}
        </Route>
    </Routes>

  );
}

export default App;
