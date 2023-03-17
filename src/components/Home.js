import BlogList from './BlogList.js';
import Footer from './Footer.js';
import HeaderBanner from './HeaderBanner.js';
import NavMenu from './NavMenu.js';
import Carousel from './Carousel.js';
import carouselData from '../carouselData.js'

import { useEffect } from 'react';


const Home = () => {
    
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
            <main>
                <Carousel images={carouselData} />
                <BlogList />
            </main>
            <Footer />
        </>
    )
}

export default Home;