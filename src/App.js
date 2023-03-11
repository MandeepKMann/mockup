import './App.css';
import Home from './Home.js';
import Blog from './Blog';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';



function App() {

    const [blogLink, setBlogLink] = useState("");
    
    console.log(blogLink)

    return (
        <Routes>
            <Route 
                path="/" 
                element={<Home setBlogLink={setBlogLink} blogLink={blogLink} />} 
            />

            <Route 
                path="/blog/" 
                element={<Blog setBlogLink={setBlogLink} blogLink={blogLink}/>}
                />    
        </Routes>

    );
}

export default App;
