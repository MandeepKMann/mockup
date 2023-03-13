import Footer from './Footer.js';
import NavMenu from './NavMenu.js';
import blogContent from '../blogContent.js';
import { useEffect } from 'react';

const Blog = ({blogLink}) => {

    // https://stackoverflow.com/questions/33188994/scroll-to-the-top-of-the-page-after-render-in-react-js
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            {/* <a href="#mainContent" className="skipLink">Skip to main content.</a> */}
            <header>
                <NavMenu />
            </header>
            <main>
                <section className='blogPostSection'>
                    {blogContent.map((blogPost) => {
                        if (blogPost.id === blogLink) {
                            return (
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

                            )
                        } else {
                            return (
                                null
                            )
                        }
                    })
                    }
                </section>
            </main>

            <Footer />
        </>
    )
}

export default Blog;