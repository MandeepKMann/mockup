import { Link } from "react-router-dom";
import '../styles/BlogList.css';

const BlogList = ({blogData}) => {

    return (
        <section className="blogListSection">
            <div className="wrapper">
                <h3>Coluptate velit esse cillum</h3>

                    <div className="blogListContainer">
                        {/* dividers styled in CSS */}
                        <div className="line lineOne"></div>
                        <div className="line lineTwo"></div>
                
                        {/* map data from blogList array to create preview and links to blog posts */}
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