import { Link } from "react-router-dom";
import blogData from "../blogData.js";
import '../styles/BlogList.css';

const BlogList = () => {

    return (
        <section className="blogListSection">
            <div className="wrapper">
                <h3>Coluptate velit esse cillum</h3>

                    <div className="blogListContainer">
                        <div className="line lineOne"></div>
                        <div className="line lineTwo"></div>
                
                        <div className="blogList">
                            {blogData.map((blogPost) => {
                                return (
                                    <div className="blogInfo" key={blogPost.id}>
                                        <div className="blogImgContainer">
                                            <img src={blogPost.previewImg} alt={blogPost.alt} />
                                        </div>
                                        <div className="blogText">
                                            <p>{blogPost.previewText}</p>
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