import { Link } from "react-router-dom";
import blogContent from "../blogContent.js";
import '../styles/BlogList.css';

const BlogList = ({setBlogLink, blogLink}) => {
    
    // sets the state and stores the user selection in local storage
    const clickHandler = (e) => {
        setBlogLink(e.target.id)
        localStorage.setItem("blogLink", e.target.id)
    }

    return (
        <section className="blogListSection">
            <div className="wrapper">
                <h3>Coluptate velit esse cillum</h3>

                    <div className="blogListContainer">
                        <div className="line lineOne"></div>
                        <div className="line lineTwo"></div>
                
                        <div className="blogList">
                            {blogContent.map((blogPost, index) => {
                                return (
                                    <div className="blogInfo" key={index}>
                                        <div className="blogImgContainer">
                                            <img src={blogPost.previewImg} alt={blogPost.alt} />
                                        </div>
                                        <div className="blogText">
                                            <p>{blogPost.previewText}</p>
                                            {/* Finds the id of the clicked link and changes the state of the BlogLink to the target id */}
                                            <Link to={`/blog/${blogPost.id}`} id={blogPost.id}>{blogPost.title}</Link>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                </div>
            </div>{/*END wrapper*/}
        </section>
    )
}

export default BlogList;