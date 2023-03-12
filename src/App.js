import './App.css';
import Home from './Home.js';
import Blog from './Blog';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';



function App() {

    const [blogLink, setBlogLink] = useState("");

    return (
        <Routes>
            <Route 
                path="/" 
                element={<Home setBlogLink={setBlogLink} blogLink={blogLink} />} 
            />

            <Route 
                path="/blog/" 
                element={<Blog setBlogLink={setBlogLink}/>}
                />    
        </Routes>

    );
}

export default App;
