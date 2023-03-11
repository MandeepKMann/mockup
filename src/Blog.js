import Footer from './components/Footer.js';
import NavMenu from './components/NavMenu.js';
import blogContent from './blogContent.js';

const Blog = ({blogLink}) => {
    return (
        <>
            <header>
                <NavMenu />
            </header>

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

            <Footer />
        </>
    )
}

export default Blog;