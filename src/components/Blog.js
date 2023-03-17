import Footer from './Footer.js';
import NavMenu from './NavMenu.js';
import { useEffect } from 'react';
import '../styles/Blog.css'
import BlogDetails from './BlogDetails.js';

const Blog = ({blogData}) => {

    // https://stackoverflow.com/questions/33188994/scroll-to-the-top-of-the-page-after-render-in-react-js
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <header>
                <NavMenu />
            </header>
            <main>
                <section className='blogPostSection'>
                    <BlogDetails blogData={blogData} />
                </section>
            </main>

            <Footer />
        </>
    )
}

export default Blog;