import BlogList from './BlogList.js';
import Footer from './Footer.js';
import HeaderBanner from './HeaderBanner.js';
import NavMenu from './NavMenu.js';
import Carousel from './Carousel.js';
import bears from '../carouselContent.js'

import { useEffect } from 'react';


const Home = ({setBlogLink, blogLink}) => {
    
    // https://stackoverflow.com/questions/33188994/scroll-to-the-top-of-the-page-after-render-in-react-js
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <a href="#mainContent" className="skipLink">Skip to main content.</a>
            <header>
                <HeaderBanner />
                <NavMenu />
            </header>
            <main>
                <Carousel images={bears}/>
                <BlogList 
                    setBlogLink={setBlogLink} 
                    blogLink={blogLink}
                />
            </main>
            <Footer />
        </>
    )
}

export default Home;