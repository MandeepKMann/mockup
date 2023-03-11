import { Outlet } from 'react-router-dom';
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
                            <div className="title">{blogPost.title}</div>
                            <div className="postImageContainer">
                                <img src={blogPost.src} alt={blogPost.alt} />
                            </div>
                            <div className="postText">{blogPost.content}</div>
                        </div>

                    )
                }
            })

            }


            {/* <Outlet /> */}
            <Footer />
        </>
    )
    // class BlogPost {
    //     constructor(title, image, src, subtitle, content) {
    //         this.title = title
    //         this.image = image
    //         this.src = src,
    //         this.subtitle = subtitle
    //         this,content = content
    //     }
    //     getTitle = () => {
    //         return this.title;
    //     }
    //     getImage = () => {
    //         return this.title;
    //     }
    //     getSrc = () => {
    //         return this.title;
    //     }
    //     getSubtitle = () => {
    //         return this.title;
    //     }
    //     getContent = () => {
    //         return this.title;
    //     }
    // }

    // const blog1 = new BlogPost ("Blog One", )


}

export default Blog;