import { Outlet } from 'react-router-dom';
import Footer from './components/Footer.js';
import NavMenu from './components/NavMenu.js';

const Blog = () => {
    return (
        <>
            <header>
                <NavMenu />
            </header>
            <div className="dynamicPost">
                <div className="title"></div>
                <div className="postImageContainer">
                    <img src="" alt="" />
                </div>
                <div className="postText"></div>
            </div>
            <Outlet />
            <Footer />
        </>
    )
}

export default Blog;