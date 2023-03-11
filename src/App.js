import './App.css';
import Home from './Home.js';
import Blog from './Blog';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';



function App() {

    const [blog, setBlog] = useState("");

    return (
        <Routes>
            <Route 
                path="/" 
                element={<Home setBlog={setBlog} />} 
            />

            <Route 
                path="/blog/" 
                element={<Blog />}
                setBlog={setBlog}
                >    
                {/* <Route path="blogone" element={} /> */}
            </Route>
        </Routes>

    );
}

export default App;
