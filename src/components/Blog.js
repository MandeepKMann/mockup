import Footer from './Footer.js';
import NavMenu from './NavMenu.js';
import { useEffect } from 'react';
import '../styles/Blog.css'
import { useParams } from 'react-router-dom';

const Blog = ({data}) => {

    // https://stackoverflow.com/questions/33188994/scroll-to-the-top-of-the-page-after-render-in-react-js
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const {id} = useParams();
    const blogPost = data.find((blogPost) => blogPost.id === id);

    return (
        <>
            <header>
                <NavMenu />
            </header>
            <main>
                <section className='blogPostSection'>
                    <div className="dynamicPost" key={blogPost.id}>
                        <div className="wrapper">
                            <h1 className="title">{blogPost.title}</h1>
                        </div>
                        <div className="postImageContainer">
                            <img src={blogPost.src} alt={blogPost.alt} />
                        </div>
                        <div className="subtitleContainer">
                            <div className="wrapper">
                                <p className="subtitle">{blogPost.subtitle}</p>
                            </div>
                        </div>
                        <div className="wrapper">
                            <div className="postText">{blogPost.content}</div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}

export default Blog;