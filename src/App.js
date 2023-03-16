import './App.css';
import Home from './components/Home.js';
import Blog from './components/Blog.js';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import blogContent from './blogContent.js';

function App() {

    const [blogLink, setBlogLink] = useState("");

    return (
        <Routes>
            <Route 
                exact path="/" 
                element={<Home setBlogLink={setBlogLink} blogLink={blogLink} />} 
            />

            <Route 
                path="/blog/:id" 
                element={<Blog setBlogLink={setBlogLink} blogLink={blogLink} data={blogContent}/>}
            /> 
            <Route 
                path="/*"
                element={<Home setBlogLink={setBlogLink} blogLink={blogLink} />}
            />
        </Routes>

    );
}

export default App;
