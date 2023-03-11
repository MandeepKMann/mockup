import BlogList from './components/BlogList.js';
import Footer from './components/Footer.js';
import HeaderBanner from './components/HeaderBanner.js';
import NavMenu from './components/NavMenu.js';
import Carousel from './components/Carousel.js';

const Home = ({setBlog}) => {

    return (
        <>
            <header>
                <HeaderBanner />
                <NavMenu />
            </header>
            <Carousel />
            <BlogList setBlog={setBlog}/>
            <Footer />
        </>
    )
}

export default Home;