import BlogList from './components/BlogList.js';
import Footer from './components/Footer.js';
import HeaderBanner from './components/HeaderBanner.js';
import NavMenu from './components/NavMenu.js';
import Carousel from './components/Carousel.js';
import bears from './carouselContent.js'

import { useEffect } from 'react';


const Home = ({setBlogLink, blogLink}) => {
    
    // https://stackoverflow.com/questions/33188994/scroll-to-the-top-of-the-page-after-render-in-react-js
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <header>
                <HeaderBanner />
                <NavMenu />
            </header>
            <Carousel images={bears}/>
            <BlogList 
                setBlogLink={setBlogLink} 
                blogLink={blogLink}
            />
            <Footer />
        </>
    )
}

export default Home;