import BlogList from './components/BlogList.js';
import Footer from './components/Footer.js';
import HeaderBanner from './components/HeaderBanner.js';
import NavMenu from './components/NavMenu.js';
import Carousel from './components/Carousel.js';

const Home = ({setBlogLink, blogLink}) => {

    return (
        <>
            <header>
                <HeaderBanner />
                <NavMenu />
            </header>
            <Carousel />
            <BlogList 
                setBlogLink={setBlogLink} 
                blogLink={blogLink}
            />
            <Footer />
        </>
    )
}

export default Home;