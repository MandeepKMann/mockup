import './App.css';
import Home from './components/Home.js';
import Blog from './components/Blog.js';
import { Routes, Route } from 'react-router-dom';
import blogData from './blogData.js';

function App() {

    return (
        <Routes>
            <Route 
                exact path="/" 
                element={<Home />} 
            />

            <Route 
                path="/blog/:id" 
                element={<Blog blogData={blogData}/>}
            /> 
            <Route 
                path="/*"
                element={<Home />}
            />
        </Routes>

    );
}

export default App;
